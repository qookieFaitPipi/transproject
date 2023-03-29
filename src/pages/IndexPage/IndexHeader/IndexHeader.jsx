import React, { useState } from "react";
import styles from './IndexHeader.module.scss';

import {Link} from "react-router-dom";

// images
import logo from './../../../assets/img/logo.svg';

const IndexHeader = () => {
  const [headerPopupActive, setHeaderPopupActive] = useState(false);

  return(
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerLogoBlock}>
          <img className={styles.logo} src={logo} alt="" />
          <h5 className={styles.logoTitle}>ТранспроектИнжиниринг</h5>
        </div>
        <div className={styles.headerNavBlock}>

          <li className={styles.navItem} onClick={() => setHeaderPopupActive(!headerPopupActive)}>
            <Link className={styles.navLink} to="/">О компании</Link>
            <span className={styles.navLinkChevron}>V</span>
            <div className={headerPopupActive ? styles.active : styles.navItemPopup}>
              <div className={styles.navItemPopupLinkBlock}>
                <div className={styles.navItemPopupLink} onClick={() => document.getElementById('scrollWorkers').scrollIntoView({behavior: "smooth"})}>Руководство</div>
                <div className={styles.navItemPopupLink} onClick={() => document.getElementById('scrollPartners').scrollIntoView({behavior: "smooth"})}>Наши заказчики</div>
                <div className={styles.navItemPopupLink} onClick={() => document.getElementById('scrollFooter').scrollIntoView({behavior: "smooth"})}>Лицензии и допуски</div>
              </div>
            </div>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/news">Новости</Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/objects">Объекты</Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/vacancy">Вакансии</Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/contacts">Контакты</Link>
          </li>

        </div>
      </div>
    </div>
  );
}

export default React.memo(IndexHeader);