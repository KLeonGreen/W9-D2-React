import { Component } from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import "./Welcome.css";

class Welcome extends Component {
  render() {
    return (
      <Jumbotron className="jumbotron">
        <Container>
          <h1>Welcome!</h1>
          <p>Find the most inspiring books here</p>
        </Container>
      </Jumbotron>
    );
  }
}

export default Welcome;
