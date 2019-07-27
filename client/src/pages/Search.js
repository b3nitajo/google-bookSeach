import React, { Component } from "react";
import SearchForm from "../components/Google/SearchForm";
import ResultsList from "../components/Google/ResultsList";
import GOOGLEAPI from "../utils/GOOGLEAPI";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import SelectBtn from "../components/SelectBtn";


class Search extends Component {
  state = {
    googleBooks: {},
    search: "",
    savedBook: {}
  };

  componentDidMount() {
    this.searchBooks("art");
    this.googleBooks(
      {  
      title: "title",
      author: "author",
      id: "1",
      image: "image1.jpg",
      link: "www.link1.com"
      },
      {
      title: "title 2",
      author: "author 2",
      id: "2",
      image: "image2.jpg",
      link: "www.link2.com"
      }
    );
    //   title: ""
    // });
  };

  searchBooks = query => {
    GOOGLEAPI.search(query)
      .then(res => this.setState({ googleBooks: res.data }))
      .catch(err => console.log(err));
  };

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
  
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
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
            <ResultsList googleBooks={this.state.googleBooks} />
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Search Results</h1>
            </Jumbotron>
            {this.state.googleBooks.length ? (
              <List>
                {this.state.googleBooks.map(data => (
                  <ListItem key={data.id}>
                    <strong>
                        {data.volumeInfo.title} by {data.volumeInfo.authors}
                    </strong>
                    <strong>
                      Description:  {data.volumeInfo.description}
                     </strong>
                    <a href={data.imageLinks.thumbnail} target="blank"></a>
                    <a href={data.selfLink} target="blank"></a>
                    <SelectBtn onClick={() => this.saveBook(data.id)}/>
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