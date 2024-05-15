import Styles from './Footer.module.css';

export default function Footer(){
    return (
        <>
            <div className={Styles.footer}>
                <p>Developed by <a href="https://github.com/Lucas-r-Nogueira">Lucas Nogueira</a></p>
            </div>
        </>
    )
}