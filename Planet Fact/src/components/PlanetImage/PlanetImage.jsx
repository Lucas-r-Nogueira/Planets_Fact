import style from './PlanetImage.module.css'
import Planet from '../../assets/images/planet-earth.svg'
export default function PlanetImage(){
    return (
        <>
            <div className={style.container__planetImage}>
                <img src={Planet} />
            </div>
        </>
    );
}