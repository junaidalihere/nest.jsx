import React from "react";

export const Card = ({ title, description, icon }) => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "20px",
        border: "1px solid #333",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          fontSize: "40px",
          marginBottom: "15px",
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: "#888",
          fontSize: "14px",
        }}
      >
        {description}
      </p>
    </div>
  );
};
