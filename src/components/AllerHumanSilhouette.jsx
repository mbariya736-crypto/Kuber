import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { createSilhouette, parseMesh } from './allerSilhouette';

/**
 * AllerHumanSilhouette
 * 
 * Exact Aller Studio (allerstudio.com) 3D human particle silhouette:
 * - 3D wireframe point cloud / particle bust
 * - Golden-yellow & lime particles dispersing outward to the right
 * - Interactive pointer tracking: head subtly tracks cursor, mouse repels particles
 * - Glitch & dynamic breathing animation
 * - Graceful fallback to static high-res still on low-power devices
 */
export default function AllerHumanSilhouette({ className = '' }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [status, setStatus] = useState('loading'); // 'loading' | 'ready' | 'still'

  useEffect(() => {
    let disposed = false;
    let controller = null;
    let cleanup = () => {};

    const isCoarse = window.matchMedia('(max-width: 640px)').matches;

    (async () => {
      try {
        const response = await fetch('/assets/silhouette.bin');
        if (!response.ok) throw new Error(`Mesh fetch failed: ${response.status}`);
        const buffer = await response.arrayBuffer();

        if (disposed || !canvasRef.current) return;

        const meshData = parseMesh(buffer);

        const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        controller = createSilhouette(THREE, canvasRef.current, meshData, {
          reduced: isReduced,
          light: isCoarse,
          appear: true,
          glitch: false,
          onGlitch: () => {}
        });

        // Trigger entrance appearance
        controller.appear();

        // Control render loop based on element visibility & page focus
        let isIntersecting = true;
        const updateRunning = () => {
          if (controller) {
            controller.setRunning(isIntersecting && !document.hidden);
          }
        };

        const observer = new IntersectionObserver(([entry]) => {
          isIntersecting = entry.isIntersecting;
          updateRunning();
        });

        if (containerRef.current) {
          observer.observe(containerRef.current);
        }

        document.addEventListener('visibilitychange', updateRunning);
        updateRunning();
        setStatus('ready');

        cleanup = () => {
          observer.disconnect();
          document.removeEventListener('visibilitychange', updateRunning);
          if (controller) {
            controller.dispose();
          }
        };
      } catch (err) {
        console.warn('Could not initialize 3D human silhouette, falling back to still:', err);
        if (!disposed) {
          setStatus('still');
        }
      }
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative select-none pointer-events-none overflow-visible ${className}`}
      aria-hidden="true"
    >
      {/* 3D WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-contain pointer-events-auto transition-opacity duration-1000 ease-out ${
          status === 'ready' ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Fallback Still Image for devices or while loading */}
      {(status === 'still' || status === 'loading') && (
        <img
          src="/assets/silhouette-still.webp"
          alt=""
          decoding="async"
          className={`absolute inset-0 w-full h-full object-contain object-right pointer-events-none transition-opacity duration-700 ${
            status === 'ready' ? 'opacity-0' : 'opacity-90'
          }`}
        />
      )}
    </div>
  );
}
