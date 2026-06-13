import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'linear-gradient(135deg, #1a0f09 0%, #2C1810 50%, #1a0f09 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      {/* Pattern overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Logo */}
      <div
        style={{
          position: 'relative',
          marginBottom: '3rem',
          animation: 'scaleIn 0.8s cubic-bezier(0.34,1.56,0.64,1) forwards',
        }}
      >
        {/* Outer ring */}
        <div
          style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            border: '1px solid rgba(201,168,76,0.2)',
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            animation: 'spin-slow 8s linear infinite',
          }}
        />
        <div
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: '1px dashed rgba(201,168,76,0.15)',
            position: 'absolute',
            top: '-10px',
            left: '-10px',
            animation: 'spin-slow 12s linear infinite reverse',
          }}
        />

        {/* Center content */}
        <div
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'rgba(245,237,214,0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(201,168,76,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
          }}
        >
          ☕
        </div>
      </div>

      {/* Brand name */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div
          style={{
            color: '#E8C97A',
            fontFamily: 'Tajawal, sans-serif',
            fontWeight: '900',
            fontSize: '2rem',
            lineHeight: '1.2',
            animation: 'fadeInUp 0.8s ease 0.3s forwards',
            opacity: 0,
          }}
        >
          بن المزاج
        </div>
        <div
          style={{
            color: 'rgba(232,201,122,0.5)',
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            marginTop: '0.5rem',
            animation: 'fadeInUp 0.8s ease 0.5s forwards',
            opacity: 0,
          }}
        >
          AL-MAZAJ COFFEE
        </div>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: '200px',
          height: '2px',
          background: 'rgba(201,168,76,0.15)',
          borderRadius: '1px',
          overflow: 'hidden',
          animation: 'fadeIn 0.5s ease 0.7s forwards',
          opacity: 0,
        }}
      >
        <div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #C9A84C, #E8C97A)',
            borderRadius: '1px',
            width: `${progress}%`,
            transition: 'width 0.1s ease',
          }}
        />
      </div>

      {/* Arabic loading text */}
      <div
        style={{
          color: 'rgba(245,237,214,0.3)',
          fontSize: '0.75rem',
          marginTop: '1rem',
          letterSpacing: '0.1em',
          animation: 'fadeIn 0.5s ease 1s forwards',
          opacity: 0,
        }}
      >
        جاري التحميل...
      </div>
    </div>
  );
};

export default LoadingScreen;
