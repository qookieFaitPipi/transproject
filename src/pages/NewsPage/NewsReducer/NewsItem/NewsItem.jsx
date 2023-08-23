import React from "react";
import styles from './NewsItem.module.scss';

const NewsItem = (props) => {
  return(
    <div className={styles.newsItem}>
      <div className={styles.newsItemImageBlock}>
        {props.imageURL.map((obj) => 
          <img className={styles.newsItemImage} src={obj} alt="image" />
        )}
      </div>
      <div className={styles.newsItemTextBlock}>
        <div className={styles.newsItemDate}>{props.date}</div>
        <div className={styles.newsItemText}>{props.text} {props.link !== '' ? <a href={props.url}>{props.link}</a> : <div></div>}</div>
      </div>
    </div>
  );
}

export default React.memo(NewsItem);