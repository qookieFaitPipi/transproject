import React from "react";
import styles from './VacancyList.module.scss';

const VacancyList = () => {
  return(
    <div className={styles.vacancyList}>
      <div className={styles.vacancyListContent}>

        <div className={styles.vacancyListItem}>
          <div className={styles.vacancyPrice}>
            <div className={styles.vacancyPriceInfoBlock}>
              <p className={styles.vacancyPriceText}>от 69 000 до 92 000 руб.<br /> до вычета налогов</p>
              <p className={styles.vacancyPriceInfo} onClick={() => document.getElementById('feedBackForm').scrollIntoView({behavior: "smooth"})}>Откликнуться</p>
            </div>
          </div>
          <div className={styles.vacancyInfo}>
            <h4 className={styles.vacancyTitle}>Ведущий инженер (градостроительство)</h4>
            <div className={styles.vacancyText}>
              <ul> <b>Обязанности:</b>
                <li>– Сбор исходных данных для проектирования;</li>
                <li>– Разработка документации по планировке территории (проект планировки территории, проект межевания);</li>
                <li>– Согласование документации по планировке территории в органах исполнительной власти и заинтересованных организациях.</li>
              </ul>
              <ul> <b>Требования:</b>
                <li>– Высшее профессиональное образование в области архитектурно-градостроительного проектирования по специальностям «Городское строительство и хозяйство»,<br/> «Городской кадастр», «Земельный кадастр», «Землеустройство», «Автомобильные дороги и аэродромы»;</li>
                <li>– Знание Градостроительного, Земельного, Лесного и Водного кодексов РФ, федерального законодательства РФ;</li>
                <li>– Опыт разработки документации по планировке территории линейных объектов;</li>
                <li>— Опыт согласования документации по планировке территории в г. Санкт-Петербург будет преимуществом;</li>
                <li>– Владение ПК (MS Office, AutoCad, GIS MapInfo Professional, работа со специализированными общедоступными источниками градостроительной информации);</li>
                <li>— Коммуникабельность, ответственность, внимательность к документам, грамотность.</li>
              </ul>
              <ul> <b>Условия:</b>
                <li>– Своевременная достойная заработная плата. Окладно-премиальная система оплаты труда;</li>
                <li>– Интересные проекты‚ возможность профессионального роста;</li>
                <li>– Офис в шаговой доступности от м. Московские ворота;</li>
                <li>– ДМС после испытательного срока;</li>
                <li>– Пятидневная рабочая неделя, с 09.30 до 18.00.</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.vacancyListItem}>
          <div className={styles.vacancyPrice}>
            <div className={styles.vacancyPriceInfoBlock}>
              <p className={styles.vacancyPriceText}>от 112 500 до 120 000 руб.<br /> до вычета налогов</p>
              <p className={styles.vacancyPriceInfo} onClick={() => document.getElementById('feedBackForm').scrollIntoView({behavior: "smooth"})}>Откликнуться</p>
            </div>
          </div>
          <div className={styles.vacancyInfo}>
            <h4 className={styles.vacancyTitle}>Главный инженер проекта</h4>
            <div className={styles.vacancyText}>
              <ul> <b>Обязанности:</b><br />
                <b>Разработка отчета об инженерно-экологических изысканиях (ИЭИ), в том числе:</b>
                <li>— Руководство группой инженерной экологии;</li>
                <li>— Определение состава и объема работ в составе ИЭИ;</li>
                <li>— Составление задания на проведение полевых и лабораторных работ в составе ИЭИ субподрядной организации;</li>
                <li>— Приемка результатов полевых и лабораторных работ, выполненных субподрядной организацией;</li>
                <li>— Участие в камеральной обработке результатов полевых и лабораторных работ;</li>
                <li>— Контроль подготовки запросов и получения ответов от уполномоченных органов исполнительной власти и специализированных организаций о <br /> существующих ограничениях намечаемой хозяйственной деятельности по объекту проектирования (ООПТ, ЗСО, полезные ископаемые и пр.);</li>
                <li>— Участие в подготовке графических приложений в составе ИЭИ;</li>
                <li>— Участие и контроль за составлением отчета об ИЭИ;</li>
                <li>— Сопровождение отчета об ИЭИ в органах экспертизы (гос.экологическая экспертиза, Главгосэкспертиза): общение с экспертами, снятие замечаний.</li>
                <b>Разработка раздела «Мероприятия по охране окружающей среды» (МООС) в составе проектной документации:</b>
                <li>— Разработка раздела МООС в соответствии с Постановлением Правительства РФ от 16.02.2008 г. №87 «О составе разделов проектной документации и требованиях к их содержанию»;</li>
                <li>— Выполнение Оценки воздействия на окружающую среду в соответствии с Приказом Госкомэкологии РФ от 16.05.2000 г. №372 «Об утверждении Положения об <br /> оценке воздействия намечаемой хозяйственной и иной деятельности на окружающую среду в Российской Федерации»;</li>
                <li>— Увязка проектных решений во взаимодействии с разработчиками смежных разделов проектной документации (ПОС, ТКР и пр.);</li>
                <li>— Сопровождение раздела МООС в органах экспертизы (гос.экологическая экспертиза, Главгосэкспертиза): общение с экспертами, снятие замечаний.</li>
                <b>Иные природоохранные разделы проектной документации:</b>
                <li>Применительно к объектам проектирования (в соответствии со спецификой объекта и/или требованиями Задания на проектирование) возможна необходимость разработки:</li>
                <li>— Проекта санитарно-защитной зоны (разработка проекта, сопровождение при санитарно-эпидемиологической экспертизе во ФБУЗ ЦГиЭ, согласовании в Роспотребнадзоре);</li>
                <li>— Регламента по обращению со строительными отходами.</li>
              </ul>
              <ul> <b>Требования:</b>
                <li>– Высшее инженерно-техническое (экологическое) образование;</li>
                <li>– Стаж работы не менее 6-ти лет;</li>
                <li>– Знание требований законодательства, нормативных актов, методических документов в области проектно-изыскательских работ и охраны окружающей среды;</li>
                <li>— Знание состава и порядка выполнения инженерно-экологических изысканий, проектных работ;</li>
                <li>– Владение программным обеспечением: Microsoft Office, AutoCad (на уровне «уверенного пользователя»), программные комплексы серии «Эколог» (фирмы «Интеграл»), <br />акустических расчетов (АРМ «Акустика» / «Эколог-шум»);</li>
                <li>— Наличие опыта взаимодействия с органами исполнительной власти в части согласования результатов проектных работ (Росприроднадзор, Роспотребнадзор, <br /> Росрыболовство, органы государственной и государственной экологической экспертизы.</li>
              </ul>
              <ul> <b>Условия:</b>
                <li>– Начальный оклад и должность уточняется по результатам собеседования (в зависимости от опыта и компетенций кандидата);</li>
                <li>– Пятидневная рабочая неделя, с 9.30 до 18.15;</li>
                <li>– Официальное трудоустройство;</li>
                <li>– ДМС после испытательного срока;</li>
                <li>– Окладно-премиальная система оплаты труда;</li>
                <li>– Обучение, повышение квалификации;</li>
                <li>– Офис – в шаговой доступности от станции метро Московские ворота или Фрунзенская.</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.vacancyListItem}>
          <div className={styles.vacancyPrice}>
            <div className={styles.vacancyPriceInfoBlock}>
              <p className={styles.vacancyPriceText}>от 97 700 до 120 000 руб.<br /> до вычета налогов</p>
              <p className={styles.vacancyPriceInfo} onClick={() => document.getElementById('feedBackForm').scrollIntoView({behavior: "smooth"})}>Откликнуться</p>
            </div>
          </div>
          <div className={styles.vacancyInfo}>
            <h4 className={styles.vacancyTitle}>Ведущий инженер (проектирование автомобильных дорог)</h4>
            <div className={styles.vacancyText}>
              <ul> <b>Обязанности:</b>
                <li>– Анализ исходных данных для проектирования объектов и технических требований заказчиков;</li>
                <li>– Разработка проектной и рабочей документации на строительство, реконструкцию и капитальный ремонт автомобильных дорог в соответствии с требованиями действующих нормативных документов;</li>
                <li>– Знания по разработке раздела «Проект полосы отвода» и подразделов «Благоустройство», «Технические средства организации дорожного движения» - будут преимуществом;</li>
                <li>– Взаимодействие с разработчиками смежных разделов;</li>
                <li>– Разработка планировочных решений автомобильных дорог в составе проектов планировки территории.</li>
             </ul>
              <ul> <b>Требования:</b>
                <li>– Высшее инженерно-техническое образование;</li>
                <li>– Стаж работы в области проектирования автомобильных дорог - не менее 5-ти лет;</li>
                <li>– Знание требований законодательства, нормативных актов, методических документов в области архитектурно-градостроительного проектирования и инженерных изысканий;</li>
                <li>— Знание состава и порядка выполнения инженерных изысканий, проектных работ;</li>
                <li>– Владение программным обеспечением: Microsoft Office, AutoCad (на уровне «уверенного пользователя»), «Robur»;</li>
                <li>— Опыт сопровождения разработанной документации в государственной экспертизе будет преимуществом.</li>
              </ul>
              <ul> <b>Условия:</b>
                <li>– Начальный оклад и должность уточняется по результатам собеседования (в зависимости от опыта и компетенций кандидата);</li>
                <li>– Пятидневная рабочая неделя, с 9.30 до 18.15;</li>
                <li>– Официальное трудоустройство;</li>
                <li>– ДМС после испытательного срока;</li>
                <li>– Окладно-премиальная система оплаты труда;</li>
                <li>– Обучение, повышение квалификации;</li>
                <li>– Офис – в шаговой доступности от станции метро Московские ворота или Фрунзенская.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(VacancyList);