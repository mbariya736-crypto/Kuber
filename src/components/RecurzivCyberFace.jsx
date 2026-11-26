import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * RecurzivCyberFace
 * 
 * Frameless, Open 3D WebGL Wireframe Cyber Face (matching recurziv.com DAINA):
 * - NO dark card box, NO hard frame borders (100% frameless open stage)
 * - High-contrast electric blue & cyan wireframe with crystalline depth
 * - Exact socket-aligned dual glowing hexagonal cyber eyes with live rotation & pulse
 * - Ambient floating neural particles
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
    renderer.setClearColor(0x000000, 0); // 100% transparent frameless stage
    mount.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x0866e8, 1.2);
    dirLight.position.set(4, 6, 8);
    scene.add(dirLight);

    const cyanPointLight = new THREE.PointLight(0x00d2ff, 1.5, 50);
    cyanPointLight.position.set(-5, -2, 10);
    scene.add(cyanPointLight);

    // Group for head transformations and parallax
    const headGroup = new THREE.Group();
    scene.add(headGroup);

    // 3. Ambient Cyber Particle Field (Floating Neural Dust)
    const particleCount = 240;
    const particleGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(particleCount * 3);
    const pColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x0866e8);
    const color2 = new THREE.Color(0x00b4d8);
    const color3 = new THREE.Color(0x4f46e5);

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
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.NormalBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Glowing Cyber Eyes (Hexagonal outer iris + rotating inner ring + bright core)
    const eyeGroup = new THREE.Group();
    const eyeOuterGeo = new THREE.RingGeometry(0.55, 1.15, 6);
    const eyeInnerGeo = new THREE.RingGeometry(0.25, 0.48, 6);
    const pupilGeo = new THREE.CircleGeometry(0.36, 12);

    const eyeMat = new THREE.MeshBasicMaterial({
      color: 0x00b4d8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95
    });
    const innerEyeMat = new THREE.MeshBasicMaterial({
      color: 0x0866e8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.92
    });
    const pupilMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
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
          // Primary High-Contrast Electric Blue Wireframe (visible on white and dark)
          child.material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(0x0866e8),
            wireframe: true,
            transparent: true,
            opacity: 0.88
          });

          // Subtle crystalline holographic inner fill for 3D depth
          const innerGeo = child.geometry.clone();
          const innerMat = new THREE.MeshPhongMaterial({
            color: 0x93c5fd,
            emissive: 0x3b82f6,
            shininess: 45,
            transparent: true,
            opacity: 0.16,
            side: THREE.FrontSide
          });
          const innerMesh = new THREE.Mesh(innerGeo, innerMat);
          innerMesh.scale.set(0.994, 0.994, 0.994);
          child.parent.add(innerMesh);
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
      const eyePulse = 0.8 + Math.sin(elapsed * 3.2) * 0.2;
      eyeMat.opacity = eyePulse;
      innerEyeMat.opacity = eyePulse;
      pupilMat.opacity = 0.88 + Math.sin(elapsed * 3.2) * 0.12;
      leftEye.rotation.z = elapsed * 0.4;
      rightEye.rotation.z = -elapsed * 0.4;
      leftInnerEye.rotation.z = -elapsed * 0.6;
      rightInnerEye.rotation.z = elapsed * 0.6;

      // Slowly rotate background particle cosmos
      particles.rotation.y = elapsed * 0.035;
      particles.rotation.x = elapsed * 0.015;

      // Dynamic iridescent cyan to royal blue wireframe shift
      if (faceMesh && faceMesh.material) {
        const hue = 0.57 + Math.sin(elapsed * 0.35) * 0.04;
        faceMesh.material.color.setHSL(hue, 0.95, 0.48);
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
      className={`relative w-full max-w-[440px] h-[380px] sm:h-[430px] select-none flex items-center justify-center cursor-grab active:cursor-grabbing touch-none ${className}`}
      style={isBackground ? { width: '100%', height: '100%' } : { height }}
    >
      {/* 1. Soft Ambient Holographic Spatial Aura (100% Frameless & Open) */}
      <div className="absolute w-[300px] sm:w-[360px] h-[300px] sm:h-[360px] bg-gradient-to-tr from-blue-500/15 via-cyan-400/12 to-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 2. Delicate Concentric Holographic Orbital Projector Rings */}
      <div className="absolute w-[280px] sm:w-[330px] h-[280px] sm:h-[330px] rounded-full border border-dashed border-blue-400/25 pointer-events-none animate-spin" style={{ animationDuration: '32s' }} />
      <div className="absolute w-[210px] sm:w-[250px] h-[210px] sm:h-[250px] rounded-full border border-cyan-400/20 pointer-events-none" />

      {/* 3. 3D WebGL Canvas Container - Pure Frameless */}
      <div
        ref={mountRef}
        className={`w-full h-full relative z-10 flex items-center justify-center ${isBackground ? 'pointer-events-none' : 'cursor-grab active:cursor-grabbing'}`}
      />

      {/* 4. Subtle non-intrusive loading state indicator */}
      {loading && !isBackground && (
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-600">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
            <span className="font-semibold tracking-wider">3D NEURAL MESH LOADING...</span>
          </div>
        </div>
      )}
    </div>
  );
}
