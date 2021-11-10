import Header from "./components/Header/Header.jsx";
import scss from "./App.module.scss";
import React, { useRef, useEffect, useState, Suspense } from "react";

//Components
import { Section } from "./components/Section/Section.jsx";

// Page State
import state from "./components/state";

// R3F
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useGLTF, useProgress } from "@react-three/drei";

const Model = () => {
  const gltf = useGLTF('/armchairYellow.gltf', true);
  return <primitive object={gltf.scene} dispose={null}/>
}

const Light = () => {
  return <ambientLight intensity={0.3}/>
}

const HTMLContent = () => {
  return (
    <>
      <Section factor={1.6} offset={1}>
        <group position={[0, 270, 0]}>
          <mesh position={[0, -35, 0]}>
            <Model/>
          </mesh>
          <Html fullscreen>
            <div className={scss.container}>
              <h1 className={scss.title}>Hello</h1>
            </div>
          </Html>
        </group>
      </Section>
    </>
  );
};

function App() {
  return (
    <>
      <Header />
      <Canvas
        concurrent
        colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}
      >
        <Light/>
        <Suspense fallback={null}>
          <HTMLContent />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
