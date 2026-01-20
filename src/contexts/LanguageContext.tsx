import React, { createContext, useCallback, useContext, useState } from 'react'

export type Language = 'uz' | 'ru' | 'en'

interface LanguageContextType {
	language: Language
	setLanguage: (lang: Language) => void
	t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
	uz: {
		// Navigation
		'nav.home': 'Bosh sahifa',
		'nav.about': 'Fan haqida',
		'nav.topics': 'Mavzular',
		'nav.virtualLab': 'Adabiyot Lab',
		'nav.materials': "O'quv materiallari",
		'nav.references': 'Adabiyotlar',
		'nav.author': 'Muallif haqida',
		'nav.contact': 'Aloqa',
		'nav.logo': 'Adabiyot Lab',

		// Footer
		'footer.desc':
			"Adabiyot (Oʻzbek adabiyoti, Jahon adabiyoti va Bolalar adabiyoti) fani bo'yicha zamonaviy o'quv platformasi",
		'footer.quickLinks': 'Tezkor havolalar',
		'footer.resources': 'Resurslar',
		'footer.contact': 'Aloqa',
		'footer.rights': 'Barcha huquqlar himoyalangan',
		'footer.university': 'Termiz Davlat Universiteti',
		'footer.location': "Termiz, O'zbekiston",
		'footer.transport.title': "Transport yo'nalishlari",
		'footer.transport.desc':
			'Termiz davlat universitetiga harakatlanadigan marshrutlar: 15, 3, 7, 244, 5-avtobus',
		'footer.notice':
			"Saytdagi har qanday ma'lumotdan foydalanish, bizning saytga havola ko'rsatish sharti bilan ruxsat etiladi.",

		// Home Page
		'home.hero.badge': 'Adabiyot Lab',
		'home.hero.title':
			'Adabiyot (Oʻzbek adabiyoti, Jahon adabiyoti va Bolalar adabiyoti)',
		'home.hero.subtitle':
			"Oʻzbek adabiyoti, jahon adabiyoti va bolalar adabiyoti fanlarini interaktiv tarzda o'rganing",
		'home.hero.cta.start': 'Boshlash',
		'home.hero.cta.explore': "Ko'rish",
		'home.stats.topics': 'Mavzular',
		'home.stats.labs': 'Laboratoriya ishlari',
		'home.stats.activities': 'Interaktiv topshiriqlar',
		'home.stats.languages': 'Tillar',
		'home.features.title': 'Platforma imkoniyatlari',
		'home.features.interactive': 'Interaktiv mashqlar',
		'home.features.interactive.desc':
			"O'yin formatidagi topshiriqlar orqali adabiy asarlar va mavzularni o'rganing",
		'home.features.modern': 'Zamonaviy yondashuv',
		'home.features.modern.desc':
			"Davlat standarti talablariga mos keladigan eng so'nggi pedagogik metodlar",
		'home.features.practical': "Amaliy yo'nalish",
		'home.features.practical.desc':
			"Adabiy tahlil va tanqidiy fikrlash ko'nikmalarini shakllantiring",
		'home.quickAccess.title': 'Tezkor havolalar',
		'home.quickAccess.topics': "Mavzularga o'tish",
		'home.quickAccess.labs': 'Adabiyot laboratoriyasi',
		'home.quickAccess.materials': "Materiallarga o'tish",
		'home.cta.title': 'Bilimlaringizni sinashga tayyormisiz?',
		'home.cta.desc':
			"Virtual laboratoriya orqali interaktiv topshiriqlarni bajaring va o'z bilimlaringizni mustahkamlang.",

		// About Page
		'about.title': 'Fan haqida',
		'about.goals.title': 'Fanning maqsadlari',
		'about.goals.desc':
			"Adabiyot (Oʻzbek adabiyoti, Jahon adabiyoti va Bolalar adabiyoti) fanlari bo'yicha nazariy bilim va amaliy ko'nikmalarni shakllantirish.",
		'about.outcomes.title': "O'quv natijalari",
		'about.outcomes.desc':
			"Talabalar fanni o'zlashtirish davomida quyidagi natijalarni qo'lga kiritadi",
		'about.application.title': "Qo'llanilish sohalari",
		'about.application.desc':
			"Adabiyotshunoslik, pedagogika va madaniyat sohalarida keng qo'llaniladi",

		// Topics
		'topics.title': 'Mavzular',
		'topics.subtitle':
			"Fanning barcha ma'ruza va seminar mavzulari bo'yicha to'liq ma'lumot",
		'topics.description': 'Tavsif',
		'topics.presentation': 'Taqdimot',
		'topics.practical': "Amaliy mashg'ulot",
		'topics.goToLab': "Laboratoriyaga o'tish",
		'topics.search': 'Mavzulardan qidirish...',

		// Virtual Lab
		'lab.title': 'Adabiyot Lab',
		'lab.subtitle':
			"Laboratoriya mashg'ulotlari orqali bilimlaringizni amalda sinang",
		'lab.selectTopic': "Mashg'ulot mavzusini tanlang",
		'lab.topicLabel': 'Mavzu:',
		'lab.maruza': "Ma'ruza",
		'lab.seminar': 'Seminar',
		'lab.placeholder': 'Mavzuni tanlang',
		'lab.task': 'Topshiriq',
		'lab.of': 'dan',
		'lab.progress': 'Jarayon',
		'lab.check': 'Tekshirish',
		'lab.next': 'Keyingi',
		'lab.prev': 'Oldingi',
		'lab.complete': 'Yakunlash',
		'lab.correct': "To'g'ri!",
		'lab.incorrect': "Noto'g'ri, qayta urinib ko'ring",
		'lab.instructions': "Ko'rsatmalar",
		'lab.dragHere': 'Bu yerga tashlang',
		'lab.allPlaced': 'Barcha elementlar joylashtirildi. Tekshirishni bosing.',
		'lab.fillBlank': "Bo'sh joyni to'ldiring",
		'lab.selectAnswer': 'Javobni tanlang',
		'lab.matchPairs': 'Juftlarni moslashtiring',

		// Virtual Lab Results
		'lab.results': 'Natijangiz',
		'lab.completedDesc': "mavzusi bo'yicha laboratoriya yakunlandi",
		'lab.correctLabel': "To'g'ri",
		'lab.incorrectLabel': 'Xato',
		'lab.countUnit': 'ta',
		'lab.totalResult': 'Umumiy natija',
		'lab.scoreUnit': 'ball',
		'lab.restart': 'Qaytadan urinish',
		'lab.chooseAnother': 'Boshqa mavzuni tanlash',

		// Materials
		'materials.title': "O'quv materiallari",
		'materials.subtitle':
			"Adabiyot (Oʻzbek adabiyoti, Jahon adabiyoti va Bolalar adabiyoti) fani bo'yicha ma'ruza va seminar materiallari.",
		'materials.lectures': "Ma'ruzalar",
		'materials.practical': 'Seminarlar',
		'materials.methodical': "Metodik qo'llanmalar",
		'materials.download': 'Yuklab olish',
		'materials.view': "Ko'rish",
		'materials.textType': "O'quv materiali (Matn)",
		'materials.presentationType': 'Taqdimot (PDF)',
		'materials.previewDesc': "Faylni ko'rish va yuklab olish",

		// References
		'references.title': 'Adabiyotlar',
		'references.subtitle':
			"Fanni o'zlashtirish uchun tavsiya etiladigan asosiy va qo'shimcha adabiyotlar ro'yxati",
		'references.main': 'Asosiy adabiyotlar',
		'references.additional': "Qo'shimcha adabiyotlar",

		// Common
		'common.close': 'Yopish',
		'common.active': 'Faol',

		// Author
		'author.title': 'Muallif haqida',
		'author.name': 'Shaymardanova Aziza Raimjanovna',
		'author.degree': 'filologiya fanlari bo‘yicha falsafa doktori (PhD)',
		'author.dept': "O'zbek tili va adabiyoti kafedrasi katta o'qituvchisi",
		'author.uni': 'Termiz davlat universiteti',
		'author.bio':
			"Shaymardanova Aziza Raimjanovna - Termiz davlat universiteti O'zbek tili va adabiyoti kafedrasi katta o'qituvchisi, filologiya fanlari bo‘yicha falsafa doktori (PhD).",
		'author.achievement.1':
			"O'zbek tili va adabiyoti kafedrasi katta o'qituvchisi",
		'author.achievement.2': 'Filologiya fanlari bo‘yicha falsafa doktori (PhD)',
		'author.achievement.3': 'Oʻquv-metodik qoʻllanmalar muallifi',
		'author.contribution.1': "O'zbek adabiyoti fani rivoji",
		'author.contribution.2': 'Pedagogik texnologiyalarni rivojlantirish',
		'author.contribution.3': 'Ilmiy-tadqiqot ishlari',
		'author.profile': 'Ilmiy profil',
		'author.contribution': "Fanga qo'shgan hissasi",

		// Contact
		'contact.title': 'Aloqa',
		'contact.name': 'Ism sharifi',
		'contact.email': 'Elektron pochta',
		'contact.message': 'Xabar',
		'contact.submit': 'Yuborish',
		'contact.address': 'Manzil',
		'contact.phone': 'Telefon',
	},
	ru: {
		// Navigation
		'nav.home': 'Главная',
		'nav.about': 'О предмете',
		'nav.topics': 'Темы',
		'nav.virtualLab': 'Адабиёт Лаб',
		'nav.materials': 'Учебные материалы',
		'nav.references': 'Литература',
		'nav.author': 'Об авторе',
		'nav.contact': 'Контакты',
		'nav.logo': 'Адабиёт Лаб',

		// Footer
		'footer.desc':
			'Современная образовательная платформа по предмету Литература (Узбекская, мировая и детская литература)',
		'footer.quickLinks': 'Быстрые ссылки',
		'footer.resources': 'Ресурсы',
		'footer.contact': 'Контакты',
		'footer.rights': 'Все права защищены',
		'footer.university': 'Термезский государственный университет',
		'footer.location': 'Термез, Узбекистан',
		'footer.transport.title': 'Транспортные маршруты',
		'footer.transport.desc':
			'Маршруты до Термезского государственного университета: Автобусы 15, 3, 7, 244, 5',
		'footer.notice':
			'Использование любой информации с сайта разрешено при условии ссылки на наш сайт.',

		// Home Page
		'home.hero.badge': 'Адабиёт Лаб',
		'home.hero.title': 'Литература (Узбекская, мировая и детская литература)',
		'home.hero.subtitle':
			'Изучайте узбекскую, мировую и детскую литературу в интерактивном формате',
		'home.hero.cta.start': 'Начать',
		'home.hero.cta.explore': 'Обзор',
		'home.stats.topics': 'Темы',
		'home.stats.labs': 'Лабораторные работы',
		'home.stats.activities': 'Интерактивные задания',
		'home.stats.languages': 'Языки',
		'home.features.title': 'Возможности платформы',
		'home.features.interactive': 'Интерактивные упражнения',
		'home.features.interactive.desc':
			'Изучайте литературные произведения и темы через задания в игровом формате',
		'home.features.modern': 'Современный подход',
		'home.features.modern.desc':
			'Новейшие педагогические методы, соответствующие государственным стандартам',
		'home.features.practical': 'Практическая направленность',
		'home.features.practical.desc':
			'Сформируйте навыки литературного анализа и критического мышления',
		'home.quickAccess.title': 'Быстрый доступ',
		'home.quickAccess.topics': 'Перейти к темам',
		'home.quickAccess.labs': 'Лаборатория литературы',
		'home.quickAccess.materials': 'Перейти к материалам',
		'home.cta.title': 'Готовы проверить свои знания?',
		'home.cta.desc':
			'Выполняйте интерактивные задания через виртуальную лабораторию и закрепляйте свои знания.',

		// About Page
		'about.title': 'О предмете',
		'about.goals.title': 'Цели предмета',
		'about.goals.desc':
			'Формирование теоретических знаний и практических навыков по литературе (узбекской, мировой и детской)',
		'about.outcomes.title': 'Результаты обучения',
		'about.outcomes.desc':
			'В процессе освоения предмета студенты достигнут следующих результатов',
		'about.application.title': 'Сферы применения',
		'about.application.desc':
			'Литературоведение, педагогика и культура широко применяют данные знания',

		// Topics
		'topics.title': 'Темы',
		'topics.subtitle':
			'Полная информация по всем лекционным и семинарским темам предмета',
		'topics.description': 'Описание',
		'topics.presentation': 'Презентация',
		'topics.practical': 'Практическое занятие',
		'topics.goToLab': 'Перейти в лабораторию',
		'topics.search': 'Поиск по темам...',

		// Virtual Lab
		'lab.title': 'Адабиёт Лаб',
		'lab.subtitle':
			'Проверьте свои знания на практике через лабораторные занятия',
		'lab.selectTopic': 'Выберите тему занятия',
		'lab.topicLabel': 'Тема:',
		'lab.maruza': 'Лекция',
		'lab.seminar': 'Семинар',
		'lab.placeholder': 'Выберите тему',
		'lab.task': 'Задание',
		'lab.of': 'из',
		'lab.progress': 'Прогресс',
		'lab.check': 'Проверить',
		'lab.next': 'Следующий',
		'lab.prev': 'Предыдущий',
		'lab.complete': 'Завершить',
		'lab.correct': 'Правильно!',
		'lab.incorrect': 'Неправильно, попробуйте еще раз',
		'lab.instructions': 'Инструкции',
		'lab.dragHere': 'Перетащите сюда',
		'lab.allPlaced': 'Все элементы размещены. Нажмите проверить.',
		'lab.fillBlank': 'Заполните пропуск',
		'lab.selectAnswer': 'Выберите ответ',
		'lab.matchPairs': 'Сопоставьте пары',

		// Virtual Lab Results
		'lab.results': 'Ваш результат',
		'lab.completedDesc': 'лабораторная работа по теме завершена',
		'lab.correctLabel': 'Правильно',
		'lab.incorrectLabel': 'Ошибка',
		'lab.countUnit': 'шт.',
		'lab.totalResult': 'Общий результат',
		'lab.scoreUnit': 'балл(ов)',
		'lab.restart': 'Попробовать снова',
		'lab.chooseAnother': 'Выбрать другую тему',

		// Materials
		'materials.title': 'Учебные материалы',
		'materials.subtitle':
			'Лекционные и семинарские материалы по предмету «Литература (Узбекская, мировая и детская литература)».',
		'materials.lectures': 'Лекции',
		'materials.practical': 'Семинары',
		'materials.methodical': 'Методические пособия',
		'materials.download': 'Скачать',
		'materials.view': 'Просмотр',
		'materials.textType': 'Учебный материал (Текст)',
		'materials.presentationType': 'Презентация (PDF)',
		'materials.previewDesc': 'Просмотр и скачивание файла',

		// References
		'references.title': 'Литература',
		'references.subtitle':
			'Список основной и дополнительной литературы, рекомендуемой для освоения предмета',
		'references.main': 'Основная литература',
		'references.additional': 'Дополнительная литература',

		// Common
		'common.close': 'Закрыть',
		'common.active': 'Активен',

		// Author
		'author.title': 'Об авторе',
		'author.name': 'Шаймарданова Азиза Раимжановна',
		'author.degree': 'доктор философии филологических наук (PhD)',
		'author.dept':
			'Старший преподаватель кафедры узбекского языка и литературы',
		'author.uni': 'Термезский государственный университет',
		'author.bio':
			'Шаймарданова Азиза Раимжановна — старший преподаватель кафедры узбекского языка и литературы Термезского государственного университета, доктор философии (PhD) по филологическим наукам.',
		'author.achievement.1':
			'Старший преподаватель кафедры узбекского языка и литературы',
		'author.achievement.2': 'Доктор философии филологических наук (PhD)',
		'author.achievement.3': 'Автор учебно-методических пособий',
		'author.contribution.1': 'Развитие узбекского литературоведения',
		'author.contribution.2': 'Развитие педагогических технологий',
		'author.contribution.3': 'Научно-исследовательская деятельность',
		'author.profile': 'Научный профиль',
		'author.contribution': 'Вклад в науку',

		// Contact
		'contact.title': 'Контакты',
		'contact.name': 'Имя и фамилия',
		'contact.email': 'Электронная почта',
		'contact.message': 'Сообщение',
		'contact.submit': 'Отправить',
		'contact.address': 'Адрес',
		'contact.phone': 'Телефон',
	},
	en: {
		// Navigation
		'nav.home': 'Home',
		'nav.about': 'About Subject',
		'nav.topics': 'Topics',
		'nav.virtualLab': 'Literature Lab',
		'nav.materials': 'Study Materials',
		'nav.references': 'References',
		'nav.author': 'About Author',
		'nav.contact': 'Contact',
		'nav.logo': 'Literature Lab',

		// Footer
		'footer.desc':
			'Modern educational platform for the subject Literature (Uzbek, World and Children Literature)',
		'footer.quickLinks': 'Quick Links',
		'footer.resources': 'Resources',
		'footer.contact': 'Contact',
		'footer.rights': 'All rights reserved',
		'footer.university': 'Termez State University',
		'footer.location': 'Termez, Uzbekistan',
		'footer.transport.title': 'Transport Routes',
		'footer.transport.desc':
			'Routes to Termez State University: Buses 15, 3, 7, 244, 5',
		'footer.notice':
			'Use of any information from the site is permitted subject to a link to our site.',

		// Home Page
		'home.hero.badge': 'Literature Lab',
		'home.hero.title': 'Literature (Uzbek, World and Children Literature)',
		'home.hero.subtitle':
			'Learn Uzbek, world and children literature interactively',
		'home.hero.cta.start': 'Get Started',
		'home.hero.cta.explore': 'Explore',
		'home.stats.topics': 'Topics',
		'home.stats.labs': 'Lab Works',
		'home.stats.activities': 'Interactive Tasks',
		'home.stats.languages': 'Languages',
		'home.features.title': 'Platform Features',
		'home.features.interactive': 'Interactive Exercises',
		'home.features.interactive.desc':
			'Learn literary works and topics through game-formatted tasks',
		'home.features.modern': 'Modern Approach',
		'home.features.modern.desc':
			'Latest pedagogical methods meeting state standard requirements',
		'home.features.practical': 'Practical Focus',
		'home.features.practical.desc':
			'Develop skills in literary analysis and critical thinking',
		'home.quickAccess.title': 'Quick Access',
		'home.quickAccess.topics': 'Go to Topics',
		'home.quickAccess.labs': 'Literature Lab',
		'home.quickAccess.materials': 'Go to Materials',
		'home.cta.title': 'Ready to test your knowledge?',
		'home.cta.desc':
			'Complete interactive activities through the virtual laboratory and reinforce your knowledge.',

		// About Page
		'about.title': 'About Subject',
		'about.goals.title': 'Subject Goals',
		'about.goals.desc':
			'Formation of theoretical knowledge and practical skills in literature (Uzbek, world and children’s literature)',
		'about.outcomes.title': 'Learning Outcomes',
		'about.outcomes.desc':
			'During the course of the subject, students will achieve the following results',
		'about.application.title': 'Application Fields',
		'about.application.desc':
			'Literary studies, pedagogy and culture widely use this knowledge',

		// Topics
		'topics.title': 'Topics',
		'topics.subtitle':
			'Full information on all lecture and seminar topics of the subject',
		'topics.description': 'Description',
		'topics.presentation': 'Presentation',
		'topics.practical': 'Practical Session',
		'topics.goToLab': 'Go to Lab',
		'topics.search': 'Search topics...',
		// Virtual Lab
		'lab.title': 'Literature Lab',
		'lab.subtitle':
			'Test your knowledge in practice through laboratory sessions',
		'lab.selectTopic': 'Select a session topic',
		'lab.topicLabel': 'Topic:',
		'lab.maruza': 'Lecture',
		'lab.seminar': 'Seminar',
		'lab.placeholder': 'Choose a topic',
		'lab.task': 'Task',
		'lab.of': 'of',
		'lab.progress': 'Progress',
		'lab.check': 'Check',
		'lab.next': 'Next',
		'lab.prev': 'Previous',
		'lab.complete': 'Complete',
		'lab.correct': 'Correct!',
		'lab.incorrect': 'Incorrect, please try again',
		'lab.instructions': 'Instructions',
		'lab.dragHere': 'Drop here',
		'lab.allPlaced': 'All items placed. Click check.',
		'lab.fillBlank': 'Fill in the blank',
		'lab.selectAnswer': 'Select an answer',
		'lab.matchPairs': 'Match the pairs',

		// Virtual Lab Results
		'lab.results': 'Your Result',
		'lab.completedDesc': 'lab work on topic completed',
		'lab.correctLabel': 'Correct',
		'lab.incorrectLabel': 'Incorrect',
		'lab.countUnit': '',
		'lab.totalResult': 'Total Result',
		'lab.scoreUnit': 'points',
		'lab.restart': 'Try Again',
		'lab.chooseAnother': 'Choose another topic',

		// Materials
		'materials.title': 'Study Materials',
		'materials.subtitle':
			'Lecture and seminar materials on the subject «Literature (Uzbek, World and Children Literature)».',
		'materials.lectures': 'Lectures',
		'materials.practical': 'Seminars',
		'materials.methodical': 'Methodological Guides',
		'materials.download': 'Download',
		'materials.view': 'View',
		'materials.textType': 'Study Material (Text)',
		'materials.presentationType': 'Presentation (PDF)',
		'materials.previewDesc': 'View and download the file',

		// References
		'references.title': 'References',
		'references.subtitle':
			'List of primary and secondary literature recommended for the course',
		'references.main': 'Main References',
		'references.additional': 'Additional References',

		// Common
		'common.close': 'Close',
		'common.active': 'Active',

		// Author
		'author.title': 'About Author',
		'author.name': 'Shaymardanova Aziza Raimjanovna',
		'author.degree': 'Doctor of Philosophy in Philological Sciences (PhD)',
		'author.dept':
			'Senior Lecturer, Department of Uzbek Language and Literature',
		'author.uni': 'Termez State University',
		'author.bio':
			'Shaymardanova Aziza Raimjanovna is a Senior Lecturer at the Department of Uzbek Language and Literature of Termez State University, PhD in Philological Sciences.',
		'author.achievement.1': 'Senior Lecturer of Uzbek Language Department',
		'author.achievement.2':
			'Doctor of Philosophy in Philological Sciences (PhD)',
		'author.achievement.3': 'Author of educational guides',
		'author.contribution.1': 'Development of Uzbek literary studies',
		'author.contribution.2': 'Development of pedagogical technologies',
		'author.contribution.3': 'Scientific research activity',
		'author.profile': 'Scientific Profile',
		'author.contribution': 'Contribution to Science',

		// Contact
		'contact.title': 'Contact',
		'contact.name': 'Full Name',
		'contact.email': 'Email',
		'contact.message': 'Message',
		'contact.submit': 'Submit',
		'contact.address': 'Address',
		'contact.phone': 'Phone',
	},
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [language, setLanguage] = useState<Language>('uz')

	const t = useCallback(
		(key: string): string => {
			return translations[language][key] || key
		},
		[language],
	)

	return (
		<LanguageContext.Provider value={{ language, setLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguage = () => {
	const context = useContext(LanguageContext)
	if (context === undefined) {
		throw new Error('useLanguage must be used within a LanguageProvider')
	}
	return context
}
