function ContactPage() {
  return (
    <section className="page-card" aria-labelledby="page-title">
      <p className="eyebrow">Contact</p>
      <h1 id="page-title">Contact Aleksandar</h1>
      <p className="intro">
        A contact page shell for email, social profiles, collaboration notes, and
        availability.
      </p>
      <div className="actions">
        <a className="primary-action" href="mailto:aeksandar.kitipov@gmail.com">
          Send email
        </a>
      </div>
    </section>
  );
}

export default ContactPage;
