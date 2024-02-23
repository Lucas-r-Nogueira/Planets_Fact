import styles from './Information.module.css';
import 'animate.css';

export default function Information(props){

    return (
        <>
            <div className={styles.container__information}>
                <div className={styles.container__information_title}>
                    <h1>{props.name}</h1>
                </div>
                <div className={styles.container__information_text}>
                    <p>{props.Information}</p>
                </div>
                <div className={styles.container__information_wikipediaTitle}>
                    <p>Source : <a href={props.wiki}>Wikipedia</a></p>
                </div>
            </div>
        </>
    );
}