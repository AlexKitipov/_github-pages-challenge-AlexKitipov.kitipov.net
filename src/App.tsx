import backgroundImage from './assets/images/background.png';

const legacyPages = [
  { href: 'docs/legacy/about.html', label: 'За мен / About' },
  { href: 'docs/legacy/contacts.html', label: 'Контакти / Contacts' },
  { href: 'docs/legacy/links.html', label: 'Линкове / Links' },
];

function App() {
  return (
    <main
      className="app-shell"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.88), rgba(30, 64, 175, 0.54)), url(${backgroundImage})`,
      }}
    >
      <nav className="top-nav" aria-label="Legacy site reference pages">
        {legacyPages.map((page) => (
          <a key={page.href} href={page.href}>
            {page.label}
          </a>
        ))}
      </nav>

      <section className="hero-card" aria-labelledby="site-title">
        <p className="eyebrow">Vite + React + TypeScript foundation</p>
        <h1 id="site-title">Алгоритъмът на деня | Algorithm of the Day</h1>
        <p className="intro">
          Това е новата основа на обучителната уеб страница и лична визитка на
          Aleksandar Kitipov. Статичната HTML версия е архивирана като справка, докато
          модерното React приложение се развива стъпка по стъпка.
        </p>
        <p className="intro">
          This first React milestone preserves the original spirit of the site and
          prepares it for future portfolio sections, contact cards, and learning
          experiments.
        </p>
        <div className="actions">
          <a className="primary-action" href="mailto:aeksandar.kitipov@gmail.com">
            Свържи се / Get in touch
          </a>
          <a className="secondary-action" href="docs/legacy/index.html">
            View legacy archive
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
