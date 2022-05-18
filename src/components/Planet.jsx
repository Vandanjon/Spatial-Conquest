import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Planet = ({ size, position, texture }) => {
    const textureP = useLoader(TextureLoader, texture);

    return (
        <>
            <mesh position={[position, 0, 0]}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial map={textureP} />
            </mesh>
        </>
    );
};

export default Planet;
