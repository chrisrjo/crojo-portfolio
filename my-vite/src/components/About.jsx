import isti from "../assets/isti.jpg";
export default function About() {
  return (
    <>
      <section id="aboutme" className="aboutme">
        <div className="aboutme-container">
          <h1>About Me</h1>
          <br/>
          <p>
            Hi, my name is Christina N. Rojo, a BSIT student at Western Institute of Technology.
            passionate about technology and everything that comes with it.
          </p><br/>
          <p>
            I am a student developer that loves to explore and push myself. My web development skills 
            are getting better and stronger. I am currently building knowledge in the realm of UX/UI design. 
            I love to create, experiment, learn, and grow as a developer.
          </p>
        </div>
        <img src={isti} alt="photo" />
      </section>
      <hr className="solid" />
    </>
  );
}

