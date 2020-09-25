import React from "react";
import { InputComponent } from "./InputComponent";
import { COPY } from "../constants";
import { Button } from "@material-ui/core";
import { useStyles } from "./styles";

const SelfSpace = () => {
  const fieldLabels = Object.values(COPY);
  const classes = useStyles();
  return (
    <div className="essay-page-container">
      <div className="form-container">
        <div className="label">
          <b>About Me</b>
        </div>
        <div>
          {Array.isArray(fieldLabels) &&
            fieldLabels.map((currentLabel) => (
              <div key={currentLabel}>
                <InputComponent label={currentLabel} />
              </div>
            ))}
        </div>
      </div>
      <div className="essay-container">
        <div className="label">
          <b>Your essay text</b>
        </div>
        <div
          style={{ paddingLeft: "20px", fontFamily: "arial", fontSize: "18px" }}
        >
          <p>
            my textmy textmy textmy textmy textmy textmy textmy textmy textmy
            textmy textmy textmy textmy textmy textmy textmy textmy textmy
            textmy textmy textmy textmy textmy textmy textmy textmy textmy
            textmy textmy textmy textmy textmy textmy textmy textmy textmy
            textmy textmy textmy textmy textmy textmy textmy textmy textmy
            textmy textmy textmy textmy textmy textmy textmy textmy textmy
            textmy text
            my textmy textmy textmy textmy textmy textmy textmy textmy textmy
            textmy textmy textmy textmy textmy textmy textmy textmy textmy
            textmy textmy textmy textmy textmy textmy textmy textmy textmy
            textmy textmy textmy textmy textmy textmy textmy textmy textmy
            textmy textmy textmy textmy textmy textmy textmy textmy textmy
            textmy textmy textmy textmy textmy textmy textmy textmy textmy
            textmy text
          </p>
        </div>
        <div className="edit-button">
          <Button variant="contained" className={classes.edit}>
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelfSpace;
