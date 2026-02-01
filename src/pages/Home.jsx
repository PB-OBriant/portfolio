export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <img className="headshot" src="/headshot.jpg" alt="Brayden headshot" />
        <div>
          <h1>Brayden O’Briant</h1>
          <p className="subtitle">Electrical & Computer Engineering</p>
          <p>
            I am an Electrical and Computer Engineering student with experience leading
            projects through the full engineering design process and building data-driven
            software tools.
          </p>

          <p>
            My work includes energy modeling, systems analysis, and applied machine
            learning, with a focus on clear requirements, validation, and maintainable
            design.
          </p>

          <div className="heroActions">
            <a className="button" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
            <a className="buttonSecondary" href="/Projects">
              See Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
