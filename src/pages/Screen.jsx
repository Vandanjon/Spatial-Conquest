import { Canvas } from "@react-three/fiber";

import Star from "@comp/Star";
import Planet from "@comp/Planet";

import planets from "@data/planets.json";

const Screen = () => {
    return (
        <main id="Screen">
            <h1>{planets[2].name}</h1>
            <Canvas>
                <ambientLight />
                <Star size={2} intensity={5} />
                <Planet
                    size={planets[2].size}
                    position={planets[2].position}
                    texture={planets[2].texture}
                />
            </Canvas>
        </main>
    );
};

export default Screen;
