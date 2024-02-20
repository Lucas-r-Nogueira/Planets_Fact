import React from 'react';
import style from './PlanetImage.module.css'
export default function PlanetImage(props){
    const [img, setImg] = React.useState(null);

    React.useEffect(() => {
        props.planetImg.then((img) => setImg(img));
    }, [props.planetImg]);

    return (
        <>
            <div className={style.container__planetImage}>
                <img src={img} alt={`Planet ${props.planetName}`}/>
            </div>
        </>
    );
}