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
    return axios.get(SAVEURL + query);
  //  async function fetchBook(query) {
  //    const res =  axios.get(SAVEURL + query);
  //    const data = await res.data; //
  //    console.log(data);
  //    const bookData =  (data) => ({
  //      title: data.volumeInfo.title,
  //      author: data.volumeInfo.authors
  //    })
  //    await  axios.post("/api/books", bookData); 
  //  }
  //  fetchBook(query);
  //  console.log(fetchBook(query));
  // }
  }
};

// saveBook: function(bookData) {
//   return axios.post("/api/books", bookData);
// }
