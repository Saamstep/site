import { ReactNode } from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";

interface Props {
  title: string;
  children: ReactNode;
  image: string;
}

function HighlightCard({ title, children, image }: Props) {
  return (
    <>
      <Container className="my-3">
        <Stack direction="horizontal" gap={1}>
          <Image src={image} height="100px" width="100px" rounded />
          <Container>
            <h3>{title}</h3>
            <p>{children}</p>
          </Container>
        </Stack>
      </Container>
    </>
  );
}

export default HighlightCard;
