import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@mui/icons-material/Delete";

const styles = {
  root: {
    height: "25%",
    width: "20%",
    position: "relative",
    margin: "0 auto",
    display: "inline-block",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.2)",
    },
  },
  boxContent: {
    position: "absolute",
    padding: "10px",
    left: "0px",
    width: "100%",
    bottom: "0px",
    color: "rgb(0,0,0,0.5)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "0.8rem",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    color: "black",
    transition: "all 0.3s ease-in-out",
  },
};

class DraggableColorBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, color, name, handleClick } = this.props;

    return (
      <div style={{ backgroundColor: color }} className={classes.root}>
        <div>
          <div className={classes.boxContent}>
            <span className={classes.name}>{name}</span>
            <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DraggableColorBox);
