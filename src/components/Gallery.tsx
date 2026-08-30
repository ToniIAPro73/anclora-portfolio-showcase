import { useDemo } from "../lib/demo-context";

const GALLERY_IMAGES = [
  "/images/interiors/living-room.jpg",
  "/images/interiors/kitchen.jpg",
  "/images/lifestyle/cove.jpg",
  "/images/exteriors/outdoor-kitchen.jpg",
  "/images/lifestyle/poolside.jpg",
  "/images/interiors/master-bedroom.jpg",
  "/images/lifestyle/dining-terrace.jpg",
  "/images/amenities/spa.jpg",
];

export function Gallery() {
  const { t, track } = useDemo();

  return (
    <section className="section section--ink gallery" id="galeria" aria-labelledby="gallery-title">
      <div className="section__head">
        <p className="eyebrow">{t.gallery.badge}</p>
        <h2 id="gallery-title" className="section__title">
          {t.gallery.title} <em>{t.gallery.titleAccent}</em>
        </h2>
        <p className="section__subtitle">{t.gallery.subtitle}</p>
      </div>

      <div className="gallery__grid">
        {GALLERY_IMAGES.map((src, index) => {
          const item = t.gallery.items[index];
          const featured = index === 0 || index === 5;
          return (
            <figure
              key={src}
              className={`gallery__item${featured ? " gallery__item--featured" : ""}`}
            >
              <img src={src} alt={item.alt} loading="lazy" decoding="async" />
              <figcaption className="gallery__caption">{item.alt}</figcaption>
            </figure>
          );
        })}
      </div>

      <p className="gallery__note">
        <a
          href="#contacto"
          onClick={() => track("cta_click", "gallery:request-dossier")}
        >
          {t.hero.ctaSecondary}
          <span aria-hidden="true"> →</span>
        </a>
      </p>
    </section>
  );
}
