export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <img className="headshot" src="/headshot.jpg" alt="Brayden headshot" />
        <div>
          <h1>Brayden O’Briant</h1>
          <p className="subtitle">Electrical & Computer Engineering</p>
          <p>
            *placeholder text*
          </p>

          <div className="heroActions">
            <a className="button" href="/Brayden_OBriant_Resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
            <a className="buttonSecondary" href="/projects">
              See Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
