import React from "react";
import "./style.css";

// ...props dynamically spreads passed props onto element
// instead of defining separately
function DeleteBtn(props) {
  return (
  <span className="delete-btn" {...props} role="button" tabIndex="0">
   ✗
    </span>
  );
}

export default DeleteBtn;
