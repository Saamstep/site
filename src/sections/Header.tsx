import Container from "react-bootstrap/Container";
import bmdImage from "../assets/bmd.jpg";
import Stack from "react-bootstrap/Stack";

function Header() {
  const centerItems = "d-flex align-items-center justify-content-center";
  return (
    <>
      <Container
        id="home"
        className={centerItems}
        fluid
        style={{
          minHeight: "400px",
          maxHeight: "500px",
          backgroundImage: `url(${bmdImage}), linear-gradient(#212529, #2c2c2c, #212529)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
        }}
      >
        <Stack className={centerItems}>
          <h1 className="">👋 Hey There!</h1>
          <p className="me-2 text-center">
            <strong>My name is Sam</strong>, a college student studying Electrical and Computer Engineering passionate about embedded systems, robotics, and video engineering.{" "}
          </p>
        </Stack>
      </Container>
    </>
  );
}

export default Header;
