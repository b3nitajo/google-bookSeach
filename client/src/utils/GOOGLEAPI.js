import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const SAVEURL = "https://www.googleapis.com/books/v1/volumes/";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  },
  // Get User's choice from Google Books
  //then save the book to database
  save: function(query) {
  //  return axios.get(SAVEURL + query);
   async function fetchBook(query) {
     const res = await fetch(SAVEURL + query);
     const data = await res.json();
     return axios.post("/api/books", data); 
   }
   fetchBook(query);
   console.log(fetchBook(query));
  }
  
};

// saveBook: function(bookData) {
//   return axios.post("/api/books", bookData);
// }
