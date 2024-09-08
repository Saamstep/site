import projectData from "../assets/projects.json";
import ProjectCard from "../components/ProjectCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { useState } from "react";

function ProjectDisplay() {
  const numRows = Math.ceil(projectData.projects.length / 3);
  // const [getSearchFilters, setSearchFilters] = useState([]);

  function cardImage(pathStr: string) {
    if (pathStr.startsWith("file:")) {
      const substr = `${process.env.PUBLIC_URL}/images/${pathStr.slice(5)}`;
      console.log(substr);
      return substr;
    } else {
      return pathStr;
    }
  }

  function FilterProjects() {
    return Array.from({ length: numRows }).map((_, rowIndex) => (
      <Row key={rowIndex} className="mb-4">
        {projectData.projects.slice(rowIndex * 3, rowIndex * 3 + 3).map((p, colIndex) => (
          <Col key={colIndex} sm={12} md={4} className="mb-4">
            <ProjectCard title={p.title} image={p.headerImg} buttonText={p.buttonText} buttonLink={p.buttonLink} tags={p.tags} goLink={p.goLink} goText={p.goText}>
              {p.shortDesc}
            </ProjectCard>
          </Col>
        ))}
      </Row>
    ));
  }

  return (
    <Container id="projects">
      <h1 className="my-5 text-center">Projects</h1>
      {FilterProjects()}
    </Container>
  );
}

export default ProjectDisplay;
