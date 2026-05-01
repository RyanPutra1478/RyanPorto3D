import { useState, useEffect } from 'react';
import './Navbar.css';

const normalizePathname = (pathname) => {
  const normalized = pathname.replace(/\/+$/, '');
  return normalized || '/';
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const currentPath = normalizePathname(window.location.pathname);
  const isHomePage = currentPath === '/';

  const links = [
    { label: 'Home', href: '/', active: isHomePage },
    { label: '3D Projects', href: '/projects/3d', active: currentPath === '/projects/3d' },
    { label: 'Web Projects', href: '/projects/web', active: currentPath === '/projects/web' },
    { label: 'Contact', href: isHomePage ? '#contact' : '/#contact', active: false },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="/" className="navbar__logo">
          Ryan<span className="navbar__logo-dot">.</span>
        </a>

        <button
          className={`navbar__burger ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__links ${mobileOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={link.active ? 'active' : ''}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
