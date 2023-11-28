import React, { useEffect, useState } from "react";
import styles from './NewsReducer.module.scss';
import axios from "axios";

// components
import NewsItem from "./NewsItem/NewsItem";
import NewsSkeleton from "./NewsSkeleton/NewsSkeleton";

const NewsReducer = () => {
  const [news, setNews] = useState([]);
  const [loadingState, setLoadingState] = useState(false)

  useEffect(() => {
    axios.get('https://backend.tpe.su/get_news').then((response) => {
      setNews(response.data);
      setLoadingState(true);
    });
  }, []);

  return(
    <div className={styles.reducer}>
      {loadingState 
      ? 
      news.map(obj => {
        return <NewsItem key={obj.id} imageURL={obj.imageURL} date={obj.date} text={obj.text} link={obj.link} url={obj.url} />
      })
      :
      [...new Array(4)].map((_, index) => <NewsSkeleton key={index} />)
      }
    </div>
  );
}

export default React.memo(NewsReducer);