import React from "react";
import styles from './ObjectsReducer.module.scss';

import Object from "./Object/Object";

const ObjectsReducer = (props) => {
  const objects = [
    { 
      id: 1, 
      title: 'ДПТ Бестужевская ул.', 
      text: 'Разработка документации по планировке территории для размещения линейного объекта «Бестужевская ул. от Лабораторного пр. до Кушелевской дороги» для нужд Санкт-Петербурга.',
    },
    { 
      id: 2, 
      title: 'Транспортная развязка ШМСД с ул. Коммуны', 
      text: 'Разработка документации по планировке территории по объекту «Транспортная развязка Широтной магистрали скоростного движения на пересечении с ул. Коммуны на участке от ул. Кржижановского до Хасанской ул. со строительством путепровода через железнодорожные пути»',
    },
    { 
      id: 3, 
      title: 'Транспортная развязка ШМСД с пр. Солидарности', 
      text: 'Разработка документации по планировке территории по объекту «Транспортная развязка Широтной магистрали скоростного движения на пересечении с пр. Солидарности на участке от ул. Кржижановского до Хасанской ул. со строительством путепровода над железнодорожными путями станции Дача Долгорукова и ликвидацией регулируемого железнодорожного переезда»',
    },
    { 
      id: 4, 
      title: 'Транспортная развязка ШМСД с Союзным пр.', 
      text: 'Разработка документации по планировке территории и разделов проектной документации «Мероприятия по охране окружающей среды» и «Проект рекультивации земель» по объекту «Транспортная развязка Широтной магистрали скоростного движения на пересечении с Союзным пр. на участке от ул. Коллонтай до пр. Энергетиков со строительством путепровода через железнодорожные пути Ладожского вокзала»',
    },
    { 
      id: 5, 
      title: 'Обоснование инвестиций ВКАД2', 
      text: 'Разработка раздела документации «Перечень мероприятий по охране окружающей среды» в рамках подготовки обоснования инвестиций по II этапу строительства Владивостокской кольцевой автомобильной дороги. Ул. Казанская – ул. Русская – ул. Маковского, осуществляемых в инвестиционный проект по созданию объекта капитального строительства «Строительство Владивостокской кольцевой автомобильной дороги в Приморском крае. II этап. Ул. Казанская – ул. Русская – ул. Маковского»',
    },
    { 
      id: 6, 
      title: 'Рекультивация Ершов', 
      text: 'Рекультивация земельных участков, нарушенных при складировании бытовых и других отходов, расположенных по адресу: Саратовская область, г. Ершов, в северо-восточной части города Ершова (кадастровый номер 64:13:003201:1); Саратовская область, г. Ершов, в северо-восточной части города в районе существующей свалки (кадастровый номер 64:13:003201:2).',
    },
    { 
      id: 7, 
      title: 'Выполнение проектно-изыскательских работ в составе проектной документации «Реконструкция вестибюля станции "Фрунзенская"', 
      text: 'Выполнение проектно-изыскательских работ в составе проектной документации «Реконструкция вестибюля станции "Фрунзенская" с полной заменой эскалаторов и созданием единого диспетчерского центра метрополитена»',
    },
    { 
      id: 8, 
      title: 'Выполнение работ по инженерно-экологическим изысканиям и разработке раздела «Перечень мероприятий по охране окружающей среды» проектной документации по реконструкции тяговой сети 825 в линии 1 Петербургского метрополитена', 
      text: 'Выполнение работ по инженерно-экологическим изысканиям и разработке раздела «Перечень мероприятий по охране окружающей среды» проектной документации по реконструкции тяговой сети 825 в линии 1 Петербургского метрополитена на станциях «Проспект Ветеранов», «Ленинский проспект», «Кировский завод», «Нарвская», «Балтийская», «Пушкинская», «Владимирская», «Площадь Восстания», «Чернышевская», «Выборгская», «Лесная», «Площадь Мужества», «Политехническая», «Академическая», «Гражданский проспект», «Девяткино»',
    },
    { 
      id: 9, 
      title: 'Разработка проектной документации и выполнение инженерных изысканий по объекту «Рекультивация территории санкционированной свалки твердых бытовых отходов в с.Казым Белоярского района»', 
      text: 'Разработка проектной документации и выполнение инженерных изысканий по объекту «Рекультивация территории санкционированной свалки твердых бытовых отходов в с.Казым Белоярского района»',
    },
    { 
      id: 10, 
      title: 'Выполнение проектно-изыскательских работ, необходимых для реконструкции существующих въездов со стороны ул. Байконурской на территорию гиппермаркета "ОКЕЙ"', 
      text: 'Выполнение проектно-изыскательских работ, необходимых для реконструкции существующих въездов со стороны ул. Байконурской на территорию гиппермаркета "ОКЕЙ"',
    },
    { 
      id: 11, 
      title: 'Разработка проектной документации по объекту: «Строительство двух ВЛ-110 кВ от вновь устанавливаемых ячеек 110 кВ ПС 110/10 кВ № 35 до ГПП 110/10 кВ, Мурманская область, в районе г. Оленегорска', 
      text: 'Выполнение «Инженерно-экологических изысканий», выполнение «Оценки воздействия на окружающую среду», разработка раздела «Мероприятия по охране окружающей среды» проектной документации по объекту: «Строительство двух ВЛ-110 кВ от вновь устанавливаемых ячеек 110 кВ ПС 110/10 кВ № 35 до ГПП 110/10 кВ, Мурманская область, в районе г. Оленегорска.',
    },
    { 
      id: 12, 
      title: 'Разработка проектно-сметной и технической документации по объекту: М-12 «Строящаяся скоростная автомобильная дорога Москва - Нижний Новгород – Казань», 7.3 этап', 
      text: 'Разработка проектно-сметной документации по объекту: М-12 «Строящаяся скоростная автомобильная дорога Москва - Нижний Новгород – Казань», 7.3 этап от северной границы села Большие Кайбицы до пересечения с автомобильной дорогой федерального значения Р-241 «Казань – Буинск - Ульяновск»',
    },
    { 
      id: 13, 
      title: 'Выполнение предварительной оценки воздействия на окружающую среду по объекту: «Строительство перевалочного комплекса в зоне 5 и 6 причалов»', 
      text: 'Выполнение предварительной оценки воздействия на окружающую среду по объекту: «Строительство перевалочного комплекса в зоне 5 и 6 причалов»',
    },
    { 
      id: 14, 
      title: 'Технический отчет в рамках специального обследования автомобильных дорог и искусственных сооружений в Удмуртской Республике', 
      text: 'Работы в составе работ по специальному обследованию автомобильных дорог и искусственных сооружений в Удмуртской Республике с составлением технического отчета.',
    },
    { 
      id: 15, 
      title: 'Разработка проектно-сметной и технической документации по объекту: М-12 «Строящаяся скоростная автомобильная дорога Москва - Нижний Новгород – Казань», 8 этап', 
      text: 'Разработка проектно-сметной и технической документации по объекту М-12 «Строящаяся скоростная автомобильная дорога Москва - Нижний Новгород – Казань», 8 этап км 663 – км 729 с мостовым переходом через р. Волга, Республика Татарстан (от пересечения с автомобильной дорогой федерального значения Р-241 «Казань — Буинск — Ульяновск» до пересечения с автомобильной дорогой регионального значения «Сорочьи Горы – Шали»).',
    },
    { 
      id: 16, 
      title: 'ДПТ «Транспортная развязка в разных уровнях в створе Витебского пр. и Парковой ул.»', 
      text: 'Подготовка документации по планировке территории для размещения линейного объекта «Транспортная развязка в разных уровнях в створе Витебского пр. и Парковой ул.» для нужд Санкт-Петербурга.',
    },
    { 
      id: 17, 
      title: 'ДПТ «Транспортная развязка на пересечении Лиговского пр. и Воздухоплавательной ул.»', 
      text: 'Подготовка документации по планировке территории для размещения линейного объекта «Транспортная развязка на пересечении Лиговского пр. и Воздухоплавательной ул.» для нужд Санкт-Петербурга.',
    },
    { 
      id: 18, 
      title: 'ДПТ «пр. Космонавтов от Дунайского пр. до Ковжинского пер.»', 
      text: 'Подготовка документации по планировке территории для размещения линейного объекта: "пр. Космонавтов от Дунайского пр. до Ковжинского пер."',
    },
    { 
      id: 19, 
      title: 'ДПТ «Строительство Кировско-Выборгской линии от станции «Проспект Ветеранов» до станции «Пулково»', 
      text: 'Подготовка документации по планировке территории для размещения линейного объекта: «Строительство Кировско-Выборгской линии от станции «Проспект Ветеранов» до станции «Пулково»',
    },
    { 
      id: 20, 
      title: 'МООС и сопровождение ДПТ по объекту «Строительство Владивостокской кольцевой автомобильной дороги в Приморском крае. I этап.»', 
      text: 'Разработка раздела проектной документации «Мероприятия по охране окружающей среды» и сопровождению разработки документации по планировке территории по созданию объекта капитального строительства «Строительство Владивостокской кольцевой автомобильной дороги в Приморском крае. I этап. Остров Русский - остров Елены - ул. Казанская» ',
    },
    { 
      id: 21, 
      title: 'МООС и проект СЗЗ по объекту: «Проектно-изыскательские работы по организации водоснабжения и водоотведения объектов туристического кластера расположенных в с. Старая Ладога Волховского района Ленинградской области»', 
      text: 'Разработка раздела «Мероприятия по охране окружающей среды» и Проекта санитарно-защитной зоны в составе проектной документации по объекту: «Проектно-изыскательские работы по организации водоснабжения и водоотведения объектов туристического кластера расположенных в с. Старая Ладога Волховского района Ленинградской области»',
    },
    { 
      id: 22, 
      title: 'ДПТ «ул. Варвары Петровой»', 
      text: 'Подготовка документации по планировке территории для размещения линейного объекта: «ул. Варвары Петровой» для нужд Санкт-Петербурга.',
    },
    { 
      id: 23, 
      title: 'ДПТ «ул. Володарского»', 
      text: 'Подготовка документации по планировке территории для размещения линейного объекта: «ул. Володарского» для нужд Санкт-Петербурга.',
    },
    { 
      id: 24, 
      title: 'ДПТ «Клубная ул.»', 
      text: 'Подготовка документации по планировке территории для размещения линейного объекта: «Клубная ул.» для нужд Санкт-Петербурга.',
    },
    { 
      id: 25, 
      title: 'ДПТ «Речной пер.»', 
      text: 'Подготовка документации по планировке территории для размещения линейного объекта: «Речной пер.» для нужд Санкт-Петербурга.',
    },
    { 
      id: 26, 
      title: 'ДПТ «Совхозый пр.»', 
      text: 'Подготовка документации по планировке территории для размещения линейного объекта: «Совхозый пр.» для нужд Санкт-Петербурга.',
    },
    { 
      id: 27, 
      title: 'ДПТ «Станционная ул.»', 
      text: 'Подготовка документации по планировке территории для размещения линейного объекта: «Станционная ул.» для нужд Санкт-Петербурга.',
    },
    { 
      id: 28, 
      title: 'ДПТ «ул. Александра Товпеко»', 
      text: 'Подготовка документации по планировке территории для размещения линейного объекта: «ул. Александра Товпеко» для нужд Санкт-Петербурга.',
    },
    { 
      id: 29, 
      title: 'ДПТ «Центральная ул.»', 
      text: 'Подготовка документации по планировке территории для размещения линейного объекта: «Центральная ул.» для нужд Санкт-Петербурга.',
    },
    { 
      id: 30, 
      title: 'ДПТ «Цитадельское шоссе на участке от Цитадельской дороги до ул. Адмирала Грейга»', 
      text: 'Подготовка документации по планировке территории для размещения линейного объекта: «Цитадельское шоссе на участке от Цитадельской дороги до ул. Адмирала Грейга» для нужд Санкт-Петербурга.',
    },
    { 
      id: 31, 
      title: 'ДПТ «Цитадельское шоссе на участке от ул. Гидростроителей до ул. Литке с подключением к КЗС»', 
      text: 'Подготовка документации по планировке территории для размещения линейного объекта: «Цитадельское шоссе на участке от ул. Гидростроителей до ул. Литке с подключением к КЗС»  для нужд Санкт-Петербурга.',
    },
    { 
      id: 32, 
      title: 'ДПТ «Школьная ул.»', 
      text: 'Подготовка документации по планировке территории для размещения линейного объекта: «Школьная ул.» для нужд Санкт-Петербурга.',
    },
    { 
      id: 33, 
      title: 'ДПТ «ул. Юты Бондаровской от Парковой ул. до Ропшинского шоссе»', 
      text: 'Подготовка документации по планировке территории для размещения линейного объекта: «ул. Юты Бондаровской от Парковой ул. до Ропшинского шоссе» для нужд Санкт-Петербурга.',
    },
  ];

  return(
    <div className={styles.reducer}>
      {objects.filter((item) => item.title.toLowerCase().includes(props.searchValue.toLowerCase())).map(object => {
        return <Object key={object.id} title={object.title} text={object.text} />
      })}
    </div>
  );
}

export default React.memo(ObjectsReducer);