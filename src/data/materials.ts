export interface MaterialTopic {
	id: number
	title: string
	type: 'maruza' | 'seminar'
	pptPath: string
}

export const maruzaMaterials: MaterialTopic[] = [
	{
		id: 1,
		title:
			'O‘zbek adabiyoti fanining maqsadi, vazifasi va ahamiyati, Oʻzbek adabiyotini davrlashtirish masalasi.',
		type: 'maruza',

		pptPath: "/basa/1-ma'ruza. Adabiyotshunoslik.pdf",
	},
	{
		id: 2,
		title: 'O‘zbek xalq og‘zaki ijodi va uning turlari',
		type: 'maruza',

		pptPath: '/basa/Adabiyot gaqidagi fan.pdf',
	},
	{
		id: 3,
		title:
			'Qadimgi turkiy yozma yodgorliklar: “Qutadg‘u bilig”, “Devonu lug‘otit turk”.',
		type: 'maruza',

		pptPath: '/basa/Badiiy asar tahlili.pdf',
	},
	{
		id: 4,
		title: 'Temuriylar va Alisher Navoiy davri adabiyoti',
		type: 'maruza',

		pptPath: '/basa/Badiiy asar tili.pdf',
	},
	{
		id: 5,
		title: 'Z.M.Bobur hayoti va “Boburnoma” asarining adabiy ahamiyati',
		type: 'maruza',

		pptPath: "/basa/Badiiy san'atlar (3).pdf",
	},
	{
		id: 6,
		title: 'Xonliklar davri o’zbek adabiyoti',
		type: 'maruza',

		pptPath: "/basa/Badiiy san'atlar.pdf",
	},
	{
		id: 7,
		title:
			'XIX asr o‘zbek adabiyoti: Muqimiy, Furqat va ma’rifatparvarlik ruhi',
		type: 'maruza',

		pptPath: '/basa/Bolalar adabiyoti.pdf',
	},
	{
		id: 8,
		title: 'XX asr boshlarida o‘zbek jadid adabiyoti',
		type: 'maruza',

		pptPath: '/basa/Bolalar_adabiyoti_taqdimot (1).pdf',
	},
	{
		id: 9,
		title: 'XX asrning 30-40-yillari o‘zbek adabiyoti.',
		type: 'maruza',

		pptPath: '/basa/Epik tur va uning janrlari2024-2025.pdf',
	},
	{
		id: 10,
		title: 'XX asrning 50-60-yillari o‘zbek nasri.',
		type: 'maruza',

		pptPath: '/basa/Ritorika. Notiqlik.pdf',
	},
	{
		id: 11,
		title:
			'Ayollar ovozi adabiyotda: Zulfiya, Halima Xudoyberdieva, Saida Zunnunova',
		type: 'maruza',

		pptPath: '/basa/statistikani-nutk-uslublari-ustirishdagi-ahamiyati.pdf',
	},
	{
		id: 12,
		title: 'Hozirgi oʻzbek dramaturgiyasi. Dramatik tur va uning janrlari .',
		type: 'maruza',

		pptPath: '/basa/Taqdimot tayyorlash.pdf',
	},
	{
		id: 13,
		title: 'Istiqlol davri o‘zbek nasri. Tohir Malik ijodida falsafaviylik',
		type: 'maruza',

		pptPath: '/basa/Tez aytish3.pdf',
	},
	{
		id: 14,
		title:
			'Oʻzbek adabiyotida yoʻnalish va oqimlar. Modernistik oʻzbek adabiyoti.',
		type: 'maruza',

		pptPath: '/basa/Tez aytish3.pdf',
	},
	{
		id: 15,
		title: 'Surxon adabiy muhiti (Tog‘ay Murod, Nazar Eshonqul, S.Sayid nasri)',
		type: 'maruza',

		pptPath: '/basa/Tez aytish3.pdf',
	},
]

export const seminarMaterials: MaterialTopic[] = []

export const materialTopics = [...maruzaMaterials, ...seminarMaterials]
