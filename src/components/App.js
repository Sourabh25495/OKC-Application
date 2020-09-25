import React from "react";
import { connect } from "react-redux";
import { increment, submitField } from "../madlibs";


import SelfSpace from "./SelfSpace";

require("./App.scss");

const App = ({ counter, increment, submitField }) => {
  //Temp code to update redux
  const params = { id: "hometown", answer: "test" };
  const params2 = { id: "favoriteFood", answer: "test1" };

  return (
    <div className="match-area">
      
      <SelfSpace />
      {/* <Button
        variant="contained"
        color="primary"
        onClick={() => submitField(params)}
      >
        Primary
      </Button> */}
      {/* <Button
        variant="contained"
        color="primary"
        onClick={() => submitField(params2)}
      >
        Primary
      </Button> */}
    </div>
  );
};

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  increment,
  submitField,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
