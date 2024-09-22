import Container from "react-bootstrap/Container";
import bmdImage from "../assets/bmd.jpg";
import Stack from "react-bootstrap/Stack";

function Header() {
  const centerItems = "d-flex align-items-center justify-content-center text-center";
  return (
    <>
      <Container
        id="home"
        className={centerItems}
        fluid
        style={{
          height: "600px",
          backgroundColor: 'rgba(43, 115, 139, .8)',
          backgroundImage: `url(${bmdImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundBlendMode: "multiply",
        }}
      >
        <Stack className={centerItems}>
          <h1 className="text-emphasis">👋 Hey There!</h1>
          <hr></hr>
          <p className="me-2 text-center" style={{fontSize: 'calc(15px + 0.5vw)'}}>I'm Sam, a college student studying Electrical and Computer Engineering with a focus on embedded systems, robotics, and video engineering.</p>
        </Stack>
      </Container>
    </>
  );
}

export default Header;
