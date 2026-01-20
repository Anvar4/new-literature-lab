export interface Topic {
	id: number
	titleUz: string
	type: 'maruza' | 'seminar'
}

export const maruzaTopics: Topic[] = [
	{
		id: 1,
		titleUz:
			'O‘zbek adabiyoti fanining maqsadi, vazifasi va ahamiyati, Oʻzbek adabiyotini davrlashtirish masalasi.',
		type: 'maruza',
	},
	{
		id: 2,
		titleUz: 'O‘zbek xalq og‘zaki ijodi va uning turlari',
		type: 'maruza',
	},
	{
		id: 3,
		titleUz:
			'Qadimgi turkiy yozma yodgorliklar: “Qutadg‘u bilig”, “Devonu lug‘otit turk”.',
		type: 'maruza',
	},
	{
		id: 4,
		titleUz: 'Temuriylar davri adabiyoti: Navoiy ijodi',
		type: 'maruza',
	},
	{
		id: 5,
		titleUz: 'Z.M.Bobur hayoti va “Boburnoma” asarining adabiy ahamiyati',
		type: 'maruza',
	},
	{
		id: 6,
		titleUz: 'Xonliklar davri o’zbek adabiyoti',
		type: 'maruza',
	},
	{
		id: 7,
		titleUz:
			'XIX asr o‘zbek adabiyoti: Muqimiy, Furqat va ma’rifatparvarlik ruhi',
		type: 'maruza',
	},
	{
		id: 8,
		titleUz: 'XX asr boshlarida o‘zbek jadid adabiyoti',
		type: 'maruza',
	},
	{
		id: 9,
		titleUz: 'XX asrning 30-40-yillari o‘zbek adabiyoti.',
		type: 'maruza',
	},
	{
		id: 10,
		titleUz: 'XX asrning 50-60-yillari o‘zbek nasri.',
		type: 'maruza',
	},
	{
		id: 11,
		titleUz:
			'Ayollar ovozi adabiyotda: Zulfiya, Halima Xudoyberdieva, Saida Zunnunova',
		type: 'maruza',
	},
	{
		id: 12,
		titleUz: 'Hozirgi oʻzbek dramaturgiyasi. Dramatik tur va uning janrlari .',
		type: 'maruza',
	},
	{
		id: 13,
		titleUz: 'Istiqlol davri o‘zbek nasri. Tohir Malik ijodida falsafaviylik',
		type: 'maruza',
	},
	{
		id: 14,
		titleUz:
			'Oʻzbek adabiyotida yoʻnalish va oqimlar. Modernistik oʻzbek adabiyoti.',
		type: 'maruza',
	},
	{
		id: 15,
		titleUz:
			'Surxon adabiy muhiti (Tog‘ay Murod, Nazar Eshonqul, S.Sayid nasri)',
		type: 'maruza',
	},
]

export const seminarTopics: Topic[] = [
	{
		id: 1,
		titleUz:
			'Mifologiya va yozma adabiyot munosabatlari, mifologiya ilk yozma adabiyotga asos sifatida.',
		type: 'seminar',
	},
	{
		id: 2,
		titleUz: 'X-XII asrda turkiy tilidagi adabiyot.',
		type: 'seminar',
	},
	{
		id: 3,
		titleUz: 'XII-XIV asr Moʻgʻul istilosi davri oʻzbek adabiyoti.',
		type: 'seminar',
	},
	{
		id: 4,
		titleUz:
			'Oʻzbek adabiyotida “Qisas-ul anbiyo”lar va Paygʻambarlar tarixiga oid asarlarning yuzaga kelishi, bu asarlaming maʼrifiy ahamiyati.',
		type: 'seminar',
	},
	{
		id: 5,
		titleUz:
			'Temuriylar davri adabiyotining asosiy xususiyatlari: janr xususiyatlari va gʻoyaviy-badiiy oʻzgarishlar, bu davrdagi tarjima adabiyoti.',
		type: 'seminar',
	},
	{
		id: 6,
		titleUz:
			'Navoiy gʻazallarining gʻoyaviy-badiiy xususiyatlari: vazn, qofiya, badiiy sanʼatlar tahlili.',
		type: 'seminar',
	},
	{
		id: 7,
		titleUz: 'Bobur hayoti va ijodi',
		type: 'seminar',
	},
	{
		id: 8,
		titleUz: 'O‘zbek adabiyoti fanida tur va janrlar',
		type: 'seminar',
	},
	{
		id: 9,
		titleUz: 'Abdulla Qodiriy hayoti va ijodi',
		type: 'seminar',
	},
	{
		id: 10,
		titleUz: "Abdulhamid Sulaymon o‘g‘li Cho'lpon hayoti va ijodi",
		type: 'seminar',
	},
	{
		id: 11,
		titleUz: 'Oybek ijodining tanqidchilikdagi talqini',
		type: 'seminar',
	},
	{
		id: 12,
		titleUz: 'Abdulla Qahhor va Said Ahmadning hikoyanavislik mahorati',
		type: 'seminar',
	},
	{
		id: 13,
		titleUz: 'Erkin Vohidov, Abdulla Oripov hayoti va ijodi',
		type: 'seminar',
	},
	{
		id: 14,
		titleUz: 'O‘tkir Hoshimov ijodi va adabiy tanqidi.',
		type: 'seminar',
	},
	{
		id: 15,
		titleUz: 'Odil Yoqubov hayoti va ijodi',
		type: 'seminar',
	},
]

export const topics = [
	...maruzaTopics.map(t => ({ ...t, id: t.id })),
	...seminarTopics.map(t => ({ ...t, id: t.id + 100 })),
]

export const getTopicTitle = (topic: Topic, language: string) => {
	return topic.titleUz
}

export const getTopicDescription = (topic: Topic, language: string) => {
	const typeLabel =
		topic.type === 'maruza'
			? language === 'ru'
				? 'Лекционное занятие'
				: language === 'en'
					? 'Lecture session'
					: "Ma'ruza mashg'uloti"
			: language === 'ru'
				? 'Семинарское занятие'
				: language === 'en'
					? 'Seminar session'
					: "Seminar mashg'uloti"

	const topicLabel =
		language === 'ru' ? 'Тема' : language === 'en' ? 'Topic' : 'Mavzu'

	return `${typeLabel}. ${topicLabel}: ${topic.titleUz}`
}
