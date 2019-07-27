import React from "react";
import "./style.css";
// function ResultList(props) {
//   return (
//     <ul className="list-group">
//       {props.googleBooks.map(googleBooks => (
//         <li className="list-group-item" key={googleBooks.id}>
//           <img alt={googleBooks.title} className="img-fluid" src={googleBooks.images.original.url} />
//         </li>
//       ))}
//     </ul>
export function ResultsList({ googleBooks }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{googleBooks}</ul>
    </div>
  );
}

export function ResListItem({ googleBooks }) {
  return <li className="list-group-item">{googleBooks}</li>;
}
// {this.state.googleBooks.length ? (
//   <List>
//     {googleBooks = this.state.googleBooks.map(items => (
//       <ListItem key={items.id}>
//         <strong>
//             {items.volumeInfo.title} by {items.volumeInfo.authors}
//         </strong>
//         <strong>
//           Description:  {items.volumeInfo.description}
//          </strong>
//         <SelectBtn onClick={() => this.saveBook(items.id)}/>
//       </ListItem>
//     ))}
//   );
// }

// export default ResultList;
