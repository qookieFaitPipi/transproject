import React, { useEffect, useState } from "react";
import styles from './NewsReducer.module.scss';
import axios from "axios";

import SmallNews from "./NewsItem/SmallNews";
import LargeNews from "./NewsItem/LargeNews";

const NewsReducer = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://hosting.alexavr.ru/get_news').then((response) => {
      setNews(response.data);
    });
  }, []);

  return(
    <div className={styles.reducer}>
      {news.map(news => {
        if(news.size === 1) {
          return <SmallNews key={news.id} picture={news.imageURL1} date={news.date} title={news.title} text={news.text} link={news.link} url={news.url} />
        } else if(news.size === 2) {
          return <LargeNews key={news.id} picture1={news.imageURL1} picture2={news.imageURL2} date={news.date} title={news.title} text={news.text} link={news.link} url={news.url} />
        }
      })}
    </div>
  );
}

export default React.memo(NewsReducer);