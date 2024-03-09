import React from "react";

export default function Error() {
  return (
    <div style={{ textAlign: "center", padding: "40px 0" }}>
      <div
        className="card"
        style={{
          background: "white",
          padding: "60px",
          borderRadius: "4px",
          boxShadow: "0 2px 3px #C8D0D8",
          display: "inline-block",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            borderRadius: "200px",
            height: "200px",
            width: "200px",
            background: "#F8FAF5",
            margin: "0 auto",
          }}
        >
          <i
            style={{
              color: "red",
              fontSize: "100px",
              lineHeight: "200px",
              marginLeft: "-15px",
            }}
          >
            ✘
          </i>
        </div>
        <h1>Error</h1>
        <p>
          <br />
          Unable to place order
        </p>
      </div>
    </div>
  );
}
