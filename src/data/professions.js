// import uuid from 'uuid';
// import _ from 'lodash';

const professions = [
  "Html-верстальщик",
  "IT-специалист",
  "Mobile-разработчик",
  "SMM-специалист",
  "Web-дизайнер",
  "Web-программист",
  "Авиационный инженер",
  "Авиационный техник (Авиатехник)",
  "Автомеханик",
  "Агент",
  "Агент коммерческий",
  "Агент по сбыту энергии",
  "Агент рекламный",
  "Агроинженер",
  "Агроном",
  "Адвокат",
  "Администратор",
  "Администратор базы данных",
  "Администратор предприятия торговли",
  "Администратор сайта",
  "Актёр",
  "Актёр театра и кино",
  "Актёр театра кукол",
  "Акушер",
  "Аналитик",
  "Андеррайтер",
  "Анестезиолог",
  "Аниматор",
  "Аппаратчик",
  "Аппаратчик-оператор",
  "Аранжировщик",
  "Арт-директор",
  "Артист",
  "Артист балета",
  "Артист оркестра (ансамбля)",
  "Артист хора (ансамбля)",
  "Артист цирка",
  "Артист эстрады",
  "Архивист",
  "Архитектор",
  "Архитектор-проектировщик",
  "Астроном",
  "Аудитор",
  "Банкир",
  "Банковский работник",
  "Бармен",
  "Библиограф",
  "Библиотекарь",
  "Биолог",
  "Бионик",
  "Биотехнолог",
  "Биофизик",
  "Биохимик",
  "Бортинженер",
  "Бортпроводник",
  "Ботаник",
  "Брокер",
  "Букмекер",
  "Бурильщик",
  "Бухгалтер",
  "Ведущий радио и телевидения",
  "Верстальщик",
  "Ветеринар",
  "Ветеринарный фельдшер",
  "Видеооператор",
  "Визажист",
  "Винодел",
  "Вирусолог",
  "Водитель",
  "Военнослужащий",
  "Военный лётчик",
  "Воспитатель детского сада",
  "Врач",
  "Врач-косметолог",
  "Врач-терапевт",
  "Генетик",
  "Географ",
  "Геодезист",
  "Геолог",
  "Геофизик",
  "Геронтолог",
  "Гигиенист стоматологический",
  "Гид-переводчик",
  "Гид-экскурсовод",
  "Горный инженер",
  "Государственный служащий",
  "Девелопер",
  "Дегустатор",
  "Декоратор",
  "Делопроизводитель",
  "Диджей (DJ)",
  "Диетолог",
  "Дизайнер",
  "Дизайнер интерьера",
  "Дизайнер ландшафта",
  "Дизайнер одежды",
  "Дизайнер рекламных агентств",
  "Диктор",
  "Дипломат",
  "Директор по маркетингу",
  "Дирижер",
  "Диспетчер",
  "Диспетчер управления воздушным движением",
  "Документовед",
  "Дорожный рабочий",
  "Драматург",
  "Дрессировщик",
  "Животновод",
  "Журналист",
  "Звукорежиссер",
  "Землеустроитель",
  "Зоолог",
  "Зубной техник",
  "Имиджмейкер",
  "Инженер",
  "Инженер бюро технической инвентаризации",
  "Инженер на предприятиях сервисного обслуживания медицинской техники",
  "Инженер по автоматизации и механизации производственных процессов",
  "Инженер по землеустройству",
  "Инженер по организации перевозок и управлению на транспорте",
  "Инженер по охране труда",
  "Инженер связи",
  "Инженер сети",
  "Инженер-испытатель",
  "Инженер-конструктор",
  "Инженер-проектировщик",
  "Инженер-строитель",
  "Инженер-технолог",
  "Инкассатор",
  "Инспектор ГИБДД",
  "Инструктор по вождению автомобиля",
  "Инструктор по фитнесу",
  "Искусствовед",
  "Исследователь",
  "Историк",
  "Калькулятор",
  "Каменщик",
  "Картограф",
  "Каскадер",
  "Кассир",
  "Кинолог",
  "Киномеханик",
  "Клинический психолог",
  "Коммерческий директор",
  "Композитор",
  "Кондитер",
  "Консультант",
  "Контент-менеджер",
  "Контролёр",
  "Контролер производства",
  "Концертмейстер",
  "Копирайтер",
  "Корректор",
  "Корреспондент",
  "Косметик",
  "Кредитный консультант",
  "Крепильщик",
  "Критик",
  "Кузнец",
  "Культуролог",
  "Лаборант",
  "Лаборант химического анализа",
  "Лингвист",
  "Литейщик",
  "Литейщик цветных металлов",
  "Лоббист",
  "Логист",
  "Логопед",
  "Макетчик",
  "Маклер",
  "Маляр",
  "Маркетолог",
  "Массажист",
  "Мастер по ремонту и техническому обслуживанию машинно-тракторного парка",
  "Мастер сельскохозяйственного производства",
  "Мастер столярно-плотничных и паркетных работ",
  "Мастер участка",
  "Мастер-оптик",
  "Математик",
  "Матрос",
  "Машинист (кочегар) котельной",
  "Машинист вибродоставочной погрузочной установки",
  "Машинист компрессорных установок",
  "Машинист скреперной установки",
  "Машинист топливоподачи",
  "Медиа-байер",
  "Медиапланер",
  "Медицинская сестра (Медсестра)",
  "Медицинская сестра стоматологического отделения",
  "Медицинский лабораторный техник",
  "Медицинский представитель",
  "Медицинский технолог",
  "Международник",
  "Менеджер",
  "Менеджер отдела информационных технологий",
  "Менеджер по PR",
  "Менеджер по R and D",
  "Менеджер по внешнеэкономической деятельности",
  "Менеджер по вопросам кредитования и дебиторской задолженности",
  "Менеджер по закупкам",
  "Менеджер по маркетингу",
  "Менеджер по оценкам рисков",
  "Менеджер по персоналу",
  "Менеджер по продажам",
  "Менеджер по продажам холодильного оборудования",
  "Менеджер по продукту",
  "Менеджер по работе с клиентами",
  "Менеджер по работе с таможней",
  "Менеджер по развитию территории",
  "Менеджер по рекламе",
  "Менеджер по туризму",
  "Мерчендайзер",
  "Метеоролог",
  "Методист",
  "Метрдотель",
  "Метролог",
  "Механик",
  "Механик по ремонту и обслуживанию автомобилей и двигателей",
  "Микробиолог",
  "Модельер-конструктор",
  "Модистка",
  "Монтажер телерадиовещательных компаний",
  "Монтажник",
  "Монтажник кондиционеров и систем вентиляции",
  "Монтажник санитарно-технических устройств и оборудования",
  "Монтажник связи",
  "Монтажник технологического оборудования",
  "Моторист-рулевой",
  "Музейный работник",
  "Наладчик КИПиА",
  "Наладчик контрольно-измерительных приборов и автоматики",
  "Налоговый инспектор",
  "Начальник отдела персонала",
  "Нотариус",
  "Облицовщик-плиточник",
  "Обогатитель полезных ископаемых",
  "Овощевод",
  "Озеленитель",
  "Оператор в производстве химических волокон",
  "Оператор пейджинговой связи",
  "Оператор поста управления",
  "Оператор ЭВМ",
  "Оперный певец",
  "Оптик",
  "Оптометрист",
  "Организатор досуга",
  "Ортодонт",
  "Ортопед",
  "Отделочник изделий из древесины",
  "Отоларинголог",
  "Официант",
  "Офтальмолог",
  "Охотник",
  "Оценщик",
  "Палеонтолог",
  "Парикмахер",
  "Пародонтолог",
  "Певец",
  "Педагог",
  "Педагог-организатор кружка",
  "Педиатр",
  "Пекарь",
  "Переводчик",
  "Печатник",
  "Пилот",
  "Плавильщик ферросплавов",
  "Повар",
  "Пожарный",
  "Политолог",
  "Полицейский",
  "Помощник руководителя/Секретарь/Офис-менеджер",
  "Правовед",
  "Преподаватель",
  "Пресс-секретарь",
  "Провизор",
  "Проводник вагона поезда",
  "Программист",
  "Программист-разработчик",
  "Продавец",
  "Продюсер",
  "Прокурор",
  "Промоутер",
  "Проходчик",
  "Психолог",
  "Психолог в школе",
  "Радиомонтажник",
  "Радиотехник",
  "Радиофизик",
  "Растениевод",
  "Реаниматолог",
  "Регионовед",
  "Редактор",
  "Режиссер",
  "Рекрутер",
  "Ремонтник горного оборудования",
  "Рентгенолог",
  "Реставратор",
  "Референт",
  "Риэлтор",
  "Руководитель",
  "Рыболов",
  "Садовник",
  "Сборщик",
  "Сварщик",
  "Сварщик-жестянщик",
  "Сервейер",
  "Системный администратор",
  "Системный программист",
  "Скульптор",
  "Следователь",
  "Слесарь",
  "Слесарь механосборочных работ",
  "Слесарь-ремонтник",
  "Сомелье",
  "Сотрудник таможни",
  "Социальный педагог в школе",
  "Социальный работник",
  "Социолог",
  "Спасатель",
  "Специалист бэк-офиса",
  "Специалист организационно-правовой защиты информации",
  "Специалист отдела кадрового делопроизводства",
  "Специалист отдела кредитования",
  "Специалист по государственному и муниципальному управлению",
  "Специалист по монолиту",
  "Специалист по мясопереработке",
  "Специалист по недвижимости",
  "Специалист по облицовочным работам",
  "Специалист по обслуживанию систем кондиционирования воздуха",
  "Специалист по обслуживанию холодильно-компрессорных машин и установок",
  "Специалист по отделочным работам",
  "Специалист по рекламе",
  "Специалист по сервису на транспорте",
  "Специалист по системам безопасности",
  "Специалист по стандартизации",
  "Специалист по управлению персоналом",
  "Специалист по учету недвижимости",
  "Специалист по эксплуатации",
  "Специалист программно-аппаратной защиты информации",
  "Специалист службы занятости",
  "Специалист страхового дела",
  "Специалист технической поддержки",
  "Сталевар",
  "Станочник",
  "Станочник в деревообработке",
  "Стендист",
  "Стилист",
  "Стоматолог",
  "Страховой агент",
  "Строитель",
  "Судебный пристав",
  "Судебный эксперт",
  "Судья",
  "Супервайзер",
  "Сурдопереводчик",
  "Телеграфист",
  "Теолог",
  "Тестер",
  "Техник",
  "Техник в региональных системах товародвижения и перевозки пассажиров",
  "Техник по монтажу и эксплуатации оборудования и систем газоснабжения",
  "Техник по обслуживанию, эксплуатации, ремонту, наладке и испытаниям электрооборудования электрических станций, сетей и систем",
  "Техник по разработке и сопровождению программного обеспечения",
  "Техник по строительству и эксплуатации автомобильных дорог, аэродромов и искусственных сооружений",
  "Техник по строительству и эксплуатации мостов",
  "Техник службы безопасности движения",
  "Технический редактор",
  "Технолог",
  "Технолог ателье",
  "Технолог деревообрабатывающего производства",
  "Технолог легкой промышленности",
  "Технолог металлургического производства",
  "Технолог общественного питания",
  "Технолог пищевого производства",
  "Технолог по нефтепереработке",
  "Технолог полиграфического производства",
  "Технолог сельскохозяйственного производства",
  "Ткач",
  "Товаровед",
  "Токарь",
  "Торговый представитель",
  "Тракторист-машинист сельскохозяйственного производства",
  "Трафик-менеджер",
  "Трейдер",
  "Тренер",
  "Тренер спортивной команды",
  "Тренинг-менеджер",
  "Трудовой инспектор",
  "Туроператор",
  "Учитель",
  "Учитель музыки",
  "Учитель начальных классов",
  "Учитель физической культуры",
  "Фармацевт",
  "Фельдшер",
  "Физик",
  "Филолог",
  "Финансовый менеджер",
  "Флорист",
  "Фотограф",
  "Фрезеровщик",
  "Химик",
  "Хирург",
  "Хореограф",
  "Хормейстер (дирижер хора)",
  "Художественный редактор",
  "Художник",
  "Художник-живописец",
  "Цветовод",
  "Частный детектив",
  "Шахтёр",
  "Швея",
  "Штукатур-маляр",
  "Эколог",
  "Экономист",
  "Экскурсовод",
  "Экспедитор",
  "Эксперт",
  "Электрик",
  "Электрогазосварщик",
  "Электролизник расплавленных солей",
  "Электромонтажник",
  "Электромонтер",
  "Электромонтер по релейной защите",
  "Электроник",
  "Электросварщик",
  "Эндокринолог",
  "Энергетик",
  "Эргономист",
  "Этнограф",
  "Ювелир",
  "Юрисконсульт",
  "Юрист"
];

export default professions;
