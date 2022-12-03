import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="snehil"
          date="3 december"
          text="Stephen Grider is the tutor"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Rajesh"
          date="5 January"
          text="One of the best course"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Rajesh"
          date="5 January"
          text="One of the best course"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
