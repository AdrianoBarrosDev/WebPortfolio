import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Stars({ parentDivRef }) {
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
    
    const parentDivHeight = parentDivRef.current ? parentDivRef.current.offsetHeight : window.innerHeight;

    const camera = new THREE.PerspectiveCamera(75, width / parentDivHeight, 0.1, 1000);
    camera.position.z = 2; // Adjusting to give more space for the model
    camera.position.x = 0;
    camera.position.y = 0;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(width, parentDivHeight); // Dynamically set renderer size based on window width
    renderer.setClearColor(0x000000, 0); // Transparent background

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; // Enable zoom
    controls.enablePan = false; // Disable pan
    controls.enableRotate = false;
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
    loader.load("/3d_models/Stars.glb", (gltf) => {
      const loadedModel = gltf.scene;
      scene.add(loadedModel);
      
    }, undefined, (error) => {
      console.error("Error loading model:", error);
    });

    // Cleanup resources when component unmounts
    return () => {
      controls.dispose();
    };
  }, [width, parentDivRef]); // Add width as a dependency to reinitialize when window size changes

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: `${width}px`, // Dynamically set width based on window size
        height: "100%", // Make height full screen
        position: "relative",
      }}
    />
  );
}

export default Stars;
