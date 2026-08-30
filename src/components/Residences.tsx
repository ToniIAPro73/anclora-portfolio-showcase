import { useDemo } from "../lib/demo-context";

export function Residences() {
  const { t, track } = useDemo();

  return (
    <section className="section section--light" id="residencias" aria-labelledby="residences-title">
      <div className="section__head">
        <p className="eyebrow">{t.residences.badge}</p>
        <h2 id="residences-title" className="section__title">
          {t.residences.title} <em>{t.residences.titleAccent}</em>
        </h2>
        <p className="section__subtitle">{t.residences.subtitle}</p>
      </div>

      <div className="residences__grid">
        {t.residences.properties.map((property, index) => (
          <article className="property-card" key={property.name}>
            <div
              className={`property-card__media property-card__media--${index + 1}`}
              role="img"
              aria-label={`${property.name} — ${property.type}`}
            >
              <span className="property-card__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="property-card__body">
              <p className="property-card__type">{property.type}</p>
              <h3 className="property-card__name">{property.name}</h3>
              <dl className="property-card__facts">
                <div>
                  <dt>{property.area}</dt>
                  <dd>{t.residences.area}</dd>
                </div>
                <div>
                  <dt>{property.beds}</dt>
                  <dd>{t.residences.beds}</dd>
                </div>
                <div>
                  <dt>{t.residences.from}</dt>
                  <dd className="property-card__price">{property.price}</dd>
                </div>
              </dl>
              <p className="property-card__description">{property.description}</p>
              <a
                className="property-card__cta"
                href="#contacto"
                onClick={() => track("cta_click", `residence:${property.name}`)}
              >
                {t.residences.cta}
                <span aria-hidden="true"> →</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
