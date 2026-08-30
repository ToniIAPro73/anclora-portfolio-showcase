import { useDemo } from "../lib/demo-context";

export function Footer() {
  const { t } = useDemo();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__label">{t.footer.label}</p>
        <p className="site-footer__disclaimer" lang="es">
          {t.footer.disclaimerEs}
        </p>
        <p className="site-footer__disclaimer" lang="en">
          {t.footer.disclaimerEn}
        </p>
        <a
          className="site-footer__repo"
          href="https://github.com/ToniIAPro73/anclora-portfolio-showcase"
          target="_blank"
          rel="noreferrer"
        >
          {t.footer.repo}
        </a>
      </div>
    </footer>
  );
}
