import sizes from "./sizes";

const styles = {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "7vh",
    width: "100%",
  },
  logo: {
    backgroundColor: "#eceff1",
    height: "100%",
    padding: "0 13px",
    marginRight: "16px",
    display: "flex",
    alignItems: "center",
    fontSize: "22px",
    fontFamily: "'Roboto', sans-serif",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
    [sizes.down("sm")]: {
      display: "none",
    },
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-track": {
      background: "transparent",
    },
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
      backgroundColor: "green",
      outline: "none",
      border: "2px solid green",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginTop: "-3px",
    },
    [sizes.down("md")]: {
      width: "200px",
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
};

export default styles;
