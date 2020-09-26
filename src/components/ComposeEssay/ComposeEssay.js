import React from "react";
import { InputComponent } from "../InputComponent";
import { FIELD_NAMES, COPY, STATIC_ESSAY_LINES } from "../../constants";
import { Button } from "@material-ui/core";
import { useStyles } from "../styles";
import { processInputFieldParams } from "../utils";
import { useSelector } from "react-redux";

const answerConfigs = {
  hometown: "Originally from ",
  favoriteFood: "Can't get enough ",
  loveToDo: "I love to ",
  music: "I love listening to ",
  messageIf: "Send me a message if you ",
  bar: "My favourite watering hole is ",
};

export const ComposeEssay = ({ setShowEditPage }) => {
  const fieldLabels = Object.values(COPY);
  const fieldNames = Object.values(FIELD_NAMES);
  const staticStatement = Object.values(STATIC_ESSAY_LINES);
  const inputFieldParams = processInputFieldParams(
    fieldLabels,
    fieldNames,
    staticStatement
  );
  const answers = useSelector((state) => state.fieldAnswers);
  console.log("Answers", answers)
  const classes = useStyles();

  const mapAnswers = () => {
    return (
      answers &&
      Object.keys(answers).map((answerKey) => {
        const message = answerConfigs[answerKey];
        const answer = answers[answerKey];

        if (answer && message) {
          return (
            <>
              {message}
              <b>{answer + " "}</b>
            </>
          );
        }
      })
    );
  };

  const Essay = () => {
    return <p>{mapAnswers()}</p>;
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

