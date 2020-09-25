import React from "react";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { submitField } from "../../madlibs";
import { useDispatch } from "react-redux";
import { SUBMIT_FIELD } from "../../madlibs";

export const InputComponent = ({ label, id }) => {
  const dispatch = useDispatch();
  return (
    <div style={{ display: "grid", paddingTop: "30px" }}>
      <div className="field-label">
        <label>{label}</label>
      </div>
      <>
        <TextField
          variant="outlined"
          onChange={(e) =>
            dispatch({
              type: SUBMIT_FIELD,
              payload: { fieldName: id, answer: e.target.value },
            })
          }
        />
      </>
    </div>
  );
};
