import HighlightCard from "../components/HighlightCard";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <>
      <Card className="m-4 bg-body-tertiary" id="about">
        <Card.Header className="text-center">About Me</Card.Header>
        <HighlightCard title="Embedded Systems" image="https://via.placeholder.com/500x500?text=Project+Alpha">
          This is an example card
        </HighlightCard>
        <HighlightCard title="Robotics" image="https://via.placeholder.com/500x500?text=Project+Alpha">
          This is an example card
        </HighlightCard>
        <HighlightCard title="Video Engineering" image="https://via.placeholder.com/500x500?text=Project+Alpha">
          This is an example card This is an example card This is an example card This is an example card This is an example card This is an example card This is an example card This is an example card This is an example card This is an example card This is an example card This is an example card This is an example card This is an example card
        </HighlightCard>
      </Card>
    </>
  );
}

export default About;
