import React from "react";
import styles from './ObjectsReducer.module.scss';

// compoentns
import ObjectsItem from "./ObjectsItem/ObjectsItem";

const ObjectsReducer = (props) => {
  return(
    <div className={styles.reducer}>
      {props.objects.filter((item) => item.title.toLowerCase().includes(props.searchValue.toLowerCase())).map(object => {
        return <ObjectsItem key={object.id} title={object.title} location={object.location} types={object.types} />
      })}
    </div>
  );
}

export default React.memo(ObjectsReducer);