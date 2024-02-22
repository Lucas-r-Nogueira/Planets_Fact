import './App.css';
import Header from './components/Header/Header';
import Information from './components/Information/Information';
import PlanetImage from './components/PlanetImage/PlanetImage';
import PlusInformation from './components/PlusInformation/PlusInformation';
import Footer from './components/Footer/Footer';
import React, { useState } from 'react';
import Buttons from './components/Buttons/Button';

export default function App() {

    const  [itemSelecionado,setItemSelecionado] = useState(0);

    const numberPlanet = (numeroPlaneta) => {
        setItemSelecionado(numeroPlaneta);
    };

    const planet = [
        {
            name: 'Mercury', 
            imgPlanet:  import('./assets/images/planet-mercury.svg').then((module) => module.default),
            information: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
            wikipedia: "https://en.wikipedia.org/wiki/Mercury_(planet)",
            rotationTime: "58.6 Days",
            revolutionTime: "87.97 Days",
            radius: "2,439.7 KM",
            averageTemp: "430°C",
        },
        {
            name: 'Venus', 
            imgPlanet: import('./assets/images/planet-venus.svg').then((module) => module.default),
            information: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
            wikipedia: "https://en.wikipedia.org/wiki/Venus",
            rotationTime: "243 Days",
            revolutionTime: "224.7 Days",
            radius: "6,051.8 KM",
            averageTemp: "471°C",
        },
        {
            name: 'Earth', 
            imgPlanet: import('./assets/images/planet-earth.svg').then((module) => module.default),
            information: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive",
            wikipedia: "https://en.wikipedia.org/wiki/Earth",
            rotationTime: "0.99 Days",
            revolutionTime: "365.26 Days",
            radius: "6,371 KM",
            averageTemp: "16°C",
        },
        {
            name: 'Mars', 
            imgPlanet: import('./assets/images/planet-mars.svg').then((module) => module.default),
            information: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.",
            wikipedia: "https://en.wikipedia.org/wiki/Mars",
            rotationTime: "1.03 Days",
            revolutionTime: "1.88 Years",
            radius: "3,389.5 KM",
            averageTemp: "-28°C",
        },
        {
            name: 'Jupiter', 
            imgPlanet: import('./assets/images/planet-jupiter.svg').then((module) => module.default),
            information: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
            wikipedia: "https://en.wikipedia.org/wiki/Jupiter",
            rotationTime: "9.93 Hours",
            revolutionTime: "11.86 Years",
            radius: "69,911 KM",
            averageTemp: "-108°C",
        },
        {
            name: 'Saturn', 
            imgPlanet: import('./assets/images/planet-saturn.svg').then((module) => module.default),
            information: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
            wikipedia: "https://en.wikipedia.org/wiki/Satun",
            rotationTime: "10.8 Hours",
            revolutionTime: "29.46 Years",
            radius: "58,232 KM",
            averageTemp: "-138°C",
        },
        {
            name: 'Uranus', 
            imgPlanet: import('./assets/images/planet-uranus.svg').then((module) => module.default),
            information: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
            wikipedia: "https://en.wikipedia.org/wiki/Uranus",
            rotationTime: "17.2 Hours",
            revolutionTime: "84 Years",
            radius: "25,362 KM",
            averageTemp: "-195°C",
        },
        {
            name: 'Neptune', 
            imgPlanet: import('./assets/images/planet-neptune.svg').then((module) => module.default),
            information: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
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
                <PlanetImage planetImg={planet[itemSelecionado].imgPlanet}/>
                <div className="container__body_information">
                    <Information 
                        name={planet[itemSelecionado].name} 
                        Information={planet[itemSelecionado].information} 
                        wiki={planet[itemSelecionado].wikipedia}/>
                <Buttons/>
                </div>
            </div>
            <PlusInformation 
                rotationTime={planet[itemSelecionado].rotationTime} 
                revolutionTime={planet[itemSelecionado].revolutionTime} 
                radius={planet[itemSelecionado].radius} 
                averageTemp={planet[itemSelecionado].averageTemp}/>
            <Footer/>
        </>
    );
};