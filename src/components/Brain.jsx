import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Brain() {
  const canvasRef = useRef();
  const [isInteracting, setIsInteracting] = useState(false); // State to control if interacting with the scene
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
    const camera = new THREE.PerspectiveCamera(75, width / window.innerHeight, 0.1, 1000);
    camera.position.z = 2; // Adjusting to give more space for the model

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(width, window.innerHeight); // Dynamically set renderer size based on window width
    renderer.setClearColor(0x000000, 0); // Transparent background

    // Handle WebGL context loss and restore
    const handleContextLoss = () => {
      console.error("WebGL context lost. Attempting to restore...");
      renderer.dispose(); // Dispose the renderer
      const newRenderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
      newRenderer.setSize(width, window.innerHeight);
      newRenderer.setClearColor(0x000000, 0);
      newRenderer.context.restore();
    };

    canvasRef.current.addEventListener("webglcontextlost", handleContextLoss, false);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true; // Enable zoom
    controls.enablePan = false; // Disable pan
    controls.update(); // Necessary for OrbitControls to work

    // Camera rotation animation function
    let angle = 0;
    const radius = 2;
    const target = new THREE.Vector3(0, 0, 0);
    const targetPosition = new THREE.Vector3(radius, 0, 0);

    function animate() {
      requestAnimationFrame(animate);

      if (!isInteracting) {
        angle += 0.005; // Rotation speed
        targetPosition.x = radius * Math.cos(angle);
        targetPosition.z = radius * Math.sin(angle);
        camera.position.lerp(targetPosition, 0.05); // Smooth interpolation
        camera.lookAt(target); // Keep the camera looking at the center
      }

      controls.update(); // Update the controls every frame
      renderer.render(scene, camera);
    }

    animate();

    // Load GLTF 3D model
    const loader = new GLTFLoader();
    loader.load("/3d_models/brain_hologram/scene.gltf", (gltf) => {
      const loadedModel = gltf.scene;
      scene.add(loadedModel);
      loadedModel.rotation.y = Math.PI - (25 * (Math.PI / 180)); // Rotate model

      // Update materials for specific parts
      loadedModel.traverse((child) => {
        if (child.isMesh) {
          if (child.material.name === "Particle_1" || child.material.name === "Particle_2") {
            child.material = new THREE.MeshStandardMaterial({
              color: child.material.name === "Particle_1" ? 0x9696A6 : 0x696BB3,
              emissive: child.material.name === "Particle_1" ? 0x9696A6 : 0x696BB3,
              emissiveIntensity: 2.0,
              metalness: 0.5,
              roughness: 0.7,
            });
          }
        }
      });
    }, undefined, (error) => {
      console.error("Error loading model:", error);
    });

    // Handle user interactions with controls
    controls.addEventListener("start", () => {
      setIsInteracting(true);
    });

    controls.addEventListener("end", () => {
      setIsInteracting(false);
    });

    // Cleanup resources when component unmounts
    return () => {
      controls.dispose();
    };
  }, [isInteracting, width]); // Add width as a dependency to reinitialize when window size changes

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: `${width}px`, // Dynamically set width based on window size
        height: "100vh", // Make height full screen
      }}
    />
  );
}

export default Brain;
