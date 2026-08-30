import { useDemo } from "../lib/demo-context";

export function Investment() {
  const { t } = useDemo();

  return (
    <section className="section section--ink" id="inversion" aria-labelledby="investment-title">
      <div className="section__head">
        <p className="eyebrow">{t.investment.badge}</p>
        <h2 id="investment-title" className="section__title">
          {t.investment.title} <em>{t.investment.titleAccent}</em>
        </h2>
        <p className="section__subtitle">{t.investment.subtitle}</p>
      </div>

      <div className="investment__grid">
        {t.investment.metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <p className="metric__value">{metric.value}</p>
            <p className="metric__label">{metric.label}</p>
            <p className="metric__detail">{metric.detail}</p>
          </div>
        ))}
      </div>

      <p className="investment__disclaimer">{t.investment.disclaimer}</p>
    </section>
  );
}
