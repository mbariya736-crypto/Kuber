import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * RecurzivCyberFace
 * 
 * Exact real-time 3D WebGL Wireframe Cyber Face matching recurziv.com (DAINA):
 * - Real 3D polygon mesh loaded from /assets/v16.glb
 * - Iridescent electric cyan / neon blue wireframe mesh (MeshBasicMaterial wireframe)
 * - Exact socket-aligned dual glowing hexagonal cyber eyes with counter-rotating concentric rings
 * - Deep space cosmic starfield & floating neural dust particles
 * - Full page mouse & touch 3D parallax pitch / yaw tracking
 * - Autonomous breathing oscillation & eye luminescence pulsing
 */
export default function RecurzivCyberFace({ className = '', height = '420px', isBackground = false }) {
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
    const width = mount.clientWidth || 360;
    const heightPx = mount.clientHeight || 420;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(isBackground ? 40 : 38, width / heightPx, 0.1, 500);
    camera.position.set(0, 0, isBackground ? 72 : 65);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x00f0ff, 0.8);
    dirLight.position.set(3, 6, 5);
    scene.add(dirLight);

    // Group for head transformations and parallax
    const headGroup = new THREE.Group();
    scene.add(headGroup);

    // 3. Ambient Cyber Particle Field (Floating Neural Dust)
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(particleCount * 3);
    const pColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00f0ff);
    const color2 = new THREE.Color(0x38bdf8);
    const color3 = new THREE.Color(0xa855f7);

    for (let i = 0; i < particleCount; i++) {
      pPositions[i * 3] = (Math.random() - 0.5) * 80;
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * 70;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 40 - 5;

      const pick = Math.random();
      const c = pick < 0.45 ? color1 : pick < 0.75 ? color2 : color3;
      pColors[i * 3] = c.r;
      pColors[i * 3 + 1] = c.g;
      pColors[i * 3 + 2] = c.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.45,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Glowing Cyber Eyes (Hexagonal outer iris + rotating inner ring + bright core)
    const eyeGroup = new THREE.Group();
    const eyeOuterGeo = new THREE.RingGeometry(0.55, 1.15, 6);
    const eyeInnerGeo = new THREE.RingGeometry(0.25, 0.48, 6);
    const pupilGeo = new THREE.CircleGeometry(0.36, 12);

    const eyeMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95
    });
    const innerEyeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9
    });
    const pupilMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.98
    });

    const leftEye = new THREE.Mesh(eyeOuterGeo, eyeMat);
    const rightEye = new THREE.Mesh(eyeOuterGeo, eyeMat);
    const leftInnerEye = new THREE.Mesh(eyeInnerGeo, innerEyeMat);
    const rightInnerEye = new THREE.Mesh(eyeInnerGeo, innerEyeMat);
    const leftPupil = new THREE.Mesh(pupilGeo, pupilMat);
    const rightPupil = new THREE.Mesh(pupilGeo, pupilMat);

    // Socket-aligned coordinates in centered model space
    leftEye.position.set(-2.95, -0.80, 3.42);
    rightEye.position.set(2.95, -0.80, 3.42);
    leftInnerEye.position.set(-2.95, -0.80, 3.44);
    rightInnerEye.position.set(2.95, -0.80, 3.44);
    leftPupil.position.set(-2.95, -0.80, 3.46);
    rightPupil.position.set(2.95, -0.80, 3.46);

    eyeGroup.add(leftEye, rightEye, leftInnerEye, rightInnerEye, leftPupil, rightPupil);
    headGroup.add(eyeGroup);

    // 5. Load Recurziv 3D Head GLB
    const loader = new GLTFLoader();
    let faceMesh = null;

    const setupModel = (gltf) => {
      gltf.scene.updateMatrixWorld(true);

      // Compute exact bounding box of the whole scene
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const size = new THREE.Vector3();
      box.getSize(size);
      const center = new THREE.Vector3();
      box.getCenter(center);

      // Center the head geometry around origin (matching recurziv)
      gltf.scene.position.set(-center.x, -center.y - 0.5, -center.z);

      // Configure clean electric wireframe on the face mesh
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          faceMesh = child;
          child.frustumCulled = false;
          child.material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(0x00f0ff),
            wireframe: true,
            transparent: true,
            opacity: 0.8
          });
        }
      });

      headGroup.add(gltf.scene);

      // Exact mathematical camera distance to frame the head perfectly inside viewport
      const maxDim = Math.max(size.x, size.y, size.z) || 33.5;
      const fovRad = camera.fov * (Math.PI / 180);
      const targetDist = (maxDim / 2 / Math.tan(fovRad / 2)) * (isBackground ? 1.55 : 1.35);
      camera.position.set(0, 0, targetDist);

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
      const w = mount.clientWidth || 360;
      const h = mount.clientHeight || 420;
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
      headGroup.position.y = Math.sin(elapsed * 1.2) * 1.0;

      // Pulse cyber eyes (luminescence & dual concentric hexagon rotation)
      const eyePulse = 0.78 + Math.sin(elapsed * 3.2) * 0.22;
      eyeMat.opacity = eyePulse;
      innerEyeMat.opacity = eyePulse;
      pupilMat.opacity = 0.85 + Math.sin(elapsed * 3.2) * 0.15;
      leftEye.rotation.z = elapsed * 0.4;
      rightEye.rotation.z = -elapsed * 0.4;
      leftInnerEye.rotation.z = -elapsed * 0.6;
      rightInnerEye.rotation.z = elapsed * 0.6;

      // Slowly rotate background particle cosmos
      particles.rotation.y = elapsed * 0.035;
      particles.rotation.x = elapsed * 0.015;

      // Iridescent cyan/blue color shift (pure recurziv style)
      if (faceMesh && faceMesh.material) {
        const hue = 0.52 + Math.sin(elapsed * 0.35) * 0.06;
        faceMesh.material.color.setHSL(hue, 1, 0.55);
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
      eyeOuterGeo.dispose();
      eyeInnerGeo.dispose();
      eyeMat.dispose();
      innerEyeMat.dispose();
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
      className={`relative w-full ${isBackground ? 'h-full' : 'max-w-[440px] h-[400px] sm:h-[450px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#030718] via-[#060c24] to-[#020512] border border-cyan-500/30 shadow-[0_20px_50px_rgba(6,182,212,0.2)]'} select-none flex items-center justify-center cursor-grab active:cursor-grabbing touch-none ${className}`}
      style={isBackground ? { width: '100%', height: '100%' } : { height: '100%', minHeight: '380px' }}
    >
      {/* Deep cosmic nebula glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(6,182,212,0.18),transparent_65%)] pointer-events-none -z-10" />
      <div className="absolute -top-12 -right-12 w-56 h-56 bg-purple-600/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        className={`w-full h-full relative z-10 flex items-center justify-center ${isBackground ? 'pointer-events-none' : 'cursor-grab active:cursor-grabbing'}`}
      />

      {/* Subtle bottom cyber status pill (pure recurziv DAINA style) */}
      {!isBackground && (
        <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#030a1c]/80 backdrop-blur-md border border-cyan-500/30 shadow-md pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-cyan-300">
            DAINA &bull; 3D Neural Face
          </span>
        </div>
      )}

      {/* Subtle non-intrusive loading state indicator */}
      {loading && !isBackground && (
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-semibold tracking-wider">3D NEURAL MESH LOADING...</span>
          </div>
        </div>
      )}
    </div>
  );
}
