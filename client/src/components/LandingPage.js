import React from 'react';
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import { Input, FormBtn } from "../components/Form";
//import LandingPageContainer from '../containers/LandingPageContainer';

export default () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <Jumbotron>
          <h1>Welcome to Flix Finder</h1>
        </Jumbotron>
      </div>
    </div>

    <Container fluid>
    <Row>
    <Col size="md-12 sm-12">
      <div className="card">
        <div className="card-body">
          Search by Movie or TV Show title
          {/* <LandingPageContainer /> */}
          <form>
          <Input
            // value={this.state.title}
            // onChange={this.handleInputChange}
            name="title"
            placeholder="Title"
          />
          {/* <FormBtn onClick={this.handleFormSubmit}>Search</FormBtn> */}
          <FormBtn >Search</FormBtn>
        </form>
        </div>
      </div>
      </Col>
    </Row>
    </Container>
  </div>
);
