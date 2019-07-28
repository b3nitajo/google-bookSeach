import React, { Component } from "react";
import SearchForm from "../components/Google/SearchForm";
import { ResultsList, ResListItem } from "../components/Google/ResultsList";
import GOOGLEAPI from "../utils/GOOGLEAPI";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SelectBtn from "../components/SelectBtn";


class Search extends Component {
  state = {
    googleBooks: {},
    search: "",
    title: "",
    author: "",
    description: "",
    image: "",
    link: ""
  };

  componentDidMount() {
    this.searchBooks("art");
  };

  searchBooks = query => {
    GOOGLEAPI.search(query)
      .then(res =>{
        const results = res.data.items;
        console.log(results);
        this.setState({googleBooks: results})
      })
      .catch(err => console.log(err))
     }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  saveBook = (id) => {
    GOOGLEAPI.save(id)
       .then(res =>{
         async function bookData (){
         const results = await res.data;
         const savedTA = {
           title: results.volumeInfo.title,
           author: results.volumeInfo.authors.join(', '),
           description: results.volumeInfo.description,
           image: results.volumeInfo.imageLinks.thumbnail,
           link: results.volumeInfo.previewLink
         }
         console.log(res);
         console.log(results);
         console.log(savedTA);
         API.saveBook(savedTA);
         }
         bookData();
       })
       .catch(err => console.log(err));
  };
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Search Google Books</h1>
            </Jumbotron>
            <SearchForm
              search={this.state.search}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Search Results</h1>
              <h3>(Select Save to add Book details to <a href="/save">Reading List</a>)</h3>
            </Jumbotron>
            {this.state.googleBooks.length ? (
              <ResultsList>
              {this.state.googleBooks.map(res => (
                  <ResListItem key={res.id}>
                    <strong>
                      {res.volumeInfo.title} 
                      <br></br>
                    </strong>
                      by {res.volumeInfo.authors} 
                      <br></br>
                    <strong>
                      Description: <nbsp></nbsp>
                    </strong>  
                      {res.volumeInfo.description}
                      <br></br>
                    <img src={res.volumeInfo.imageLinks.thumbnail} alt="book"></img>
                    <br></br>
                    <a href={res.volumeInfo.previewLink} target="blank">View Book Details</a>
                    
                    <SelectBtn onClick={() => this.saveBook(res.id)}/>
                  </ResListItem>
                ))}
              </ResultsList>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;