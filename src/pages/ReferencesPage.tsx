import { useLanguage } from '@/contexts/LanguageContext'
import { Book, BookOpen } from 'lucide-react'
import React from 'react'

interface Reference {
	titleUz: string
	titleRu: string
	titleEn: string
	author: string
	year: string
	publisher: string
}

const mainReferences: Reference[] = [
	{
		titleUz: 'Adabiyotga e’tibor – ma’naviyatga, kelajakka e’tibor',
		titleRu: 'Adabiyotga e’tibor – ma’naviyatga, kelajakka e’tibor',
		titleEn: 'Adabiyotga e’tibor – ma’naviyatga, kelajakka e’tibor',
		author: 'Karimov I.A.',
		year: '2009',
		publisher: 'Toshkent: “O‘zbekiston”',
	},
	{
		titleUz: 'Yuksak ma’naviyat – yengilmas kuch',
		titleRu: 'Yuksak ma’naviyat – yengilmas kuch',
		titleEn: 'Yuksak ma’naviyat – yengilmas kuch',
		author: 'Karimov I.A.',
		year: '2010',
		publisher: 'Toshkent: “Ma’naviyat”',
	},
	{
		titleUz: 'Adabiyot nazariyasi. Ikki jildlik',
		titleRu: 'Adabiyot nazariyasi. Ikki jildlik',
		titleEn: 'Adabiyot nazariyasi. Ikki jildlik',
		author: '-',
		year: '1978, 1979',
		publisher: 'Toshkent: “Fan”',
	},
	{
		titleUz: 'Poetika. Axloqi kabir',
		titleRu: 'Poetika. Axloqi kabir',
		titleEn: 'Poetika. Axloqi kabir',
		author: 'Arastu',
		year: '2016',
		publisher: 'Toshkent: “Yangi asr avlodi”',
	},
	{
		titleUz: 'Проблемы поэтики Достоевского',
		titleRu: 'Проблемы поэтики Достоевского',
		titleEn: "Problems of Dostoevsky's Poetics",
		author: 'Baxtin M.M.',
		year: '1979',
		publisher: 'Москва: Сов.Россия',
	},
	{
		titleUz: 'Adabiyotshunoslik asoslari',
		titleRu: 'Adabiyotshunoslik asoslari',
		titleEn: 'Fundamentals of Literary Studies',
		author: 'Boboyev T.',
		year: '2000',
		publisher: 'Toshkent:, “O‘zbekiston”',
	},
	{
		titleUz: 'Adabiy-estetik tafakkur tarixi. 1-jild',
		titleRu: 'Adabiy-estetik tafakkur tarixi. 1-jild',
		titleEn: 'History of Literary-Aesthetic Thought. Vol 1',
		author: 'Boltaboyev H., Mahmudov M.',
		year: '2013',
		publisher: 'Toshkent: “Mumtoz so‘z”',
	},
	{
		titleUz: 'O‘zbek adabiyotshunosligi tarixi',
		titleRu: 'O‘zbek adabiyotshunosligi tarixi',
		titleEn: 'History of Uzbek Literary Studies',
		author: 'Valixo‘jayev B.',
		year: '1993',
		publisher: 'Toshkent: “O‘zbekiston”',
	},
	{
		titleUz: 'Jahon adiblari adabiyot haqida',
		titleRu: 'Jahon adiblari adabiyot haqida',
		titleEn: 'World Authors about Literature',
		author: '-',
		year: '2010',
		publisher: 'Toshkent: “Ma’naviyat”',
	},
	{
		titleUz: 'So‘z san’ati so‘zligi',
		titleRu: 'So‘z san’ati so‘zligi',
		titleEn: 'Glossary of the Art of the Word',
		author: 'Is’hoqov Y.',
		year: '2014',
		publisher: 'Toshkent: “O‘zbekiston”',
	},
]

const additionalReferences: Reference[] = [
	{
		titleUz: 'Adabiyotshunoslik metodologiyasi',
		titleRu: 'Adabiyotshunoslik metodologiyasi',
		titleEn: 'Methodology of Literary Studies',
		author: 'Karimov B.',
		year: '2011',
		publisher: 'Toshkent: “Muharrir”',
	},
	{
		titleUz: 'O‘zbek adabiy tanqidi tarixi',
		titleRu: 'O‘zbek adabiy tanqidi tarixi',
		titleEn: 'History of Uzbek Literary Criticism',
		author: 'Nazarov B., Rasulov A., Ahmedova Sh., Qahramonov Q.',
		year: '2012',
		publisher: 'Toshkent: “Tafakkur qanoti”',
	},
	{
		titleUz: 'Qodiriy mo‘jizasi',
		titleRu: 'Qodiriy mo‘jizasi',
		titleEn: 'The Miracle of Qodiriy',
		author: 'Normatov U.',
		year: '2010',
		publisher: 'Toshkent: “O‘zbekiston”',
	},
	{
		titleUz: 'Adabiyot nazariyasi',
		titleRu: 'Adabiyot nazariyasi',
		titleEn: 'Theory of Literature',
		author: 'Sulton I.',
		year: '2005',
		publisher: 'Toshkent: “O‘qituvchi”',
	},
	{
		titleUz: 'Теория литературы',
		titleRu: 'Теория литературы',
		titleEn: 'Literary Theory',
		author: 'Tерри Иглтон',
		year: '2010',
		publisher: 'Москва: “Территория будущего”',
	},
	{
		titleUz: 'Adabiyotshunoslikka kirish',
		titleRu: 'Adabiyotshunoslikka kirish',
		titleEn: 'Introduction to Literary Studies',
		author: 'Ulug‘ov A.',
		year: '2005',
		publisher: 'Toshkent: “Universitet”',
	},
	{
		titleUz: 'Tanlangan asarlar. 2, 4-5-jildlar',
		titleRu: 'Tanlangan asarlar. 2, 4-5-jildlar',
		titleEn: 'Selected Works',
		author: 'Fitrat A.',
		year: '2000, 2006, 2010',
		publisher: 'Toshkent: “Ma’naviyat”',
	},
	{
		titleUz: 'Теория литературы',
		titleRu: 'Теория литературы',
		titleEn: 'Literary Theory',
		author: 'Xalizev V.',
		year: '2006',
		publisher: 'Москва: “Высшая школа”',
	},
	{
		titleUz: 'Dovondagi o‘ylar',
		titleRu: 'Dovondagi o‘ylar',
		titleEn: 'Thoughts on the Pass',
		author: 'Sharafiddinov O.',
		year: '2004',
		publisher: 'Toshkent: “Ma’naviyat”',
	},
	{
		titleUz: 'Sharq mumtoz poetikasi: manba va talqinlar',
		titleRu: 'Sharq mumtoz poetikasi: manba va talqinlar',
		titleEn: 'Classical Eastern Poetics',
		author: '-',
		year: '2006',
		publisher: 'Toshkent: “O‘zbekiston Milliy ensiklopediyasi”',
	},
	{
		titleUz: 'G‘arb shamoli',
		titleRu: 'G‘arb shamoli',
		titleEn: 'West Wind',
		author: 'Shelli Bishi Persi',
		year: '2014',
		publisher: 'Toshkent: “O‘zbekiston”',
	},
	{
		titleUz: 'Adabiyotshunoslikka kirish',
		titleRu: 'Adabiyotshunoslikka kirish',
		titleEn: 'Introduction to Literary Studies',
		author: 'Quronov D.',
		year: '2007',
		publisher: 'Toshkent: “Fan”',
	},
	{
		titleUz: 'G‘arb adabiy-tanqidiy tafakkuri tarixi ocherklari',
		titleRu: 'G‘arb adabiy-tanqidiy tafakkuri tarixi ocherklari',
		titleEn: 'Essays on the History of Western Literary-Critical Thought',
		author: 'Quronov D., Rahmonov B.',
		year: '2008',
		publisher: 'Toshkent: “Fan”',
	},
	{
		titleUz: 'Adabiyotshunoslik lug‘ati',
		titleRu: 'Adabiyotshunoslik lug‘ati',
		titleEn: 'Dictionary of Literary Studies',
		author: 'Quronov D., Mamajonov Z., Sheraliyeva M.',
		year: '2010',
		publisher: 'Toshkent: “Akademnashr”',
	},
]

export const ReferencesPage: React.FC = () => {
	const { t, language } = useLanguage()

	const getTitle = (ref: Reference) => {
		switch (language) {
			case 'ru':
				return ref.titleRu
			case 'en':
				return ref.titleEn
			default:
				return ref.titleUz
		}
	}

	const ReferenceCard: React.FC<{ reference: Reference; index: number }> = ({
		reference,
		index,
	}) => (
		<div className='edu-card p-5 hover:border-primary/30 transition-colors'>
			<div className='flex items-start gap-4'>
				<div className='flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0'>
					<Book className='h-5 w-5' />
				</div>
				<div className='flex-1'>
					<h3 className='font-semibold mb-1'>{getTitle(reference)}</h3>
					<p className='text-sm text-muted-foreground mb-2'>
						{reference.author} ({reference.year})
					</p>
					<p className='text-xs text-muted-foreground'>{reference.publisher}</p>
				</div>
			</div>
		</div>
	)

	return (
		<div className='edu-section'>
			<div className='edu-container'>
				<div className='text-center mb-16'>
					<h1 className='text-4xl md:text-5xl font-heading font-bold mb-4'>
						{t('references.title')}
					</h1>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						{t('references.subtitle')}
					</p>
				</div>

				<div className='space-y-16'>
					<section>
						<div className='flex items-center gap-3 mb-8'>
							<div className='flex items-center justify-center w-10 h-10 rounded-lg edu-gradient-bg text-white'>
								<BookOpen className='h-5 w-5' />
							</div>
							<h2 className='text-2xl font-heading font-bold'>
								{t('references.main')}
							</h2>
						</div>
						<div className='grid md:grid-cols-2 gap-6'>
							{mainReferences.map((ref, index) => (
								<ReferenceCard key={index} reference={ref} index={index} />
							))}
						</div>
					</section>

					<section>
						<div className='flex items-center gap-3 mb-8'>
							<div className='flex items-center justify-center w-10 h-10 rounded-lg bg-muted text-muted-foreground'>
								<BookOpen className='h-5 w-5' />
							</div>
							<h2 className='text-2xl font-heading font-bold text-muted-foreground'>
								{t('references.additional')}
							</h2>
						</div>
						<div className='grid md:grid-cols-2 gap-6 opacity-80'>
							{additionalReferences.map((ref, index) => (
								<ReferenceCard key={index} reference={ref} index={index} />
							))}
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}
