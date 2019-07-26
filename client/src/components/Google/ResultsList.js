import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.googleBooks.map(googleBooks => (
        <li className="list-group-item" key={googleBooks.id}>
          <img alt={googleBooks.title} className="img-fluid" src={googleBooks.images.original.url} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
