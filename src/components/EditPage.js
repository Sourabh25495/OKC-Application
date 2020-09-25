import React from "react";
import { useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useStyles } from "./styles";
import { useDispatch } from "react-redux";
import { processObjectToPopulateText } from "./utils";
import { START_OVER } from "../madlibs";

export const EditPage = ({ setShowEditPage }) => {
  const classes = useStyles();
  const populateText = useSelector((state) => state.essayText);
  const editFieldValue = processObjectToPopulateText({ populateText });
  const dispatch = useDispatch();

  const handleShowEditPage = () => {
    setShowEditPage("essay");
    dispatch({
      type: START_OVER,
    });
  };

  return (
    <div className="edit-container">
      <div className="label">
        <b>Your essay text</b>
      </div>
      <div className="essay-edit-display">
        <TextField
          id="edit-my-essay"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          defaultValue={editFieldValue}
        />
      </div>
      <div className="button">
        
        <Button
          variant="contained"
          className={classes.muiButton}
          onClick={handleShowEditPage}
        >
          Start Over
        </Button>
      </div>
    </div>
  );
};

export default EditPage;
