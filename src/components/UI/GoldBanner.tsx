import React from 'react';

interface GoldBannerProps {
  text?: string;
  dark?: boolean;
}

const GoldBanner: React.FC<GoldBannerProps> = ({
  text = 'طعم القهوة اللي يضبط المزاج',
  dark = false,
}) => {
  return (
    <div
      style={{
        background: dark
          ? 'linear-gradient(135deg, rgba(44,24,16,0.9), rgba(74,44,42,0.9))'
          : 'linear-gradient(135deg, #2C1810, #4A2C2A)',
        borderTop: '1px solid rgba(201,168,76,0.3)',
        borderBottom: '1px solid rgba(201,168,76,0.3)',
        padding: '1rem 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Sliding text marquee */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '3rem',
          whiteSpace: 'nowrap',
          animation: 'marqueeRTL 20s linear infinite',
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <React.Fragment key={i}>
            <span
              style={{
                color: '#E8C97A',
                fontFamily: 'Tajawal, sans-serif',
                fontWeight: '600',
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
              }}
            >
              {text}
            </span>
            <span style={{ color: '#C9A84C', fontSize: '1rem' }}>❖</span>
          </React.Fragment>
        ))}
        {/* Duplicate for seamless loop */}
        {Array.from({ length: 6 }).map((_, i) => (
          <React.Fragment key={`dup-${i}`}>
            <span
              style={{
                color: '#E8C97A',
                fontFamily: 'Tajawal, sans-serif',
                fontWeight: '600',
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
              }}
            >
              {text}
            </span>
            <span style={{ color: '#C9A84C', fontSize: '1rem' }}>❖</span>
          </React.Fragment>
        ))}
      </div>

      <style>{`
        @keyframes marqueeRTL {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default GoldBanner;
