import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * AiWireframeFace
 * 
 * Interactive 3D Cyber Polygonal AI Face Mesh matching the reference image:
 * - 3D anatomical wireframe mesh with interconnected polygonal facets
 * - Glowing vertex nodes & electric cyan line segments
 * - Glowing concentric cybernetic ocular iris optics
 * - Cosmic nebula & floating star particles in deep space
 * - Full 3D rotation & tilt tracking with mouse cursor and mobile touch gestures
 */
export default function AiWireframeFace({ className = '' }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let animId = null;
    let isDisposed = false;

    // Dimensions
    const width = container.clientWidth || 360;
    const height = container.clientHeight || 420;

    // Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.3);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    // Main 3D Head Group
    const headGroup = new THREE.Group();
    scene.add(headGroup);

    // =========================================================================
    // 1. GENERATE ANATOMICAL 3D HUMAN/AI FACE GEOMETRY
    // =========================================================================
    const baseGeo = new THREE.SphereGeometry(1.35, 38, 34);
    const pos = baseGeo.attributes.position;
    const v = new THREE.Vector3();

    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      let x = v.x;
      let y = v.y;
      let z = v.z;

      // Global proportions: elongated face, oblong in depth
      y *= 1.16;
      x *= 0.94;
      if (z > 0) {
        z *= 1.08; // Front face
      } else {
        z *= 1.15; // Back cranium
      }

      // Cranium crown tapering
      if (y > 0.6) {
        const taper = 1.0 - (y - 0.6) * 0.16;
        x *= taper;
        z *= taper;
      }

      // Forehead curvature
      if (y > 0.4 && y < 0.95 && z > 0) {
        z = Math.min(z, 1.18);
      }

      // Deep eye sockets indentation
      if (z > 0.25 && y > 0.1 && y < 0.38) {
        const dLeft = Math.hypot(x - 0.45, y - 0.22);
        const dRight = Math.hypot(x + 0.45, y - 0.22);
        const dEye = Math.min(dLeft, dRight);
        if (dEye < 0.32) {
          z -= (0.32 - dEye) * 0.46;
        }
      }

      // Brow ridge prominence
      if (z > 0.35 && y > 0.32 && y < 0.46) {
        const browDist = Math.abs(Math.abs(x) - 0.45);
        if (browDist < 0.35) {
          z += (0.35 - browDist) * 0.18;
        }
      }

      // Protruding Nose Bridge & Tip
      if (z > 0.2 && y > -0.35 && y < 0.25) {
        const xDist = Math.abs(x);
        if (xDist < 0.22) {
          const yNorm = (y - (-0.35)) / 0.6; // 0 to 1
          const bridgeHeight = Math.sin(yNorm * Math.PI) * 0.46;
          const xFalloff = 1 - xDist / 0.22;
          z += bridgeHeight * xFalloff;
        }
      }

      // High Cheekbones definition
      if (z > 0.1 && y > -0.12 && y < 0.24) {
        const cheekDist = Math.abs(Math.abs(x) - 0.68);
        if (cheekDist < 0.28) {
          z += (0.28 - cheekDist) * 0.2;
          x += Math.sign(x) * (0.28 - cheekDist) * 0.1;
        }
      }

      // Sculpted Lips & Mouth
      if (z > 0.3 && y > -0.62 && y < -0.32) {
        const mouthDistX = Math.abs(x);
        if (mouthDistX < 0.38) {
          const xFalloff = 1 - mouthDistX / 0.38;
          const lipCurve = Math.sin((y - (-0.62)) / 0.3 * Math.PI * 2);
          z += Math.max(0, lipCurve) * 0.16 * xFalloff;
        }
      }

      // Strong Chin Prominence
      if (z > 0 && y > -1.05 && y < -0.65) {
        const chinDistX = Math.abs(x);
        if (chinDistX < 0.32) {
          const xFalloff = 1 - chinDistX / 0.32;
          const yNorm = (y - (-1.05)) / 0.4;
          z += Math.sin(yNorm * Math.PI) * 0.35 * xFalloff;
        }
      }

      // Jawline Tapering
      if (y < 0.1) {
        const jawTaper = 0.58 + 0.42 * Math.max(0, (y + 1.2) / 1.3);
        x *= jawTaper;
      }

      // Neck transition
      if (y < -1.0) {
        x *= 0.85;
        z *= 0.85;
      }

      // Ear Contours
      if (Math.abs(x) > 0.8 && y > -0.15 && y < 0.28 && Math.abs(z) < 0.35) {
        x += Math.sign(x) * 0.16;
      }

      pos.setXYZ(i, x, y, z);
    }
    baseGeo.computeVertexNormals();

    // =========================================================================
    // 2. CYBER WIREFRAME LINES & GLOWING VERTICES
    // =========================================================================
    // Wireframe Mesh Lines
    const wireframeGeom = new THREE.WireframeGeometry(baseGeo);
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0x00E5FF,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const wireframeMesh = new THREE.LineSegments(wireframeGeom, wireframeMat);
    headGroup.add(wireframeMesh);

    // Glowing Node Dots at Vertices
    const createNodeTexture = () => {
      const c = document.createElement('canvas');
      c.width = 32;
      c.height = 32;
      const ctx = c.getContext('2d');
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, '#FFFFFF');
      grad.addColorStop(0.35, '#00F0FF');
      grad.addColorStop(0.75, '#0866E8');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
      return new THREE.CanvasTexture(c);
    };

    const nodeTexture = createNodeTexture();
    const pointsMat = new THREE.PointsMaterial({
      color: 0x38BDF8,
      size: 0.08,
      map: nodeTexture,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const pointsMesh = new THREE.Points(baseGeo, pointsMat);
    headGroup.add(pointsMesh);

    // =========================================================================
    // 3. GLOWING CYBERNETIC OCULAR IRIS OPTICS (MATCHING REFERENCE IMAGE)
    // =========================================================================
    const createCyberEye = (xPos) => {
      const eyeGroup = new THREE.Group();

      // Outer glowing ring
      const ringGeo = new THREE.RingGeometry(0.065, 0.088, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x00F0FF,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      eyeGroup.add(ringMesh);

      // 6 Hexagonal satellite ocular nodes
      const dotGeo = new THREE.CircleGeometry(0.016, 12);
      const dotMat = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending
      });
      for (let a = 0; a < 6; a++) {
        const angle = (a / 6) * Math.PI * 2;
        const dot = new THREE.Mesh(dotGeo, dotMat);
        dot.position.set(Math.cos(angle) * 0.076, Math.sin(angle) * 0.076, 0.005);
        eyeGroup.add(dot);
      }

      // Inner electric cyan pupil
      const pupilGeo = new THREE.CircleGeometry(0.045, 20);
      const pupilMat = new THREE.MeshBasicMaterial({
        color: 0x00FFFF,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending
      });
      const pupil = new THREE.Mesh(pupilGeo, pupilMat);
      pupil.position.z = 0.006;
      eyeGroup.add(pupil);

      // Intense white core
      const centerGeo = new THREE.CircleGeometry(0.02, 16);
      const centerMat = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        side: THREE.DoubleSide
      });
      const center = new THREE.Mesh(centerGeo, centerMat);
      center.position.z = 0.01;
      eyeGroup.add(center);

      eyeGroup.position.set(xPos, 0.22, 0.88);
      return eyeGroup;
    };

    const leftEye = createCyberEye(-0.45);
    const rightEye = createCyberEye(0.45);
    headGroup.add(leftEye);
    headGroup.add(rightEye);

    // =========================================================================
    // 4. FLOATING DEEP SPACE NEURAL DUST & STAR PARTICLES
    // =========================================================================
    const starCount = 200;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 7;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 7;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 4 - 0.5;

      const r = Math.random();
      if (r < 0.6) {
        // Cyan / Sky
        starColors[i * 3] = 0.0;
        starColors[i * 3 + 1] = 0.9;
        starColors[i * 3 + 2] = 1.0;
      } else {
        // Violet / Magenta nebula tone
        starColors[i * 3] = 0.7;
        starColors[i * 3 + 1] = 0.3;
        starColors[i * 3 + 2] = 0.95;
      }
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.045,
      map: nodeTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // =========================================================================
    // 5. INTERACTIVE CURSOR & TOUCH TRACKING (FULL 3D MOVEMENT)
    // =========================================================================
    let targetRotY = 0;
    let targetRotX = 0;
    let isInteracting = false;
    let idleTime = 0;

    const onPointerMove = (clientX, clientY) => {
      const rect = container.getBoundingClientRect();
      const normX = ((clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
      const normY = ((clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1

      // Full rotation bounds: ±65° horizontally, ±45° vertically
      targetRotY = normX * 1.15;
      targetRotX = normY * 0.78;
      isInteracting = true;
    };

    const handlePointerMove = (e) => {
      onPointerMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handlePointerEnd = () => {
      isInteracting = false;
    };

    // Attach listeners to container for optimal sensitivity
    container.addEventListener('pointermove', handlePointerMove, { passive: true });
    container.addEventListener('pointerdown', handlePointerMove, { passive: true });
    container.addEventListener('pointerup', handlePointerEnd, { passive: true });
    container.addEventListener('pointerleave', handlePointerEnd, { passive: true });

    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchstart', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handlePointerEnd, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container || isDisposed) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    };
    window.addEventListener('resize', handleResize);

    // =========================================================================
    // 6. RENDER LOOP WITH SPRING INTERPOLATION & ORGANIC BREATHING
    // =========================================================================
    const animate = () => {
      if (isDisposed) return;
      animId = requestAnimationFrame(animate);

      idleTime += 0.02;

      // Natural idle breathing and subtle autonomous head drift when untouched
      if (!isInteracting) {
        targetRotY = Math.sin(idleTime * 0.7) * 0.16;
        targetRotX = Math.cos(idleTime * 0.9) * 0.09;
      }

      // Smooth Spring / Lerp for responsive feel
      headGroup.rotation.y += (targetRotY - headGroup.rotation.y) * 0.085;
      headGroup.rotation.x += (targetRotX - headGroup.rotation.x) * 0.085;
      // Natural subtle lateral head tilt when turning
      headGroup.rotation.z += (-targetRotY * 0.14 - headGroup.rotation.z) * 0.085;

      // Organic hover floating
      headGroup.position.y = Math.sin(idleTime * 1.5) * 0.05;

      // Background Star Particles subtle rotation
      starField.rotation.y = idleTime * 0.02;
      starField.rotation.x = idleTime * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // =========================================================================
    // CLEANUP
    // =========================================================================
    return () => {
      isDisposed = true;
      if (animId) cancelAnimationFrame(animId);

      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerdown', handlePointerMove);
      container.removeEventListener('pointerup', handlePointerEnd);
      container.removeEventListener('pointerleave', handlePointerEnd);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchstart', handleTouchMove);
      container.removeEventListener('touchend', handlePointerEnd);

      baseGeo.dispose();
      wireframeGeom.dispose();
      wireframeMat.dispose();
      pointsMat.dispose();
      nodeTexture.dispose();
      starGeo.dispose();
      starMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-[390px] h-[390px] sm:h-[450px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#030717] via-[#05112B] to-[#120726] border border-cyan-500/35 shadow-[0_15px_45px_rgba(0,180,255,0.22)] select-none flex items-center justify-center cursor-grab active:cursor-grabbing touch-none ${className}`}
      style={{ touchAction: 'none' }}
    >
      {/* Deep Space Cosmic Nebula Glows matching reference image */}
      <div className="absolute top-0 -left-12 w-52 h-52 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-2 -right-12 w-60 h-60 bg-purple-600/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,240,255,0.12)_0%,_transparent_75%)] pointer-events-none" />

      {/* 3D WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block relative z-10"
      />

      {/* Futuristic Floating Interactive Hint */}
      <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-cyan-400/40 text-[11px] font-mono text-cyan-300 flex items-center gap-2 pointer-events-none z-20 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>3D AI Mesh &bull; Move &amp; Touch</span>
      </div>
    </div>
  );
}
