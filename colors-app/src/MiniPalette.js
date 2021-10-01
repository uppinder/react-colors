import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { withRouter } from "react-router-dom";
import styles from "./styles/MiniPaletteStyles";

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);

    this.deletePalette = this.deletePalette.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  deletePalette(evt) {
    evt.stopPropagation();
    this.props.handleDelete(this.props.id);
  }

  handleClick() {
    this.props.goToPalette(this.props.id);
  }

  render() {
    const { classes, paletteName, emoji, colors } = this.props;

    const miniColorBoxes = colors.map((color) => (
      <div
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
        key={color.name}
      />
    ));

    return (
      <div className={classes.root} onClick={this.handleClick}>
        <span className={classes.deleteIcon} onClick={this.deletePalette}>
          <DeleteIcon />
        </span>
        <div className={classes.colors}>{miniColorBoxes}</div>
        <div className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(MiniPalette));
