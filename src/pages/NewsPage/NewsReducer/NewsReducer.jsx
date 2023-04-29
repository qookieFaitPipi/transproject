import React from "react";
import styles from './NewsReducer.module.scss';

import SmallNews from "./SmallNews/SmallNews";
import LargeNews from "./LargeNews/LargeNews";

// images
import nw1 from './../../../assets/img/news/nw1.jpg';
import nw2 from './../../../assets/img/news/nw2.png';
import nw3 from './../../../assets/img/news/nw3.jpg';

import nw4 from './../../../assets/img/news/nw4.jpg';
import nw5 from './../../../assets/img/news/nw5.jpg';
import nw6 from './../../../assets/img/news/nw6.jpg';

import nw7 from './../../../assets/img/news/nw7.png';
import nw8 from './../../../assets/img/news/nw8.png';
import nw9 from './../../../assets/img/news/nw9.jpg';

// urls
import fl1 from './../../../assets/files/УВЕДОМЛЕНИЕ КПООС_v.2.pdf';
import fl3 from './../../../assets/files/fl3.pdf';

const NewsReducer = () => {
  const news = [
    {
      id: 7,
      picture : nw9,
      date: '27.04.2023', 
      title: 'Рекультивация земельного участка, расположенного в Кореновском районе, 4500 метров северо-западнее г. Кореновска',
      text: '27.04.2023 Обществом с ограниченной ответственностью «ТранспроектИнжиниринг» в рамках Муниципального контракта № МК-28 от 03.10.2022 г. с Администрацией Кореновского городского поселения Кореновского района Краснодарского края выполняются проектно-изыскательские работы по объекту «Рекультивация земельного участка, расположенного в Кореновском районе, 4500 метров северо-западнее г. Кореновска», включая разработку Проекта рекультивации земель и выполнение оценки воздействия на окружающую среду (ОВОС). В соответствии с Федеральным законом от 23.11.1995 № 174-ФЗ «Об экологической экспертизе» Проект рекультивации земель по объекту, включая материалы предварительной оценки воздействия на окружающую среду (ОВОС), является объектом государственной экологической экспертизы федерального уровня. В связи с чем, в соответствии с приказом Министерства природных ресурсов и экологии Российской Федерации от 01.12.2020 № 999 «Об утверждении требований к материалам оценки воздействия на окружающую среду» по объекту государственной экологической экспертизы – Проекту рекультивации земель по объекту «Рекультивация земельного участка, расположенного в Кореновском районе, 4500 метров северо-западнее г. Кореновска», включая предварительные материалы оценки воздействия на окружающую среду, проводятся общественные обсуждения. Уведомление о проведении указанных общественных обсуждений доступно по',
      link: 'ссылке.',
      url: fl3,
      size: 1,
    },
    {
      id: 1,
      picture1 : nw8,
      picture2 : nw7,
      date: '09.11.2022', 
      title: 'О ПРОВЕДЕНИИ ОБЩЕСТВЕННЫХ ОБСУЖДЕНИЙ ПРОЕКТНОЙ ДОКУМЕНТАЦИИ ПО ОБЪЕКТУ «БАССЕЙН В ЗАПАДНОЙ ЧАСТИ КРЕСТОВСКОГО ОСТРОВА», ВКЛЮЧАЯ ПРЕДВАРИТЕЛЬНЫЕ МАТЕРИАЛЫ ПО ОЦЕНКЕ ВОЗДЕЙСТВИЯ НА ОКРУЖАЮЩУЮ СРЕДУ',
      text: 'Обществом с ограниченной ответственностью «ТранспроектИнжиниринг» по договору с Акционерным обществом «Зенит-Арена» выполняются работы по оценке воздействия на окружающую среду в составе проектной документации по объекту «Бассейн в западной части Крестовского острова». В соответствии с Федеральным законом от 23.11.1995 № 174-ФЗ «Об экологической экспертизе», Федеральным законом от 31.07.1998 № 155-ФЗ «О внутренних морских водах, территориальном море и прилежащей зоне Российской Федерации» проектная документация по объекту «Бассейн в западной части Крестовского острова» является объектом государственной экологической экспертизы федерального уровня. В связи с чем, в соответствии с приказом Министерства природных ресурсов и экологии Российской Федерации от 01.12.2020 № 999 «Об утверждении требований к материалам оценки воздействия на окружающую среду», постановлением Правительства Российской Федерации от 14.12.2021 № 2284 «О внесении изменений в постановление Правительства Российской Федерации от 3 апреля 2020 г. №440» по объекту государственной экологической экспертизы – проектной документации «Бассейн в западной части Крестовского острова», включая предварительные материалы оценки воздействия на окружающую среду, проводятся общественные обсуждения. Уведомление о проведении указанных общественных обсуждений доступно по',
      link: 'ссылке.',
      url: fl1,
      size: 2,
    },
    {
      id: 2,
      picture : nw6,
      date: '04.11.2022', 
      title: 'О ПРОВЕДЕНИИ ОБЩЕСТВЕННЫХ ОБСУЖДЕНИЙ ПРОЕКТНОЙ ДОКУМЕНТАЦИИ ПО ОБЪЕКТУ «БАССЕЙН В ЗАПАДНОЙ ЧАСТИ КРЕСТОВСКОГО ОСТРОВА», ВКЛЮЧАЯ ПРЕДВАРИТЕЛЬНЫЕ МАТЕРИАЛЫ ПО ОЦЕНКЕ ВОЗДЕЙСТВИЯ НА ОКРУЖАЮЩУЮ СРЕДУ',
      text: 'Уважаемые коллеги, друзья и соотечественники, желаем вам крепкого здоровья, мира и добра. Единство народа страны – залог ее силы и благополучия. С праздником!',
      link: '',
      url: '',
      size: 1,
    },
    {
      id: 3,
      picture1 : nw5,
      picture2 : nw4,
      date: '18.10.2022', 
      title: '',
      text: 'Сегодня состоялся Технический совет Комитета по развитию транспортной инфраструктуры Санкт-Петербурга по вопросу рассмотрения предпроектной документации по обоснованию размещения объекта «Вестибюль станции «Театральная» для нужд Санкт-Петербурга (далее – Объект). Согласно требованиям государственного заказчика, целями данной работы является: - Определение оптимального местоположения второго вестибюля станции «Театральная» и комплекса подземных сооружений для его организации; - Определение основных технико-экономических параметров строительства второго вестибюля (стоимость, срок строительства); - Определение градостроительных и инженерно-технических ограничений размещения объектов метрополитена; - Сбор исходных данных для последующего проектирования (определение границ землепользования, определение нагрузок на сети инженерно-технического обеспечения, оценка имущественно-правового статуса участков возможного размещения объекта); - Определение оптимального способа сооружения объекта. На Техническом совете, состоявшемся в июне 2022 года, были рассмотрены три варианта размещения Объекта, сегодня рассмотрели пять дополнительных вариантов. По результатам прошедшего Технического совета, Временно исполняющим обязанности председателя Комитета по развитию транспортной инфраструктуры Санкт-Петербурга Федотовым А.М. дано поручение осуществить технико-экономическое сравнение вариантов размещения вестибюля на ул. Декабристов, на участке между домами №37 и №39 и на Лермонтовском пр., д. 1/44.',
      link: '',
      url: '',
      size: 2,
    },
    {
      id: 4,
      picture : nw3,
      date: '16.10.2022', 
      title: '',
      text: 'Уважаемые коллеги, дорогие друзья! Поздравляем вас с Днем работников дорожного хозяйства! Интересных проектов, реализации самых смелых планов, здоровья, процветания! Коллектив ООО "ТранспроектИнжиниринг".',
      link: '',
      url: '',
      size: 1,
    },
    {
      id: 5,
      picture : nw2,
      date: '23.09.2022', 
      title: '',
      text: 'ООО «ТранспроектИнжиниринг» завершило разработку предпроектной документации по обоснованию размещения объекта: «Вестибюль № 2 станции «Приморская» для нужд Санкт-Петербурга. В июне 2022 состоялся научно-технический совет Комитета по развитию транспортной инфраструктуры Санкт-Петербурга, на котором было определено размещение второго вестибюля станции метро «Приморская». В результате анализа градостроительных, инженерно-технических, историко-культурных, экологических, социальных и имущественно-правовых условий и ограничений, выполненных расчетов и анализа пассажирских потоков на три расчетных периода (с 1-го по 10-й год эксплуатации, с 11-го по 20-й год эксплуатации, 20-й год эксплуатации), выбран вариант размещения объекта на участке ул. Беринга, напротив домов №36 и №38. Также в предпроектной документации определены технико-экономические параметры строительства объекта, выполнена проработка узла примыкания комплекса сооружений второго входа/выхода станции «Приморская» к действующей станции «Приморская». Планируемый срок начала эксплуатации – 2027 год. Следующая стадия – разработка документации по планировке территории для размещения объекта.',
      link: '',
      url: '',
      size: 1,
    },
    {
      id: 6,
      picture : nw1,
      date: '05.06.2022', 
      title: 'Поздравляем с профессиональным праздником сотрудников группы инженерной экологии!',
      text: 'Ежегодно, 5 июня, отмечается Всемирный день окружающей среды. День эколога — профессиональный праздник всех российских защитников природы, специалистов по охране окружающей среды, общественных деятелей и экологов-активистов. «День эколога» в России был учрежден Указом Президента РФ Владимира Путина 21 июля 2007 года по инициативе Комитета по экологии Государственной думы РФ.',
      link: '',
      url: '',
      size: 1,
    },
  ];

  return(
    <div className={styles.reducer}>
      {news.map(news => {
        if(news.size == 1) {
          return <SmallNews key={news.id} picture={news.picture} date={news.date} title={news.title} text={news.text} link={news.link} url={news.url} />
        } else if(news.size == 2) {
          return <LargeNews key={news.id} picture1={news.picture1} picture2={news.picture2} date={news.date} title={news.title} text={news.text} link={news.link} url={news.url} />
        }
      })}
    </div>
  );
}

export default React.memo(NewsReducer);