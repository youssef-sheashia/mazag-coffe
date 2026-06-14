import React, { useEffect, useRef } from 'react';
import SectionTitle from '../UI/SectionTitle';
import { experienceFeatures } from '../../data/content';

const Experience: React.FC = () => {
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
      id="experience"
      ref={sectionRef}
      style={{
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Full background image with parallax */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/experience-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(44,24,16,0.93) 0%, rgba(74,44,42,0.85) 50%, rgba(44,24,16,0.93) 100%)',
        }}
      />

      {/* Pattern overlay */}
      <div
        className="pattern-overlay"
        style={{ position: 'absolute', inset: 0, opacity: 0.15 }}
      />

      {/* Decorative top/bottom borders */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8" style={{ position: 'relative' }}>
        <div className="reveal">
          <SectionTitle
            subtitle="تجربتنا الفريدة"
            title="أجواء سعودية أصيلة"
            description="ادخل عالماً من الدفء والأصالة، حيث تمتزج رائحة البن بعبق التراث السعودي في أجواء تعيد روح المجالس العريقة"
            light
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Features grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {experienceFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="reveal"
                  style={{
                    transitionDelay: `${0.1 + idx * 0.1}s`,
                    background: 'rgba(245,237,214,0.06)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    borderRadius: '16px',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = 'rgba(201,168,76,0.1)';
                    el.style.borderColor = 'rgba(201,168,76,0.4)';
                    el.style.transform = 'translateX(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = 'rgba(245,237,214,0.06)';
                    el.style.borderColor = 'rgba(201,168,76,0.2)';
                    el.style.transform = 'translateX(0)';
                  }}
                >
                  <span style={{ fontSize: '2rem', flexShrink: 0 }}>{feature.icon}</span>
                  <span style={{ color: '#F5EDD6', fontWeight: '600', fontSize: '0.95rem' }}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div
              className="reveal"
              style={{
                transitionDelay: '0.7s',
                marginTop: '2rem',
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap',
              }}
            >
              {[
                { num: '١٠٠%', label: 'راحة وتميز' },
                { num: 'يومياً', label: 'ضيافة دافئة' },
                { num: '٧/٢٤', label: 'تجربة لا تُنسى' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  style={{
                    textAlign: 'center',
                    flex: 1,
                    minWidth: '80px',
                    padding: '1rem',
                    background: 'rgba(201,168,76,0.08)',
                    borderRadius: '12px',
                    border: '1px solid rgba(201,168,76,0.15)',
                  }}
                >
                  <div style={{ color: '#E8C97A', fontWeight: '900', fontSize: '1.3rem' }}>
                    {stat.num}
                  </div>
                  <div style={{ color: 'rgba(245,237,214,0.7)', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote side */}
          <div className="reveal-left" style={{ transitionDelay: '0.3s' }}>
            {/* Large quote card */}
            <div
              style={{
                background: 'rgba(245,237,214,0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(201,168,76,0.25)',
                borderRadius: '28px',
                padding: '3rem 2.5rem',
                position: 'relative',
                textAlign: 'center',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              }}
            >
              {/* Decorative top */}
              <div
                style={{
                  fontSize: '4rem',
                  color: 'rgba(201,168,76,0.3)',
                  lineHeight: '1',
                  marginBottom: '1rem',
                  fontFamily: 'Georgia, serif',
                }}
              >
                "
              </div>

              {/* Gold ornament */}
              <div
                style={{
                  position: 'absolute',
                  top: '-18px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #2C1810, #4A2C2A)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C9A84C',
                  fontSize: '1.2rem',
                }}
              >
                ❖
              </div>

              <blockquote
                className="font-amiri"
                style={{
                  fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                  color: '#F5EDD6',
                  lineHeight: '1.8',
                  fontStyle: 'italic',
                  marginBottom: '2rem',
                }}
              >
                القهوة أكثر من مجرد مشروب...
                <br />
                <span
                  className="text-gold-gradient"
                  style={{
                    fontSize: '1.1em',
                    fontWeight: '700',
                  }}
                >
                  إنها مزاج.
                </span>
              </blockquote>

              {/* Divider */}
              <div
                style={{
                  width: '80px',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
                  margin: '0 auto 1.5rem',
                }}
              />

              <div
                style={{
                  color: '#C9A84C',
                  fontWeight: '700',
                  fontSize: '1rem',
                }}
              >
                — بن المزاج
              </div>
              <div
                style={{
                  color: 'rgba(245,237,214,0.5)',
                  fontSize: '0.8rem',
                  marginTop: '0.25rem',
                }}
              >
                AL-MAZAJ COFFEE
              </div>

              {/* Decorative bottom dallah icon */}
              <div
                style={{
                  marginTop: '2rem',
                  fontSize: '3rem',
                  opacity: 0.6,
                }}
              >
                🫖
              </div>
            </div>

            {/* Small info cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginTop: '1.5rem',
              }}
            >
              <div
                style={{
                  background: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>🏆</div>
                <div style={{ color: '#F5EDD6', fontWeight: '700', fontSize: '0.9rem' }}>
                  جودة معتمدة
                </div>
              </div>
              <div
                style={{
                  background: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>🌿</div>
                <div style={{ color: '#F5EDD6', fontWeight: '700', fontSize: '0.9rem' }}>
                  طبيعي ١٠٠%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
