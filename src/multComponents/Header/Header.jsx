import React from "react";
import styles from './Header.module.scss';

import {Link} from "react-router-dom";

// images
import logo from './../../assets/img/logo.svg';

const Header = () => {
  return(
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerLogoBlock}>
          <img className={styles.logo} src={logo} alt="" />
          <h5 className={styles.logoTitle}>ТранспроектИнжиниринг</h5>
        </div>
        <div className={styles.headerNavBlock}>

          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/">О компании</Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/news">Новости</Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/objects">Объекты</Link>
          </li>

          <li className={styles.navItem}>
            <a className={styles.navLink} href="">Вакансии</a>
          </li>

          <li className={styles.navItem}>
            <a className={styles.navLink} href="">Контакты</a>
          </li>

        </div>
      </div>
    </div>
  );
}

export default React.memo(Header);