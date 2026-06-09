import { biography } from '../data/biography';
import { episodeFormat, projectArchiveStructure } from '../data/algorithmOfTheDay';

function AboutPage() {
  return (
    <section className="page-card" aria-labelledby="page-title">
      <p className="eyebrow">About</p>
      <h1 id="page-title">About {biography.name}</h1>
      <p className="intro">{biography.overview}</p>

      <div className="section-stack">
        <article className="info-panel">
          <h2>{biography.title}</h2>
          <p>{biography.role}</p>
          <ul>
            {biography.collaborators.map((collaborator) => (
              <li key={collaborator}>{collaborator}</li>
            ))}
          </ul>
        </article>

        <article className="info-panel">
          <h2>Episode format</h2>
          <ol>
            {episodeFormat.map((step) => (
              <li key={step.title}>
                <strong>{step.title}:</strong> {step.description}
              </li>
            ))}
          </ol>
        </article>

        <article className="info-panel">
          <h2>Archive structure</h2>
          <ul>
            {projectArchiveStructure.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default AboutPage;
