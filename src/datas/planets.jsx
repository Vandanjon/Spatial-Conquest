import mercury from "../assets/textures/mercury.jpg";
import venus from "../assets/textures/venus.jpg";
import earth from "../assets/textures/earth.jpg";
import mars from "../assets/textures/mars.jpg";
import jupiter from "../assets/textures/jupiter.jpg";
import saturne from "../assets/textures/saturn.jpg";
import uranus from "../assets/textures/uranus.jpg";
import neptune from "../assets/textures/neptune.jpg";
import pluto from "../assets/textures/makemake.jpg";

const planetsDatas = [
    {
        id: 1,
        name: "mercure",
        size: "0.2",
        position: "4",
        texture: mercury,
        txtpos: "-200%",
    },
    {
        id: 2,
        name: "venus",
        size: "0.45",
        position: "4.9",
        texture: venus,
        txtpos: "100%",
    },
    {
        id: 3,
        name: "terre",
        size: "0.5",
        position: "6",
        texture: earth,
        txtpos: "-300%",
    },
    {
        id: 4,
        name: "mars",
        size: "0.2",
        position: "7",
        texture: mars,
        txtpos: "200%",
    },
    {
        id: 5,
        name: "jupiter",
        size: "2",
        position: "10",
        texture: jupiter,
        txtpos: "-300%",
    },
    {
        id: 6,
        name: "saturne",
        size: "2",
        position: "15",
        texture: saturne,
        txtpos: "200%",
    },
    {
        id: 7,
        name: "uranus",
        size: "1",
        position: "19",
        texture: uranus,
        txtpos: "-300%",
    },
    {
        id: 8,
        name: "neptune",
        size: "1",
        position: "22",
        texture: neptune,
        txtpos: "200%",
    },
    {
        id: 9,
        name: "pluton",
        size: "0.2",
        position: "24",
        texture: pluto,
        txtpos: "-300%",
    },
];

export default planetsDatas;
