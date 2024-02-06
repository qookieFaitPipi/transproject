import React from "react";
import styles from './Tools.module.scss';

// tools
import tl1 from './../../../Assets/img/tools/tl1.jpg';
import tl2 from './../../../Assets/img/tools/tl2.jpg';
import tl3 from './../../../Assets/img/tools/tl3.jpg';
import tl4 from './../../../Assets/img/tools/tl4.png';
import tl5 from './../../../Assets/img/tools/tl5.jpg';
import tl6 from './../../../Assets/img/tools/tl6.jpg';

const Tools = () => {
  return(
    <div className={styles.tools}>
      <div className={styles.toolsContent}>

        <div className={styles.toolsTitleBlock}>
          <div className={styles.toolsTitle}>Виды работ</div>
        </div>

        <div className={styles.toolItem} style={{backgroundColor: '#ebebeb', color: '#000'}}>
          <div className={styles.toolImageBlock}>
            <img className={styles.toolImage} src={tl1} alt="" />
          </div>
          <div className={styles.toolTextBlock}>
            <h4 className={styles.toolTitle}>Документация по планировке территории</h4>
            <hr style={{color: '#000'}}/>
            <p className={styles.toolDescription}>Документация по планировке территории (проект планировки территории и проект межевания территории) является основополагающим элементом исходно-разрешительной документации для осуществления архитектурно-градостроительного проектирования и определяет основные условия и ограничения территориального размещения объекта.
              Разработку проектов планировки и проектов межевания территорий осуществляет группа градостроительного проектирования. Специалисты группы имеют большой опыт разработки документации по планировке территорий для размещения линейных объектов (автомобильные дороги, линии метрополитена, трубопроводы), а также успешный опыт получения согласований разработанной документации в исполнительных органах государственной власти Санкт-Петербурга и Ленинградской области и других субъектов Российской Федерации.
              Разработка документации осуществляется в соответствии с требованиями Градостроительного кодекса Российской Федерации и Постановления Правительства Российской Федерации от 12 мая 2017 г. №564 «Об утверждении Положения о составе и содержании проектов планировки территорий, предусматривающих размещение одного или нескольких линейных объектов».
            </p>
          </div>
        </div>

        <div className={styles.toolItem}>
          <div className={styles.toolTextBlock}>
            <h4 className={styles.toolTitle}>Предпроектная документация</h4>
            <hr style={{color: '#000'}}/>
            <p className={styles.toolDescription}>Предпроектная документация разрабатывается в целях:<br/>
              1. Обоснования возможности и целесообразности расположения объекта в соответствии с нормами и требованиями.<br/>
              2. Изучения и анализа экологических ограничений зоны расположения объекта.<br/>
              3. Определения предварительной стоимости строительства.<br/>
              От качества предпроектной документации зависит выбор оптимальных проектных решений, необходимость и достаточность получения исходно-разрешительных документов для проектирования,
              соответствие объекта строительства градостроительным требованиям с учетом экологических, историко-культурных, социальных, санитарных и строительных норм.
            </p>
          </div>
          <div className={styles.toolImageBlock}>
            <img className={styles.toolImage} src={tl2} alt="" />
          </div>
        </div>

        <div className={styles.toolItem} style={{backgroundColor: '#ebebeb', color: '#000'}}>
          <div className={styles.toolImageBlock}>
              <img className={styles.toolImage} src={tl3} alt="" />
          </div>
          <div className={styles.toolTextBlock}>
            <h4 className={styles.toolTitle}>Инженерные изыскания</h4>
            <hr style={{color: '#000'}}/>
            <p className={styles.toolDescription}>Достоверность, полнота и качество инженерных изысканий определяет корректность принимаемых технических решений и достоверность разрабатываемой проектной документации.
              Специалисты компании участвуют в составлении программ инженерных изысканий, осуществляют проверку инженерно-геодезических, инженерно-геологических и археологических изысканий, а также выполняют инженерно-экологические и инженерно-гидрометеорологические изыскания собственными силами.
            </p>
          </div>
        </div>
        
        <div className={styles.toolItem}>
          <div className={styles.toolTextBlock}>
            <h4 className={styles.toolTitle}>Разработка проектной и рабочей документации</h4>
            <hr style={{color: '#000'}}/>
            <p className={styles.toolDescription}>Мы разрабатываем проектно-сметную документацию на новое строительство или реконструкцию (капитальный ремонт) 
              линейных объектов транспортной инфраструктуры в полном соответствии с Постановлением Правительства №87 «О составе разделов проектной документации
              и требованиях к их содержанию», что позволяет успешно защищать проектные решения в органах экспертизы. Специалисты компании имеют большой опыт 
              взаимодействия с государственными и негосударственными органами экспертизы в разных регионах Российской Федерации. Опыт и знание процесса 
              проектирования позволяет нам максимально сокращать сроки разработки проектной документации и получения положительного заключения экспертизы, 
              а в случае размещения объекта в границах водоохранных зон – государственной экологической экспертизы. ООО «ТранспроектИнжиниринг» является членом 
              саморегулируемой организации Ассоциация проектных организаций «Союзпетрострой - Проект» и имеет право выполнять разработку проектной документации 
              в отношении особо опасных, технически сложных и уникальных объектов капитального строительства (кроме объектов использования атомной энергии).
            </p>
          </div>
          <div className={styles.toolImageBlock}>
            <img className={styles.toolImage} src={tl4} alt="" />
          </div>
        </div>

        <div className={styles.toolItem} style={{backgroundColor: '#ebebeb', color: '#000'}}>
          <div className={styles.toolImageBlock}>
              <img className={styles.toolImage} src={tl5} alt="" />
          </div>
          <div className={styles.toolTextBlock}>
            <h4 className={styles.toolTitle}>Проектные работы в области охраны окружающей среды</h4>
            <hr style={{color: '#000'}}/>
            <p className={styles.toolDescription}>Одним из направлений проектной деятельности компании является решение задач в области охраны окружающей среды, а именно:<br/>
              • разработка раздела «Перечень мероприятий по охране окружающей среды» (ПМООС) / «Мероприятия по охране окружающей среды» (МООС) в составе проектной (и предпроектной) документации по объектам капитального строительства;<br/>
              • выполнение «Оценки воздействия на окружающую среду» (включая организацию и сопровождение процедуры общественных обсуждений с гражданами и общественными организациями) в соответствии с требованиями Приказа Минприроды России от 01.12.2020 №999 «Об утверждении требований к материалам оценки воздействия на окружающую среду» в составе ПМООС / МООС;<br/>
              • разработка «Проекта санитарно-защитной зоны» и его согласование с органами санитарно-эпидемиологического надзора;<br/>
              • разработка проектной и рабочей документации по шумозащитным мероприятиям (акустические экраны, шумозащитное остекление зданий).<br />
              Компания оказывает услуги по выполнению функций Заказчика в части сопровождения проектной документации при ее согласовании Федеральным агентством по рыболовству или его территориальными управлениями в соответствии с требованиями Постановления Правительства Российской Федерации от 30.04.2013 №384 «О согласовании Федеральным агентством по рыболовству строительства и реконструкции объектов капитального строительства, внедрения новых технологических процессов и осуществления иной деятельности, оказывающей воздействие на водные биологические ресурсы и среду их обитания».<br/>
            </p>
          </div>
        </div>

        <div className={styles.toolItem}>
          <div className={styles.toolTextBlock}>
            <h4 className={styles.toolTitle}>Проекты рекультивации</h4>
            <hr style={{color: '#000'}}/>
            <p className={styles.toolDescription}>Одним из направлений проектных работ компании в области охраны окружающей среды является обоснование хозяйственной деятельности по ликвидации объектов накопленного вреда окружающей среде (свалки ТКО и промышленных отходов, шламонакопители и пр.). Обоснование указанной хозяйственной деятельности осуществляется посредством разработки «Проекта рекультивации земель» в соответствии с Постановлением Правительства Российской Федерации от 04.05.2018 № 542 «Об утверждении правил организации работ по ликвидации накопленного вреда окружающей среде» и Постановлением Правительства РФ от 10.07.2018 № 800 «О проведении рекультивации и консервации земель».
            </p>
          </div>
          <div className={styles.toolImageBlock}>
            <img className={styles.toolImage} src={tl6} alt="" />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default React.memo(Tools);