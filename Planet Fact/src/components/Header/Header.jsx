import styles from "./Header.module.css";



export default function Header(props) {

  return (
    <>
      <div className={styles.container__header}>
        <div className={styles.container__header_logo}>
          <h1>The Planets</h1>
        </div>
        <div className={styles.container__header_nav}>
          <ul>
            <li>
              <a href="">Mercury</a>
            </li>
            <li>
              <a href="">Venus</a>
            </li>
            <li>
              <a >Earth</a>
            </li>
            <li>
              <a href="">Mars</a>
            </li>
            <li>
              <a href="">Jupiter</a>
            </li>
            <li>
              <a href="">Saturn</a>
            </li>
            <li>
              <a href="">Uranus</a>
            </li>
            <li>
              <a href="">Neptune</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
}
