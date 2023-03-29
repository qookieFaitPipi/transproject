import React from "react";
import styles from './Partners.module.scss';

// images
import pt1 from './../../../assets/img/partners/pt1.jpg';
import pt2 from './../../../assets/img/partners/pt2.jpg';
import pt3 from './../../../assets/img/partners/pt3.png';
import pt4 from './../../../assets/img/partners/pt4.jpg';
import pt5 from './../../../assets/img/partners/pt5.jpg';
import pt6 from './../../../assets/img/partners/pt6.jpg';
import pt7 from './../../../assets/img/partners/pt7.jpg';
import pt8 from './../../../assets/img/partners/pt8.jpg';

const Partners = () => {
  return(
    <div className={styles.partners} id='scrollPartners'>
      <div className={styles.partnersContent}>
        <h4 className={styles.partnersTitle}>Наши заказчики</h4>

        <div className={styles.partnersLine}>
          <div className={styles.partnersItem}>
            <img className={styles.partnersItemImage} width="150px" height="150px" src={pt1} alt="" />
            <p className={styles.partnersItemText}>Санкт-Петербургское государственное <br/> казенное учреждение «Фонд капитального <br/>строительства и реконструкции»</p>
          </div>
          <div className={styles.partnersItem}>
            <img className={styles.partnersItemImage} width="300px" height="150px" src={pt2} alt="" />
          </div>
          <div className={styles.partnersItem}>
            <img className={styles.partnersItemImage} width="150px" height="150px" src={pt3} alt="" />
            <p className={styles.partnersItemText}>Комитет по развитию транспортной <br/> инфраструктуры Санкт-Петербурга</p>
          </div>
        </div>

        <div className={styles.partnersLine}>
          <div className={styles.partnersItem}>
            <img className={styles.partnersItemImage} width="300px" height="150px" src={pt4} alt="" />
          </div>
          <div className={styles.partnersItem}>
            <img className={styles.partnersItemImage} width="300px" height="150px" src={pt5} alt="" />
          </div>
          <div className={styles.partnersItem}>
            <img className={styles.partnersItemImage} width="150px" height="150px" src={pt6} alt="" />
          </div>
        </div>

        <div className={styles.partnersLine}>
          <div className={styles.partnersItem}>
            <img className={styles.partnersItemImage} width="150px" height="50px" src={pt7} alt="" />
          </div>
          <div className={styles.partnersItem}>
            <img className={styles.partnersItemImage} width="150px" height="150px" src={pt8} alt="" />
            <p className={styles.partnersItemText}>Администрация Белоярского <br/> района</p>
          </div>
          <div className={styles.partnersItem}>
            <p className={styles.partnersItemTextH}>Единые системные <br/> технологии</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Partners);