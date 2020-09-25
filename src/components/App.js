import React, { useState } from "react";
import { connect } from "react-redux";

import ComposeEssay from "./ComposeEssay";
import EditPage from "./EditPage";

require("./App.scss");

const App = () => {
  const [showEditPage, setShowEditPage] = useState("essay");

  return (
    <div className="match-area">
      {showEditPage === "essay" && (
        <ComposeEssay setShowEditPage={setShowEditPage} />
      )}
      {showEditPage === "editPage" && <EditPage setShowEditPage={setShowEditPage}/>}
    </div>
  );
};

export default connect(null, null)(App);
