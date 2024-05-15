import './App.css';
import Buttons from './components/Buttons/Button';
import Header from './components/Header/Header';
import Information from './components/Information/Information';
import PlanetImage from './components/PlanetImage/PlanetImage';
import PlusInformation from './components/PlusInformation/PlusInformation';
import Footer from './components/Footer/Footer';
import React, { useState } from 'react';

export default function App() {

    const  [planetaSelecionado,setPlanetaSelecionado] = useState(0);
    const  [textoSelecionado,setTextoSelecionado] = useState("information");
    const  [imagemSelecionada,setImagemSelecionada] = useState("imgPlanet");

    const textInformations = (textInfor,imgInfor) =>{
        setTextoSelecionado(textInfor);
        setImagemSelecionada(imgInfor); 
    }

    const numberPlanet = (numeroPlaneta) => {
        setPlanetaSelecionado(numeroPlaneta);
    };

    const planet = [
        {
            name: 'Mercury', 
            imgPlanet:  import('./assets/images/planet-mercury.svg').then((module) => module.default),
            internalPlanet: import('./assets/images/planet-mercury-internal.svg').then(module => module.default),
            surfaceGeology: import('./assets/images/planet-mercury-geology.png').then(module => module.default),
            information: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
            informationStructure: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
            informationGeology: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
            wikipedia: "https://en.wikipedia.org/wiki/Mercury_(planet)",
            rotationTime: "58.6 Days",
            revolutionTime: "87.97 Days",
            radius: "2,439.7 KM",
            averageTemp: "430°C",
        },
        {
            name: 'Venus', 
            imgPlanet: import('./assets/images/planet-venus.svg').then((module) => module.default),
            internalPlanet: import('./assets/images/planet-venus-internal.svg').then(module => module.default),
            surfaceGeology: import('./assets/images/planet-venus-geology.png').then(module => module.default),
            information: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
            informationStructure: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
            informationGeology: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
            wikipedia: "https://en.wikipedia.org/wiki/Venus",
            rotationTime: "243 Days",
            revolutionTime: "224.7 Days",
            radius: "6,051.8 KM",
            averageTemp: "471°C",
        },
        {
            name: 'Earth', 
            imgPlanet: import('./assets/images/planet-earth.svg').then((module) => module.default),
            internalPlanet: import('./assets/images/planet-earth-internal.svg').then(module => module.default),
            surfaceGeology: import('./assets/images/planet-earth-geology.png').then(module => module.default),
            information: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive",
            informationStructure: "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
            informationGeology: "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
            wikipedia: "https://en.wikipedia.org/wiki/Earth",
            rotationTime: "0.99 Days",
            revolutionTime: "365.26 Days",
            radius: "6,371 KM",
            averageTemp: "16°C",
        },
        {
            name: 'Mars', 
            imgPlanet: import('./assets/images/planet-mars.svg').then((module) => module.default),
            internalPlanet: import('./assets/images/planet-mars-internal.svg').then(module => module.default),
            surfaceGeology: import('./assets/images/planet-mars-geology.png').then(module => module.default),
            information: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.",
            informationStructure: "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
            informationGeology: "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
            wikipedia: "https://en.wikipedia.org/wiki/Mars",
            rotationTime: "1.03 Days",
            revolutionTime: "1.88 Years",
            radius: "3,389.5 KM",
            averageTemp: "-28°C",
        },
        {
            name: 'Jupiter', 
            imgPlanet: import('./assets/images/planet-jupiter.svg').then((module) => module.default),
            internalPlanet: import('./assets/images/planet-jupiter-internal.svg').then(module => module.default),
            surfaceGeology: import('./assets/images/planet-jupiter-geology.png').then(module => module.default),
            information: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
            informationStructure:"When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
            informationGeology:"The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
            wikipedia: "https://en.wikipedia.org/wiki/Jupiter",
            rotationTime: "9.93 Hours",
            revolutionTime: "11.86 Years",
            radius: "69,911 KM",
            averageTemp: "-108°C",
        },
        {
            name: 'Saturn', 
            imgPlanet: import('./assets/images/planet-saturn.svg').then((module) => module.default),
            internalPlanet: import('./assets/images/planet-saturn-internal.svg').then(module => module.default),
            surfaceGeology: import('./assets/images/planet-saturn-geology.png').then(module => module.default),
            information: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
            informationStructure: "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
            informationGeology: "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust",
            wikipedia: "https://en.wikipedia.org/wiki/Satun",
            rotationTime: "10.8 Hours",
            revolutionTime: "29.46 Years",
            radius: "58,232 KM",
            averageTemp: "-138°C",
        },
        {
            name: 'Uranus', 
            imgPlanet: import('./assets/images/planet-uranus.svg').then((module) => module.default),
            internalPlanet: import('./assets/images/planet-uranus-internal.svg').then(module => module.default),
            surfaceGeology: import('./assets/images/planet-uranus-geology.png').then(module => module.default),
            information: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
            informationStructure:"The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
            informationGeology:"The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
            wikipedia: "https://en.wikipedia.org/wiki/Uranus",
            rotationTime: "17.2 Hours",
            revolutionTime: "84 Years",
            radius: "25,362 KM",
            averageTemp: "-195°C",
        },
        {
            name: 'Neptune', 
            imgPlanet: import('./assets/images/planet-neptune.svg').then((module) => module.default),
            internalPlanet: import('./assets/images/planet-neptune-internal.svg').then(module => module.default),
            surfaceGeology: import('./assets/images/planet-neptune-geology.png').then(module => module.default),
            information: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
            informationStructure:"Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
            informationGeology:"Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
            wikipedia: "https://en.wikipedia.org/wiki/Uranus",
            rotationTime: "16.08 Hours",
            revolutionTime: "164.79 Years",
            radius: "24,622 KM",
            averageTemp: "-201°C",
        },

    ]
    return (
        <>
            <Header numberPlanet={numberPlanet}/>
            <div className="container__body">
                <PlanetImage planetImg={planet[planetaSelecionado][imagemSelecionada]}/>
                <div className="container__body_information">
                    <Information 
                        name={planet[planetaSelecionado].name} 
                        Information={planet[planetaSelecionado][textoSelecionado]}
                        wiki={planet[planetaSelecionado].wikipedia}/>
                <Buttons textInformations={textInformations}/>
                </div>
            </div>
            <PlusInformation 
                rotationTime={planet[planetaSelecionado].rotationTime} 
                revolutionTime={planet[planetaSelecionado].revolutionTime} 
                radius={planet[planetaSelecionado].radius} 
                averageTemp={planet[planetaSelecionado].averageTemp}/>
            <Footer/>
        </>
    );
};