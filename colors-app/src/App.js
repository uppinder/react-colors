import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from './colorHelper';

class App extends Component {
    findPalette(paletteId) {
        return seedColors.find(palette => palette.id === paletteId)
    }

    render() {
        return (
            <Switch>
                <Route 
                    exact 
                    path="/" 
                    render={() => <PaletteList palettes={seedColors} />}
                />
                <Route
                    exact 
                    path="/palette/:paletteId" 
                    render={(routeProps) => 
                        <Palette 
                            palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} 
                        />}
                />
                <Route
                    exact 
                    path="/palette/:paletteId/:color" 
                    render={(routeProps) => 
                        <Palette 
                            palette={generatePalette(this.findPalette(routeProps.match.params.id))} 
                        />}
                />
            </Switch>
    );
  }
}

export default App;
