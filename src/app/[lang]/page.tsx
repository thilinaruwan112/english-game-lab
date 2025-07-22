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
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

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
        ctaTitle: "ඔබේ ගමන ආරම්භ කිරීමට සූදානම්ද?",
        ctaSubtitle: "තවත් සිය ගණනක් සිසුන් හා එක් වී ඉංග්‍රීසි ප්‍රගුණ කිරීමේ පළමු පියවර ගන්න.",
        getStarted: "නොමිලේ ආරම්භ කරන්න",
    }
}

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

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
            <motion.div 
                className="max-w-3xl mx-auto space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
                    {t.heroTitle}
                </h1>
                <p className="text-lg md:text-xl text-white/80">
                    {t.heroSubtitle}
                </p>
                <div className="flex justify-center gap-4">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105">
                        <Link href={`/${language}/lessons`}>{t.startLearning}</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-transform hover:scale-105">
                        <Link href={`/${language}/contact`}>{t.contactUs}</Link>
                    </Button>
                </div>
            </motion.div>
        </div>
      </section>
      
      <motion.section 
        className="text-center py-24 bg-background px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold font-headline text-foreground">{t.featuresTitle}</h2>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">{t.featuresSubtitle}</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
                <motion.div 
                  key={feature.title} 
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl h-full">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                           <div className="bg-primary/10 p-4 rounded-full">
                              {feature.icon}
                           </div>
                           <div className="text-center">
                              <h3 className="font-headline text-xl font-semibold">{feature.title}</h3>
                              <p className="mt-1 text-muted-foreground">{feature.description}</p>
                           </div>
                      </CardContent>
                  </Card>
                </motion.div>
            ))}
            </div>
        </div>
      </motion.section>

      <motion.section 
        className="bg-primary text-primary-foreground text-center p-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        >
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold font-headline">{t.ctaTitle}</h2>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            {t.ctaSubtitle}
            </p>
            <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105">
                <Link href={`/${language}/lessons`}>{t.getStarted}</Link>
            </Button>
            </div>
        </div>
      </motion.section>

    </div>
  );
}
