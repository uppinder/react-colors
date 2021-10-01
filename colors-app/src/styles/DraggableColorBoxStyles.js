import chroma from "chroma-js";
import sizes from "./sizes";

const styles = {
  root: {
    height: "25%",
    width: "20%",
    position: "relative",
    margin: "0 auto",
    display: "inline-block",
    cursor: "pointer",
    marginBottom: "-4.5px",
    marginTop: "-0.5px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.2)",
    },
    [sizes.down("lg")]: { height: "20%", width: "25%" },
    [sizes.down("md")]: { height: "10%", width: "50%" },
    [sizes.down("xs")]: { height: "5%", width: "100%" },
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
  colorName: {
    color: (props) =>
      chroma(props.color).luminance() <= 0.08 ? "white" : "black",
  },
  deleteIcon: {
    color: "black",
    transition: "all 0.3s ease-in-out",
  },
};

export default styles;
