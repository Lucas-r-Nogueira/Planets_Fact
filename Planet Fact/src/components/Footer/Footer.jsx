import Styles from './Footer.module.css';

export default function Footer(){
    return (
        <>
            <div className={Styles.footer}>
                <p>Developed by <a href="https://github.com/Lucas-r-Nogueira">Lucas Nogueira</a></p>
                <p>Inspired by <a href="https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f">Frontend Mentor</a></p>
            </div>
        </>
    )
}