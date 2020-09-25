import React from "react";
import { TextField } from "@material-ui/core";

export const InputComponent = ({ label }) => {
  console.log("label", label);
  return (
    <div style={{ display: "grid" }}>
      <>
        <label>{label}</label>
      </>
      <>
        <TextField variant="outlined" />
      </>
    </div>
  );
};
