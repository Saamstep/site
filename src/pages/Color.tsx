import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Color() {
  return (
    <div>
      {/* Main section with the color and centered text */}
      <Container
        fluid
        style={{
          backgroundColor: "#2B738B",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Row>
          <Col>
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "5px",
                textAlign: "center",
                fontWeight: "bold",
                color: "black",
                fontSize: "24px",
              }}
            >
              #2B738B
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Color;
