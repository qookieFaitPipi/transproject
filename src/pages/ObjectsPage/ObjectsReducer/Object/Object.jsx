import React from "react";
import styles from './Object.module.scss';

const Object = (props) => {
  return(
    <div className={styles.object}>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default React.memo(Object);