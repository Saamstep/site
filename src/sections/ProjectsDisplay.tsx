import projectData from "../assets/projects.json";
import ProjectCard from "../components/ProjectCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProjectDisplay() {
  const numRows = Math.ceil(projectData.projects.length / 3);

  return (
    <Container className="my-3">
      <h1 className="text-center">Projects</h1>
      {numRows === 0 && <p className="text-center">No projects found</p>}
      {numRows > 0 &&
        Array.from({ length: numRows }).map((_, rowIndex) => (
          <Row key={rowIndex} className="mb-4">
            {projectData.projects.slice(rowIndex * 3, rowIndex * 3 + 3).map((p, colIndex) => (
              <Col key={colIndex} sm={12} md={4} className="mb-4">
                <ProjectCard title={p.title} image={p.headerImg} buttonText={p.buttonText} buttonLink={p.buttonLink} tags={p.tags} goLink={p.goLink} goText={p.goText}>
                  {p.shortDesc}
                </ProjectCard>
              </Col>
            ))}
          </Row>
        ))}
    </Container>
  );
}

export default ProjectDisplay;
