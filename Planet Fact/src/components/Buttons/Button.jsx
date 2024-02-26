import styles from './Button.module.css'

export default function Button({ textInformations }) {

    const handleClick = (textInfor) => {
        textInformations(textInfor);
    }

    return (
        <>
            <div className={styles.container__button}>
                <div className={styles.button} onClick={() => handleClick("information")}>
                    <p className={styles.button__number}>01</p>
                    <p className={styles.button__text}>Overview</p>
                </div>
                <div className={styles.button} onClick={() => handleClick("informationStructure")}>
                    <p className={styles.button__number}>02</p>
                    <p className={styles.button__text}>Internal Structure</p>
                </div>
                <div className={styles.button} onClick={() => handleClick("informationGeology")}>
                    <span className={styles.button__number}>03</span>
                    <span className={styles.button__text}>Surface Geology</span>
                </div>
            </div>
        </>
    )
}