import React from "react";
import styles from './MapComponent.module.scss';

const MapComponent = () => {
  return(
    <div className={styles.objectsMap}>
      <div className={styles.objectsContent}>
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae22bef55a90880782f695b678f71a224832a7ceab8788a5fc0abb27d6d88f984&amp;source=constructor" width="100%" height="520" frameborder="0"></iframe>      </div>
    </div>
  );
}

export default React.memo(MapComponent);