import { usePlane } from '@react-three/cannon'

const Ground = () => {
    const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
	}));
	return (
		<mesh 
            ref={ref} 
            rotation={[-Math.PI / 2, 0, 0]}
        >
			<planeGeometry attach="geometry" args={[100, 100]} />
			<meshLambertMaterial attach="material" color="lightblue" />
		</mesh>
	);
}

export default Ground