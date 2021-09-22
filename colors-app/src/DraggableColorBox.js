import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    height: "25%",
    width: "20%",
    position: "relative",
    margin: "0 auto",
    display: "inline-block",
    cursor: "pointer",
    marginBottom: "-3.5px",
  },
};

class DraggableColorBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div
        style={{ backgroundColor: this.props.background }}
        className={classes.root}
      >
        {this.props.background}
      </div>
    );
  }
}

export default withStyles(styles)(DraggableColorBox);
