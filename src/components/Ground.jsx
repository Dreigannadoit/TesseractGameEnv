import { usePlane } from '@react-three/cannon'
import { Plane } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { MeshStandardMaterial } from 'three';

const Ground = () => {
    const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
	}));
	return (
		<RigidBody type="fixed" name="floor">
          <Plane position={[0, 0, 0]} args={[10, 1, 10]}>
            <MeshStandardMaterial color="springgreen" />
          </Plane>
        </RigidBody>
		
	);
}

export default Ground