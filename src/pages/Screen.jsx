import { Canvas } from "@react-three/fiber";

import Star from "@comp/Star";

const Screen = () => {
    return (
        <main id="Screen">
            <Canvas>
                <ambientLight />
                <Star size={3} intensity={8} />
            </Canvas>
        </main>
    );
};

export default Screen;
