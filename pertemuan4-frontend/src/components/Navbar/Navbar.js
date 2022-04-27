/**
 * Import CSS Module Navbar.
 * Disimpan di object styles.
 */
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>Movie App</h1>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}> 
              <Link className={styles.navbar__linked} to="/">Home</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link className={styles.navbar__linked} to="/movie/create">Add Movies</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link className={styles.navbar__linked} to="/movie/popular">Popular</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link className={styles.navbar__linked} to="/movie/nowplaying">Now Playing Movie</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link className={styles.navbar__linked} to="/movie/topratedmovie">Top Rated Movie</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;