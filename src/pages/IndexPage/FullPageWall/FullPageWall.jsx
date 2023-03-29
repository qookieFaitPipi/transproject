import React, { useEffect, useState } from "react";
import styles from './FullPageWall.module.scss';

const FullPageWall = () => {
  let [message, setMessage] = useState('ДОКУМЕНТАЦИЯ ПО ПЛАНИРОВКЕ ТЕРРИТОРИИ');
  let array = [
    "ДОКУМЕНТАЦИЯ ПО ПЛАНИРОВКЕ ТЕРРИТОРИИ",
    "ПРЕДПРОЕКТНАЯ ДОКУМЕНТАЦИЯ",
    "ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ",
    "РАЗРАБОТКА ПРОЕКТНОЙ ДОКУМЕНТАЦИИ",
    "РАЗРАБОТКА РАБОЧЕЙ ДОКУМЕНТАЦИИ",
    "ПРОЕКТЫ РЕКУЛЬТИВАЦИИ"
  ]
  let i=0;

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every second!');
      setMessage(array[i]);
      i++;
      if(i == array.length) {
        i=0;
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return(
    <div className={styles.fullPageWall}>
      <h1 className={styles.fullPageTitle}>ТранспроектИнжиниринг</h1>
      <div className={styles.quickMessage}>{message}</div>
    </div>
  );
}

export default React.memo(FullPageWall);