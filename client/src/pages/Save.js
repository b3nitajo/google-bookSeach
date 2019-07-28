import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

//set state to empty
class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: ""
  };

// loads books from database
  componentDidMount() {
    this.loadBooks();
  }

  //input handler
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //user book addition handler
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      const userEntry = {
        title: this.state.title,
        author: this.state.author,
        description: this.state.description,
        image: this.state.image,
        link: this.state.link
      };
      API.saveBook(userEntry)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  //get all books from database
  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  //delete book from book list
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
      alert("Book Deleted");
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Custom Read List Add</h1>
              <h3>(add custom read or <a href="/search">search Google Books</a>)</h3>
            </Jumbotron>
            <form>
              <Input value={this.state.title} onChange={this.handleInputChange} name="title" placeholder="Title*" />
              <Input value={this.state.author} onChange={this.handleInputChange} name="author" placeholder="Author*" />
              <TextArea value={this.state.description} onChange={this.handleInputChange}  name="description" placeholder="Description" />
              <Input value={this.state.image} onChange={this.handleInputChange} name="image" placeholder="Enter image URL http://bookcover.jpg" />
              <Input value={this.state.link} onChange={this.handleInputChange} name="link" placeholder="http://booklink.com" />
              <FormBtn onClick={this.handleFormSubmit} >Submit Book</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Reading List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}> 
                      <strong>
                        {book.title} 
                      </strong>
                      <br></br>
                    by {book.author}
                    <br></br>
                    Description {book.description}
                    <br></br>
                    <a href={book.link} target="blank">
                    Click Here for Book Source
                    </a>
                    <br></br>
                    <img src={book.image} alt="Book"></img>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)}/>
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

export default Books;
