import React from "react";
import styles from './Workers.module.scss';

// images
import wr1 from './../../../assets/img/workers/wr1.png';
import wr2 from './../../../assets/img/workers/wr2.jpg';


const Workers = () => {
  return(
    <div className={styles.workers}>
      <div className={styles.workersContent}>
        <h4 className={styles.workersTitle}>Руководство</h4>
        <div className={styles.workersItem}>
          
          <div className={styles.workersItemImageBlock}>
            <img className={styles.workersItemImage} src={wr1} alt="" />
          </div>
          <div className={styles.workersItemInfo}>
            <h4 className={styles.workersItemInfoTitle}>Генеральный директор Минина Наталия Николаевна, доктор экономических наук</h4>
            <h4 className={styles.workersItemInfoSupTitle}>Награды</h4>
            <p className={styles.workersItemInfoText}>2009 г. - Награждена почетной грамотой Министерства транспорта РФ;<br/>
              2010 г. - Награждена почетной грамотой Губернатора Санкт-Петербурга;<br/>
              2011 г. – Выдано свидетельство Лауреата Всероссийской Премии «Предприниматель года 2011»;<br/>
              2019 г. – Объявлена благодарность Комитета по развитию транспортной инфраструктуры Санкт-Петербурга;<br/>
              2021 г. - Награждена почетной грамотой Комитета по развитию транспортной инфраструктуры Санкт-Петербурга
            </p>
            <h4 className={styles.workersItemInfoSupTitle}>Достижения</h4>
            <p className={styles.workersItemInfoText}>Участие в разработке нормативно-технической документации:<br/>
              1. Участие в разработке СНиП 23-03-2003.<br/>
              2. Разработка 4-х ГОСТ.<br/>
              3. Разработка 3-х стандартов предприятия в области проектирования линейных транспортных сооружений.<br/>
              4. ОДМ «Разработка обоснований инвестиций для линейных транспортных сооружений».
            </p>
          </div>
        </div>

        <div className={styles.workersItem}>
          <div className={styles.workersItemInfo}>
            <h4 className={styles.workersItemInfoTitle}>Заместитель генерального директора – Директор по проектированию Савченко Андрей Владимирович</h4>
            <h4 className={styles.workersItemInfoSupTitle}>Награды</h4>
            <p className={styles.workersItemInfoText}>2014 г. – Награжден почетной грамота НП дорожных проектных организаций "РОДОС";<br/>
              2016 г. – Объявлена благодарность Комитета по развитию транспортной инфраструктуры Санкт-Петербурга.<br/>
              2018 г. - Благодарственное письмо Департамента транспорта и дорожно-благоустроительного комплекса мэрии города Новосибирска «За высокий профессионализм и значительный вклад в развитие дорожно-строительного комплекса города Новисибирска».
            </p>
          </div>
          <div className={styles.workersItemImageBlock}>
            <img className={styles.workersItemImage} src={wr2} alt="" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default React.memo(Workers);