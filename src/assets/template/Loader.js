import React from "react";

export const Loader = () => {
  return (
    <>
      <div style={style.loaderContainer}>
        <div style={style.loader}></div>
        <div style={style.loader2}></div>
      </div>
    </>
  );
};

export default Loader;

const style = {
  loaderContainer: {
    position: "relative",
    width: "60px",
    height: "60px",
    margin: "50px auto",
  },

  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    border: "solid 4px transparent",
    borderTopColor: "#0dac77",
    borderLeftColor: "#0dac77",
    borderRadius: "50%",
    animation: "loader 1.4s linear infinite",
  },

  loader2: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "70%",
    height: "70%",
    border: "solid 4px transparent",
    borderTopColor: "#283fc3",
    borderLeftColor: "#283fc3",
    borderRadius: "50%",
    animation: "loader2 1.2s linear infinite",
  },
};
