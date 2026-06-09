import SkillGroup from '../components/portfolio/SkillGroup';
import { skillGroups } from '../data/skills';

function SkillsPage() {
  return (
    <section className="page-card skills-page" aria-labelledby="page-title">
      <p className="eyebrow">Skills</p>
      <h1 id="page-title">Skills Matrix</h1>
      <p className="intro">
        Frontend, programming, tools, AI collaboration, creative direction, and
        communication skills are grouped into typed portfolio data.
      </p>
      <div className="section-stack skill-matrix" aria-label="Grouped skills matrix">
        {skillGroups.map((group) => (
          <SkillGroup group={group} key={group.id} />
        ))}
      </div>
    </section>
  );
}

export default SkillsPage;
