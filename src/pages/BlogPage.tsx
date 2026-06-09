function BlogPage() {
  return (
    <section className="page-card" aria-labelledby="page-title">
      <p className="eyebrow">Blog</p>
      <h1 id="page-title">Notes and Articles</h1>
      <p className="intro">
        A routed writing shell for development notes, algorithms, tutorials, and project
        retrospectives.
      </p>
      <p className="page-note">
        Blog entries can later be backed by markdown, a CMS, or typed local content.
      </p>
    </section>
  );
}

export default BlogPage;
