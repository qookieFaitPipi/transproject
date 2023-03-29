import React from "react";
import styles from './Location.module.scss';

const Location = () => {
  return(
    <div className={styles.location}>
      <div className={styles.locationContent}>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad75bedce450e4823e83f577323332922c8e6fe0efd40a12ad7c21666662d8b06&amp;source=constructor" width="1105" height="320" frameBorder="0"></iframe>
      </div>
    </div>
  );
}

export default React.memo(Location);