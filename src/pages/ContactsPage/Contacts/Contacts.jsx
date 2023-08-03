import React from "react";
import styles from './Contacts.module.scss';

// icons
import phoneSVG from './../../../Assets/img/icons/phone.svg';
import emailSVG from './../../../Assets/img/icons/email.svg';
import pointSVG from './../../../Assets/img/icons/point.svg';

// images
import contactImage from './../../../Assets/img/contact-img.jpg';
const Contacts = () => {
  return(
    <div className={styles.contacts}>
      <div className={styles.contactsContent}>
        <div className={styles.contactsBlock}>
          <div className={styles.contactsBlockInfo}>
            <h4 className={styles.contactsBlockTitle}>ООО "ТранспроектИнжиниринг"</h4>
            <div className={styles.contactsBlockTel}>
              <img className={styles.contactsBlockIcon} src={phoneSVG} alt="" />
              <p className={styles.contactsText}>+7 (812) 948-55-99</p>
            </div>
            <div className={styles.contactsBlockTel}>
              <img className={styles.contactsBlockIcon} src={emailSVG} alt="" />
              <p className={styles.contactsText}>info@tpe.su</p>
            </div>
            <div className={styles.contactsBlockTel}>
              <img className={styles.contactsBlockIcon} src={pointSVG} alt="" />
              <p className={styles.contactsText}>196084, Россия, Санкт-Петербург,<br/>
              Малая Митрофаньевская улица, д.4, литер Л, офис 318</p>
            </div>
          </div>
          <div className={styles.contactsBlockImage}>
            <img className={styles.contactBlockImage} src={contactImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Contacts);