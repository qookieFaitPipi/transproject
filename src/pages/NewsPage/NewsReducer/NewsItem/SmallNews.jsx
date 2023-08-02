import React from "react";
import styles from './NewsItem.module.scss';

const SmallNews = (props) => {
  return(
    <div className={styles.newsItem}>
      <div className={styles.newsItemImageBlock}>
        <img className={styles.newsItemImage} src={props.picture} alt="" />
      </div>
      <div className={styles.newsItemTextBlock}>
        <div className={styles.newsItemDate}>{props.date}</div>
        <div className={styles.newsItemText}>{props.text} {props.link !== '' ? <a href={props.url}>{props.link}</a> : <div></div>}</div>
      </div>
    </div>
  );
}

export default React.memo(SmallNews);