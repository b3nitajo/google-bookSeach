import React from "react";
import "./style.css";

export function ResultsList({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ResListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

