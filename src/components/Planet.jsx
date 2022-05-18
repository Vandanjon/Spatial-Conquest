import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Html } from "@react-three/drei";

const Planet = ({ size, position, texture, name, txtpos }) => {
    const textureP = useLoader(TextureLoader, texture);

    return (
        <>
            <mesh position={[position, 0, 0]}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial map={textureP} />
                <Html>
                    <h1
                        style={{ transform: `translate3d(-50%, ${txtpos}, 0)` }}
                    >
                        {name}
                    </h1>
                </Html>
            </mesh>
        </>
    );
};

export default Planet;
