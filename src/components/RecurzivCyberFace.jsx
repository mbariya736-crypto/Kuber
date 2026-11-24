import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * RecurzivCyberFace
 * 
 * 3D Neural Cyber Face Animation inspired by recurziv.com:
 * - Real-time WebGL 3D head wireframe (`/assets/v16.glb`)
 * - Cyan & neon-blue iridescent glowing vertices and edge lines
 * - Hexagonal glowing cyber eyes with continuous energetic pulse
 * - Ambient floating spatial cyber particles / neural nodes
 * - Smooth interactive pointer parallax (face follows cursor angle)
 * - Auto breathing / oscillating subtle idle motion
 * - Safe resource cleanup & performance observer (runs only when visible)
 */
export default function RecurzivCyberFace({ className = '', height = '460px', isBackground = false }) {
  const mountRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let isDisposed = false;
    let animFrameId = null;

    // 1. Scene, Camera, Renderer
    const width = container.clientWidth || (isBackground ? window.innerWidth : 400);
    const heightPx = container.clientHeight || (isBackground ? window.innerHeight : 460);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(isBackground ? 42 : 40, width / heightPx, 0.1, 100);
    // Move camera back when in background mode so the entire face, crown, jaw, and ears fit perfectly in the viewport
    camera.position.set(0, isBackground ? 0.05 : 0.1, isBackground ? 7.2 : 4.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0x0866e8, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00ffff, 2.5, 10);
    pointLight.position.set(0, 1.2, 2.5);
    scene.add(pointLight);

    const blueBackLight = new THREE.PointLight(0x4338ca, 3, 10);
    blueBackLight.position.set(-2, -1, -2);
    scene.add(blueBackLight);

    // Group for head transformations and parallax
    const headGroup = new THREE.Group();
    scene.add(headGroup);

    // 3. Ambient Cyber Particle Field (Floating Neural Dust)
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(particleCount * 3);
    const pColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00ffff);
    const color2 = new THREE.Color(0x0866e8);
    const color3 = new THREE.Color(0x6366f1);

    for (let i = 0; i < particleCount; i++) {
      pPositions[i * 3] = (Math.random() - 0.5) * 8;
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * 7;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 4 - 0.5;

      const pick = Math.random();
      const c = pick < 0.4 ? color1 : pick < 0.8 ? color2 : color3;
      pColors[i * 3] = c.r;
      pColors[i * 3 + 1] = c.g;
      pColors[i * 3 + 2] = c.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Glowing Cyber Eyes
    const eyeGroup = new THREE.Group();
    const eyeGeo = new THREE.RingGeometry(0.04, 0.085, 6); // Hexagonal cyber iris
    const eyeMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95
    });

    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.24, 0.16, 0.62);
    rightEye.position.set(0.24, 0.16, 0.62);

    // Subtle inner glowing pupil core
    const pupilGeo = new THREE.CircleGeometry(0.035, 12);
    const pupilMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9
    });
    const leftPupil = new THREE.Mesh(pupilGeo, pupilMat);
    const rightPupil = new THREE.Mesh(pupilGeo, pupilMat);
    leftPupil.position.set(-0.24, 0.16, 0.63);
    rightPupil.position.set(0.24, 0.16, 0.63);

    eyeGroup.add(leftEye, rightEye, leftPupil, rightPupil);
    headGroup.add(eyeGroup);

    // 5. Load Recurziv 3D Head GLB
    const loader = new GLTFLoader();
    let faceMesh = null;
    let wireframeMesh = null;
    let pointsMesh = null;

    loader.load(
      '/assets/v16.glb',
      (gltf) => {
        if (isDisposed) return;

        gltf.scene.traverse((child) => {
          if (child.isMesh && !faceMesh) {
            faceMesh = child;
          }
        });

        if (faceMesh) {
          const geometry = faceMesh.geometry.clone();
          geometry.center();

          // Scale & position head nicely (compact scale in background mode so the full face is visible without zooming)
          const scale = isBackground ? 1.45 : 2.1;
          headGroup.scale.set(scale, scale, scale);
          headGroup.position.set(0, isBackground ? -0.1 : -0.05, 0);

          // 5a. Cyber Wireframe Layer (Cyan / Electric Blue lines)
          const wireframeMat = new THREE.MeshBasicMaterial({
            color: 0x0ea5e9,
            wireframe: true,
            transparent: true,
            opacity: 0.65,
            blending: THREE.AdditiveBlending
          });
          wireframeMesh = new THREE.Mesh(geometry, wireframeMat);
          headGroup.add(wireframeMesh);

          // 5b. Glowing Nodes on Vertices (Neural Dots)
          const pMat = new THREE.PointsMaterial({
            color: 0x38bdf8,
            size: 0.022,
            transparent: true,
            opacity: 0.85,
            blending: THREE.AdditiveBlending
          });
          pointsMesh = new THREE.Points(geometry, pMat);
          headGroup.add(pointsMesh);

          // 5c. Inner subtle translucent depth volume
          const innerMat = new THREE.MeshPhongMaterial({
            color: 0x03122b,
            emissive: 0x052147,
            transparent: true,
            opacity: 0.55,
            shininess: 40
          });
          const innerMesh = new THREE.Mesh(geometry, innerMat);
          innerMesh.scale.set(0.99, 0.99, 0.99);
          headGroup.add(innerMesh);
        }

        setLoading(false);
      },
      undefined,
      (err) => {
        console.warn('Could not load v16.glb from /assets/v16.glb:', err);
        setLoading(false);
      }
    );

    // 6. Interactive Mouse Parallax
    let targetRotY = 0;
    let targetRotX = 0;
    let currentRotY = 0;
    let currentRotX = 0;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.45;
      targetRotX = -y * 0.25;
    };

    const handlePointerLeave = () => {
      targetRotY = 0;
      targetRotX = 0;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    container.addEventListener('pointerleave', handlePointerLeave);

    // 7. Resize Observer
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth || 400;
      const h = container.clientHeight || 460;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 8. Animation Render Loop
    let clock = new THREE.Clock();
    let isIntersecting = true;

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
    });
    intersectionObserver.observe(container);

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);

      if (!isIntersecting || document.hidden) return;

      const elapsed = clock.getElapsedTime();

      // Smooth damped head parallax rotation
      currentRotY += (targetRotY - currentRotY) * 0.055;
      currentRotX += (targetRotX - currentRotX) * 0.055;

      // Subtle autonomous breathing / floating oscillation
      const breath = Math.sin(elapsed * 1.5) * 0.035;
      const idleYaw = Math.cos(elapsed * 0.8) * 0.045;

      headGroup.rotation.y = currentRotY + idleYaw;
      headGroup.rotation.x = currentRotX + breath;
      headGroup.position.y = Math.sin(elapsed * 1.2) * 0.05;

      // Pulse cyber eyes (breathing luminescence & hexagon rotation)
      const eyePulse = 0.75 + Math.sin(elapsed * 3.2) * 0.25;
      eyeMat.opacity = eyePulse;
      pupilMat.opacity = 0.7 + Math.sin(elapsed * 3.2) * 0.3;
      leftEye.rotation.z = elapsed * 0.5;
      rightEye.rotation.z = -elapsed * 0.5;

      // Slowly rotate background particle cosmos
      particles.rotation.y = elapsed * 0.035;
      particles.rotation.x = elapsed * 0.015;

      // Wireframe iridescent color shift
      if (wireframeMesh) {
        const hue = 0.55 + Math.sin(elapsed * 0.4) * 0.08; // Oscillates between cyan and electric deep blue
        wireframeMesh.material.color.setHSL(hue, 0.95, 0.55);
      }

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup
    return () => {
      isDisposed = true;
      if (animFrameId) cancelAnimationFrame(animFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      eyeGeo.dispose();
      eyeMat.dispose();
      pupilGeo.dispose();
      pupilMat.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      className={`relative w-full overflow-hidden select-none flex items-center justify-center ${className}`}
      style={isBackground ? { width: '100%', height: '100%' } : { height }}
    >
      {/* 3D WebGL Canvas Container */}
      <div ref={mountRef} className={`w-full h-full relative z-10 ${isBackground ? 'pointer-events-none' : 'cursor-grab active:cursor-grabbing'}`} />

      {/* Cyber Grid Datum Accents & HUD overlays (only when in standalone card mode) */}
      {!isBackground && (
        <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-4 sm:p-6">
          <div className="flex items-center justify-between text-[10px] font-mono tracking-wider text-cyan-600/80 uppercase">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyan-950/20 border border-cyan-800/30">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              AI_VISION // NEURAL_DEFENSE
            </span>
            <span className="hidden sm:inline font-mono text-[9px] text-cyan-600/60">
              FPS // 60 // 3D_VIS
            </span>
          </div>

          <div className="flex items-end justify-between text-[10px] font-mono tracking-wider text-cyan-600/80 uppercase">
            <span className="text-[9px] text-slate-500">
              INTERACTIVE // MOVE CURSOR
            </span>
            <span className="px-2 py-0.5 rounded bg-blue-950/20 border border-blue-800/30 text-blue-500 text-[9px]">
              SYNAPSE_GRID ACTIVE
            </span>
          </div>
        </div>
      )}

      {/* Loading state indicator */}
      {loading && !isBackground && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-slate-900/10 backdrop-blur-2xs">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
            <span>SYNCHRONIZING 3D NEURAL MESH...</span>
          </div>
        </div>
      )}
    </div>
  );
}
