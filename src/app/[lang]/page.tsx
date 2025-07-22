'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpenCheck, Target, BotMessageSquare, BarChart3, Star, Quote, CheckCircle, UserPlus, PencilRuler, Goal } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLanguage } from '@/context/language-context';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
        howItWorksTitle: "How It Works",
        howItWorksSubtitle: "Get started in three simple steps.",
        step1Title: "Create Your Account",
        step1Desc: "Sign up for free and get instant access to our learning platform.",
        step2Title: "Start Your Lessons",
        step2Desc: "Follow our structured modules and complete interactive exercises.",
        step3Title: "Achieve Your Goals",
        step3Desc: "Track your progress and get ready to pass your exam with flying colors.",
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
        faqTitle: "Frequently Asked Questions",
        faqSubtitle: "Have questions? We've got answers.",
        faq1Question: "Is this course suitable for absolute beginners?",
        faq1Answer: "Yes! Our course is designed to cater to all levels, from absolute beginners to those who just need to polish their skills. We start with the basics and gradually move to more advanced topics.",
        faq2Question: "How long does it take to complete the course?",
        faq2Answer: "The course is designed to be completed in 6-9 months, but you can learn at your own pace. Your access to the materials is for a full year.",
        faq3Question: "Can I use this on my mobile phone?",
        faq3Answer: "Absolutely! Our platform is fully responsive and works beautifully on all devices, including mobile phones, tablets, and computers.",
        faq4Question: "What kind of support is available?",
        faq4Answer: "We offer support through our contact page and have a community forum where you can ask questions and interact with other students and teachers.",
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
        howItWorksTitle: "ක්‍රියා කරන ආකාරය",
        howItWorksSubtitle: "සරල පියවර තුනකින් ආරම්භ කරන්න.",
        step1Title: "ගිණුමක් සාදන්න",
        step1Desc: "නොමිලේ ලියාපදිංචි වී අපගේ ඉගෙනුම් වේදිකාවට ක්ෂණික ප්‍රවේශය ලබා ගන්න.",
        step2Title: "පාඩම් ආරම්භ කරන්න",
        step2Desc: "අපගේ ව්‍යුහගත පාඩම් මාලා අනුගමනය කර අන්තර්ක්‍රියාකාරී අභ්‍යාස සම්පූර්ණ කරන්න.",
        step3Title: "ඔබේ ඉලක්ක සපුරා ගන්න",
        step3Desc: "ඔබේ ප්‍රගතිය නිරීක්ෂණය කර ඉහළින් විභාගය සමත් වීමට සූදානම් වන්න.",
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
        faqTitle: "නිතර අසන ප්‍රශ්න",
        faqSubtitle: "ඔබට ප්‍රශ්න තිබේද? අප සතුව පිළිතුරු තිබේ.",
        faq1Question: "මෙම පාඨමාලාව මුල සිටම ආරම්භ කරන්නන්ට සුදුසුද?",
        faq1Answer: "ඔව්! අපගේ පාඨමාලාව මුල සිටම ආරම්භ කරන්නන්ගේ සිට තම කුසලතා ඔප් නංවා ගැනීමට අවශ්‍ය අය දක්වා සියලුම මට්ටම් සඳහා සකස් කර ඇත. අපි මූලික කරුණු වලින් ආරම්භ කර ක්‍රමයෙන් වඩාත් උසස් මාතෘකා වෙත යොමු වෙමු.",
        faq2Question: "පාඨමාලාව සම්පූර්ණ කිරීමට කොපමණ කාලයක් ගතවේද?",
        faq2Answer: "මෙම පාඨමාලාව මාස 6-9 කින් සම්පූර්ණ කිරීමට සැලසුම් කර ඇත, නමුත් ඔබට ඔබේම වේගයෙන් ඉගෙන ගත හැකිය. ඔබට සම්පූර්ණ වසරක් සඳහා පාඩම් මාලා වෙත ප්‍රවේශය ඇත.",
        faq3Question: "මට මෙය මගේ ජංගම දුරකථනයෙන් භාවිතා කළ හැකිද?",
        faq3Answer: "අනිවාර්යයෙන්ම! අපගේ වේදිකාව සම්පූර්ණයෙන්ම ප්‍රතිචාරාත්මක වන අතර ජංගම දුරකථන, ටැබ්ලට් සහ පරිගණක ඇතුළු සියලුම උපාංගවල මනාව ක්‍රියා කරයි.",
        faq4Question: "ලබා ගත හැකි සහාය කුමක්ද?",
        faq4Answer: "අපි අපගේ සම්බන්ධතා පිටුව හරහා සහාය ලබා දෙන අතර ඔබට ප්‍රශ්න ඇසීමට සහ අනෙකුත් සිසුන් සහ ගුරුවරුන් සමඟ අන්තර් ක්‍රියා කිරීමට ප්‍රජා සංසදයක් ඇත.",
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

  const howItWorksSteps = [
    {
      icon: <UserPlus className="w-10 h-10 text-primary" />,
      title: t.step1Title,
      description: t.step1Desc,
    },
    {
      icon: <PencilRuler className="w-10 h-10 text-primary" />,
      title: t.step2Title,
      description: t.step2Desc,
    },
    {
      icon: <Goal className="w-10 h-10 text-primary" />,
      title: t.step3Title,
      description: t.step3Desc,
    }
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

  const faqs = [
    {
      question: t.faq1Question,
      answer: t.faq1Answer,
    },
    {
      question: t.faq2Question,
      answer: t.faq2Answer,
    },
    {
      question: t.faq3Question,
      answer: t.faq3Answer,
    },
    {
      question: t.faq4Question,
      answer: t.faq4Answer,
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
      
      <section className="text-center py-24 bg-background px-4">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold font-headline text-foreground">{t.featuresTitle}</h2>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">{t.featuresSubtitle}</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
                <div key={feature.title} className="flex flex-col items-center text-center p-6">
                <div className="mb-4 bg-primary/10 p-4 rounded-full">
                    {feature.icon}
                </div>
                <h3 className="font-headline text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </div>
            ))}
            </div>
        </div>
      </section>

      <section className="text-center py-24 bg-secondary px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-headline text-secondary-foreground">{t.howItWorksTitle}</h2>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-secondary-foreground/80">{t.howItWorksSubtitle}</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 md:block hidden"></div>
             {howItWorksSteps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center text-center z-10">
                <div className="mb-4 bg-secondary p-4 rounded-full border-4 border-primary/20">
                    {step.icon}
                </div>
                <h3 className="font-headline text-xl font-semibold text-secondary-foreground">{step.title}</h3>
                <p className="mt-2 text-secondary-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-background">
        <div className="grid md:grid-cols-2 gap-12 items-center container mx-auto">
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
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
            <p className="mt-4 text-muted-foreground">
              {t.approachDesc}
            </p>
            <ul className="mt-6 space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <span>{t.approachPoint1}</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <span>{t.approachPoint2}</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
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
      
      <section className="py-24 bg-background px-4">
          <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold font-headline text-foreground">{t.faqTitle}</h2>
                  <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">{t.faqSubtitle}</p>
              </div>
              <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                          <AccordionContent className="text-base text-muted-foreground">
                              {faq.answer}
                          </AccordionContent>
                      </AccordionItem>
                  ))}
              </Accordion>
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
