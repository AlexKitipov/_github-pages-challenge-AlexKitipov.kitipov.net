import { publicSocialLinks } from '../data/socialLinks';

function LinksPage() {
  return (
    <section className="page-card" aria-labelledby="page-title">
      <p className="eyebrow">Links</p>
      <h1 id="page-title">Useful Links</h1>
      <p className="intro">
        External profiles, learning resources, legacy pages, and reference material are
        rendered from public typed link data.
      </p>
      <div className="content-list" aria-label="Public reference links">
        {publicSocialLinks.map((link) => (
          <a key={link.label} href={link.url} rel="noreferrer" target="_blank">
            <span>{link.label}</span>
            {link.description ? <small>{link.description}</small> : null}
          </a>
        ))}
      </div>
    </section>
  );
}

export default LinksPage;
