import React, { useState } from "react";
import styles from './Header.module.scss';

import {Link} from "react-router-dom";

// images
import logo from './../../assets/img/logo.svg';

const IndexHeader = () => {
  const [headerPopupActive, setHeaderPopupActive] = useState(false);

  const enableHeaderPopupActive = () => {
    if(window.location.pathname == '/') {
      setHeaderPopupActive(false);
    }
  }

  const disableHeaderPopupActive = () => {
    if(window.location.pathname == '/') {
      setHeaderPopupActive(true);
    }
  }

  return(
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerLogoBlock}>
          <img className={styles.logo} src={logo} alt="" />
          <li className={styles.logoTitle}>Транспроектинжиниринг</li>
        </div>
        <div className={styles.headerNavBlock}>

          <div className={styles.navItem} onMouseOut={enableHeaderPopupActive} onMouseOver={disableHeaderPopupActive} style={window.location.pathname == '/' ? {borderBottom: '2px #808080 solid'} : {display: 'block'}}>
            <Link className={styles.navLink} to="/">О компании</Link>
            <div className={headerPopupActive ? styles.active : styles.navItemPopup}>
              <div className={styles.navItemPopupLinkBlock}>
                <div className={styles.navItemPopupLink} onClick={() => document.getElementById('scrollWorkers').scrollIntoView({behavior: "smooth"})}>Руководство</div>
                <div className={styles.navItemPopupLink} onClick={() => document.getElementById('scrollPartners').scrollIntoView({behavior: "smooth"})}>Наши заказчики</div>
                <div className={styles.navItemPopupLink} onClick={() => document.getElementById('scrollFooter').scrollIntoView({behavior: "smooth"})}>Лицензии и допуски</div>
              </div>
            </div>
          </div>

          <div className={styles.navItem} style={window.location.pathname == '/news' ? {borderBottom: '2px #808080 solid'} : {display: 'block'}}>
            <Link className={styles.navLink} to="/news">Новости</Link>
          </div>

          <div className={styles.navItem} style={window.location.pathname == '/objects' ? {borderBottom: '2px #808080 solid'} : {display: 'block'}}>
            <Link className={styles.navLink} to="/objects">Объекты</Link>
          </div>

          <div className={styles.navItem} style={window.location.pathname == '/vacancy' ? {borderBottom: '2px #808080 solid'} : {display: 'block'}}>
            <Link className={styles.navLink} to="/vacancy">Вакансии</Link>
          </div>

          <div className={styles.navItem} style={window.location.pathname == '/contacts' ? {borderBottom: '2px #808080 solid'} : {display: 'block'}}>
            <Link className={styles.navLink} to="/contacts">Контакты</Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default React.memo(IndexHeader);