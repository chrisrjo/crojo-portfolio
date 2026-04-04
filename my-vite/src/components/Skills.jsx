export default function Skills() {
  return (
    <>
      <section id="skills" className="skills">
        <h1>Skills</h1>
        <br />
        <div className="skills-container">
          <div className="skills-item">
            <h2>Languages</h2>
            <br />
            <ul>
              <li>
                <i className="fa-brands fa-css3"> CSS</i>
              </li>
              <li>
                <i className="fa-brands fa-js"> Javascript</i>
              </li>
              <li>
                <i className="fa-brands fa-html5"> Html</i>
              </li>
            </ul>
          </div>
          <div className="skills-item">
            <h2>Libraries</h2>
            <br />
            <ul>
              <li>
                <i className="fa-brands fa-react"> React</i>
              </li>
              <li>
                <i className="fa-solid fa-font-awesome"> Font Awesome</i>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr className="solid" />
    </>
  );
}
