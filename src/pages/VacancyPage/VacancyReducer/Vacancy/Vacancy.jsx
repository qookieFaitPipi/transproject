import React from 'react';
import styles from './Vacancy.module.scss';

const Vacancy = (props) => {
  return (
    <div className={styles.vacancyListItem}>
      <div className={styles.vacancyPrice}>
        <div className={styles.vacancyPriceInfoBlock}>
          <div className={styles.vacancyPriceText}>{props.price}<br /> до вычета налогов</div>
          <div className={styles.vacancyPriceInfo} onClick={() => document.getElementById('feedBackForm').scrollIntoView({behavior: "smooth"})}>Откликнуться</div>
        </div>
      </div>
      <div className={styles.vacancyInfo}>
        <div className={styles.vacancyTitle}>{props.title}</div>
        <div className={styles.vacancyText}>
          <ul><b>Обязанности:</b>
            {props.duties.map(obj => {
              return <li><div dangerouslySetInnerHTML={{ __html: obj }} /></li>
            })}
          </ul>
          <ul><b>Требования:</b>
            {props.requirements.map(obj => {
              return <li>{obj}</li>
            })}
          </ul>
          <ul><b>Условия:</b>
            {props.conditions.map(obj => {
              return <li>{obj}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Vacancy);