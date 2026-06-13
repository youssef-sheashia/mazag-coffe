import React from 'react';

const GoldDivider: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4))' }} />
      <div className="flex items-center gap-2">
        <span style={{ color: '#C9A84C', fontSize: '0.5rem' }}>◆</span>
        <span style={{ color: '#C9A84C', fontSize: '1rem' }}>❖</span>
        <span style={{ color: '#C9A84C', fontSize: '0.5rem' }}>◆</span>
      </div>
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }} />
    </div>
  );
};

export default GoldDivider;
