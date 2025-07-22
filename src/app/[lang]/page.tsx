'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpenCheck, Target, BotMessageSquare, BarChart3, Star, Quote, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLanguage } from '@/context/language-context';

const content = {
    en: {
        heroTitle: "Pass Your English Exam with Confidence",
        heroSubtitle: "EnglishGameLab offers a friendly, supportive path to success for Sri Lankan students. Our 6-9 month course is specially designed to help you ace the O/L English exam.",
        startLearning: "Start Learning Now",
        contactUs: "Contact Us",
        featuresTitle: "Key Features",
        featuresSubtitle: "Everything you need to succeed in one place.",
        feature1Title: "Structured Lessons",
        feature1Desc: "Follow a clear path from basics to advanced topics, designed for O/L students.",
        feature2Title: "Interactive Exercises",
        feature2Desc: "Practice what you learn with engaging quizzes and activities in every lesson.",
        feature3Title: "AI Pronunciation Coach",
        feature3Desc: "Get instant feedback on your spoken English to build confidence.",
        feature4Title: "Track Your Progress",
        feature4Desc: "See your skills grow and stay motivated with our progress tracking tools.",
        approachTitle: "Our Unique Approach",
        approachDesc: "We believe learning English should be fun, not stressful. Our course uses a unique combination of structured lessons and game-like exercises to make learning effective and enjoyable. We focus on the specific challenges faced by Sinhala and Tamil speakers, helping you build a strong foundation and speak with confidence.",
        approachPoint1: "Friendly Environment: A low-pressure space to learn and grow.",
        approachPoint2: "Practical Skills: Focus on communication for real-life situations.",
        approachPoint3: "Expert Support: Our supportive teachers are always ready to help.",
        testimonialsTitle: "What Our Students Say",
        testimonialsSubtitle: "Real stories from students who have found success with us.",
        testimonial1Name: "Kavya Perera",
        testimonial1Role: "O/L Student",
        testimonial1Text: "EnglishGameLab made learning English so much fun! The lessons are easy to follow, and the AI coach really helped my pronunciation. I feel much more confident for my exam.",
        testimonial2Name: "Nimal Silva",
        testimonial2Role: "Parent",
        testimonial2Text: "I signed up my son for this course, and the improvement has been amazing. The platform is well-designed, and the progress tracking helps me see how he's doing.",
        testimonial3Name: "Fathima Rizwan",
        testimonial3Role: "O/L Student",
        testimonial3Text: "I used to be scared of speaking English, but the interactive exercises and friendly environment here changed everything. I highly recommend it to all my friends!",
        ctaTitle: "Ready to Start Your Journey?",
        ctaSubtitle: "Join hundreds of other students and take the first step towards mastering English.",
        getStarted: "Get Started for Free",
    },
    si: {
        heroTitle: "විශ්වාසයෙන් ඉංග්‍රීසි විභාගය සමත් වන්න",
        heroSubtitle: "EnglishGameLab ශ්‍රී ලාංකික සිසුන් සඳහා සාර්ථකත්වයට මිත්‍රශීලී, සහායක මාවතක් සපයයි. අපගේ මාස 6-9 පාඨමාලාව O/L ඉංග්‍රීසි විභාගය ජය ගැනීමට ඔබට උපකාර කිරීම සඳහා විශේෂයෙන් නිර්මාණය කර ඇත.",
        startLearning: "දැන්ම ඉගෙනීම ආරම්භ කරන්න",
        contactUs: "අප අමතන්න",
        featuresTitle: "ප්‍රධාන අංග",
        featuresSubtitle: "සාර්ථක වීමට ඔබට අවශ්‍ය සියල්ල එකම තැනකින්.",
        feature1Title: "ව්‍යුහගත පාඩම්",
        feature1Desc: "O/L සිසුන් සඳහා නිර්මාණය කර ඇති, මූලික කරුණු වල සිට උසස් මාතෘකා දක්වා පැහැදිලි මාවතක් අනුගමනය කරන්න.",
        feature2Title: "අන්තර්ක්‍රියාකාරී අභ්‍යාස",
        feature2Desc: "සෑම පාඩමකම සිත් ඇදගන්නා සුළු ප්‍රශ්නාවලිය සහ ක්‍රියාකාරකම් සමඟ ඔබ ඉගෙන ගන්නා දේ පුහුණු වන්න.",
        feature3Title: "AI උච්චාරණ පුහුණුකරු",
        feature3Desc: "විශ්වාසය ගොඩනැගීමට ඔබගේ කථන ඉංග්‍රීසි පිළිබඳ ක්ෂණික ප්‍රතිපෝෂණ ලබා ගන්න.",
        feature4Title: "ඔබේ ප්‍රගතිය නිරීක්ෂණය කරන්න",
        feature4Desc: "අපගේ ප්‍රගති ලුහුබැඳීමේ මෙවලම් සමඟින් ඔබේ කුසලතා වර්ධනය වන ආකාරය සහ අභිප්‍රේරණයෙන් සිටින්න.",
        approachTitle: "අපගේ අද්විතීය ප්‍රවේශය",
        approachDesc: "ඉංග්‍රීසි ඉගෙනීම විනෝදජනක විය යුතු යැයි අපි විශ්වාස කරමු, ආතතියෙන් තොර විය යුතුය. අපගේ පාඨමාලාව ඉගෙනීම ඵලදායී හා විනෝදජනක කිරීමට ව්‍යුහගත පාඩම් සහ ක්‍රීඩා වැනි අභ්‍යාසවල අද්විතීය සංයෝජනයක් භාවිතා කරයි. අපි සිංහල සහ දෙමළ කථිකයන් මුහුණ දෙන නිශ්චිත අභියෝග කෙරෙහි අවධානය යොමු කරමින්, ශක්තිමත් පදනමක් ගොඩනඟා ගැනීමට සහ විශ්වාසයෙන් කතා කිරීමට ඔබට උදව් කරමු.",
        approachPoint1: "මිත්‍රශීලී පරිසරය: ඉගෙනීමට සහ වර්ධනය වීමට අඩු පීඩනයක් සහිත ඉඩක්.",
        approachPoint2: "ප්‍රායෝගික කුසලතා: සැබෑ ජීවිත තත්වයන් සඳහා සන්නිවේදනය කෙරෙහි අවධානය යොමු කරන්න.",
        approachPoint3: "විශේෂඥ සහාය: අපගේ සහායක ගුරුවරුන් සැමවිටම උදව් කිරීමට සූදානම්.",
        testimonialsTitle: "අපගේ සිසුන් පවසන දේ",
        testimonialsSubtitle: "අප සමඟ සාර්ථකත්වය සොයා ගත් සිසුන්ගේ සැබෑ කථා.",
        testimonial1Name: "කාව්‍යා පෙරේරා",
        testimonial1Role: "O/L ශිෂ්‍යාව",
        testimonial1Text: "EnglishGameLab ඉංග්‍රීසි ඉගෙනීම හරිම විනෝදජනක කළා! පාඩම් තේරුම් ගන්න ලේසියි, AI පුහුණුකරු මගේ උච්චාරණයට ගොඩක් උදව් කළා. මට විභාගෙට දැන් ගොඩක් විශ්වාසයි.",
        testimonial2Name: "නිමල් සිල්වා",
        testimonial2Role: "දෙමාපිය",
        testimonial2Text: "මම මගේ පුතාව මේ පාඨමාලාවට ඇතුළත් කළා, දියුණුව පුදුමයි. වේදිකාව හොඳින් නිර්මාණය කර ඇති අතර, ප්‍රගතිය නිරීක්ෂණය කිරීමෙන් ඔහු කෙසේදැයි බැලීමට මට උපකාරී වේ.",
        testimonial3Name: "ෆාතිමා රිස්වාන්",
        testimonial3Role: "O/L ශිෂ්‍යාව",
        testimonial3Text: "මම ඉස්සර ඉංග්‍රීසි කතා කරන්න බයයි, ඒත් මෙහේ තියෙන අන්තර්ක්‍රියාකාරී අභ්‍යාස සහ මිත්‍රශීලී පරිසරය හැමදේම වෙනස් කළා. මම මගේ යාළුවෝ හැමෝටම මේක නිර්දේශ කරනවා!",
        ctaTitle: "ඔබේ ගමන ආරම්භ කිරීමට සූදානම්ද?",
        ctaSubtitle: "තවත් සිය ගණනක් සිසුන් හා එක් වී ඉංග්‍රීසි ප්‍රගුණ කිරීමේ පළමු පියවර ගන්න.",
        getStarted: "නොමිලේ ආරම්භ කරන්න",
    }
}

export default function Home() {
    const { language } = useLanguage();
    const t = content[language] || content.si;

  const features = [
    {
      icon: <BookOpenCheck className="w-8 h-8 text-primary" />,
      title: t.feature1Title,
      description: t.feature1Desc,
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: t.feature2Title,
      description: t.feature2Desc,
    },
    {
      icon: <BotMessageSquare className="w-8 h-8 text-primary" />,
      title: t.feature3Title,
      description: t.feature3Desc,
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: t.feature4Title,
      description: t.feature4Desc,
    },
  ];

  const testimonials = [
      {
          name: t.testimonial1Name,
          role: t.testimonial1Role,
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3NTMxNjk2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
          testimonial: t.testimonial1Text,
      },
      {
          name: t.testimonial2Name,
          role: t.testimonial2Role,
          avatar: "https://images.unsplash.com/photo-1521119989659-a83eee488004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxwb3J0cmFpdHxlbnwwfHx8fDE3NTMxNjk2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
          testimonial: t.testimonial2Text,
      },
      {
          name: t.testimonial3Name,
          role: t.testimonial3Role,
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3NTMxNjk2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
          testimonial: t.testimonial3Text,
      }
  ]

  return (
    <div className="space-y-0">
      <section className="relative flex items-center justify-center min-h-[calc(100vh-theme(spacing.14))] text-center text-white">
        <Image 
            src="https://images.unsplash.com/photo-1603373577790-b635631b0302?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxjbGFzc3Jvb20lMjBzdHVkZW50c3xlbnwwfHx8fDE3NTMxNjk2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Students learning in a classroom"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
            data-ai-hint="classroom students"
        />
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="relative z-20 container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
                    {t.heroTitle}
                </h1>
                <p className="text-lg md:text-xl text-white/80">
                    {t.heroSubtitle}
                </p>
                <div className="flex justify-center gap-4">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href={`/${language}/lessons`}>{t.startLearning}</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                        <Link href={`/${language}/contact`}>{t.contactUs}</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>
      
      <section className="text-center py-24 bg-secondary px-4">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold font-headline text-secondary-foreground">{t.featuresTitle}</h2>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-secondary-foreground/80">{t.featuresSubtitle}</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
                <div key={feature.title} className="flex flex-col items-center text-center p-6">
                <div className="mb-4 bg-primary/10 p-4 rounded-full">
                    {feature.icon}
                </div>
                <h3 className="font-headline text-xl font-semibold text-secondary-foreground">{feature.title}</h3>
                <p className="mt-2 text-secondary-foreground/70">{feature.description}</p>
                </div>
            ))}
            </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-background">
        <div className="grid md:grid-cols-2 gap-12 items-center container mx-auto">
          <div className="relative h-80 w-full rounded-lg overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1580894732930-0babd100d356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx0ZWFjaGVyJTIwc3R1ZGVudHxlbnwwfHx8fDE3NTMxNjk2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Teacher helping a student"
              layout="fill"
              objectFit="cover"
              data-ai-hint="teacher student"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold font-headline text-primary">{t.approachTitle}</h2>
            <p className="mt-4 text-foreground/80">
              {t.approachDesc}
            </p>
            <ul className="mt-6 space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <span>{t.approachPoint1}</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <span>{t.approachPoint2}</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <span>{t.approachPoint3}</span>
                </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="text-center py-24 bg-secondary px-4">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold font-headline text-secondary-foreground">{t.testimonialsTitle}</h2>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-secondary-foreground/80">{t.testimonialsSubtitle}</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="text-left shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <Avatar>
                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="portrait" />
                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                                    <CardDescription>{testimonial.role}</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Quote className="w-8 h-8 text-primary/20 mb-2" />
                            <p className="text-card-foreground/80 italic">{testimonial.testimonial}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground text-center p-12">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold font-headline">{t.ctaTitle}</h2>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            {t.ctaSubtitle}
            </p>
            <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href={`/${language}/lessons`}>{t.getStarted}</Link>
            </Button>
            </div>
        </div>
      </section>

    </div>
  );
}
