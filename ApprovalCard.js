import React from "react";
const ApprovalCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="two ui button">
        <div className="ui basic blue button">Approve</div>
        <div className="ui basic pink button">Reject</div>
      </div>
    </div>
  );
};

export default ApprovalCard;
