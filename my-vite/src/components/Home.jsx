export default function Home() {
  return (
    <>
      <nav>
        <a href="#home">Home</a>
        <a href="#aboutme">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contacts">Contacts</a>
      </nav>
      <section id="home" className="home">
        <h1>Front-End Developer</h1>
        <br />
        <h2>eat(); sleep(); code(); repeat();</h2>
        <br />
        <h3>Let me introduce myself</h3><br/>
        <p>
          An IT student that has passion in creating web pages from ideas 
          into something visually and interactionally pleasing. As of now, 
          I have undergone various experiences regarding the difficulties in life. 
          Nevertheless, this has become my passion, just like coding where we create, 
          debug, and solve engaging.
        </p>
        <br />
        <p>
          As a student, I've been learning JavaScript, HTML, React, Node.js, Java, and Python — and I love the challenge of working beyond my capabilities. 
        </p>
        <div class="socials-icons">
          <a href="https://www.facebook.com/profile.php?id=61585731012044" target="_blank">
          <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://github.com/chrisrjo" target="_blank">
          <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/christina-rojo-b75421372/" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </section>
      <hr className="solid" />
    </>
  );
}
