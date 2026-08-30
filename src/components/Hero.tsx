import { useDemo } from "../lib/demo-context";

export function Hero() {
  const { t, track } = useDemo();

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__sun" />
        <div className="hero__sea" />
        <div className="hero__grain" />
      </div>

      <div className="hero__content">
        <p className="eyebrow">{t.hero.badge}</p>
        <h1 id="hero-title" className="hero__title">
          {t.hero.titleLine1}
          <br />
          <em>{t.hero.titleAccent}</em>
        </h1>
        <p className="hero__subtitle">{t.hero.subtitle}</p>
        <div className="hero__actions">
          <a
            className="button button--primary"
            href="#residencias"
            onClick={() => track("cta_click", "hero:explore-residences")}
          >
            {t.hero.cta}
          </a>
          <a
            className="button button--ghost"
            href="#contacto"
            onClick={() => track("cta_click", "hero:request-dossier")}
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <a className="hero__scroll-hint" href="#residencias">
        <span>{t.hero.scroll}</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
