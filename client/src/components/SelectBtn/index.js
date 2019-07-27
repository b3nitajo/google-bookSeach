import React from "react";
import "./style.css";


// ...props dynamically spreads passed props onto element
// instead of defining separately
function SelectBtn(props) {
  return (
  <button className="save-btn" {...props} tabIndex="0">
   Save
   </button>
  );
}

export default SelectBtn;
