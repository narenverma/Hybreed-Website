 import { Canvas } from "@react-three/fiber";
// import Model from "./Model";
import { Environment, OrbitControls } from "@react-three/drei";
import MobileModel from "./MobileModel";


export default function ThreeDMobileScroll() {
  return (
    <>
      <div className="scene-main" style={{height:"100vh", width:"100vw"}}>
        <Canvas style={{ backgroundColor: "#ffefd3" }}>
          <directionalLight intensity={3} position={[0, 3, 2]} />
          <Environment preset="sunset" />
          {/* <Model /> */}
          <MobileModel />
          {/* <OrbitControls enableZoom={false} /> */}
        </Canvas>
      </div>
    </>
  );
}
