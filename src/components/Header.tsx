import { useEffect, useState } from "react";
import { useDemo } from "../lib/demo-context";

export function Header() {
  const { t, toggleLocale, track } = useDemo();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#residencias", label: t.nav.residences },
    { href: "#galeria", label: t.nav.gallery },
    { href: "#inversion", label: t.nav.investment },
    { href: "#ubicacion", label: t.nav.location },
  ];

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      <div className="site-header__inner">
        <a className="site-header__brand" href="#inicio">
          <span className="site-header__brand-mark" aria-hidden="true">
            ⚓
          </span>
          <span className="site-header__brand-text">
            {t.nav.brand}
            <span className="site-header__brand-suffix"> · {t.nav.brandSuffix}</span>
          </span>
        </a>

        <nav className="site-header__nav" aria-label="Principal">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className="lang-toggle"
            onClick={toggleLocale}
            aria-label={t.nav.toggleLabel}
          >
            {t.nav.toggle}
          </button>
          <a
            className="site-header__cta"
            href="#contacto"
            onClick={() => track("cta_click", "nav:contact")}
          >
            {t.nav.contact}
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`}
        aria-label="Menú móvil"
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#contacto" onClick={() => setMenuOpen(false)}>
          {t.nav.contact}
        </a>
      </nav>
    </header>
  );
}
