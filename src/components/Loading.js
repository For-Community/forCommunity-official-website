import React from "react";
import loading from "../assets/loading.gif";

const Loading = () => {
  return (
    <div>
      <img
        style={{
          height: "200px",
          width: "200px",
          margin: "auto",
          marginBottom: "40px",
        }}
        src={loading}
        alt="loading"
      />
    </div>
  );
};

export default Loading;
