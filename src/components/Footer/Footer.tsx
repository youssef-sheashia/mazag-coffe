import React from 'react';
import { navLinks, brandInfo } from '../../data/content';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #1a0f09 0%, #0d0704 100%)',
        borderTop: '1px solid rgba(201,168,76,0.15)',
        padding: '4rem 0 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Pattern overlay */}
      <div
        className="pattern-overlay"
        style={{ position: 'absolute', inset: 0, opacity: 0.1 }}
      />

      {/* Decorative top border */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #C9A84C 30%, #C9A84C 70%, transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8" style={{ position: 'relative' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand column */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <img
                src="/logo.png"
                alt="بن المزاج"
                style={{
                  height: '70px',
                  width: 'auto',
                  filter: 'brightness(0) invert(1)',
                  margin: '0 auto',
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div style="text-align:center">
                        <div style="font-size:2rem; margin-bottom:0.25rem">☕</div>
                        <div style="color:#E8C97A; font-family:Tajawal,sans-serif; font-weight:900; font-size:1.8rem; line-height:1.2">بن المزاج</div>
                        <div style="color:rgba(232,201,122,0.5); font-size:0.65rem; letter-spacing:0.2em; margin-top:0.2rem">AL-MAZAJ COFFEE</div>
                      </div>
                    `;
                  }
                }}
              />
            </div>
            <p
              style={{
                color: 'rgba(245,237,214,0.5)',
                fontSize: '0.85rem',
                lineHeight: '1.8',
                maxWidth: '250px',
                margin: '0 auto',
              }}
            >
              طعم القهوة اللي يضبط المزاج — نقدم أجود البن بلمسة عربية أصيلة منذ ٢٠٢٣
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1.5rem' }}>
              <SocialButton
                href={`https://wa.me/${brandInfo.whatsapp}`}
                label="واتساب"
                gradient="linear-gradient(135deg, #25D366, #128C7E)"
              >
                <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </SocialButton>
              <SocialButton
                href={brandInfo.instagram}
                label="إنستغرام"
                gradient="linear-gradient(135deg, #833AB4, #FD1D1D, #FCB045)"
              >
                <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </SocialButton>
              <SocialButton
                href={`tel:${brandInfo.phone}`}
                label="اتصل"
                gradient="linear-gradient(135deg, #C9A84C, #E8C97A)"
              >
                <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </SocialButton>
            </div>
          </div>

          {/* Navigation column */}
          <div style={{ textAlign: 'center' }}>
            <h4
              style={{
                color: '#E8C97A',
                fontWeight: '700',
                fontSize: '1rem',
                marginBottom: '1.5rem',
                position: 'relative',
              }}
            >
              روابط سريعة
              <div
                style={{
                  width: '40px',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
                  margin: '0.5rem auto 0',
                }}
              />
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'rgba(245,237,214,0.6)',
                    fontFamily: 'Tajawal, sans-serif',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                    padding: '0.25rem',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).style.color = '#E8C97A';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLButtonElement).style.color = 'rgba(245,237,214,0.6)';
                  }}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div style={{ textAlign: 'center' }}>
            <h4
              style={{
                color: '#E8C97A',
                fontWeight: '700',
                fontSize: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              معلومات التواصل
              <div
                style={{
                  width: '40px',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
                  margin: '0.5rem auto 0',
                }}
              />
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ color: 'rgba(245,237,214,0.6)', fontSize: '0.85rem' }}>
                <div style={{ color: '#C9A84C', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                  واتساب وهاتف
                </div>
                <a
                  href={`tel:${brandInfo.phone}`}
                  style={{ color: 'rgba(245,237,214,0.7)', textDecoration: 'none' }}
                >
                  {brandInfo.phoneDisplay}
                </a>
              </div>
              <div style={{ color: 'rgba(245,237,214,0.6)', fontSize: '0.85rem' }}>
                <div style={{ color: '#C9A84C', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                  أوقات العمل
                </div>
                <div>{brandInfo.hours.weekdays}</div>
                <div style={{ marginTop: '0.25rem' }}>{brandInfo.hours.friday}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)',
            marginBottom: '1.5rem',
          }}
        />

        {/* Copyright */}
        <div
          style={{
            textAlign: 'center',
            color: 'rgba(245,237,214,0.35)',
            fontSize: '0.8rem',
            lineHeight: '1.8',
          }}
        >
          <div style={{ marginBottom: '0.5rem', color: 'rgba(201,168,76,0.5)' }}>❖</div>
          <p>
            جميع الحقوق محفوظة © {currentYear} بن المزاج | AL-MAZAJ COFFEE
          </p>
          <p style={{ marginTop: '0.25rem', fontSize: '0.72rem' }}>
            تأسست عام ٢٠٢٣ في المملكة العربية السعودية 🇸🇦
          </p>
        </div>
      </div>
    </footer>
  );
};

interface SocialButtonProps {
  href: string;
  label: string;
  gradient: string;
  children: React.ReactNode;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, label, gradient, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    style={{
      width: '42px',
      height: '42px',
      borderRadius: '12px',
      background: gradient,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      flexShrink: 0,
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px) scale(1.1)';
      (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0) scale(1)';
      (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
    }}
  >
    {children}
  </a>
);

export default Footer;
