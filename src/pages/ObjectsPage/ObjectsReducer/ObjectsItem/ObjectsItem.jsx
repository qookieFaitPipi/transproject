import React from "react";
import styles from './ObjectsItem.module.scss';

const Object = (props) => {
  return(
    <div className={styles.object}>
      <div className={styles.objectTitle}>{props.title}</div>
      <div className={styles.objectText}>Местоположение: {props.location}</div>
      <div className={styles.objectText}>Виды работ: {props.types}</div>
    </div>
  );
}

export default React.memo(Object);