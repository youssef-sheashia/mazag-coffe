import React, { useEffect, useState } from 'react';
import { brandInfo } from '../../data/content';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOrderClick = () => {
    window.open(
      `https://wa.me/${brandInfo.whatsapp}?text=مرحباً، أود الطلب من بن المزاج`,
      '_blank'
    );
  };

  const handleLocationClick = () => {
    const el = document.getElementById('location');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Parallax Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.4}px)`,
          transition: 'transform 0.1s linear',
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(44,24,16,0.92) 0%, rgba(74,44,42,0.75) 50%, rgba(44,24,16,0.88) 100%)',
        }}
      />

      {/* Pattern overlay */}
      <div
        className="pattern-overlay"
        style={{ position: 'absolute', inset: 0, opacity: 0.4 }}
      />

      {/* Islamic geometric pattern - decorative circles */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.15)',
          opacity: 0.5,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '5%',
          right: '-50px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.1)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '-80px',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.12)',
        }}
      />

      {/* Content */}
      <div
        className="max-w-5xl mx-auto px-4 md:px-8 text-center"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Logo */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(-20px)',
            transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(245,237,214,0.08)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '1.5rem 2.5rem',
              border: '1px solid rgba(201,168,76,0.2)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            <img
              src="/logo.png"
              alt="بن المزاج - AL-MAZAJ COFFEE"
              style={{
                height: '140px',
                width: 'auto',
                filter: 'brightness(0) invert(1)',
                maxWidth: '320px',
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div style="text-align:center">
                      <div style="font-size:3rem; margin-bottom:0.5rem">☕</div>
                      <div style="color:#E8C97A; font-family:Tajawal,sans-serif; font-weight:900; font-size:2.5rem; line-height:1.2">بن المزاج</div>
                      <div style="color:rgba(232,201,122,0.6); font-size:0.8rem; letter-spacing:0.2em; margin-top:0.25rem">AL-MAZAJ COFFEE · EST. 2023</div>
                    </div>
                  `;
                }
              }}
            />
          </div>
        </div>

        {/* Badge */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.3s',
            marginBottom: '1.5rem',
          }}
        >
          <span
            style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(232,201,122,0.1))',
              border: '1px solid rgba(201,168,76,0.4)',
              color: '#E8C97A',
              padding: '0.4rem 1.5rem',
              borderRadius: '50px',
              fontSize: '0.85rem',
              fontWeight: '600',
              letterSpacing: '0.1em',
            }}
          >
            ✦ تأسس عام ٢٠٢٣ ✦
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="font-amiri"
          style={{
            fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
            fontWeight: '700',
            color: '#F5EDD6',
            lineHeight: '1.3',
            marginBottom: '1.5rem',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.9s ease 0.5s',
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
          }}
        >
          {brandInfo.tagline}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: 'rgba(245,237,214,0.85)',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            lineHeight: '1.8',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.9s ease 0.7s',
          }}
        >
          {brandInfo.subtitle}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.9s ease 0.9s',
          }}
        >
          <button onClick={handleOrderClick} className="btn-primary text-lg">
            🛒 اطلب الآن
          </button>
          <button onClick={handleLocationClick} className="btn-secondary text-lg">
            📍 اعرف موقعنا
          </button>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap items-center justify-center gap-8 mt-16"
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'all 0.9s ease 1.1s',
          }}
        >
          {[
            { number: '+٥٠٠', label: 'عميل راضٍ' },
            { number: '٦+', label: 'أنواع قهوة' },
            { number: '١٠٠%', label: 'جودة مضمونة' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: '900',
                  color: '#E8C97A',
                  lineHeight: '1',
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: '0.85rem',
                  color: 'rgba(245,237,214,0.7)',
                  marginTop: '0.25rem',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: loaded ? 0.7 : 0,
          transition: 'opacity 1s ease 1.5s',
          cursor: 'pointer',
        }}
        onClick={() => {
          const el = document.getElementById('about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span style={{ color: 'rgba(245,237,214,0.6)', fontSize: '0.75rem', letterSpacing: '0.15em' }}>
          اكتشف المزيد
        </span>
        <div
          style={{
            width: '28px',
            height: '44px',
            border: '2px solid rgba(201,168,76,0.4)',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '6px',
          }}
        >
          <div
            style={{
              width: '4px',
              height: '8px',
              background: '#C9A84C',
              borderRadius: '2px',
              animation: 'float 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
