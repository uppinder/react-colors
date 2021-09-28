import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import PaletteSaveForm from "./PaletteSaveForm";

import styles from "./styles/PaletteFormNavStyles";

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaveFormShowing: false,
    };
    this.showSaveForm = this.showSaveForm.bind(this);
    this.hideSaveForm = this.hideSaveForm.bind(this);
  }

  showSaveForm() {
    this.setState({ isSaveFormShowing: true });
  }

  hideSaveForm() {
    this.setState({ isSaveFormShowing: false });
  }

  render() {
    const {
      classes,
      open,
      palettes,
      handleSavePalette,
      handleDrawerOpen,
    } = this.props;

    const { isSaveFormShowing } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <ChevronRightIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create a Palette
            </Typography>
          </Toolbar>

          <div className={classes.navBtns}>
            <Link to="/">
              <Button variant="contained" color="secondary">
                Go Back
              </Button>
            </Link>

            <Button
              variant="contained"
              color="primary"
              onClick={this.showSaveForm}
            >
              Save
            </Button>
          </div>
        </AppBar>
        {isSaveFormShowing && (
          <PaletteSaveForm
            palettes={palettes}
            handleSavePalette={handleSavePalette}
            hideSaveForm={this.hideSaveForm}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
