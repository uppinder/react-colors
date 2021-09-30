export default {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    cursor: "pointer",
    "&:hover span": {
      opacity: 1,
    },
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "100px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    // paddingBottom: "0.5rem",
    color: "black",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    marginBottom: "-3.5px",
    position: "relative",
    zIndex: 1,
  },
  deleteIcon: {
    position: "absolute",
    zIndex: 20,
    right: "0",
    marginTop: "-0.5rem",
    backgroundColor: "red",
    borderRadius: "0px 4px 0px 3px",
    opacity: 0,
    "& svg": {
      fill: "white",
      transform: "scale(0.75)",
      padding: "2px",
    },
    transition: "0.3s all ease-in-out",
  },
};
