import { skillGroups } from '../data/skills';

function SkillsPage() {
  return (
    <section className="page-card" aria-labelledby="page-title">
      <p className="eyebrow">Skills</p>
      <h1 id="page-title">Technical Skills</h1>
      <p className="intro">
        Languages, tools, workflows, and creative practices extracted from the legacy
        portfolio into typed data groups.
      </p>
      <div className="section-stack">
        {skillGroups.map((group) => (
          <article className="info-panel" key={group.title}>
            <h2>{group.title}</h2>
            <p>{group.description}</p>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <strong>{skill.name}</strong>
                  <span>{skill.level}</span>
                  <p>{skill.summary}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillsPage;
