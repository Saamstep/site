import { ReactNode } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
          <Card.Subtitle className="mb-2 text-muted">
            {tags.map((t) => {
              return "#" + t + " ";
            })}
          </Card.Subtitle>
        )}
        <Card.Text>{children}</Card.Text>
        {buttonLink && buttonText && (
          <Button variant="primary" href={buttonLink} target="_blank" className="me-3">
            {buttonText}
          </Button>
        )}
        {goLink && goText && (
          <Card.Link href={goLink} target="_blank">
            {goText}
          </Card.Link>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
