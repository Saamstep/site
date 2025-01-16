import HighlightCard from "../components/HighlightCard";

function About() {
  return (
    <>
      <h1 className="my-5 text-center" id="about">
        About Me
      </h1>
      <HighlightCard title="Embedded Systems" image="/images/C_Programming_Language.svg">
        Challenging and expanding my knowledge of real-time embedded systems using C programming, I have been a part of academic projects that bolsters my skills, from LED lights control mechanisms to a sensor glove that allows you to control a subset of audio effects in real-time.
      </HighlightCard>
      <HighlightCard title="Robotics" image="/images/robot.png">
        My passion for robotics started early on as a student. Enjoyment came from piecing together multiple components from numerous sectors of design/fabrication, electrical, and software to see one cohesive product come to life. I was previously a FIRST robotics team member and have worked on a team in developing a PID controlled robot.
      </HighlightCard>
      <HighlightCard title="Video Engineering" image="/images/video.png">
        Due to COVID-19, there was a need in my community circles for an investment in broadcast productions. This took me down a journey of understanding how novice to high end broadcast equipment and operators are utilized to put on various types of live shows.
      </HighlightCard>
      {/* <h1 className="my-5 text-center" id="hobbies">
        Hobbies
      </h1>
      <p className="text-emphasis text-center" style={{ fontSize: "50px" }}>
        Planes&nbsp;&nbsp;&nbsp;Trains&nbsp;&nbsp;&nbsp;Cars&nbsp;&nbsp;&nbsp;Video Engineering&nbsp;&nbsp;&nbsp;Gaming
      </p> */}
    </>
  );
}

export default About;
