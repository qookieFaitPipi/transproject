import React from "react";
import styles from './Partners.module.scss';

// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// images
import pt1 from './../../../Assets/img/partners/pt1.jpg';
import pt2 from './../../../Assets/img/partners/pt2.jpg';
import pt3 from './../../../Assets/img/partners/pt3.png';
import pt4 from './../../../Assets/img/partners/pt4.jpg';
import pt5 from './../../../Assets/img/partners/pt5.jpg';
import pt6 from './../../../Assets/img/partners/pt6.jpg';
import pt7 from './../../../Assets/img/partners/pt7.jpg';
import pt8 from './../../../Assets/img/partners/pt8.jpg';

const Partners = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return(
    <>
      <div className={styles.partnersTitle} id='scrollPartners'>Наши заказчики</div>
      <Carousel responsive={responsive} className={styles.partners} id='scrollPartners'>
        <div className={styles.partnersItem}>
          <img className={styles.partnersItemImage} width="150px" height="150px" src={pt1} alt="" />
          <div className={styles.partnersItemText}>Санкт-Петербургское государственное <br/> казенное учреждение «Фонд капитального <br/>строительства и реконструкции»</div>
        </div>
        <div className={styles.partnersItem}>
          <img className={styles.partnersItemImage} width="300px" height="150px" src={pt2} alt="" />
        </div>
        <div className={styles.partnersItem}>
          <img className={styles.partnersItemImage} width="150px" height="150px" src={pt3} alt="" />
          <div className={styles.partnersItemText}>Комитет по развитию транспортной <br/> инфраструктуры Санкт-Петербурга</div>
        </div>

        <div className={styles.partnersItem}>
          <img className={styles.partnersItemImage} width="300px" height="150px" src={pt4} alt="" />
        </div>
        <div className={styles.partnersItem}>
          <img className={styles.partnersItemImage} width="300px" height="150px" src={pt5} alt="" />
        </div>
        <div className={styles.partnersItem}>
          <img className={styles.partnersItemImage} width="150px" height="150px" src={pt6} alt="" />
        </div>

        <div className={styles.partnersItem}>
          <img className={styles.partnersItemImage} width="150px" height="50px" src={pt7} alt="" />
        </div>
        <div className={styles.partnersItem}>
          <img className={styles.partnersItemImage} width="150px" height="150px" src={pt8} alt="" />
          <div className={styles.partnersItemText}>Администрация Белоярского <br/> района</div>
        </div>
        <div className={styles.partnersItem}>
          <div className={styles.partnersItemTextH}>Единые системные <br/> технологии</div>
        </div>
      </Carousel>
    </>
  );
}

export default React.memo(Partners);