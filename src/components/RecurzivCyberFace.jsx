import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * RecurzivCyberFace
 * 
 * Real-time 3D WebGL Wireframe Cyber Face inspired by recurziv.com (DAINA):
 * - Real 3D polygon mesh loaded from /assets/v16.glb
 * - Electric cyan & neon blue wireframe edges + glowing vertex neural nodes
 * - Hexagonal glowing cyber eyes with continuous luminous energetic pulse
 * - Deep space cosmic nebula & floating 3D neural dust particle field
 * - Full page cursor & mobile touch drag 3D perspective rotation
 * - Subtle autonomous breathing / viseme floating oscillation
 */
export default function RecurzivCyberFace({ className = '', height = '450px', isBackground = false }) {
  const mountRef = useRef(null);
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mount = mountRef.current;
    const container = containerRef.current || mount;
    if (!mount) return;

    let isDisposed = false;
    let animFrameId = null;

    // 1. Scene, Camera, Renderer
    const width = mount.clientWidth || 380;
    const heightPx = mount.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(isBackground ? 42 : 38, width / heightPx, 0.1, 100);
    camera.position.set(0, isBackground ? 0.05 : 0.04, isBackground ? 7.2 : 3.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent to show cosmic nebula background
    mount.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0x0866e8, 1.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00ffff, 3.0, 12);
    pointLight.position.set(0, 1.2, 2.5);
    scene.add(pointLight);

    const purpleBackLight = new THREE.PointLight(0xa855f7, 3.5, 12);
    purpleBackLight.position.set(2, 0.5, -1.5);
    scene.add(purpleBackLight);

    const blueBackLight = new THREE.PointLight(0x3b82f6, 3, 10);
    blueBackLight.position.set(-2, -1, -2);
    scene.add(blueBackLight);

    // Group for head transformations and parallax
    const headGroup = new THREE.Group();
    scene.add(headGroup);

    // 3. Ambient Cyber Particle Field (Floating Neural Dust)
    const particleCount = 480;
    const particleGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(particleCount * 3);
    const pColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00ffff);
    const color2 = new THREE.Color(0x38bdf8);
    const color3 = new THREE.Color(0xa855f7);

    for (let i = 0; i < particleCount; i++) {
      pPositions[i * 3] = (Math.random() - 0.5) * 8.5;
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * 7.5;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 4.5 - 0.5;

      const pick = Math.random();
      const c = pick < 0.45 ? color1 : pick < 0.75 ? color2 : color3;
      pColors[i * 3] = c.r;
      pColors[i * 3 + 1] = c.g;
      pColors[i * 3 + 2] = c.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.038,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Glowing Cyber Eyes (Hexagonal iris + bright pupil core)
    const eyeGroup = new THREE.Group();
    const eyeGeo = new THREE.RingGeometry(0.04, 0.088, 6);
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

    const pupilGeo = new THREE.CircleGeometry(0.035, 12);
    const pupilMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95
    });
    const leftPupil = new THREE.Mesh(pupilGeo, pupilMat);
    const rightPupil = new THREE.Mesh(pupilGeo, pupilMat);
    leftPupil.position.set(-0.24, 0.16, 0.63);
    rightPupil.position.set(0.24, 0.16, 0.63);

    eyeGroup.add(leftEye, rightEye, leftPupil, rightPupil);
    headGroup.add(eyeGroup);

    // 5. Load Recurziv 3D Head GLB
    const loader = new GLTFLoader();
    let wireframeMesh = null;
    let pointsMesh = null;

    const setupModel = (gltf) => {
      let faceMesh = null;
      gltf.scene.traverse((child) => {
        if (child.isMesh && !faceMesh) {
          faceMesh = child;
        }
      });

      if (faceMesh) {
        const geometry = faceMesh.geometry.clone();
        geometry.center();

        const scale = isBackground ? 1.45 : 2.45;
        headGroup.scale.set(scale, scale, scale);
        headGroup.position.set(0, isBackground ? -0.1 : -0.04, 0);

        // 5a. Cyber Wireframe Layer (Cyan / Electric Blue lines)
        const wireframeMat = new THREE.MeshBasicMaterial({
          color: 0x00e5ff,
          wireframe: true,
          transparent: true,
          opacity: 0.72,
          blending: THREE.AdditiveBlending
        });
        wireframeMesh = new THREE.Mesh(geometry, wireframeMat);
        headGroup.add(wireframeMesh);

        // 5b. Glowing Nodes on Vertices (Neural Dots)
        const pMat = new THREE.PointsMaterial({
          color: 0x38bdf8,
          size: 0.024,
          transparent: true,
          opacity: 0.9,
          blending: THREE.AdditiveBlending
        });
        pointsMesh = new THREE.Points(geometry, pMat);
        headGroup.add(pointsMesh);

        // 5c. Inner subtle translucent depth volume
        const innerMat = new THREE.MeshPhongMaterial({
          color: 0x03122b,
          emissive: 0x061e47,
          transparent: true,
          opacity: 0.55,
          shininess: 45
        });
        const innerMesh = new THREE.Mesh(geometry, innerMat);
        innerMesh.scale.set(0.99, 0.99, 0.99);
        headGroup.add(innerMesh);
      }

      setLoading(false);
    };

    // Try primary path then fallback path
    loader.load(
      '/assets/v16.glb',
      (gltf) => {
        if (!isDisposed) setupModel(gltf);
      },
      undefined,
      () => {
        loader.load(
          '/v16.glb',
          (gltf) => {
            if (!isDisposed) setupModel(gltf);
          },
          undefined,
          (err) => {
            console.warn('Could not load v16.glb:', err);
            setLoading(false);
          }
        );
      }
    );

    // 6. Interactive Mouse & Touch Parallax across Page
    let targetRotY = 0;
    let targetRotX = 0;
    let currentRotY = 0;
    let currentRotX = 0;

    const handlePointerMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / (window.innerWidth * 0.45);
      const y = (e.clientY - centerY) / (window.innerHeight * 0.45);
      targetRotY = Math.max(-0.65, Math.min(0.65, x * 0.65));
      targetRotX = Math.max(-0.45, Math.min(0.45, -y * 0.4));
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        const rect = mount.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const x = (touch.clientX - centerX) / (rect.width * 0.5);
        const y = (touch.clientY - centerY) / (rect.height * 0.5);
        targetRotY = Math.max(-0.65, Math.min(0.65, x * 0.65));
        targetRotX = Math.max(-0.45, Math.min(0.45, -y * 0.4));
      }
    };

    const handleReset = () => {
      targetRotY = 0;
      targetRotX = 0;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    if (container) {
      container.addEventListener('pointerleave', handleReset);
      container.addEventListener('touchend', handleReset);
    }

    // 7. Resize Observer
    const handleResize = () => {
      if (!mount || !renderer || !camera) return;
      const w = mount.clientWidth || 380;
      const h = mount.clientHeight || 450;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mount);

    // 8. Animation Render Loop
    let clock = new THREE.Clock();
    let isIntersecting = true;

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
    });
    intersectionObserver.observe(mount);

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);

      if (!isIntersecting || document.hidden) return;

      const elapsed = clock.getElapsedTime();

      // Smooth damped head parallax rotation
      currentRotY += (targetRotY - currentRotY) * 0.06;
      currentRotX += (targetRotX - currentRotX) * 0.06;

      // Subtle autonomous breathing / floating oscillation
      const breath = Math.sin(elapsed * 1.5) * 0.035;
      const idleYaw = Math.cos(elapsed * 0.8) * 0.045;

      headGroup.rotation.y = currentRotY + idleYaw;
      headGroup.rotation.x = currentRotX + breath;
      headGroup.position.y = Math.sin(elapsed * 1.2) * 0.05;

      // Pulse cyber eyes (luminescence & hexagon rotation)
      const eyePulse = 0.75 + Math.sin(elapsed * 3.2) * 0.25;
      eyeMat.opacity = eyePulse;
      pupilMat.opacity = 0.75 + Math.sin(elapsed * 3.2) * 0.25;
      leftEye.rotation.z = elapsed * 0.5;
      rightEye.rotation.z = -elapsed * 0.5;

      // Slowly rotate background particle cosmos
      particles.rotation.y = elapsed * 0.035;
      particles.rotation.x = elapsed * 0.015;

      // Wireframe iridescent cyan/blue subtle shimmer
      if (wireframeMesh) {
        const hue = 0.54 + Math.sin(elapsed * 0.4) * 0.05;
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
      window.removeEventListener('touchmove', handleTouchMove);
      if (container) {
        container.removeEventListener('pointerleave', handleReset);
        container.removeEventListener('touchend', handleReset);
      }
      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      eyeGeo.dispose();
      eyeMat.dispose();
      pupilGeo.dispose();
      pupilMat.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [isBackground]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full select-none flex items-center justify-center ${className}`}
      style={isBackground ? { width: '100%', height: '100%' } : { height }}
    >
      {/* Soft ambient spatial aura behind the 3D face (pure open stage) */}
      <div className="absolute w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 3D WebGL Canvas Container - Frameless & Open */}
      <div
        ref={mountRef}
        className={`w-full h-full relative z-10 flex items-center justify-center ${isBackground ? 'pointer-events-none' : 'cursor-grab active:cursor-grabbing'}`}
      />

      {/* Subtle non-intrusive loading state indicator */}
      {loading && !isBackground && (
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-semibold tracking-wider">3D NEURAL MESH LOADING...</span>
          </div>
        </div>
      )}
    </div>
  );
}
