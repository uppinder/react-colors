import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./PaletteList";
import NewPaletteform from "./NewPaletteForm";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";
import SingleColorPalette from "./SingleColorPalette";
import Page from "./Page";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends Component {
  constructor(props) {
    super(props);

    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {
      palettes: savedPalettes || seedColors,
    };

    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
    this.syncLocalStorage = this.syncLocalStorage.bind(this);
  }

  findPalette(paletteId) {
    return this.state.palettes.find((palette) => palette.id === paletteId);
  }

  savePalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }

  deletePalette(paletteId) {
    this.setState(
      {
        palettes: this.state.palettes.filter((p) => p.id !== paletteId),
      },
      this.syncLocalStorage
    );
  }

  syncLocalStorage() {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }

  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="page" timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path="/"
                  render={({ history }) => (
                    <Page>
                      <PaletteList
                        history={history}
                        palettes={this.state.palettes}
                        deletePalette={this.deletePalette}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/new"
                  render={(routeProps) => (
                    <Page>
                      <NewPaletteform
                        savePalette={this.savePalette}
                        palettes={this.state.palettes}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:paletteId"
                  render={(routeProps) => (
                    <Page>
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:paletteId/:colorId"
                  render={(routeProps) => (
                    <Page>
                      <SingleColorPalette
                        colorId={routeProps.match.params.colorId}
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                      />
                    </Page>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
