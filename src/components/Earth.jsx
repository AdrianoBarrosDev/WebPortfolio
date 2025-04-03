import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Earth() {
  const canvasRef = useRef();
  const [width, setWidth] = useState(window.innerWidth); // Track window width for dynamic canvas width

  // Update width whenever the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth); // Update width state
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount to set the width state

    // Clean up the listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect only runs once on mount

  useEffect(() => {
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(1, 1, 1);
    scene.add(pointLight);

    const diagonalLight = new THREE.PointLight(0xffffff, 1);
    diagonalLight.position.set(-1, -1, -1);
    scene.add(diagonalLight);

    const downLight = new THREE.PointLight(0xffffff, 1);
    downLight.position.set(0, -2.5, 0);
    scene.add(downLight);

    const camera = new THREE.PerspectiveCamera(75, width / window.innerHeight, 0.1, 1000);
    camera.position.z = 2; // Adjusting to give more space for the model

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(width, window.innerHeight); // Dynamically set renderer size based on window width
    renderer.setClearColor(0x000000, 0); // Transparent background

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; // Enable zoom
    controls.enablePan = false; // Disable pan
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.update(); // Necessary for OrbitControls to work

    function animate() {
      requestAnimationFrame(animate);
      controls.update(); // Update the controls every frame
      renderer.render(scene, camera);
    }

    animate();

    // Load GLTF 3D model
    const loader = new GLTFLoader();
    loader.load("/3d_models/Earth.glb", (gltf) => {
      const loadedModel = gltf.scene;
      scene.add(loadedModel);
      loadedModel.rotation.y = Math.PI - (25 * (Math.PI / 180)); // Rotate model

      // Update materials for specific parts
      loadedModel.traverse((child) => {
        if (child.isMesh) {
          if (child.material.name === "blinn2SG") {
            child.material = new THREE.MeshStandardMaterial({
              emissive: child.material.name === "Particle_1" ? 0x9696A6 : 0x696BB3,
              emissiveIntensity: 1.5,
              metalness: 1,
              roughness: 0.2,
            });
          }
        }
      });
    }, undefined, (error) => {
      console.error("Error loading model:", error);
    });

    // Cleanup resources when component unmounts
    return () => {
      controls.dispose();
    };
  }, [width]); // Add width as a dependency to reinitialize when window size changes

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: `${width}px`, // Dynamically set width based on window size
        height: "100vh", // Make height full screen
        position: "relative",
      }}
    />
  );
}

export default Earth;
