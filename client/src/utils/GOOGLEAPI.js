import axios from "axios";

const BASEURL = "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=";
const SAVEURL = "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes/";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  },
 save: function(query) {
    return axios.get(SAVEURL + query);
  }
};
