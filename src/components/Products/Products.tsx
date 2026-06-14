import React, { useEffect, useRef } from 'react';
import SectionTitle from '../UI/SectionTitle';
import ProductCard from './ProductCard';
import { products } from '../../data/content';

const Products: React.FC = () => {
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
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      style={{
        padding: '100px 0',
        background: 'linear-gradient(180deg, #2C1810 0%, #3D2317 60%, #2C1810 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Pattern overlay */}
      <div
        className="pattern-overlay"
        style={{ position: 'absolute', inset: 0, opacity: 0.2 }}
      />

      {/* Decorative elements */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)',
        }}
      />

      {/* Large decorative circles */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          right: '-150px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8" style={{ position: 'relative' }}>
        <div className="reveal">
          <SectionTitle
            subtitle="قائمتنا"
            title="منتجاتنا المختارة"
            description="اكتشف تشكيلتنا المتميزة من القهوة العربية والمختصة، محضرة بأفضل الحبوب وأيدي الخبراء"
            light
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="reveal text-center mt-12"
          style={{ transitionDelay: '0.6s' }}
        >
          <p style={{ color: 'rgba(245,237,214,0.7)', marginBottom: '1.5rem', fontSize: '1rem' }}>
            هل تريد معرفة المزيد عن منتجاتنا؟
          </p>
          <button
            className="btn-primary"
            onClick={() => {
              window.open(
                'https://wa.me/966556354954?text=مرحباً، أود الاستفسار عن منتجات بن المزاج',
                '_blank'
              );
            }}
          >
            📱 تواصل معنا عبر واتساب
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
