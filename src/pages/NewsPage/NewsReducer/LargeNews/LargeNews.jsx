import React from "react";
import styles from './LargeNews.module.scss';

import fl1 from './../../../../assets/files/УВЕДОМЛЕНИЕ КПООС_v.2.pdf'
const LargeNews = (props) => {
  return(
    <div className={styles.newsItem}>
      <div className={styles.newsItemImageBlock}>
        <img className={styles.newsItemImage} src={props.picture1} alt="" />
        <img className={styles.newsItemImage} src={props.picture2} alt="" />
      </div>
      <div className={styles.newsItemTextBlock}>
        <p className={styles.newsItemDate}>{props.date}</p>
        <hr />
        <p className={styles.newsItemText}>{props.text} {props.link != '' ? <a href={props.url}>{props.link}</a> : <div></div>}</p>
      </div>
    </div>
  );
}

export default React.memo(LargeNews);