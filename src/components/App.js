import React from "react";
import { connect } from "react-redux";
import { increment, submitField } from "../madlibs";

require("./App.scss");

const App = ({ counter, increment, submitField }) => {
  const params = { id: "hometown", answer: "test" };
  const params2 = { id: "favoriteFood", answer: "test1" };

  return (
    <div className="match-area">
      Counter (to make sure redux works): {counter}
      <br />
      <br />
      <button onClick={() => submitField(params)}>Increment</button>
      <button onClick={() => submitField(params2)}>Increment</button>
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
