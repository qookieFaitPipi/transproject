import React from "react";
import styles from './Components.module.scss';

// images
import cm1 from './../../../Assets/img/components/cm1.jpg';
import cm2 from './../../../Assets/img/components/cm2.jpg';

const Components = () => {
  return(
    <div className={styles.components}>
      <div className={styles.componentsContent}>
        <div className={styles.componentsTitle}>ООО «ТранспроектИнжиниринг» состоит в следующих саморегулируемых организациях:</div>
        
        <div className={styles.componentsItem}>
          <img className={styles.componentsImage} src={cm1} alt="" />
          <div className={styles.componentsText}>Ассоциация проектных организаций «Союзпетрострой-Проект», с правом выполнять разработку документации в отношении особо опасных, технически сложных и уникальных объектов капитального строительства (кроме объектов использования атомной энергии)</div>
        </div>

        <div className={styles.componentsItem}>
          <img className={styles.componentsImage} src={cm2} alt="" />
          <div className={styles.componentsText}>Ассоциация саморегулируемая организация «Изыскатели Санкт-Петербурга и Северо-Запада»</div>
        </div>
      
      </div>
    </div>
  );
}

export default React.memo(Components);