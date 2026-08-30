import { useDemo } from "../lib/demo-context";

export function Location() {
  const { t } = useDemo();

  return (
    <section className="section section--light" id="ubicacion" aria-labelledby="location-title">
      <div className="location__layout">
        <div className="location__text">
          <p className="eyebrow">{t.location.badge}</p>
          <h2 id="location-title" className="section__title">
            {t.location.title} <em>{t.location.titleAccent}</em>
          </h2>
          <p className="section__subtitle">{t.location.subtitle}</p>
          <ul className="location__points">
            {t.location.points.map((point) => (
              <li key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="location__map"
          role="img"
          aria-label="Ilustración abstracta de la costa suroeste de Mallorca — Abstract illustration of Mallorca's southwest coast"
        >
          <span className="location__pin" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
