import { useLanguage } from '@/contexts/LanguageContext'
import {
	Award,
	BookOpen,
	Briefcase,
	Building2,
	CheckCircle2,
	Target,
} from 'lucide-react'
import React from 'react'

export const AboutPage: React.FC = () => {
	const { t, language } = useLanguage()

	const goals = [
		{
			uz: "O'zbek mumtoz va zamonaviy adabiyoti tarixini o'rganish",
			ru: 'Изучение истории узбекской классической и современной литературы',
			en: 'Studying the history of Uzbek classical and modern literature',
		},
		{
			uz: 'Jahon adabiyoti durdonalarini tahlil qilish',
			ru: 'Анализ шедевров мировой литературы',
			en: 'Analysis of masterpieces of world literature',
		},
		{
			uz: "Bolalar adabiyotining o'ziga xos xususiyatlarini aniqlash",
			ru: 'Определение специфических особенностей детской литературы',
			en: "Identifying the specific characteristics of children's literature",
		},
		{
			uz: 'Adabiy asarlarni tahlil qilish va tanqidiy fikrlashni rivojlantirish',
			ru: 'Развитие навыков анализа литературных произведений и критического мышления',
			en: 'Developing literary analysis and critical thinking skills',
		},
	]

	const outcomes = [
		{
			uz: "Adabiy asarlarni g'oyaviy va badiiy jihatdan tahlil qilish",
			ru: 'Идейно-художественный анализ литературных произведений',
			en: 'Ideological and artistic analysis of literary works',
		},
		{
			uz: "Turli davrlar adabiyoti o'rtasidagi bog'liqlikni tushunish",
			ru: 'Понимание связи между литературой разных периодов',
			en: 'Understanding the connection between literature of different periods',
		},
		{
			uz: 'Bolalar adabiyoti asarlari bilan ishlash metodikasini egallash',
			ru: 'Овладение методикой работы с произведениями детской литературы',
			en: "Mastering the methodology of working with children's literature",
		},
		{
			uz: 'Jahon adabiyoti namoyandalarining hayoti va ijodi haqida chuqur bilim',
			ru: 'Глубокие знания о жизни и творчестве представителей мировой литературы',
			en: 'Deep knowledge of the life and work of world literature representatives',
		},
		{
			uz: "Ilmiy-tanqidiy maqolalar yozish ko'nikmasini shakllantirish",
			ru: 'Формирование навыков написания научно-критических статей',
			en: 'Developing skills in writing scientific and critical articles',
		},
	]

	const applicationFields = [
		{
			icon: Building2,
			uz: 'Maktablar va litseylar',
			ru: 'Школы и лицеи',
			en: 'Schools and lyceums',
		},
		{
			icon: GraduationCap,
			uz: "Oliy ta'lim muassasalari",
			ru: 'Высшие учебные заведения',
			en: 'Higher education institutions',
		},
		{
			icon: Briefcase,
			uz: 'Nashriyot va tahririyatlar',
			ru: 'Издательства и редакции',
			en: 'Publishers and editorial offices',
		},
		{ icon: BookOpen, uz: 'Kutubxonalar', ru: 'Библиотеки', en: 'Libraries' },
	]

	const getFieldText = (field: { uz: string; ru: string; en: string }) => {
		switch (language) {
			case 'ru':
				return field.ru
			case 'en':
				return field.en
			default:
				return field.uz
		}
	}

	return (
		<div className='edu-section'>
			<div className='edu-container'>
				{/* Page Header */}
				<div className='text-center mb-16'>
					<h1 className='text-4xl md:text-5xl font-heading font-bold mb-4'>
						{t('about.title')}
					</h1>
					<p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
						{t('about.goals.desc')}
					</p>
				</div>

				{/* Goals Section */}
				<section className='mb-16'>
					<div className='flex items-center gap-3 mb-8'>
						<div className='flex items-center justify-center w-12 h-12 rounded-xl edu-gradient-bg text-white'>
							<Target className='h-6 w-6' />
						</div>
						<h2 className='text-2xl md:text-3xl font-heading font-bold'>
							{t('about.goals.title')}
						</h2>
					</div>

					<div className='grid md:grid-cols-2 gap-4'>
						{goals.map((goal, index) => (
							<div key={index} className='edu-card p-5 flex items-start gap-4'>
								<div className='flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary shrink-0'>
									<CheckCircle2 className='h-5 w-5' />
								</div>
								<p className='text-foreground font-medium'>
									{getFieldText(goal)}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Outcomes Section */}
				<section className='mb-16 bg-muted/30 -mx-4 px-4 py-12 md:-mx-8 md:px-8 rounded-3xl'>
					<div className='flex items-center gap-3 mb-8'>
						<div className='flex items-center justify-center w-12 h-12 rounded-xl edu-gradient-bg text-white'>
							<Award className='h-6 w-6' />
						</div>
						<h2 className='text-2xl md:text-3xl font-heading font-bold'>
							{t('about.outcomes.title')}
						</h2>
					</div>

					<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
						{outcomes.map((outcome, index) => (
							<div
								key={index}
								className='bg-background border border-border shadow-sm rounded-2xl p-6 relative overflow-hidden group'
							>
								<div className='absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-500' />
								<span className='text-4xl font-bold text-primary/10 absolute top-4 right-6 leading-none'>
									0{index + 1}
								</span>
								<p className='text-foreground relative z-10'>
									{getFieldText(outcome)}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Application Fields */}
				<section>
					<div className='flex items-center gap-3 mb-8'>
						<div className='flex items-center justify-center w-12 h-12 rounded-xl edu-gradient-bg text-white'>
							<Briefcase className='h-6 w-6' />
						</div>
						<h2 className='text-2xl md:text-3xl font-heading font-bold'>
							{t('about.application.title')}
						</h2>
					</div>

					<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
						{applicationFields.map((field, index) => (
							<div
								key={index}
								className='edu-card p-6 text-center group hover:bg-primary hover:text-white transition-all duration-300'
							>
								<div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-white group-hover:text-primary mb-4 transition-colors'>
									<field.icon className='h-6 w-6' />
								</div>
								<h3 className='font-semibold text-sm md:text-base leading-tight'>
									{getFieldText(field)}
								</h3>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	)
}
