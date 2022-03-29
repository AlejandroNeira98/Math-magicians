import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CSSmodules/Header.module.css';

function Header() {
  return (
    <header>
      <h1>
        Math Magicians
      </h1>
      <nav>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/calculator" className={`${styles.navLink} ${styles.calcLink}`}>Calculator</Link>
        <Link to="/quote" className={styles.navLink}>Quote</Link>
      </nav>
    </header>
  );
}

export default Header;
