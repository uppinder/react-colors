import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import { Select, MenuItem, Snackbar, IconButton } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import "rc-slider/assets/index.css";
import styles from "./styles/NavbarStyles";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: props.defaultFormat,
      open: false,
    };

    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange(evt) {
    const newFormat = evt.target.value;

    this.setState({ format: newFormat, open: true });
    this.props.changeFormat(newFormat);
  }

  closeSnackbar() {
    this.setState({ open: false });
  }

  render() {
    const {
      showLevelSlider,
      level,
      changeLevel,
      defaultFormat,
      classes,
    } = this.props;
    const { format, open } = this.state;

    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">reactcolorpicker</Link>
        </div>

        {showLevelSlider && (
          <div>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}

        <div className={classes.selectContainer}>
          <Select
            defaultValue={defaultFormat}
            format={format}
            onChange={this.handleFormatChange}
          >
            <MenuItem value="hex">HEX - #FFFFF</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>

        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format changed to {format.toUpperCase()}!
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              key="close"
              aria-label="close"
              color="inherit"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);
