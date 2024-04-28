
import { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Physics, useBox, usePlane } from '@react-three/cannon'
import Player from './Player'
import Ground from './Ground'


const Home = () => {
  return (
    <Canvas camera={{ fov: 45, position: [0, 5, 10] }}>
        <OrbitControls target={[0, 0, 0]} />
        <ambientLight intensity={1.5} />
        <Stars />
        <spotLight 
            position={[10, 15, 10]}
            angle={0.3}
            penumbra={1}
            intensity={500}
            castShadow
            shadow-mapSize={1024}
        />
        <Physics>
            <Player />
            <Ground />
        </Physics>
    </Canvas>
  )
}


export default Home