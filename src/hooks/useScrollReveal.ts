import { useEffect, useRef } from 'react';

type RevealClass = 'reveal' | 'reveal-left' | 'reveal-right' | 'reveal-scale';

export function useScrollReveal(className: RevealClass = 'reveal', delay?: number) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay) {
              setTimeout(() => {
                entry.target.classList.add('visible');
              }, delay);
            } else {
              entry.target.classList.add('visible');
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    element.classList.add(className);
    observer.observe(element);

    return () => observer.disconnect();
  }, [className, delay]);

  return ref;
}

export function useScrollRevealAll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
