import React, { useState } from 'react'
import styles from './FeedbackForm.module.scss';

// files
import fl5 from './../../../Assets/files/fl5.pdf';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telnum, setTelnum] =  useState('');
  const [vacancy, setVacancy] = useState('Ведущий инженер (градостроительство)');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(undefined);
  const [agree, setAgree] = useState('');

  const sendFeedback = () => {
    if(name === '') {
      alert("Введите Ваши ФИО");
      return;
    } else if(email === '' || !email.includes('@') || !email.includes('.')) {
      alert("Введите Вашу почту");
      return;
    } else if(file === undefined) {
      alert("Прикрепите Ваше резюме");
      return;
    } else if(!agree) {
      alert("Необходимо согласие на обработку персональных данных");
      return;
    }

    const formData = new FormData();
    formData.append('name', name)
    formData.append('email', email)
    formData.append('telnum', telnum)
    formData.append('vacancy', vacancy)
    formData.append('message', message)
    formData.append('file', file)

    fetch('https://hosting.alexavr.ru/send_feedback', {
      method: 'post',
      body: formData
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if(data.is_send) {
        setName('');
        setEmail('');
        setTelnum('');
        setMessage('');
      }
    })
    alert("Мы получили Ваш отлик");
  }

  return (
    <div className={styles.feedbackForm} id='feedBackForm'>
      <div className={styles.feedbackFormContent}>
        <div className={styles.feedbackFormTitle}>Откликнуться на вакансию</div>

        <div className={styles.feedbackNameBlock} style={{marginTop: '0px'}}>
          <label className={styles.feedbackNameLabel}>Ваши ФИО</label>
          <input className={styles.feedbackNameInput} value={name} name='name' onChange={(e) => setName(e.target.value)} placeholder='Иванов Иван Иванович' type="text" />
        </div>

        <div className={styles.feedbackNameBlock}>
          <label className={styles.feedbackNameLabel}>Ваша почта</label>
          <input className={styles.feedbackNameInput} value={email} name='email' onChange={(e) => setEmail(e.target.value)} placeholder='example@mail.ru' type="text" />
        </div>

        <div className={styles.feedbackNameBlock}>
          <label className={styles.feedbackNameLabel}>Ваш номер телефона</label>
          <input className={styles.feedbackNameInput} value={telnum} name='telnum' onChange={(e) => setTelnum(e.target.value)} placeholder='+70000000000' type="tel" />
        </div>

        <div className={styles.feedbackNameBlock}> 
          <label className={styles.feedbackNameLabel}>Вакансия</label>
          <select className={styles.feedbackSelectInput} defaultValue={vacancy} name='vacancy' onChange={(e) => setVacancy(e.target.value)}>
            <option>Ведущий инженер (градостроительство)</option>
            <option>Главный инженер проекта</option>
            <option>Ведущий инженер (проектирование автомобильных дорог)</option>
          </select>
        </div>

        <div className={styles.feedbackNameBlock}>
          <label className={styles.feedbackNameLabel}>Сообщение (необязательно)</label>
          <textarea className={styles.feedbackMessageInput} name='message' value={message} onChange={(e) => setMessage(e.target.value)} type="text" />
        </div>

        <div className={styles.feedbackNameBlock}>
          <input className={styles.feedbackFileInput} name='file' id='feedbackFileInput' onChange={(e) => setFile(e.target.files[0])} type="file" />
        </div>

        <div className={styles.feedbackCheckBoxBlock}>
          <input className={styles.feedbackCheckBoxInput} id='feedbackFileInput' onChange={() => setAgree(!agree)} type="checkbox" />
          <div className={styles.feedbackCheckBoxText}>Предоставляя свои персональные данные даю согласие на обработку, хранение и использование своих персональных данных на основании ФЗ № 152-ФЗ «О персональных данных» от 27.07.2006 г. в целях содействия мне в трудоустройстве и не возражаю против передачи моих персональных для ознакомления и проверки специалистам и руководителям компании, принимающим участие в процессе подбора персонала. С <a href={fl5}>«Политикой обработки персональных данных»</a> в ООО «ТранспроектИнжиниринг» ознакомлен.</div>
        </div>

        <div className={styles.feedbackContinueBlock}>
          <input className={styles.feedbackContinueInput} onClick={sendFeedback} value='Отправить' type="submit" />
        </div>
      </div>
    </div>
  )
}

export default React.memo(FeedbackForm);