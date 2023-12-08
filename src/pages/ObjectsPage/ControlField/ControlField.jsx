import React, { useState } from 'react';
import styles from './ControlField.module.scss';
import axios from "axios";

const ControlField = (props) => {
  const [sortType, setSortType] = useState();
  const [active, setActive] = useState(0);

  const onSearch = (event) => {
    props.setSearchValue(event.target.value);
  }

  const changeSortType = (index) => {
    axios.post('https://backend.tpe.su/sort_by_param/' + index).then((response) => {
      props.setObjects(response.data);
      setSortType(index)
    });
  }

  return (
    <div className={styles.controlContainer}>
      <div className={styles.controlSortBlock}>
        <div className={styles.controlSortContent}>
          <div className={styles.controlSortTitle}>Сортировка по:</div>
          <div className={styles.controlSortText} onClick={() => setActive(!active)}>{sortType === 1 ? 'Алфавиту' : sortType === 2 ? 'Дате' : 'нет сортировки'}</div>
        </div>
        <div className={styles.controlSortPopup} style={active ? {display: 'block'} : {display: 'none'}} onClick={() => setActive(!active)}>
          <div className={styles.controlSortItm} onClick={() => changeSortType(1)}>Алфавиту</div>
          <div className={styles.controlSortItm} onClick={() => changeSortType(2)}>Дате</div>
        </div>
      </div>
      <input className={styles.controlSearchInput} value={props.searchValue} onChange={onSearch} placeholder='Поиск...' type="text" />
    </div>
  )
}

export default React.memo(ControlField);