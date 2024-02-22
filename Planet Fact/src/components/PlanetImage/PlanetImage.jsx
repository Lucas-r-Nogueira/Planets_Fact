import React from 'react';
import style from './PlanetImage.module.css'
import 'animate.css';

export default function PlanetImage(props){
    const [img, setImg] = React.useState(null);

    React.useEffect(() => {
        props.planetImg.then((img) => setImg(img));
    }, [props.planetImg]);

    return (
        <>
            <div className={`${style.container__planetImage} animate__tada`}>
                <img src={img} alt={`Planet ${props.planetName}`}/>
            </div>
        </>
    );
}