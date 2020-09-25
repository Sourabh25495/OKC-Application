import React from "react";
import { TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { SUBMIT_FIELD } from "../../madlibs";

export const InputComponent = ({ label, id, staticText }) => {
  const dispatch = useDispatch();
  return (
    <div style={{ display: "grid", paddingTop: "30px" }}>
      <div className="field-label">
        <label>{label}</label>
      </div>
      <>
        <TextField
          variant="outlined"
          onBlur={(e) =>
            e.target.value && dispatch({
              type: SUBMIT_FIELD,
              payload: {
                fieldName: id,
                answer: `${e.target.value}${e.target.value ? '.' : ''}`,
                staticStatement: staticText,
              },
            })
          }
        />
      </>
    </div>
  );
};
