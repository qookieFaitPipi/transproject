import React, { useEffect, useState } from "react";
import styles from './NewsReducer.module.scss';
import axios from "axios";

import NewsItem from "./NewsItem/NewsItem";

const NewsReducer = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://hosting.alexavr.ru/get_news').then((response) => {
      setNews(response.data);
    });
  }, []);

  return(
    <div className={styles.reducer}>
      {news.map(obj => {
        return <NewsItem key={obj.id} imageURL={obj.imageURL} date={obj.date} text={obj.text} link={obj.link} url={obj.url} />
      })}
    </div>
  );
}

export default React.memo(NewsReducer);