import React from "react";
import styles from './MapComponent.module.scss';

const MapComponent = () => {
  return(
    <div className={styles.objectsMap}>
      <div className={styles.objectsContent}>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab643d8589e049e46f4aecc1bb5c2e49382a0ee82c2d30f6ea4d64ed92d8a3e28&amp;source=constructor" width="100%" height="320" frameBorder="0"></iframe>     
      </div>
    </div>
  );
}

export default React.memo(MapComponent);