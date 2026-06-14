import React, { useEffect, useRef } from 'react';
import SectionTitle from '../UI/SectionTitle';
import { brandInfo } from '../../data/content';

const Location: React.FC = () => {
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

  return (
    <section
      id="location"
      ref={sectionRef}
      style={{
        padding: '100px 0',
        background: 'linear-gradient(180deg, #F5EDD6 0%, #FDF8F0 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div
        className="pattern-overlay"
        style={{ position: 'absolute', inset: 0, opacity: 0.3 }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8" style={{ position: 'relative' }}>
        <div className="reveal">
          <SectionTitle
            subtitle="موقعنا"
            title="زورونا"
            description="يسعدنا استقبالكم في فرعنا. تعالوا وعيشوا تجربة بن المزاج بنفسكم"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* Map - takes 3 columns */}
          <div
            className="reveal-left lg:col-span-3"
            style={{
              transitionDelay: '0.2s',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(44,24,16,0.2)',
              border: '1px solid rgba(201,168,76,0.2)',
              minHeight: '400px',
              position: 'relative',
            }}
          >
            {/* Map wrapper */}
            <div style={{ width: '100%', height: '100%', minHeight: '400px', position: 'relative' }}>
              <iframe
                title="موقع بن المزاج على الخريطة"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.234!2d46.6752957!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ4LjgiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sar!2ssa!4v1700000000000!5m2!1sar!2ssa"
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '400px',
                  border: 'none',
                  display: 'block',
                  filter: 'sepia(20%) contrast(1.1)',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Gold overlay frame */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  border: '2px solid rgba(201,168,76,0.2)',
                  borderRadius: '24px',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>

          {/* Info - takes 2 columns */}
          <div
            className="reveal-right lg:col-span-2 flex flex-col gap-4"
            style={{ transitionDelay: '0.3s' }}
          >
            {/* Store info card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #2C1810, #4A2C2A)',
                borderRadius: '20px',
                padding: '1.75rem',
                border: '1px solid rgba(201,168,76,0.2)',
                boxShadow: '0 8px 30px rgba(44,24,16,0.2)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0,
                  }}
                >
                  📍
                </div>
                <div>
                  <div style={{ color: '#E8C97A', fontWeight: '800', fontSize: '1.1rem' }}>
                    بن المزاج
                  </div>
                  <div style={{ color: 'rgba(245,237,214,0.6)', fontSize: '0.8rem' }}>
                    AL-MAZAJ COFFEE
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: '100%',
                  height: '1px',
                  background: 'rgba(201,168,76,0.2)',
                  marginBottom: '1.25rem',
                }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <InfoRow icon="🏙️" label="المدينة" value="المملكة العربية السعودية" />
                <InfoRow icon="🕐" label="أوقات العمل" value={brandInfo.hours.weekdays} />
                <InfoRow icon="🕌" label="الجمعة" value={brandInfo.hours.friday} />
              </div>
            </div>

            {/* Open in Maps button */}
            <a
              href={brandInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                color: '#2C1810',
                padding: '1rem',
                borderRadius: '16px',
                fontWeight: '800',
                fontSize: '1rem',
                textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(201,168,76,0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 35px rgba(201,168,76,0.5)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 25px rgba(201,168,76,0.3)';
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              افتح في الخرائط
            </a>

            {/* Additional card */}
            <div
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '1.5rem',
                border: '1px solid rgba(201,168,76,0.15)',
                boxShadow: '0 4px 15px rgba(44,24,16,0.06)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🚗</span>
                <div style={{ fontWeight: '700', color: '#2C1810', fontSize: '0.95rem' }}>
                  كيف تصلنا؟
                </div>
              </div>
              <p style={{ color: '#8B5E3C', fontSize: '0.85rem', lineHeight: '1.7' }}>
                يمكنك الوصول إلينا بسهولة عبر تطبيق الخرائط. اضغط على زر "افتح في الخرائط" للحصول على اتجاهات مفصلة مباشرةً إلى موقعنا.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface InfoRowProps {
  icon: string;
  label: string;
  value: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ icon, label, value }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
    <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: '2px' }}>{icon}</span>
    <div>
      <div style={{ color: 'rgba(245,237,214,0.5)', fontSize: '0.7rem', marginBottom: '0.1rem' }}>
        {label}
      </div>
      <div style={{ color: '#F5EDD6', fontSize: '0.85rem', fontWeight: '500', lineHeight: '1.5' }}>
        {value}
      </div>
    </div>
  </div>
);

export default Location;
