import React, { Component } from "react";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newColorName: "",
      currentColor: "teal",
    };

    this.addNewColor = this.addNewColor.bind(this);
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      return this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule("isColorUnique", (value) => {
      return this.props.colors.every(
        ({ color }) => color !== this.state.currentColor
      );
    });
  }

  handleTextChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  addNewColor() {
    const newColor = {
      name: this.state.newColorName,
      color: this.state.currentColor,
    };

    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }

  render() {
    const { isPaletteFull } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.addNewColor}>
          <TextValidator
            name="newColorName"
            label="Color Name"
            value={newColorName}
            onChange={this.handleTextChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Color is required",
              "Color name already exists",
              "Color already exists",
            ]}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            disabled={isPaletteFull}
            style={{
              backgroundColor: isPaletteFull ? "grey" : currentColor,
            }}
          >
            {isPaletteFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default ColorPickerForm;
