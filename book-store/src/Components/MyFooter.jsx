import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Components/MyFooter.css";

class MyFooter extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <Col>
              <div>The Footer</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MyFooter;
