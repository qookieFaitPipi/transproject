import React from "react";
import styles from './Footer.module.scss';

import {Link} from "react-router-dom";

// images
import logo from './../../assets/img/logo.svg';

// files
import fl1 from './../../assets/files/fl1.pdf';
import fl2 from './../../assets/files/fl2.pdf';

import fl5 from './../../assets/files/fl5.pdf';
import fl6 from './../../assets/files/fl6.pdf';

import fl7 from './../../assets/files/fl7.pdf';

const Footer = () => {
  return(
    <div className={styles.footer} id='scrollFooter'>
      <div className={styles.footerContent}>

        <div className={styles.footerContainer}>
          <div className={styles.footerColumn}>
            <div className={styles.footerColumnTitle}>
              <img className={styles.footerColumnLogo} src={logo} alt="" />
              <div className={styles.footerColumnDescription}>ТранспроектИнжиниринг</div>
            </div>
            <div className={styles.footerColumnAbout}>
              <p className={styles.footerColumnAboutItem}><b>Адрес:</b> 196084, Россия, Санкт-Петербург,<br/>Малая Митрофаньевская улица, д.4, литер Л, офис 318</p>
              <p className={styles.footerColumnAboutItem}><b>Телефон:</b> +7(812)948-55-99</p>
              <p className={styles.footerColumnAboutItem}><b>Email:</b> info@tpe.su</p>
            </div>
          </div>
          <div className={styles.footerColumn}>
            <div className={styles.footerName}>Навигация</div>
            <Link className={styles.footerColumnItem} to="/">О компании</Link>
            <Link className={styles.footerColumnItem} to="/news">Новости</Link>
            <Link className={styles.footerColumnItem} to="/objects">Объекты</Link>
            <Link className={styles.footerColumnItem} to="/vacancy">Вакансии</Link>
            <Link className={styles.footerColumnItem} to="/contacts">Контакты</Link>
          </div>
          <div className={styles.footerColumn}>
            <div className={styles.footerName}>СОУТ</div>
            <a className={styles.footerColumnItem} href={fl1}>Сводная ведомость результатов проведения СОУТ</a>
            <a className={styles.footerColumnItem} href={fl7}>Сводная ведомость результатов проведения СОУТ от 02.03.2023</a>
            <a className={styles.footerColumnItem} href={fl2}>Перечень мероприятий</a>

            <div className={styles.footerName}>Документы</div>
            <a className={styles.footerColumnItem} href={fl5}>Политика обработки персональных данных</a>
            <a className={styles.footerColumnItem} href={fl6}>Политика конфиденциальности</a>
          </div>

        </div>
        <div className={styles.rights}>
          <div className={styles.smtext}>© ООО «ТранспроектИнжиниринг». 2023.Все права защищены.</div>
          <div className={styles.maintext}>При использовании размещенных на веб-сайте материалов в любой форме и любыми способами (в том числе копировании, воспроизведении, распространении) в полном объеме либо частично пользователь обязан указывать (оформлять) ссылку на ТранспроектИнжиниринг либо веб-сайт как на источник информации.</div>
        </div>
      </div>
      
    </div>
  );
}

export default React.memo(Footer);