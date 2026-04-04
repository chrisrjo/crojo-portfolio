import ui1 from "../assets/ui1.jpg";
import ui2 from "../assets/ui2.jpg";
import todos from "../assets/todos.jpg";
import letsgo from "../assets/letsgo.jpg";
import Studyus from "../assets/Studyus.jpg";
import chris from "../assets/chris.jpg";

export default function Projects() {
  return (
    <>
      <section id="projects" className="projects">
        <h1>Projects</h1>
        <br />

        <div className="projects-container">

          <div className="project-item">
            <a
              href="https://www.figma.com/design/KZqy1pN1gOC3vVRhZe7OQo/Ui-challenge-1?m=auto&t=do0P6tEeFScaRJwo-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ui1} alt="Ui Challenge 1" />
            </a>
          </div>

          <div className="project-item">
            <a
              href="https://www.figma.com/design/pYROFXkHmyogQlsxH3CyYT/ui-challenge-2?m=auto&t=do0P6tEeFScaRJwo-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ui2} alt="Ui Challenge 2" />
            </a>
          </div>

          <div className="project-item">
            <a
              href="https://awesometodosapp-otag.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={todos} alt="Awesome Todo" />
            </a>
          </div>

          <div className="project-item">
            <a
              href="https://www.figma.com/design/BZBrT1mz1qnNmV2bs9eoQO/Let-s-GO?m=auto&t=do0P6tEeFScaRJwo-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={letsgo} alt="Letsgo" />
            </a>
          </div>

          <div className="project-item">
            <a
              href="https://www.figma.com/design/erRLniSnBK1B5VhmrPif7o/StudyUS?node-id=0-1&t=cvOH9KwoCAdoSQXo-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Studyus} alt="StudyUs" />
            </a>
          </div>

          <div className="project-item">
            <a
              href="https://www.figma.com/design/QzgpNQgAQHyQPWGgcAS4uK/Portfolio?node-id=0-1&t=kiRgCQbTek5zxPZU-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={chris} alt="Hci figma portfolio" />
            </a>
          </div>

        </div>
      </section>

      <hr className="solid" />
    </>
  );
}