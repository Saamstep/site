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
          height: "60vh", // Set the height to 60vh for better scaling
          position: "relative", // Allow absolute positioning of the blue tint overlay
        }}
      >
        {/* Blue tint overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, .7)', // Blue tint with opacity
            zIndex: -1, // Ensure the overlay is behind the content
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
            zIndex: -2, // Ensure the image stays behind the overlay
          }}
        />

        <Stack className={centerItems}>
          <h1 className="text-emphasis">👋 Hey There!</h1>
          <hr />
          <p className="me-2 text-center" style={{ fontSize: 'calc(15px + 0.5vw)' }}>
            I'm Sam, a college student studying <strong>Electrical and Computer Engineering</strong> focusing on embedded systems.
          </p>
          <p className="me-2 text-center" style={{ fontSize: 'calc(10px + 0.5vw)' }}>Exploring the world of video engineering, managing my home lab playing, PC games, and cooking are my pass time activities.
          </p>
        </Stack>
      </Container>

      <style jsx>{`
        @media (max-width: 768px) {
          #home {
            height: 40vh; /* Smaller height on mobile devices */
          }

          h1 {
            font-size: 1.5rem; /* Adjust font size for smaller screens */
          }

          p {
            font-size: 1rem; /* Adjust text size for smaller screens */
          }
        }
      `}</style>
    </>
  );
}

export default Header;
