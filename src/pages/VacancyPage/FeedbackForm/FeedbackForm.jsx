import React, { useState } from 'react'
import styles from './FeedbackForm.module.scss';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telnum, setTelnum] =  useState('');
  const [vacancy, setVacancy] = useState('Ведущий инженер (градостроительство)');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState();

  const sendFeedback = () => {
    if(name === '') {
      alert("Введите Ваши ФИО");
      return;
    } else if(email === '' || !email.includes('@') || !email.includes('.')) {
      alert("Введите Вашу почту");
      return;
    }

    const formData = new FormData();
    formData.append('name', name)
    formData.append('email', email)
    formData.append('telnum', telnum)
    formData.append('vacancy', vacancy)
    formData.append('message', message)
    formData.append('file', file[0])

    fetch('https://hosting.alexavr.ru/send_feedback', {
      method: 'post',
      body: formData
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if(data.is_send) {
        alert("Мы получили Ваш отлик");
      }
      window.location.reload()

    })
    setName('');
    setEmail('');
    setTelnum('');
    setMessage('');
    setFile();
  }

  return (
    <div className={styles.feedbackForm} id='feedBackForm'>
      <div className={styles.feedbackFormContent}>
        <h4>Откликнуться на вакансию</h4>
        <div className={styles.feedbackNameBlock}>
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
          <textarea className={styles.feedbackMessageInput} name='message' onChange={(e) => setMessage(e.target.value)} type="text" />
        </div>

        <div className={styles.feedbackNameBlock}>
          <input className={styles.feedbackFileInput} name='file' id='feedbackFileInput' onChange={(e) => setFile(e.target.files)} type="file" />
        </div>

        <div className={styles.feedbackContinueBlock}>
          <input className={styles.feedbackContinueInput} onClick={sendFeedback} value='Отправить' type="submit" />
        </div>
      </div>
    </div>
  )
}

export default React.memo(FeedbackForm);