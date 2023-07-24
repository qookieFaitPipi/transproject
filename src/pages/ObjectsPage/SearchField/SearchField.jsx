import React from 'react';
import styles from './SearchField.module.scss';

const SearchField = (props) => {
  const onSearch = (event) => {
    props.setSearchValue(event.target.value);
  }

  return (
    <div className={styles.logoSearchContainer}>
      <input className={styles.logoSearchInput} value={props.searchValue} onChange={onSearch} placeholder='Поиск...' type="text" />
    </div>
  )
}

export default React.memo(SearchField);