import sizes from "./sizes";
import bg from "./bg.svg";

export default {
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "auto",
    /* background by SVGBackgrounds.com */
    backgroundColor: "#1e8feb",
    backgroundImage: `url(${bg})`,
  },
  header: {
    fontSize: "2rem",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    [sizes.down("lg")]: {
      width: "60%",
    },
    [sizes.down("md")]: {
      width: "70%",
    },
    [sizes.down("sm")]: {
      width: "80%",
    },
    [sizes.down("xs")]: {
      width: "65%",
    },
  },
  nav: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white",
    },
  },
  palettes: {
    width: "100%",
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
    [sizes.down("sm")]: {
      gridTemplateColumns: "repeat(2, 50%)",
      gridGap: "3%",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "2%",
    },
  },
};
