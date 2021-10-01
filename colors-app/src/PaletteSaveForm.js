import React, { Component } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

class PaletteSaveForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "form",
      newPaletteName: "",
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
      return this.props.palettes.every(
        ({ paletteName }) =>
          paletteName.toLowerCase() !== this.state.newPaletteName.toLowerCase()
      );
    });
  }

  showEmojiPicker() {
    this.setState({ stage: "emoji" });
  }

  handleTextChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(emoji) {
    this.props.handleSavePalette(this.state.newPaletteName, emoji.native);
    this.setState({ stage: "" });
  }

  render() {
    const { hideSaveForm } = this.props;
    const { newPaletteName, stage } = this.state;
    return (
      <div>
        <Dialog open={stage === "emoji"} onClose={hideSaveForm}>
          <DialogTitle>Choose a Palette Emoji</DialogTitle>

          <Picker onClick={this.handleSubmit} title="Pick a Palette Emoji" />
        </Dialog>
        <Dialog open={stage === "form"} onClose={hideSaveForm} fullWidth>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogTitle>Choose a Palette Name</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Enter a name for your palette:
              </DialogContentText>
              <TextValidator
                name="newPaletteName"
                label="Palette Name"
                fullWidth
                variant="standard"
                value={newPaletteName}
                onChange={this.handleTextChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "Enter Palette Name",
                  "Palette name already exists",
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideSaveForm}>Cancel</Button>
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteSaveForm;
