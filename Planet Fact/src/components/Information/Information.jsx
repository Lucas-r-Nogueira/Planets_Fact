import styles from './Information.module.css';
import Buttons from '../Buttons/Button.jsx';

export default function Information(props){

    return (
        <>
            <div className={styles.container__information}>
                <div className={styles.container__information_title}>
                    <h1>Neptune</h1>
                </div>
                <div className={styles.container__information_text}>
                    <p>Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.</p>
                </div>
                <div className={styles.container__information_wikipediaTitle}>
                    <p>Source : <a href="">Wikipedia</a></p>
                </div>
                <Buttons/>
            </div>
        </>
    );
}