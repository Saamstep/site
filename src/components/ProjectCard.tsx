import { ReactNode } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

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

function ProjectCard({
  title,
  children,
  image,
  buttonText,
  buttonLink,
  goLink,
  goText,
  tags,
}: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const clickForTag = (tag: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.has("projects")) {
      const allTags = new Set(params.getAll("projects"));
      console.log(allTags);
      if (!allTags.has(tag)) {
        allTags.add(tag);
        params.set("projects", Array.from(allTags).join(","));
      }
    } else {
      params.append("projects", tag);
    }

    setSearchParams(params.toString(), {
      preventScrollReset: true, // Prevents scroll reset, if needed
    });
  };

  return (
    <Card className="mb-2">
      <Card.Img
        variant="top"
        src={image}
        style={{ height: "150px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>
          <h3>{title}</h3>
        </Card.Title>
        {tags && (
          <Card.Subtitle className="mb-2">
            {tags.map((t) => {
              return (
                // <a onClick={FilterProjects(t.toLowerCase().replace(/ /g, "_"))}>
                <Badge
                  key={t}
                  bg="secondary"
                  className="me-1 my-1"
                  onClick={() => clickForTag(t)}
                  style={{ cursor: "pointer" }}
                >
                  {t}
                </Badge>
                // </a>
              );
            })}
          </Card.Subtitle>
        )}
        <Card.Text className="text-card">{children}</Card.Text>
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
