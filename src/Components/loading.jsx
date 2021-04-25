import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import propTypes from "prop-types";

const LoadingPage = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(props.loading);
  }, [props.loading]);

  return (
    <div>
      {loading && (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: "10000",
            backgroundColor: "rgb(0,0,0,0.5)",
            top: 0,
            left: 0
          }}
        >
          <div style={{ marginLeft: "45%", marginTop: "10%" }}>
            <ReactLoading
              type={"bars"}
              color={"white"}
              height={"20%"}
              width={"20%"}
            />
            <h3 style={{ marginLeft: "-7%", color: "white" }}>
              Loading please wait...
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

LoadingPage.prototype = {
  loading: propTypes.bool,
};
export default LoadingPage;
