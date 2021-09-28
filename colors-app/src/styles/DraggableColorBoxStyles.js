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

export default styles;
