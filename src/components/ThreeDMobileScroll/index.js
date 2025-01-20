'use client'
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer, OrbitControls } from "@react-three/drei";
import MobileModel from "./MobileModel"; 


export default function ThreeDMobileScroll(props) {
  return (
    <>
      <div className="scene-main" style={{ height: "100vh", width: "100vw", position: "absolute", top: 0, left: 0 }}>
        <Canvas style={{ backgroundColor: "#ffefd300" }}>
          <directionalLight intensity={3} position={[0, 3, 2]} />
          {/* <Environment 
          preset="sunset"   /> */}
          {/* <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -5]} />
      <ambientLight intensity={0.4} /> */}
      <hemisphereLight intensity={0.5} />
      <Environment resolution={512}>
        {/* Ceiling */}
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
        {/* Sides */}
        <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
        <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
        {/* Key */}
        <Lightformer form="rect" color="#FFEE4F" intensity={10} scale={[100, 2, 1]} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
      </Environment>
          <MobileModel screenTexture={props.textureImage} />
        </Canvas>
      </div>
    </>
  );
}
 