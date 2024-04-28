import { KeyboardControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense, useMemo } from "react";
import Player from "./Player";

export const Controls = {
    forward: "forward",
    back: "back",
    left: "left",
    right: "right",
    jump: "jump",
};

const Home = () => {
    const map = useMemo(
        () => [
          { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
          { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
          { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
          { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
          { name: Controls.jump, keys: ["Space"] },
        ],
        []
      );
    
      return (
        <KeyboardControls map={map}>
          <Canvas shadows camera={{ position: [10, 10, 10], fov: 30 }}>
            <color attach="background" args={["#2A0F49"]} />
            <Stars />
            <Suspense fallback={null}>
              <Physics debug gravity={[0, -9.8, 0]}>
                <Player />
              </Physics>
            </Suspense>
          </Canvas>
        </KeyboardControls>
      );
}


export default Home