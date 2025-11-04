import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => updateCursor(e));
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target;
      if (!target || !(target instanceof Element)) return;
      
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        (target as Element).closest('a') ||
        (target as Element).closest('button') ||
        (target as Element).closest('[role="button"]') ||
        (target as Element).closest('input') ||
        (target as Element).closest('textarea') ||
        (target as Element).closest('select');
      
      if (isInteractive) {
        cursor.classList.add('hover');
      }
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('hover');
    };

    const handleMouseDown = () => {
      cursor.classList.add('click');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('click');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return <div id="custom-cursor" aria-hidden="true" />;
}

