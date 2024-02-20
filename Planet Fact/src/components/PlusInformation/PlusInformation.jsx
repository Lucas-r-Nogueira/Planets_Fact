import Styles from './PlusInformation.module.css';
export default function PlusInformation(props){
    return (
        <>
            <div className={Styles.container__plusInformation}>
                <div className={Styles.container__info}>
                    <p>Rotation Time</p>
                    <p>{props.rotationTime}</p>
                </div>
                <div className={Styles.container__info}>
                    <p>Revolution Time</p>
                    <p>{props.revolutionTime}</p>
                </div>
                <div className={Styles.container__info}>
                    <p>Radius</p>
                    <p>{props.radius}</p>
                </div>
                <div className={Styles.container__info}>
                    <p>Average Temp.</p>
                    <p>{props.averageTemp}</p>
                </div>
            </div>
        </>
    )
}