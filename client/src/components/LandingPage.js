import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import SaveBtn from "../components/SaveBtn";
// import ViewBtn from "../components/ViewBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";

class LandingPage extends Component {
  // Initialize this.state.streams as an empty array
  state = {
    movies: [],
    title: '',
    year: '',
    actors: '',
    streams: '',
    description: '',
    image: '',
    link: ''
  };

  // Get all streaming services from the API and save them to this.state.streams
  async componentDidMount() {
  }

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.findStreams(this.state.title)
      .then(res => {
        if (res.status !== 200) {
          throw new Error(res.data.message);
        }
        this.setState({ movies: res.data.results});
      })
      .catch(err => this.setState({ error: err.message }));
  };

  // handleSaveClick = event => {
  //   // When the form is submitted, prevent its default behavior, get streams, update the streams state
  //   event.preventDefault();

  //   const {title, year, actors, streams, description, image, link} = this.state;

  //   if (title && year && actors && description && image && link) {
  //     API.saveStream({
  //       title,
  //       year,
  //       actors,
  //       streams,
  //       description,
  //       image,
  //       link
  //     })
  //     .then(res => this.setState({
  //       movies: [res.data, ...this.state.movies]
  //     })
  //     )
  //     .catch(err => console.log(err));
  //   }
    
  // };

  render() {
    let styles = {
      width: '500px',
    };

    return (
      <Container fluid>
        <Row>
        <Col size="md-12 sm-12">
          <Jumbotron>
            <h1>Welcome to Flix Finder</h1>
          </Jumbotron>
          <div class="card">
            <div class="card-body">
              Search by Movie or TV Show Title
              <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title"
              />
              <FormBtn onClick={this.handleFormSubmit}>Search</FormBtn>
              </form>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              Results

              {this.state.movies.length ? (
                <List>
                  {this.state.movies.map(movie => (
                    <ListItem key={movie.id}>
                      <div class="form-group row">
                          <div class="col-md-10">
                              <h4>{movie.name}</h4>
                          </div>
                          <div class="col-md-10">
                              <img src={movie.picture} alt={movie.id} style={styles}></img>
                          </div>
                          {/* <div class="col-sm-1">
                              <ViewBtn>{movie.link}</ViewBtn>
                          </div>
                          <div class="col-sm-0">
                              <SaveBtn onClick={() => this.handleSaveClick(movie._id)} />
                          </div> */}
                      </div>
                      <div class="form-group row">
                        <div class="col-md-10">
                            <h6>Streaming On:</h6>
                        </div>
                      </div>
                      {movie.locations.map(location => (
                        <div class="form-group row">
                            <div class="col-md-10">
                                <img src={location.icon} alt={location.id}></img>
                            </div>
                        </div>
                      ))}
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h6>No Results to Display</h6>
              )}
            </div>
          </div>
          
          
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LandingPage;
