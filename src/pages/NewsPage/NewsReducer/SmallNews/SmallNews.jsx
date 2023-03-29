import React from "react";
import styles from './SmallNews.module.scss';

const SmallNews = (props) => {
  return(
    <div className={styles.newsItem}>
      <div className={styles.newsItemImageBlock}>
        <img className={styles.newsItemImage} src={props.picture} alt="" />
      </div>
      <div className={styles.newsItemTextBlock}>
        <p className={styles.newsItemDate}>{props.date}</p>
        <p className={styles.newsItemText}>{props.text} {props.link != '' ? <a href={props.url}>{props.link}</a> : <div></div>}</p>
      </div>
    </div>
  );
}

export default React.memo(SmallNews);