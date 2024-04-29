import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"; 
import { Physics} from "@react-three/rapier"; 
import { Suspense } from "react"; 
import { InteractableObjects } from "../models/InteractableObjects";
import { Playground } from "../models/Playground"; 
import { useKeyboard } from "../hooks/useKeyboard";
import { useMouseCapture } from "../hooks/useMouseCapture";
import { Player } from "../models/Player";

function getInput(keyboard, mouse) {
  let [x, y, z] = [0, 0, 0];
  // Checking keyboard inputs to determine movement direction
  if (keyboard["s"]) z += 1.0; // Move backward
  if (keyboard["w"]) z -= 1.0; // Move forward
  if (keyboard["d"]) x += 1.0; // Move right
  if (keyboard["a"]) x -= 1.0; // Move left
  if (keyboard[" "]) y += 1.0; // Jump

  // Returning an object with the movement and look direction
  return {
    move: [x, y, z],
    look: [mouse.x / window.innerWidth, mouse.y / window.innerHeight], 
    running: keyboard["Shift"],
  };
}

// Build Scene
const Scene = () => {
  const keyboard = useKeyboard(); 
  const mouse = useMouseCapture(); 

  return (
    <group>
      <InteractableObjects position={[7, 8, 0]} />
      <InteractableObjects position={[6, 15, 0]} /> 
      <Playground /> 
      <Player walk={2} jump={5} input={() => getInput(keyboard, mouse)}/>
    </group>
  );
};

// Add Physics to scene
const Main = () => {
  return (
    <Canvas shadows>
      <Suspense fallback={null}> 
        <Physics debug gravity={[0, -15.8, 0]} interpolation={false} colliders={false}>
          <Scene /> 
        </Physics>
        <Stars preset="studio" background /> 
      </Suspense>
    </Canvas>
  );
};

export default Main; 