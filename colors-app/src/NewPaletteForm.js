import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import DraggableColorBoxList from "./DraggableColorBoxList";
import PaletteFormNav from "./PaletteFormNav";
import { arrayMoveImmutable as arrayMove } from "array-move";

const drawerWidth = 400;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20,
  };

  constructor(props) {
    super(props);
    this.state = {
      open: true,
      newColorName: "",
      currentColor: "#FFFFF",
      colors: props.palettes[0].colors,
    };

    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSavePalette = this.handleSavePalette.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
    this.clearColors = this.clearColors.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      return this.state.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule("isColorUnique", (value) => {
      return this.state.colors.every(
        ({ color }) => color !== this.state.currentColor
      );
    });
  }

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  addNewColor() {
    const newColor = {
      name: this.state.newColorName,
      color: this.state.currentColor,
    };

    this.setState({
      colors: [...this.state.colors, newColor],
      newColorName: "",
    });
  }

  deleteColor(colorName) {
    this.setState({
      colors: this.state.colors.filter((color) => color.name !== colorName),
    });
  }

  handleSavePalette(newPaletteName) {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      colors: this.state.colors,
    };

    this.props.savePalette(newPalette);
    this.props.history.push("/");
  }

  handleTextChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  clearColors() {
    this.setState({ colors: [] });
  }

  addRandomColor() {
    const allColors = this.props.palettes.map((p) => p.colors).flat();
    const randColor = allColors[Math.floor(Math.random() * allColors.length)];

    // TODO: Make sure randColor isn't already in colors
    this.setState({ colors: [...this.state.colors, randColor] });
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, maxColors } = this.props;
    const { open, colors } = this.state;
    const isPaletteFull = colors.length >= maxColors;

    return (
      <div className={classes.root}>
        <PaletteFormNav
          palettes={this.props.palettes}
          classes={classes}
          open={open}
          handleSavePalette={this.handleSavePalette}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Typography variant="h4">Design Your Palette</Typography>
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.clearColors}
            >
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={isPaletteFull}
              onClick={this.addRandomColor}
            >
              Random Color
            </Button>
          </div>
          <ChromePicker
            color={this.state.currentColor}
            onChangeComplete={this.updateCurrentColor}
          />
          <ValidatorForm onSubmit={this.addNewColor}>
            <TextValidator
              name="newColorName"
              label="Color Name"
              value={this.state.newColorName}
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
                backgroundColor: isPaletteFull
                  ? "grey"
                  : this.state.currentColor,
              }}
            >
              {isPaletteFull ? "Palette Full" : "Add Color"}
            </Button>
          </ValidatorForm>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorBoxList
            colors={colors}
            deleteColor={this.deleteColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
