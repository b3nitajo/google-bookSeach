import React, { Component } from "react";
import SearchForm from "../components/Google/SearchForm";
import { ResultsList, ResListItem } from "../components/Google/ResultsList";
import GOOGLEAPI from "../utils/GOOGLEAPI";
//import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import SelectBtn from "../components/SelectBtn";


class Search extends Component {
  state = {
    googleBooks: {},
    search: "",
    savedBook: {},
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
      //const results = res.data.items
      //map results 
    //can set results object data here too or in render
  }

  // loadResults = (query) => {
  //   GOOGLEAPI.search(query)
  //     .then(res => this.setState({ googleBooks: res.data }))
  //     .catch(err => console.log(err));
  // };

  savedBook = query => {
    GOOGLEAPI.save(query)
   // this.savedBook(this.state.save);
      .then(res => this.setState({ savedBook: res.data }))
      .catch(err => console.log(err));
  };

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

  handleSaveSubmit = event => {
    event.preventDefault();
      this.savedBook(this.state.save);
  };
  
  saveBook = (id) => {
    GOOGLEAPI.search(id)
      .then(res =>{
        const results = res.data.items;
        console.log(results);
       // const data = results.json();
      //  API.saveBook(data);
        // API.saveBook({
        //   title: results.volumeInfo.title,
        //   author: results.volumeInfo.authors,
        //   description: results.volumeInfo.description,
        //   image: results.imageLinks.thumbnail,
        //   link: results.selfLink
        // })
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