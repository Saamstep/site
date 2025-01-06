import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import bmdImage from "../assets/bmd.jpg";
import Stack from "react-bootstrap/Stack";

function Header() {
  const centerItems =
    "d-flex align-items-center justify-content-center text-center";

  // State to manage window width for responsive styles
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Conditional styles for media queries
  const containerStyle: React.CSSProperties = {
    height: windowWidth <= 768 ? "40vh" : "60vh", // Set height based on window width
    position: "relative", // TypeScript should now accept this
  };

  const textStyle: React.CSSProperties = {
    fontSize: windowWidth <= 768 ? "1rem" : "calc(15px + 0.5vw)",
  };

  const secondTextStyle: React.CSSProperties = {
    fontSize: windowWidth <= 768 ? "1rem" : "calc(10px + 0.5vw)",
  };

  return (
    <>
      <Container id="home" className={centerItems} fluid style={containerStyle}>
        {/* Blue tint overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, .7)",
            zIndex: -1,
          }}
        />

        {/* Background image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${bmdImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -2,
          }}
        />

        <Stack className={centerItems}>
          <h1 className="text-emphasis">👋 Hey There!</h1>
          <hr />
          <p className="me-2 text-center" style={textStyle}>
            I'm Sam, a college student studying{" "}
            <strong>Electrical and Computer Engineering</strong> focusing on
            embedded systems.
          </p>
          <p className="me-2 text-center" style={secondTextStyle}>
            Exploring the world of video engineering, managing my home lab
            playing, PC games, and cooking are my past time activities.
          </p>
        </Stack>
      </Container>
    </>
  );
}

export default Header;
