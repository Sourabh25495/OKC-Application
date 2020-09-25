import React from "react";
import { InputComponent } from "./InputComponent";
import { FIELD_NAMES, COPY, STATIC_ESSAY_LINES } from "../constants";
import { Button } from "@material-ui/core";
import { useStyles } from "./styles";
import { processInputFieldParams } from "./utils";
import { useSelector } from "react-redux";

const SelfSpace = ({ setShowEditPage }) => {
  const fieldLabels = Object.values(COPY);
  const fieldNames = Object.values(FIELD_NAMES);
  const staticStatement = Object.values(STATIC_ESSAY_LINES);
  const inputFieldParams = processInputFieldParams(
    fieldLabels,
    fieldNames,
    staticStatement
  );
  const answers = useSelector((state) => state.fieldAnswers);
  const classes = useStyles();

  const Essay = () => {
    return (
      <p>
        {answers && answers.hometown
          ? `Originally from ${answers.hometown} `
          : ""}
        {answers && answers.favoriteFood
          ? `Cant get enough ${answers.favoriteFood} `
          : ""}
        {answers && answers.loveToDo ? `I ${answers.loveToDo} ` : ""}
        {answers && answers.music
          ? `I love listening to ${answers.music} `
          : ""}
        {answers && answers.messageIf
          ? `Send Me a message if you  ${answers.messageIf} `
          : ""}
        {answers && answers.bar
          ? `My favourite watering hole is ${answers.messageIf} `
          : ""}
      </p>
    );
  };

  const handleShowEditPage = () => {
    setShowEditPage("editPage");
  };

  return (
    <div className="essay-page-container">
      <div className="form-container">
        <div className="label">
          <b>About Me</b>
        </div>
        <div>
          {Array.isArray(inputFieldParams) &&
            inputFieldParams.map((currentLabel) => (
              <div key={currentLabel.label}>
                <InputComponent
                  label={currentLabel.label}
                  id={currentLabel.fieldType}
                  staticText={currentLabel.staticStatement}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="essay-container">
        <div className="label">
          <b>Your essay text</b>
        </div>
        <div className="essay-text-display">
          <Essay />
        </div>
        <div className="button">
          {answers && Object.keys(answers).length === 6 && (
            <Button
              variant="contained"
              className={classes.muiButton}
              // disabled={answers ? Object.keys(answers).length === 0 : false}
              onClick={handleShowEditPage}
            >
              Edit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelfSpace;
