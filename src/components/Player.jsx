import { useRef, useState } from 'react'
import { useBox } from '@react-three/cannon'

const Player = () => {
    const [ref, api] = useBox(() => ({ 
        mass: 1, 
        position: [0, 2, 0] 
    }));

    return (
        <mesh 
            onClick={() => {
                api.velocity.set(0, 3, 0)
            }}
            ref={ref} 
            position= {[0, 2, 0] }
        >
            <boxGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="hotpink" />
        </mesh>
    )
}

export default Player