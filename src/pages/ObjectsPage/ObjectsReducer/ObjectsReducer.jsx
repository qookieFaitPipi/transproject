import React, {useEffect, useState} from "react";
import styles from './ObjectsReducer.module.scss';
import axios from "axios";

// compoentns
import Object from "./Object/Object";

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
        return <Object key={object.id} title={object.title} text={object.text} />
      })}
    </div>
  );
}

export default React.memo(ObjectsReducer);