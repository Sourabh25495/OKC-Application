import React from "react";
import { TextField } from "@material-ui/core";

export const InputComponent = ({ label }) => {
  return (
    <div style={{ display: "grid", paddingTop: "30px" }}>
      <div className="field-label">
        <label>{label}</label>
      </div>
      <>
        <TextField variant="outlined" />
      </>
    </div>
  );
};
