import React from "react";
import styles from './FullPageWall.module.scss';

const FullPageWall = () => {
  return(
    <div className={styles.fullPageWall}>
      <h1 className={styles.fullPageTitle}>ТранспроектИнжиниринг</h1>
      <div className={styles.quickMessage}></div>
    </div>
  );
}

export default React.memo(FullPageWall);