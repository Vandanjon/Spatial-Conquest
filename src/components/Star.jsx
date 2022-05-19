import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

import sunTexture from "../assets/textures/sun.jpg";

const Star = ({ size, intensity }) => {
    const texture = useLoader(TextureLoader, sunTexture);

    return (
        <>
            <pointLight position={[0, 0, 0]} intensity={intensity} />
            <mesh>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial map={texture} />
            </mesh>
        </>
    );
};

export default Star;
