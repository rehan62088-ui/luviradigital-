import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene setup with studio depth
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050507, 0.04);

    const camera = new THREE.PerspectiveCamera(
      38,
      container.clientWidth / container.clientHeight,
      0.1,
      60
    );
    // Positioned for an oversized luxury product presentation
    camera.position.set(0, 0.1, 5.6);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;
      container.appendChild(renderer.domElement);
    } catch {
      setHasWebGL(false);
      return;
    }

    // 2. High-Fidelity Studio Environment for Black Chrome & Silver Reflections
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const roomEnv = new RoomEnvironment();
    scene.environment = pmremGenerator.fromScene(roomEnv, 0.04).texture;
    pmremGenerator.dispose();

    // 3. Monochromatic Studio Lighting Rig (Neutral White, Chrome Speculars, Gunmetal Fill)
    const ambientLight = new THREE.AmbientLight(0x0b0d12, 1.8);
    scene.add(ambientLight);

    // Primary Studio Key Softbox (Top-right high angle)
    const keySoftbox = new THREE.DirectionalLight(0xffffff, 4.2);
    keySoftbox.position.set(4.5, 6, 3.5);
    keySoftbox.castShadow = true;
    keySoftbox.shadow.mapSize.width = 1024;
    keySoftbox.shadow.mapSize.height = 1024;
    keySoftbox.shadow.bias = -0.0001;
    scene.add(keySoftbox);

    // Linear Grazing Rim Light (Casts a razor-sharp specular stripe along black-chrome edges)
    const grazingRimLight = new THREE.DirectionalLight(0xf1f5f9, 5.0);
    grazingRimLight.position.set(-6, 2, -3);
    scene.add(grazingRimLight);

    // Subtle Underside Fill (Reveals chamfers and milled recesses without lifting black levels)
    const undersideFill = new THREE.PointLight(0xe2e8f0, 2.0, 9, 1.2);
    undersideFill.position.set(0, -2.5, 2);
    scene.add(undersideFill);

    // Subtle Top Accent Pin-Light
    const pinAccent = new THREE.PointLight(0xffffff, 2.5, 6, 1.5);
    pinAccent.position.set(1.5, 2.5, 1);
    scene.add(pinAccent);

    // 4. Ground Contact Shadow Receiver (Grounds the sculpture in a luxury studio stage)
    const shadowGeo = new THREE.PlaneGeometry(12, 12);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.35 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.6;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // 5. Build the Master Artifact: High-End Machined Black-Chrome & Silver Sculpture
    const artifactGroup = new THREE.Group();
    artifactGroup.position.set(0.6, 0.05, 0); // Asymmetric, editorial offset
    scene.add(artifactGroup);

    // --- High-Performance PBR Materials ---
    const blackChromeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x090a0d,
      metalness: 0.98,
      roughness: 0.07,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      reflectivity: 1.0,
      specularIntensity: 1.0
    });

    const liquidSilverMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf8fafc,
      metalness: 1.0,
      roughness: 0.03,
      clearcoat: 0.9,
      clearcoatRoughness: 0.02,
      reflectivity: 1.0
    });

    const brushedGraphiteMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e222a,
      metalness: 0.92,
      roughness: 0.28
    });

    const darkObsidianGlassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0f1218,
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.75,
      thickness: 0.45,
      ior: 1.6,
      transparent: true,
      opacity: 0.95
    });

    // --- Sub-structure 1: Sweeping Aerodynamic Möbius / Trefoil Architectural Spine ---
    // Custom 3D Spline Curve for the primary interlocking form
    const spinePoints: THREE.Vector3[] = [];
    const numSplinePoints = 64;
    for (let i = 0; i <= numSplinePoints; i++) {
      const u = (i / numSplinePoints) * Math.PI * 2;
      // Precision parametric loop with dramatic horizontal spread and subtle depth twist
      const x = Math.sin(u) * 2.2 + Math.sin(u * 2) * 0.5;
      const y = Math.cos(u * 2) * 0.65 + Math.sin(u) * 0.2;
      const z = Math.cos(u) * 0.95;
      spinePoints.push(new THREE.Vector3(x, y, z));
    }
    const spineCurve = new THREE.CatmullRomCurve3(spinePoints, true, 'centripetal');

    // Swept primary tube (Brushed graphite structural chassis)
    const spineGeo = new THREE.TubeGeometry(spineCurve, 140, 0.09, 24, true);
    const spineMesh = new THREE.Mesh(spineGeo, brushedGraphiteMaterial);
    spineMesh.castShadow = true;
    spineMesh.receiveShadow = true;
    artifactGroup.add(spineMesh);

    // --- Sub-structure 2: Twin Mirror-Polished Liquid Silver Guide Rails ---
    const rail1Points: THREE.Vector3[] = [];
    const rail2Points: THREE.Vector3[] = [];
    for (let i = 0; i <= numSplinePoints; i++) {
      const u = (i / numSplinePoints) * Math.PI * 2;
      const x = Math.sin(u) * 2.2 + Math.sin(u * 2) * 0.5;
      const y = Math.cos(u * 2) * 0.65 + Math.sin(u) * 0.2;
      const z = Math.cos(u) * 0.95;
      const normal = new THREE.Vector3(Math.cos(u), Math.sin(u * 2) * 0.5, Math.sin(u)).normalize();
      
      rail1Points.push(new THREE.Vector3(x, y, z).addScaledVector(normal, 0.14));
      rail2Points.push(new THREE.Vector3(x, y, z).addScaledVector(normal, -0.14));
    }
    const rail1Curve = new THREE.CatmullRomCurve3(rail1Points, true, 'centripetal');
    const rail2Curve = new THREE.CatmullRomCurve3(rail2Points, true, 'centripetal');

    const rail1Geo = new THREE.TubeGeometry(rail1Curve, 120, 0.022, 16, true);
    const rail2Geo = new THREE.TubeGeometry(rail2Curve, 120, 0.022, 16, true);

    const rail1Mesh = new THREE.Mesh(rail1Geo, liquidSilverMaterial);
    const rail2Mesh = new THREE.Mesh(rail2Geo, liquidSilverMaterial);
    rail1Mesh.castShadow = true;
    rail2Mesh.castShadow = true;
    artifactGroup.add(rail1Mesh);
    artifactGroup.add(rail2Mesh);

    // --- Sub-structure 3: Articulated Glossy Black-Chrome Segmented Shell Plates ---
    // Array of precision-machined curved louvers along the curvature
    const plateCount = 38;
    const plateGroup = new THREE.Group();

    for (let i = 0; i < plateCount; i++) {
      const t = i / plateCount;
      const point = spineCurve.getPointAt(t);
      const tangent = spineCurve.getTangentAt(t).normalize();
      
      // Determine orientation reference
      const up = new THREE.Vector3(0, 1, 0);
      const normal = new THREE.Vector3().crossVectors(tangent, up).normalize();
      const binormal = new THREE.Vector3().crossVectors(tangent, normal).normalize();

      // Precision beveled plate geometry
      const plateWidth = 0.26 + Math.sin(t * Math.PI * 2) * 0.12;
      const plateLength = 0.085;
      const plateGeo = new THREE.BoxGeometry(plateWidth, 0.028, plateLength);

      const plateMesh = new THREE.Mesh(plateGeo, blackChromeMaterial);
      plateMesh.position.copy(point).addScaledVector(normal, 0.04);

      // Align plate to spine tangent and normal
      const rotMatrix = new THREE.Matrix4().makeBasis(normal, binormal, tangent);
      plateMesh.quaternion.setFromRotationMatrix(rotMatrix);
      plateMesh.castShadow = true;
      plateMesh.receiveShadow = true;

      plateGroup.add(plateMesh);
    }
    artifactGroup.add(plateGroup);

    // --- Sub-structure 4: Central Precision Geometric Ring & Obsidian Refractor ---
    // An interlocking machined gyroscope / ring assembly at the visual focal pivot
    const outerRingGeo = new THREE.TorusGeometry(0.85, 0.045, 24, 64);
    const outerRingMesh = new THREE.Mesh(outerRingGeo, liquidSilverMaterial);
    outerRingMesh.rotation.x = Math.PI * 0.35;
    outerRingMesh.rotation.y = Math.PI * 0.15;
    outerRingMesh.castShadow = true;
    artifactGroup.add(outerRingMesh);

    const innerRingGeo = new THREE.TorusGeometry(0.72, 0.035, 24, 64);
    const innerRingMesh = new THREE.Mesh(innerRingGeo, blackChromeMaterial);
    innerRingMesh.rotation.x = -Math.PI * 0.25;
    innerRingMesh.rotation.y = Math.PI * 0.4;
    innerRingMesh.castShadow = true;
    artifactGroup.add(innerRingMesh);

    // Obsidian tinted glass lens disc at the center
    const lensGeo = new THREE.CylinderGeometry(0.58, 0.58, 0.04, 48);
    const lensMesh = new THREE.Mesh(lensGeo, darkObsidianGlassMaterial);
    lensMesh.rotation.x = Math.PI * 0.35;
    lensMesh.rotation.y = Math.PI * 0.15;
    artifactGroup.add(lensMesh);

    // Cylindrical machined collars along the spine
    const collarGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.05, 24);
    for (let c = 0; c < 8; c++) {
      const t = (c + 0.5) / 8;
      const pt = spineCurve.getPointAt(t);
      const tan = spineCurve.getTangentAt(t).normalize();
      const collar = new THREE.Mesh(collarGeo, liquidSilverMaterial);
      collar.position.copy(pt);
      collar.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tan);
      collar.castShadow = true;
      artifactGroup.add(collar);
    }

    // 6. Smooth Mouse Parallax & Motion Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleMouseMove = (event: MouseEvent) => {
      if (isTouchDevice || prefersReducedMotion) return;
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetMouseX = x * 0.18;
      targetMouseY = y * 0.14;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      
      // Responsive framing: scale artifact and pull camera back slightly on mobile/portrait
      if (width < 768) {
        camera.position.z = 6.8;
        artifactGroup.position.set(0, -0.15, 0);
        artifactGroup.scale.set(0.72, 0.72, 0.72);
      } else if (width < 1024) {
        camera.position.z = 5.9;
        artifactGroup.position.set(0.3, 0.0, 0);
        artifactGroup.scale.set(0.88, 0.88, 0.88);
      } else {
        camera.position.z = 5.6;
        artifactGroup.position.set(0.65, 0.05, 0);
        artifactGroup.scale.set(1.0, 1.0, 1.0);
      }

      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Initial entrance fade-in
    setIsLoaded(true);

    // 7. Choreographed Cinematic Render Loop (Delta-Time Based, Zero React State in Loop)
    let animationFrameId: number;
    let previousTime = performance.now();

    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate);

      const deltaTime = Math.min((currentTime - previousTime) * 0.001, 0.1);
      previousTime = currentTime;
      const elapsedTime = currentTime * 0.001;

      if (!prefersReducedMotion) {
        // Smooth lerp for desktop mouse parallax
        mouseX += (targetMouseX - mouseX) * Math.min(deltaTime * 4.0, 1.0);
        mouseY += (targetMouseY - mouseY) * Math.min(deltaTime * 4.0, 1.0);

        // Slow, physically convincing floating movement (sinusoidal period ~7.4s)
        const floatY = Math.sin(elapsedTime * 0.85) * 0.08;
        const floatRoll = Math.cos(elapsedTime * 0.6) * 0.04;

        // Controlled horizontal yaw drift (restricted to luxury product rotation: ±12 degrees)
        const yawDrift = Math.sin(elapsedTime * 0.4) * 0.22;

        artifactGroup.position.y = (container.clientWidth < 768 ? -0.15 : 0.05) + floatY;
        artifactGroup.rotation.y = yawDrift + mouseX;
        artifactGroup.rotation.x = floatRoll - mouseY;
        artifactGroup.rotation.z = Math.sin(elapsedTime * 0.3) * 0.03;

        // Subtle dynamic light drift to make specular highlights travel along the polished chrome
        keySoftbox.position.x = 4.5 + Math.sin(elapsedTime * 0.5) * 0.8;
        keySoftbox.position.z = 3.5 + Math.cos(elapsedTime * 0.5) * 0.6;

        grazingRimLight.position.x = -6 + Math.cos(elapsedTime * 0.4) * 0.7;
      }

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    // 8. Robust GPU & Resource Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      // Dispose Geometries
      shadowGeo.dispose();
      spineGeo.dispose();
      rail1Geo.dispose();
      rail2Geo.dispose();
      outerRingGeo.dispose();
      innerRingGeo.dispose();
      lensGeo.dispose();
      collarGeo.dispose();

      // Dispose Materials
      shadowMat.dispose();
      blackChromeMaterial.dispose();
      liquidSilverMaterial.dispose();
      brushedGraphiteMaterial.dispose();
      darkObsidianGlassMaterial.dispose();

      // Dispose Textures
      if (scene.environment) {
        scene.environment.dispose();
      }

      // Dispose Renderer
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[500px]">
      {/* Three.js Canvas Mount */}
      <div
        ref={mountRef}
        className={`w-full h-full transition-opacity duration-1000 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* WebGL Fallback if device does not support WebGL */}
      {!hasWebGL && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#050507] p-8 text-center">
          <div className="max-w-md space-y-4 p-8 border border-white/10 bg-[#0a0c10]">
            <span className="text-xs font-mono-tech tracking-widest text-slate-400 uppercase">
              Artifact Visualization
            </span>
            <p className="text-sm text-slate-300 font-body">
              Luvira Digital precision-engineered black-chrome architectural artifact.
            </p>
          </div>
        </div>
      )}

      {/* Minimal Studio Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-radial-[circle_at_center,transparent_30%,#050507_90%] opacity-70" />
    </div>
  );
};
