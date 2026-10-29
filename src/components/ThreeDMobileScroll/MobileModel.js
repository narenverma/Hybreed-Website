import * as THREE from "three";
import {
  MeshTransmissionMaterial,
  PerspectiveCamera,
  Text,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function MobileModel(props) {
  const { viewport, pointer } = useThree();

//   const { nodes, materials } = useGLTF("/assets/models/iphone_12_pro.glb");
  const { nodes, materials } = useGLTF("/three-d-assets/models/iphone_12_pro.glb");

  const meshRef = useRef();
  const videoTextureRef = useRef();
  const imageTextureRef = useRef();
  const mainMobile = useRef();
  const cameraRef = useRef();
  const { camera } = useThree();
  const mainMobileWrap = useRef();
  const heroHeading2 = useRef();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update mouse position on mouse move
  const handleMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setMousePosition({ x, y });
  };

  useFrame(() => {
    if (mainMobileWrap.current) {
      // Add some smooth movement using lerp
      mainMobileWrap.current.position.x = THREE.MathUtils.lerp(
        mainMobileWrap.current.position.x,
        mousePosition.x * 0.1,
        0.1
      );
      mainMobileWrap.current.position.y = THREE.MathUtils.lerp(
        mainMobileWrap.current.position.y,
        mousePosition.y * 0.1,
        0.1
      );
      mainMobileWrap.current.rotation.x = THREE.MathUtils.lerp(
        mainMobileWrap.current.rotation.x,
        mousePosition.x * 0.1,
        0.1
      );
      mainMobileWrap.current.rotation.y = THREE.MathUtils.lerp(
        mainMobileWrap.current.rotation.y,
        mousePosition.y * 0.1,
        0.1
      );
    }
  });

  useEffect(() => {

// Create image element
const imageTexture = new THREE.TextureLoader().load("/three-d-assets/textures/" + props.screenTexture);

// Set texture properties
imageTexture.wrapS = THREE.ClampToEdgeWrapping;
imageTexture.wrapT = THREE.ClampToEdgeWrapping;
imageTexture.center.set(0.5, 0.5);
imageTexture.repeat.set(0.99, 1.1);
imageTexture.minFilter = THREE.LinearFilter;
imageTexture.magFilter = THREE.LinearFilter;

imageTextureRef.current = imageTexture;

// Apply the image texture using MeshBasicMaterial
meshRef.current.material = new THREE.MeshBasicMaterial({
    map: imageTexture,         // Assign the texture to the material
    color: 0xffffff,           // White base color to keep the texture unaltered
    toneMapped: false          // Disable tone mapping for consistent brightness
});
meshRef.current.material.needsUpdate = true;
// meshRef.current.material.metalness = 1;         // Making the material more metallic
// meshRef.current.material.roughness = 0; 

    // // Create video element
    // const video = document.createElement("video");
    // video.src = require("../../assets/textures/video-texture.mp4");
    // video.crossOrigin = "Anonymous";
    // video.loop = true;
    // video.muted = true;
    // video.play(); // Make sure to start the video

    // // Create texture from video
    // const videoTexture = new THREE.VideoTexture(video);
    // videoTexture.wrapS = THREE.ClampToEdgeWrapping;
    // videoTexture.wrapT = THREE.ClampToEdgeWrapping;
    // videoTexture.center.set(0.5, 0.5);

    // videoTexture.repeat.set(0.99, 1.1);
    // videoTexture.minFilter = THREE.LinearFilter;
    // videoTexture.magFilter = THREE.LinearFilter;

    // videoTextureRef.current = videoTexture;

    // // Apply the texture to the mesh material
    // videoTexture.generateMipmaps = false;
    // meshRef.current.material.map = videoTexture;
    // meshRef.current.material.needsUpdate = true;

    if (mainMobile.current) {
      mainMobile.current.rotation.y = 3.1; // Set initial rotation to 3.1 on Y-axis
    }
    if (document.readyState !== "loading"){ 

  document.querySelector(".hero-section").style.height = document.querySelector(".hero-section").offsetHeight * 4 +"px";
  gsap.registerPlugin(ScrollTrigger)
  let tlMob =  gsap;

    tlMob.set(cameraRef.current.rotation, { x: -0.3, y: -2.3, z: -0.3 });
    tlMob.to(cameraRef.current.rotation, {
      x: 0,
      y: -3.1,
      z: 0, 
      scrollTrigger:{
      
    trigger: ".hero-section",
      start: "top top", 
      end: "bottom bottom", 
      scrub: 1, // Smoothly update the animation as you scroll
      
    }
    });

    tlMob.set(cameraRef.current.position, { x: 0, y: -2.8, z: 2.3 });
    tlMob.to(cameraRef.current.position, {
      x: 0,
      y: 0,
      z: 0, 
      scrollTrigger:{
      
    trigger: ".hero-section",
      start: "top top", 
      end: "bottom bottom", 
      scrub: 1, // Smoothly update the animation as you scroll
      
    }
    });

    gsap.to(".hero-section",{
      scrollTrigger:{
        trigger:".hero-section",
        start: "top top",
        end: "bottom bottom"  ,
        pin:".scene-main", 
      // markers:true, 
      scrub: 1,
      }
    })
 
  }
     

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // video.pause();
      // video.removeAttribute("src");
      // video.load();

      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <>
      {/* <group scale={viewport.width / 20} position={[0, 2, -0.5]}>
        <group>
          <Text
            ref={heroHeading2}
            fontSize={1}
            color={"#212121"}
            maxWidth={viewport.width / 1.3}
            textAlign={"center"}
          >
            Hayee Mashallah!
          </Text>
        </group>
      </group> */}
      <PerspectiveCamera
        ref={cameraRef}
        fov={40}
      >
        <group
          {...props}
          dispose={null}
          scale={viewport.width / 3}
          ref={mainMobileWrap}
        >
          <group position={[0, -0.5, 0]} ref={mainMobile}>
            <group>
              <group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.iPhone__12_Pro_BodyFrame_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.iPhone__12_Pro_MicrophoneSpeaker_0.geometry}
                  material={materials.MicrophoneSpeaker}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.iPhone__12_Pro_GrayGlossy2_0.geometry}
                  material={materials.GrayGlossy2}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.iPhone__12_Pro_Antenna_0.geometry}
                  material={materials.Antenna}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.iPhone12_Pro_Body_0.geometry}
                  material={materials.Body}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera1_PacificBlue_0.geometry}
                  material={materials.PacificBlue}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera1_GrayGlossy_0.geometry}
                  material={materials.GrayGlossy}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera1_FrontCamera_0.geometry}
                  material={materials.FrontCamera}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera1_Blackmatte_0.geometry}
                  material={materials.Blackmatte}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera1_Cameralens_0.geometry}
                  material={materials.Cameralens}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera1_Glass_0.geometry}
                  material={materials.Glass}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Flash_Flash2_0.geometry}
                  material={materials.Flash2}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Flash_Flash_0.geometry}
                  material={materials.Flash}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.LiDar_LiDar__0.geometry}
                  material={materials.LiDar}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Bezel_bezel_0.geometry}
                  material={materials.bezel}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.FrontCamera_Cameralens_0.geometry}
                  material={materials.Cameralens}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.FrontCamera_FrontCamera_0.geometry}
                  material={materials.FrontCamera}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.FrontCamera_Glass_0.geometry}
                  material={materials.Glass}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.FrontMic_GrayGlossy2_0.geometry}
                  material={materials.GrayGlossy2}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.FrontMic_MicrophoneSpeaker_0.geometry}
                  material={materials.MicrophoneSpeaker}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.FrontCamera001_bezel001_0.geometry}
                  material={materials["bezel.001"]}
                  position={[0, 0, -0.001]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera3_PacificBlue_0.geometry}
                  material={materials.PacificBlue}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera3_GrayGlossy_0.geometry}
                  material={materials.GrayGlossy}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera3_FrontCamera_0.geometry}
                  material={materials.FrontCamera}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera3_Blackmatte_0.geometry}
                  material={materials.Blackmatte}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera3_Cameralens_0.geometry}
                  material={materials.Cameralens}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera3_Glass_0.geometry}
                  material={materials.Glass}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera2_PacificBlue_0.geometry}
                  material={materials.PacificBlue}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera2_GrayGlossy_0.geometry}
                  material={materials.GrayGlossy}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera2_FrontCamera_0.geometry}
                  material={materials.FrontCamera}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera2_Blackmatte_0.geometry}
                  material={materials.Blackmatte}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera2_Cameralens_0.geometry}
                  material={materials.Cameralens}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera2_Glass_0.geometry}
                  material={materials.Glass}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Screen_Wallpaper_0.geometry}
                  material={materials.Wallpaper}
                  ref={meshRef}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Apple_Logo_Logo_0.geometry}
                  material={materials.Logo}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CameraModule001_Glass_0.geometry}
                  material={materials.Glass}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CameraModule002_MicrophoneSpeaker_0.geometry}
                  material={materials.MicrophoneSpeaker}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.VolumeButton_BodyFrame_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.PowerButton_BodyFrame_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Port_Blackmatte_0.geometry}
                  material={materials.Blackmatte}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Port_BodyFrame_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.SimTray_Blackmatte_0.geometry}
                  material={materials.Blackmatte}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.SimTray_BodyFrame_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.MuteButton_BodyFrame_0.geometry}
                  material={materials.BodyFrame}
                />
              </group>
            </group>
          </group>
        </group>
      </PerspectiveCamera>
    </>
  );
}
