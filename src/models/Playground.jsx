// Import necessary components from React and Three.js
import { RigidBody } from "@react-three/rapier"; // Component for rigid body physics simulation
import * as THREE from "three"; // Three.js library

// Function to convert an angle from degrees to radians
const angleToRadians = (angleInDeg) => (Math.PI / 180) * angleInDeg;

// Walls component - creates walls and grounds using RigidBody components
export function Playground() {
  return (
    <>
      {/* Create a ground using another RigidBody component */}
      <RigidBody
        colliders="cuboid" 
        lockTranslations={true} 
        lockRotations
        position={[0, -2, 0]} 
        rotation={[angleToRadians(-90), 0, 0]} 
        friction={2}
      >
        {/* 3D mesh representing the ground */}
        <mesh receiveShadow> 
          <planeGeometry args={[500, 500]} /> 
          <meshNormalMaterial />
        </mesh>
      </RigidBody>

      <directionalLight position={[0, 50, 0]} intensity={10} castShadow /> 
    </>
  );
}