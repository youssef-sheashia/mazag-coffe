import React from 'react';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
  light = false,
  center = true,
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-right'}`}>
      {subtitle && (
        <span
          className="inline-block text-sm font-semibold tracking-widest uppercase mb-3"
          style={{ color: '#C9A84C', letterSpacing: '0.2em' }}
        >
          ✦ {subtitle} ✦
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight`}
        style={{ color: light ? '#F5EDD6' : '#2C1810' }}
      >
        {title}
      </h2>
      {/* Gold ornament line */}
      <div className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}>
        <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
        <span style={{ color: '#C9A84C', fontSize: '1.2rem' }}>❖</span>
        <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
      </div>
      {description && (
        <p
          className="text-base md:text-lg max-w-2xl leading-relaxed"
          style={{
            color: light ? 'rgba(245,237,214,0.8)' : '#6B3A2A',
            margin: center ? '0 auto' : '0',
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
