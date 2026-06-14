import React, { useEffect, useRef } from 'react';
import SectionTitle from '../UI/SectionTitle';
import { brandInfo } from '../../data/content';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const contactCards = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      label: 'واتساب',
      value: brandInfo.whatsappDisplay,
      action: () =>
        window.open(
          `https://wa.me/${brandInfo.whatsapp}?text=مرحباً، أود الاستفسار عن بن المزاج`,
          '_blank'
        ),
      gradient: 'linear-gradient(135deg, #25D366, #128C7E)',
      shadow: 'rgba(37,211,102,0.3)',
      bg: 'rgba(37,211,102,0.06)',
      border: 'rgba(37,211,102,0.2)',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
      label: 'اتصل بنا',
      value: brandInfo.phoneDisplay,
      action: () => window.open(`tel:${brandInfo.phone}`, '_self'),
      gradient: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
      shadow: 'rgba(201,168,76,0.3)',
      bg: 'rgba(201,168,76,0.06)',
      border: 'rgba(201,168,76,0.2)',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      label: 'إنستغرام',
      value: '@almazajcoffee',
      action: () => window.open(brandInfo.instagram, '_blank'),
      gradient: 'linear-gradient(135deg, #833AB4, #FD1D1D, #FCB045)',
      shadow: 'rgba(131,58,180,0.3)',
      bg: 'rgba(131,58,180,0.06)',
      border: 'rgba(131,58,180,0.2)',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: '100px 0',
        background: 'linear-gradient(180deg, #2C1810 0%, #1a0f09 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Pattern overlay */}
      <div
        className="pattern-overlay"
        style={{ position: 'absolute', inset: 0, opacity: 0.15 }}
      />

      {/* Decorative elements */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-150px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8" style={{ position: 'relative' }}>
        <div className="reveal">
          <SectionTitle
            subtitle="تواصل معنا"
            title="نحن هنا لخدمتكم"
            description="لا تتردد في التواصل معنا لأي استفسار أو طلب. يسعدنا خدمتكم في أي وقت"
            light
          />
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactCards.map((card, idx) => (
            <div
              key={idx}
              className="reveal-scale"
              style={{ transitionDelay: `${0.1 + idx * 0.15}s` }}
            >
              <button
                onClick={card.action}
                style={{
                  width: '100%',
                  background: card.bg,
                  border: `1px solid ${card.border}`,
                  borderRadius: '24px',
                  padding: '2rem',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  backdropFilter: 'blur(10px)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(-8px)';
                  el.style.boxShadow = `0 20px 50px ${card.shadow}`;
                  el.style.borderColor = card.border.replace('0.2', '0.5');
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = 'none';
                  el.style.borderColor = card.border;
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '20px',
                    background: card.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 8px 20px ${card.shadow}`,
                  }}
                >
                  {card.icon}
                </div>

                {/* Label */}
                <div style={{ color: 'rgba(245,237,214,0.6)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                  {card.label}
                </div>

                {/* Value */}
                <div style={{ color: '#F5EDD6', fontWeight: '700', fontSize: '1rem' }}>
                  {card.value}
                </div>

                {/* Action text */}
                <div
                  style={{
                    background: card.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                  }}
                >
                  تواصل الآن ←
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Working hours card */}
        <div
          className="reveal"
          style={{
            transitionDelay: '0.5s',
            background: 'rgba(245,237,214,0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '24px',
            padding: '2.5rem',
            textAlign: 'center',
          }}
        >
          <div style={{ color: '#C9A84C', fontSize: '2rem', marginBottom: '1rem' }}>🕐</div>
          <h3 style={{ color: '#F5EDD6', fontWeight: '800', fontSize: '1.3rem', marginBottom: '1.5rem' }}>
            أوقات الدوام
          </h3>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '16px',
                padding: '1rem 2rem',
                minWidth: '250px',
              }}
            >
              <div style={{ color: '#E8C97A', fontWeight: '700', marginBottom: '0.25rem' }}>
                السبت – الخميس
              </div>
              <div style={{ color: 'rgba(245,237,214,0.8)', fontSize: '0.9rem' }}>
                ٧ صباحاً – ١٢ منتصف الليل
              </div>
            </div>
            <div
              style={{
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '16px',
                padding: '1rem 2rem',
                minWidth: '250px',
              }}
            >
              <div style={{ color: '#E8C97A', fontWeight: '700', marginBottom: '0.25rem' }}>
                الجمعة
              </div>
              <div style={{ color: 'rgba(245,237,214,0.8)', fontSize: '0.9rem' }}>
                ١ ظهراً – ١٢ منتصف الليل
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
