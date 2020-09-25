import React from "react";
import { connect } from "react-redux";

import ComposeEssay from "./ComposeEssay";

require("./App.scss");

const App = () => {
  return (
    <div className="match-area">
      <ComposeEssay />
    </div>
  );
};

export default connect(null, null)(App);
