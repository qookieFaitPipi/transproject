import React from "react";
import styles from './Footer.module.scss';

import {Link} from "react-router-dom";

// images
import logo from './../../assets/img/logo.svg';

const Footer = () => {
  return(
    <div className={styles.footer}>
      <div className={styles.footerContent}>

        <div className={styles.footerContainer}>
          <div className={styles.footerColumn}>
            <div className={styles.footerColumnTitle}>
              <img className={styles.footerColumnLogo} src={logo} alt="" />
              <h4 className={styles.footerColumnDescription}>Транспроектинжиниринг</h4>
            </div>
            <div className={styles.footerColumnAbout}>
              <p className={styles.footerColumnAboutItem}><b>Адрес:</b> 196084, Россия, Санкт-Петербург,<br/>Малая Митрофаньевская улица, д.4, литер Л, офис 318</p>
              <p className={styles.footerColumnAboutItem}><b>Телефон:</b> +7(812)948-55-99</p>
              <p className={styles.footerColumnAboutItem}><b>Email:</b> info@tpe.su</p>
            </div>
          </div>
          <div className={styles.footerColumn}>
            <h6 className={styles.footerName}>Навигация</h6>
            <Link className={styles.footerColumnItem} to="/">О компании</Link>
            <Link className={styles.footerColumnItem} to="/news">Новости</Link>
            <Link className={styles.footerColumnItem} to="/objects">Объекты</Link>
            <a className={styles.footerColumnItem} href="">Вакансии</a>
            <a className={styles.footerColumnItem} href="">Контакты</a>
          </div>
          <div className={styles.footerColumn}>
            <h6 className={styles.footerName}>СОУТ</h6>
            <a className={styles.footerColumnItem} href="">Сводная ведомость результатов проведения СОУТ</a>
            <a className={styles.footerColumnItem} href="">Перечень мероприятий</a>
          </div>

        </div>
        <div className={styles.rights}>
          <div className={styles.smtext}>© ООО «ТранспроектИнжиниринг». 2021.Все права защищены.</div>
          <div className={styles.maintext}>При использовании размещенных на веб-сайте материалов в любой форме и любыми способами (в том числе копировании, воспроизведении, распространении) в полном объеме либо частично пользователь обязан указывать (оформлять) ссылку на ТранспроектИнжиниринг либо веб-сайт как на источник информации.</div>
        </div>
      </div>
      
    </div>
  );
}

export default React.memo(Footer);