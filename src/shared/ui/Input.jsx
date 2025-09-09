import React from "react";

const Input = ({ label, type = "text", value, onChange, error }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label>
        {label}
        <br />
        <input
          type={type}
          value={value}
          onChange={onChange}
          style={{
            padding: "10px",
            width: "300px",
            border: error ? "1px solid red" : "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </label>
      {error && <div style={{ color: "red", fontSize: "12px" }}>{error}</div>}
    </div>
  );
};

export default Input;
