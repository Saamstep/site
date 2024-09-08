import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NavBarMenu from "./components/NavBarMenu";
import ProjectDisplay from "./sections/ProjectsDisplay";
import Header from "./sections/Header";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <NavBarMenu />
          <Header />
        </Row>
      </Container>

      <ProjectDisplay />
    </>
  );
}

export default App;
