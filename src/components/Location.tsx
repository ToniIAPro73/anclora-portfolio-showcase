import { useDemo } from "../lib/demo-context";

export function Location() {
  const { t } = useDemo();

  return (
    <section className="section section--ink" id="ubicacion" aria-labelledby="location-title">
      <div className="section__head">
        <p className="eyebrow">{t.location.badge}</p>
        <h2 id="location-title" className="section__title">
          {t.location.title} <em>{t.location.titleAccent}</em>
        </h2>
        <p className="section__subtitle">{t.location.subtitle}</p>
      </div>

      <div className="location__layout">
        <figure className="location__media">
          <img
            src="/images/location/aerial.jpg"
            alt={t.location.imageAlt}
            loading="lazy"
            decoding="async"
          />
          <span className="location__pin" aria-hidden="true" />
        </figure>

        <ul className="location__points">
          {t.location.points.map((point) => (
            <li key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
