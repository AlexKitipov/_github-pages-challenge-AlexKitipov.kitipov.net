function LinksPage() {
  return (
    <section className="page-card" aria-labelledby="page-title">
      <p className="eyebrow">Links</p>
      <h1 id="page-title">Useful Links</h1>
      <p className="intro">
        A page shell for external profiles, learning resources, legacy pages, and
        reference material.
      </p>
      <div className="content-list" aria-label="Legacy reference links">
        <a href="docs/legacy/index.html">Legacy archive</a>
        <a href="docs/legacy/links.html">Original links page</a>
      </div>
    </section>
  );
}

export default LinksPage;
