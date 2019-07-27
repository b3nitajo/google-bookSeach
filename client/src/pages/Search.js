import React, { Component } from "react";
import SearchForm from "../components/Google/SearchForm";
//import ResultsList from "../components/Google/ResultsList";
import GOOGLEAPI from "../utils/GOOGLEAPI";
//import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
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
    // this.googleBooks(
    //   {
    //     kind: "books/volume",
    //     totalItems: 2343,
    //     items:
    //       [
    //         {
    //         id: "1",
    //         volumeInfo:
    //           {  
    //             title: "title 1",
    //             author: "author 1",  
    //             description: "Description 1"
    //           }
    //         },
    //         {
    //         id: "2",
    //         volumeInfo:
    //           {  
    //             title: "title 2",
    //             author: "author 2",  
    //             description: "Description 2"
    //           }
    //         }
    //       ]
    //     }
   // );
    //   title: ""
    // });
  };

  searchBooks = query => {
    GOOGLEAPI.search(query)
      .then(res => this.setState({ googleBooks: res.data }))
      .catch(err => console.log(err));
  };

  // loadResults = (query) => {
  //   GOOGLEAPI.search(query)
  //     .then(res => this.setState({ googleBooks: res.data }))
  //     .catch(err => console.log(err));
  // };

  savedBook = query => {
    GOOGLEAPI.save(query)
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
  
  // handleSaveSubmit = event => {
  //   event.preventDefault();
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.authors,
  //       description: this.state.description,
  //       image: this.state.image,
  //       link: this.state.link
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  // };
  


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
              <List>
                {this.state.googleBooks.map(items => (
                  <ListItem key={items.id}>
                    <strong>
                        {items.volumeInfo.title} by {items.volumeInfo.authors}
                    </strong>
                    <strong>
                      Description:  {items.volumeInfo.description}
                     </strong>
                    <SelectBtn onClick={() => this.saveBook(items.id)}/>
                  </ListItem>
                ))}
              </List>
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