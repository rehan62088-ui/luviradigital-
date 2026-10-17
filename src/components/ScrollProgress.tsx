import React, { useEffect, useState, useRef } from 'react';

export const ScrollProgress: React.FC = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      const progress = scrollHeight > 0 ? Math.min(Math.max(scrollTop / scrollHeight, 0), 1) : 0;

      // High-performance compositor transform update (zero layout thrashing)
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }

      setPercent(Math.round(progress * 100));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    
    // Initial calculation
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
      className="fixed top-0 left-0 right-0 z-50 h-[2.5px] bg-white/[0.03] pointer-events-none"
    >
      <div
        ref={progressBarRef}
        style={{
          transform: 'scaleX(0)',
          transformOrigin: '0% 50%'
        }}
        className="w-full h-full bg-gradient-to-r from-neutral-600 via-slate-200 to-white shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-transform duration-75 ease-out will-change-transform"
      />
    </div>
  );
};
