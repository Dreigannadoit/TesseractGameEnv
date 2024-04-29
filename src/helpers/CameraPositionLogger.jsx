import { useRef, useEffect } from 'react'
import { useThree } from '@react-three/fiber'

const CameraPositionLogger = ({ event } = {}) => {
    const { camera } = useThree();
    const cameraRef = useRef(camera);

    useEffect(() => {
        const logCameraPosition = () => {
            const { x: xPos, y: yPos, z: zPos } = cameraRef.current.position;
            const { x: xRot, y: yRot, z: zRot } = cameraRef.current.rotation;

            const roundedXPos = Math.round(xPos * 100) / 100;
            const roundedYPos = Math.round(yPos * 100) / 100;
            const roundedZPos = Math.round(zPos * 100) / 100;

            const roundedXRot = Math.round(xRot * 100) / 100;
            const roundedYRot = Math.round(yRot * 100) / 100;
            const roundedZRot = Math.round(zRot * 100) / 100;

            console.log(
                `Camera Position: x=${roundedXPos}, y=${roundedYPos}, z=${roundedZPos}`
            );

            console.log(
                `Camera Rotation: x=${roundedXRot}, y=${roundedYRot}, z=${roundedZRot}`
            );
        }

        cameraRef.current = camera;
        window.addEventListener(event, logCameraPosition);

        return () => {
            window.removeEventListener(event, logCameraPosition)
        }
    }, [camera, event])
    
    return null;
}

export default CameraPositionLogger;
