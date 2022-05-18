import { Canvas } from "@react-three/fiber";

import Star from "@comp/Star";
import Planet from "@comp/Planet";

import planets from "@data/planets.json";

const Screen = () => {
    return (
        <main id="Screen">
            <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
                <ambientLight />
                <Star size={3.5} intensity={5} />

                {planets.map((p) => (
                    <Planet
                        key={p.id}
                        size={p.size}
                        position={p.position}
                        texture={p.texture}
                        name={p.name}
                        txtpos={p.txtpos}
                    />
                ))}
            </Canvas>
        </main>
    );
};

export default Screen;
