import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { withRouter } from "react-router-dom";
import styles from "./styles/MiniPaletteStyles";

const deletePalette = (evt, props) => {
  evt.stopPropagation();
  props.deletePalette(props.id);
};

function MiniPalette(props) {
  const { classes, paletteName, emoji, id, colors, history } = props;

  const miniColorBoxes = colors.map((color) => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));

  return (
    <div
      className={classes.root}
      onClick={() => history.push(`/palette/${id}`)}
    >
      <span
        className={classes.deleteIcon}
        onClick={(evt) => deletePalette(evt, props)}
      >
        <DeleteIcon />
      </span>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <div className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </div>
    </div>
  );
}

export default withRouter(withStyles(styles)(MiniPalette));
