import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
   // <span lassName="delete-btn" {...props} role="button" tabIndex="0">
   <span className="delete-btn" onClick={() => props.removeBook(props.id)}>
     ✗
    </span>
  );
}

export default DeleteBtn;
