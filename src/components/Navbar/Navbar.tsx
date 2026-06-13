import React from 'react';
import { navLinks } from '../../data/content';
import { useNavbar } from '../../hooks/useNavbar';

const Navbar: React.FC = () => {
  const { isScrolled, isMenuOpen, toggleMenu, closeMenu, activeSection } = useNavbar();

  const handleNavClick = (href: string) => {
    closeMenu();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className="fixed top-0 right-0 left-0 z-40 transition-all duration-500"
        style={{
          background: isScrolled
            ? 'rgba(44, 24, 16, 0.95)'
            : 'linear-gradient(180deg, rgba(44,24,16,0.8) 0%, transparent 100%)',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(201,168,76,0.2)' : 'none',
          padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-3 cursor-pointer"
            style={{ background: 'none', border: 'none' }}
          >
            <img
              src="/logo.png"
              alt="بن المزاج"
              style={{
                height: isScrolled ? '44px' : '52px',
                width: 'auto',
                transition: 'height 0.3s ease',
                filter: 'brightness(0) invert(1)',
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col leading-tight">
              <span
                style={{
                  color: '#E8C97A',
                  fontFamily: 'Tajawal, sans-serif',
                  fontWeight: '900',
                  fontSize: isScrolled ? '1.1rem' : '1.3rem',
                  transition: 'font-size 0.3s ease',
                  lineHeight: '1',
                }}
              >
                بن المزاج
              </span>
              <span
                style={{
                  color: 'rgba(232,201,122,0.7)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  lineHeight: '1',
                  marginTop: '2px',
                }}
              >
                AL-MAZAJ COFFEE
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: isActive ? '#E8C97A' : 'rgba(245,237,214,0.85)',
                    fontFamily: 'Tajawal, sans-serif',
                    fontWeight: isActive ? '700' : '500',
                    fontSize: '0.95rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    borderBottom: isActive ? '2px solid #C9A84C' : '2px solid transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.target as HTMLButtonElement).style.color = '#E8C97A';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.target as HTMLButtonElement).style.color = 'rgba(245,237,214,0.85)';
                    }
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => handleNavClick('#contact')}
            className="hidden lg:block btn-primary text-sm"
            style={{ padding: '0.6rem 1.5rem' }}
          >
            اطلب الآن
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="قائمة التنقل"
          >
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: '#E8C97A',
                transition: 'all 0.3s ease',
                transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: '#E8C97A',
                transition: 'all 0.3s ease',
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: '#E8C97A',
                transition: 'all 0.3s ease',
                transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: 35,
          background: 'rgba(44,24,16,0.98)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          transition: 'opacity 0.4s ease, visibility 0.4s ease',
          opacity: isMenuOpen ? 1 : 0,
          visibility: isMenuOpen ? 'visible' : 'hidden',
        }}
      >
        {/* Decorative top */}
        <div className="absolute top-8 w-full px-6">
          <div style={{ textAlign: 'center', color: '#C9A84C', fontSize: '1.5rem', marginBottom: '1rem' }}>❖</div>
        </div>

        {navLinks.map((link, index) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            style={{
              background: 'none',
              border: 'none',
              color: '#F5EDD6',
              fontFamily: 'Tajawal, sans-serif',
              fontWeight: '700',
              fontSize: '1.5rem',
              padding: '0.75rem 3rem',
              cursor: 'pointer',
              transition: `all 0.3s ease ${index * 0.05}s`,
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isMenuOpen ? 1 : 0,
              borderBottom: '1px solid rgba(201,168,76,0.1)',
              width: '80%',
              textAlign: 'center',
            }}
          >
            {link.label}
          </button>
        ))}

        <button
          onClick={() => handleNavClick('#contact')}
          className="btn-primary mt-6"
          style={{
            transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
            opacity: isMenuOpen ? 1 : 0,
            transition: 'all 0.3s ease 0.3s',
          }}
        >
          اطلب الآن
        </button>
      </div>
    </>
  );
};

export default Navbar;
