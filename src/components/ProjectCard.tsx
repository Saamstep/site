import { ReactNode } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { HiOutlineExternalLink } from "react-icons/hi";

interface Props {
  title: string;
  children: ReactNode;
  image?: string | "holder.js/50px180";
  buttonText?: string;
  buttonLink?: string;
  goLink?: string;
  goText?: string;
  tags?: string[];
}

function ProjectCard({ title, children, image, buttonText, buttonLink, goLink, goText, tags }: Props) {
  return (
    <Card className="mb-2">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {tags && (
          <Card.Subtitle className="mb-2">
            {tags.map((t) => {
              return (
                // <a onClick={FilterProjects(t.toLowerCase().replace(/ /g, "_"))}>
                <Badge bg="secondary" className="me-1">
                  {"#" + t}
                </Badge>
                // </a>
              );
            })}
          </Card.Subtitle>
        )}
        <Card.Text>{children}</Card.Text>
        {buttonLink && buttonText && (
          <Button variant="primary" href={buttonLink} className="me-3">
            {buttonText}
          </Button>
        )}
        {goLink && goText && (
          <Card.Link href={goLink} target="_blank">
            {goText} <HiOutlineExternalLink />
          </Card.Link>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
