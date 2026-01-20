import { maruzaTopics, seminarTopics } from './topics'

const generateActivitiesForTopic = (topic: any) => {
	const isMaruza = topic.type === 'maruza'
	const prefix = isMaruza ? "Ma'ruza" : 'Seminar'

	return [
		{
			type: 'quiz',
			title: `${prefix} testi`,
			instructions: `"${topic.titleUz}" mavzusiga oid eng to'g'ri ma'lumotni tanlang.`,
			data: [
				{
					id: '1',
					text: `Ushbu mavzuning o'zbek adabiyotidagi o'rni beqiyos`,
					isCorrect: true,
				},
				{ id: '2', text: 'Faqat nazariy ahamiyatga ega', isCorrect: false },
				{ id: '3', text: 'Boshqa adabiyoting nusxasi', isCorrect: false },
				{ id: '4', text: "Hozirda o'rganilmaydi", isCorrect: false },
			],
		},
		{
			type: 'drag-drop',
			title: 'Janrlar va turlar',
			instructions: 'Atamalarni tegishli kategoriyalarga joylashtiring.',
			data: [
				{ id: '1', text: 'Lirika', category: 'Adabiy tur' },
				{ id: '2', text: 'Epika', category: 'Adabiy tur' },
				{ id: '3', text: "G'azal", category: 'Lirik janr' },
				{ id: '4', text: 'Doston', category: 'Epik janr' },
			],
		},
		{
			type: 'matching',
			title: 'Muvofiqlikni toping',
			instructions: 'Muvofiqlikni aniqlang.',
			data: [
				{
					id: '1',
					left: 'Xamsa',
					right: 'Alisher Navoiy',
				},
				{ id: '2', left: 'Boburnoma', right: 'Z.M.Bobur' },
				{ id: '3', left: "O'tkan kunlar", right: 'Abdulla Qodiriy' },
			],
		},
		{
			type: 'fill-blank',
			title: 'Matn tahlili',
			instructions: "Bo'shliqlarni to'ldiring.",
			data: {
				sentence:
					"Adabiyot - bu __BLANK1__ san'ati bo'lib, u insonning __BLANK2__ dunyosini boyitadi.",
				blanks: [
					{ id: '1', answer: "so'z" },
					{ id: '2', answer: "ma'naviy" },
				],
			},
		},
		{
			type: 'scenario',
			title: 'Adabiy tahlilchi',
			instructions:
				"Siz adabiy munaqqidsiz. Berilgan asarni tahlil qilishda nimaga e'tibor berasiz?",
			data: {
				situation: 'Yozuvchi yangi modernistik asar taqdim etdi.',
				question: 'Asarni tahlil qilishda qaysi jihat birinchi darajali?',
				options: [
					{
						id: '1',
						text: "G'oyaviy-badiiy yaxlitlik va yangilik",
						isCorrect: true,
						feedback: 'Barakalla! Badiiy asar tahlilida bu juda muhim.',
					},
					{
						id: '2',
						text: 'Faqat sahifalar soni',
						isCorrect: false,
						feedback:
							"Noto'g'ri. Miqdoriy ko'rsatkich asar qiymatini belgilamaydi.",
					},
				],
			},
		},
	]
}

const generateDetailedLabs = (): any[] => {
	const labs: any[] = []

	maruzaTopics.forEach(topic => {
		const activities = generateActivitiesForTopic(topic)
		activities.forEach((activity, idx) => {
			labs.push({
				id: `maruza-${topic.id}-${idx + 1}`,
				topicId: topic.id,
				type: activity.type,
				title: { uz: activity.title, ru: activity.title, en: activity.title },
				instructions: {
					uz: activity.instructions,
					ru: activity.instructions,
					en: activity.instructions,
				},
				data: activity.data,
			})
		})
	})

	seminarTopics.forEach(topic => {
		const activities = generateActivitiesForTopic(topic)
		activities.forEach((activity, idx) => {
			labs.push({
				id: `seminar-${topic.id}-${idx + 1}`,
				topicId: topic.id + 100,
				type: activity.type,
				title: { uz: activity.title, ru: activity.title, en: activity.title },
				instructions: {
					uz: activity.instructions,
					ru: activity.instructions,
					en: activity.instructions,
				},
				data: activity.data,
			})
		})
	})

	return labs
}

export const virtualLabActivities = generateDetailedLabs()
