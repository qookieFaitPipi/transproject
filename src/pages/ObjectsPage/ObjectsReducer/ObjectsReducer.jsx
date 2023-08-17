import React, {useEffect, useState} from "react";
import styles from './ObjectsReducer.module.scss';
import axios from "axios";

// compoentns
import ObjectsItem from "./ObjectsItem/ObjectsItem";

const ObjectsReducer = (props) => {
  const [objects, setObjects] = useState([]);
  useEffect(() => {
    axios.get('https://hosting.alexavr.ru/get_objects').then((response) => {
      setObjects(response.data)
    });
  }, []);
  
  return(
    <div className={styles.reducer}>
      {objects.filter((item) => item.title.toLowerCase().includes(props.searchValue.toLowerCase())).map(object => {
        return <ObjectsItem key={object.id} title={object.title} location={object.location} types={object.types} />
      })}
    </div>
  );
}

export default React.memo(ObjectsReducer);