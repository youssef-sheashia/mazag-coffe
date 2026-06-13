import React, { useEffect, useRef } from 'react';
import SectionTitle from '../UI/SectionTitle';
import { features } from '../../data/content';

const About: React.FC = () => {
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
      id="about"
      ref={sectionRef}
      style={{
        padding: '100px 0',
        background: 'linear-gradient(180deg, #FDF8F0 0%, #F5EDD6 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div
        className="pattern-overlay"
        style={{ position: 'absolute', inset: 0, opacity: 0.3 }}
      />

      {/* Decorative circle */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          left: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8" style={{ position: 'relative' }}>
        <div className="reveal">
          <SectionTitle
            subtitle="قصتنا"
            title="من نحن؟"
            description="بن المزاج ليس مجرد محل قهوة، بل هو وجهة لمحبي القهوة الأصيلة والمختصة في قلب المملكة العربية السعودية."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-8">
          {/* Image side */}
          <div className="reveal-left" style={{ transitionDelay: '0.2s' }}>
            <div style={{ position: 'relative' }}>
              {/* Main image */}
              <div
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 30px 80px rgba(44,24,16,0.25)',
                  aspectRatio: '4/5',
                }}
              >
                <img
                  src="/images/about-bg.jpg"
                  alt="قهوة عربية"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Floating card */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '-20px',
                  background: 'linear-gradient(135deg, #2C1810, #4A2C2A)',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  boxShadow: '0 15px 40px rgba(44,24,16,0.4)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  minWidth: '180px',
                  animation: 'float 4s ease-in-out infinite',
                }}
              >
                <div style={{ color: '#E8C97A', fontSize: '2rem', marginBottom: '0.25rem' }}>☕</div>
                <div style={{ color: '#F5EDD6', fontWeight: '800', fontSize: '1.5rem', lineHeight: '1' }}>٢٠٢٣</div>
                <div style={{ color: 'rgba(245,237,214,0.6)', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                  تأسيس بن المزاج
                </div>
              </div>

              {/* Gold accent */}
              <div
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05))',
                  border: '2px solid rgba(201,168,76,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                }}
              >
                ✦
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal-right" style={{ transitionDelay: '0.3s' }}>
            <h3
              style={{
                fontSize: '1.8rem',
                fontWeight: '800',
                color: '#2C1810',
                marginBottom: '1.5rem',
                lineHeight: '1.4',
              }}
            >
              رحلة من الشغف إلى الإتقان
            </h3>

            <div
              style={{
                width: '60px',
                height: '3px',
                background: 'linear-gradient(90deg, #C9A84C, transparent)',
                marginBottom: '1.5rem',
              }}
            />

            <p
              style={{
                color: '#6B3A2A',
                lineHeight: '2',
                fontSize: '1.05rem',
                marginBottom: '1.5rem',
              }}
            >
              انطلقنا عام ٢٠٢٣ بشغف حقيقي نحو تقديم تجربة قهوة استثنائية تجمع بين أصالة التراث السعودي وجودة القهوة المختصة العالمية. نؤمن بأن كل كوب قهوة يحكي قصة، وقصتنا هي شغفنا بالبن الجيد والضيافة الأصيلة.
            </p>

            <p
              style={{
                color: '#6B3A2A',
                lineHeight: '2',
                fontSize: '1.05rem',
                marginBottom: '2rem',
              }}
            >
              نختار حبوب البن بعناية فائقة من أجود مزارع العالم، ونحمصها بأيدي خبراء متخصصين لنقدم لكم نكهة لا تُنسى في كل زيارة.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="reveal"
                  style={{
                    transitionDelay: `${0.4 + idx * 0.1}s`,
                    background: 'white',
                    borderRadius: '16px',
                    padding: '1.25rem',
                    border: '1px solid rgba(201,168,76,0.15)',
                    boxShadow: '0 4px 15px rgba(44,24,16,0.06)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                  }}
                >
                  <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>{feature.icon}</span>
                  <div>
                    <div style={{ fontWeight: '700', color: '#2C1810', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                      {feature.title}
                    </div>
                    <div style={{ color: '#8B5E3C', fontSize: '0.8rem', lineHeight: '1.5' }}>
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
