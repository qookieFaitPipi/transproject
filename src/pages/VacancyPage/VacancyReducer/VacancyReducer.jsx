import React, { useState, useEffect } from 'react';
import styles from './VacancyReducer.module.scss';
import axios from 'axios';

// components
import Vacancy from './Vacancy/Vacancy';

const VacancyReducer = () => {
  const [vacancy, setVacancy] = useState([]);
  useEffect(() => {
    axios.get('https://backend.tpe.su/get_vacancy').then((response) => {
      setVacancy(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className={styles.reducer}>
      <div className={styles.reducerContent}>
        {vacancy.map(obj => {
          if(obj.active === 1) {
            return <Vacancy 
              key={obj.id} 
              id={obj.id}
              title={obj.title}
              price={obj.price} 
              duties={obj.duties} 
              requirements={obj.requirements} 
              conditions={obj.conditions} 
            />    
          }
        })}
      </div>
    </div>
  )
}

export default React.memo(VacancyReducer);