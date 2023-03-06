import React from "react";
import styles from './ObjectsReducer.module.scss';

import Object from "./Object/Object";
const ObjectsReducer = () => {
  const objects = [
    { 
      id: 1, 
      title: '', 
      text: '',
    },
  ];
  return(
    <div className={styles.reducer}>
      {objects.map(object => {
        return <Object key={object.id} title={object.title} text={object.text} />
      })}
    </div>
  );
}

export default React.memo(ObjectsReducer);