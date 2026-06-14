import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  nameEn: string;
  description: string;
  price: string;
  image: string;
  icon: string;
  tag: string;
  color: string;
}

interface ProductCardProps {
  product: Product;
  delay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="reveal-scale"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div
        className="card-hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: 'white',
          borderRadius: '24px',
          overflow: 'hidden',
          border: '1px solid rgba(201,168,76,0.15)',
          boxShadow: '0 8px 30px rgba(44,24,16,0.08)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
        }}
      >
        {/* Image container */}
        <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: isHovered ? 'scale(1.08)' : 'scale(1)',
              transition: 'transform 0.5s ease',
            }}
          />
          {/* Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(180deg, transparent 50%, rgba(44,24,16,0.7) 100%)`,
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          />

          {/* Tag */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
              color: '#2C1810',
              padding: '0.3rem 0.9rem',
              borderRadius: '50px',
              fontSize: '0.75rem',
              fontWeight: '700',
              boxShadow: '0 2px 8px rgba(201,168,76,0.4)',
            }}
          >
            {product.tag}
          </div>

          {/* Icon badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              background: 'rgba(44,24,16,0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: '0.5rem',
              fontSize: '1.5rem',
              lineHeight: '1',
              border: '1px solid rgba(201,168,76,0.2)',
            }}
          >
            {product.icon}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <div
              style={{
                fontSize: '0.7rem',
                color: '#C9A84C',
                letterSpacing: '0.1em',
                marginBottom: '0.25rem',
              }}
            >
              {product.nameEn}
            </div>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: '800',
                color: '#2C1810',
                lineHeight: '1.2',
              }}
            >
              {product.name}
            </h3>
          </div>

          <p
            style={{
              color: '#8B5E3C',
              fontSize: '0.85rem',
              lineHeight: '1.7',
              flex: 1,
              marginBottom: '1rem',
            }}
          >
            {product.description}
          </p>

          {/* Price & Button */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#8B5E3C', marginBottom: '0.1rem' }}>يبدأ من</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#C9A84C' }}>
                {product.price}
              </div>
            </div>
            <button
              style={{
                background: isHovered
                  ? 'linear-gradient(135deg, #C9A84C, #E8C97A)'
                  : 'transparent',
                border: '2px solid #C9A84C',
                color: isHovered ? '#2C1810' : '#C9A84C',
                padding: '0.5rem 1.25rem',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onClick={() => {
                window.open(
                  `https://wa.me/966556354954?text=مرحباً، أود طلب ${product.name}`,
                  '_blank'
                );
              }}
            >
              اطلب الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
