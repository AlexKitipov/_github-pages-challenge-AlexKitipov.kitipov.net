import { publicContactChannels } from '../data/socialLinks';

function ContactPage() {
  const primaryEmail = publicContactChannels.find(
    (channel) => channel.kind === 'email',
  );

  return (
    <section className="page-card" aria-labelledby="page-title">
      <p className="eyebrow">Contact</p>
      <h1 id="page-title">Contact Aleksandar</h1>
      <p className="intro">
        Public contact details use safe defaults. Legacy phone numbers and street
        address data are marked private and are not rendered here.
      </p>
      <div className="section-stack">
        {publicContactChannels.map((channel) => (
          <article className="info-panel" key={`${channel.kind}-${channel.value}`}>
            <h2>{channel.label}</h2>
            {channel.href ? (
              <a href={channel.href}>{channel.value}</a>
            ) : (
              <p>{channel.value}</p>
            )}
            {channel.note ? <p className="page-note">{channel.note}</p> : null}
          </article>
        ))}
      </div>
      {primaryEmail?.href ? (
        <div className="actions">
          <a className="primary-action" href={primaryEmail.href}>
            Send email
          </a>
        </div>
      ) : null}
    </section>
  );
}

export default ContactPage;
