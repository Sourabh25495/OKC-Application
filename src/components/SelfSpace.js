import React from "react";
import { TextField } from "@material-ui/core";
import { InputComponent } from "./InputComponent";
import { COPY } from "../constants";
const SelfSpace = () => {
    const fieldLabels = Object.values(COPY);
    console.log("FIELD_NAMES", fieldLabels)
  return (
    <div className="essay-page-container">
      <div className="form-container">
          {Array.isArray(fieldLabels) && fieldLabels.map(currentLabel => (
            <InputComponent label={currentLabel}/>
          )
            
        )}
        
      </div>
      <div className="essay-container">
        {/* <InputComponent />
        <InputComponent /> */}
      </div>
    </div>
  );
};

export default SelfSpace;
