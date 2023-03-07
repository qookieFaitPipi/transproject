import React from "react";
import styles from './Object.module.scss';

const Object = (props) => {
  return(
    <div className={styles.object}>
      <h4 className={styles.objectTitle}>{props.title}</h4>
      <p className={styles.objectText}>{props.text}</p>
    </div>
  );
}

export default React.memo(Object);