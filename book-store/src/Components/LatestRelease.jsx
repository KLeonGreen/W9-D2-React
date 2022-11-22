import { Component } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import "./Latest.css";

class LatestRelease extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            {fantasy.map((book) => (
              <Col xs={12} sm={6} md={4} lg={3} xl={2}>
                <Card>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default LatestRelease;
