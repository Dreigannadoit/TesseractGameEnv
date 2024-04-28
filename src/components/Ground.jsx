import { usePlane } from '@react-three/cannon'

const Ground = () => {
    const [ref, api] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
	}));
	return (
		<mesh 
            onClick={() => {
                api.velocity.set(0, 2, 0)
            }}
            ref={ref} 
            rotation={[-Math.PI / 2, 0, 0]}
        >
			<planeGeometry attach="geometry" args={[100, 100]} />
			<meshLambertMaterial attach="material" color="lightblue" />
		</mesh>
	);
}

export default Ground