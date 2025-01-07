import projectData from "../assets/projects.json";
import ProjectCard from "../components/ProjectCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSearchParams } from "react-router-dom";
import ProjectFilters from "../components/ProjectsFilter";

function ProjectDisplay() {
  const numRows = Math.ceil(projectData.projects.length / 3);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("projects") ? searchParams.get("projects")?.split(",") : []; // You can dynamically set this based on your filter criteria
  const filterArr: string[] = filter ?? [];

  function filterMessage() {
    if (filterArr.length > 0) {
      return (
        <p className="my-2 text-left" style={{ fontSize: "15px", color: "#fcba03" }}>
          Filtering by Tag{filterArr.length > 1 ? "s" : null}: <strong>{filterArr?.join(", ")}</strong>
        </p>
      );
    } else {
      return null;
    }
  }

  function ShowProjects() {
    return Array.from({ length: numRows }).map((_, rowIndex) => (
      <Row key={rowIndex} className="mb-4">
        {projectData.projects
          .filter((p) => {
            // If filterArr is empty, return all projects
            if (filterArr.length === 0) return true;

            // Otherwise, check if the project's tags match all values in filterArr
            return filterArr.some((tag) => p.tags.includes(tag));
          })
          .slice(rowIndex * 3, rowIndex * 3 + 3) // Paginate results
          .map((p, colIndex) => (
            <Col key={colIndex} sm={12} md={4} className="mb-4">
              <ProjectCard title={p.title} image={p.headerImg} buttonText={p.buttonText} buttonLink={p.buttonLink} tags={p.tags}>
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
      {filterArr.length > 0 ? (
        <Row className="justify-content-md-left">
          <Col md="auto">
            <ProjectFilters />
          </Col>
          <Col md="auto">{filterMessage()}</Col>
        </Row>
      ) : null}
      <br />
      {ShowProjects()}
    </Container>
  );
}

export default ProjectDisplay;
