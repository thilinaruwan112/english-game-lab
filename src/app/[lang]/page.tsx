'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
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
        howItWorksTitle: "How It Works",
        howItWorksSubtitle: "A simple path to mastering English in three easy steps.",
        step1Title: "Sign Up & Start",
        step1Desc: "Create your free account and get instant access to our structured lesson plans.",
        step2Title: "Practice & Improve",
        step2Desc: "Complete interactive exercises and use our AI coach to perfect your pronunciation.",
        step3Title: "Achieve Your Goals",
        step3Desc: "Monitor your progress, see your skills improve, and confidently pass your exams.",
        testimonialsTitle: "What Our Students Say",
        testimonialsSubtitle: "Real stories from students who have found success with us.",
        testimonial1Name: "Kavya Perera",
        testimonial1Role: "O/L Student",
        testimonial1Text: "EnglishGameLab made learning English so much fun! The lessons are easy to follow, and the AI coach really helped my pronunciation. I feel much more confident for my exam.",
        testimonial2Name: "Nimal Silva",
        testimonial2Role: "Parent",
        testimonial2Text: "I signed up my son for this course, and the improvement has been amazing. He's more engaged and his confidence has grown so much.",
        testimonial3Name: "Fathima Rizwan",
        testimonial3Role: "O/L Student",
        testimonial3Text: "I used to be scared of speaking English, but the friendly environment here changed everything. I highly recommend it!",
        faqTitle: "Frequently Asked Questions",
        faqSubtitle: "Have questions? We've got answers.",
        faq1Question: "Who is this course for?",
        faq1Answer: "This course is specifically designed for Sri Lankan students preparing for the G.C.E. O/L English exam, but it's also great for anyone who wants to improve their basic English skills.",
        faq2Question: "How long does the course take?",
        faq2Answer: "The full course is designed to be completed in 6 to 9 months, but you can learn at your own pace.",
        faq3Question: "Is there a free trial?",
        faq3Answer: "Yes! You can sign up for free and access the first few lessons to see if our platform is right for you. No credit card required.",
        faq4Question: "Can I use this on my mobile phone?",
        faq4Answer: "Absolutely! Our platform is fully responsive and works beautifully on desktops, tablets, and mobile phones, so you can learn anytime, anywhere.",
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
        howItWorksTitle: "ක්‍රියාත්මක වන ආකාරය",
        howItWorksSubtitle: "පහසු පියවර තුනකින් ඉංග්‍රීසි ප්‍රගුණ කිරීමට සරල මගක්.",
        step1Title: "ලියාපදිංචි වී ආරම්භ කරන්න",
        step1Desc: "ඔබගේ නොමිලේ ගිණුම සාදා අපගේ ව්‍යුහගත පාඩම් සැලසුම් වෙත ක්ෂණික ප්‍රවේශය ලබා ගන්න.",
        step2Title: "පුහුණු වී දියුණු වන්න",
        step2Desc: "අන්තර්ක්‍රියාකාරී අභ්‍යාස සම්පූර්ණ කර ඔබගේ උච්චාරණය දියුණු කර ගැනීමට අපගේ AI පුහුණුකරු භාවිතා කරන්න.",
        step3Title: "ඔබේ ඉලක්ක සපුරා ගන්න",
        step3Desc: "ඔබගේ ප්‍රගතිය නිරීක්ෂණය කරන්න, ඔබේ කුසලතා වැඩි දියුණු වන ආකාරය බලන්න, සහ විශ්වාසයෙන් විභාග සමත් වන්න.",
        testimonialsTitle: "අපගේ සිසුන් පවසන දේ",
        testimonialsSubtitle: "අප සමඟ සාර්ථකත්වය සොයා ගත් සිසුන්ගේ සැබෑ කතා.",
        testimonial1Name: "කාව්‍යා පෙරේරා",
        testimonial1Role: "O/L ශිෂ්‍යාව",
        testimonial1Text: "EnglishGameLab ඉංග්‍රීසි ඉගෙනීම හරිම විනෝදජනක කළා! පාඩම් තේරුම් ගන්න ලේසියි, AI පුහුණුකරු මගේ උච්චාරණයට ගොඩක් උදව් කළා. මම දැන් විභාගයට ගොඩක් විශ්වාසයෙන් ඉන්නවා.",
        testimonial2Name: "නිමල් සිල්වා",
        testimonial2Role: "දෙමාපිය",
        testimonial2Text: "මම මගේ පුතාව මේ පාඨමාලාවට ඇතුළත් කළා, ඔහුගේ දියුණුව පුදුම සහගතයි. ඔහු ඉගෙනීමට වඩාත් උනන්දු වන අතර ඔහුගේ විශ්වාසය බොහෝ සෙයින් වර්ධනය වී තිබෙනවා.",
        testimonial3Name: "ෆාතිමා රිස්වාන්",
        testimonial3Role: "O/L ශිෂ්‍යාව",
        testimonial3Text: "මම ඉස්සර ඉංග්‍රීසි කතා කරන්න බයයි, නමුත් මෙහි ඇති මිත්‍රශීලී පරිසරය ඒ සියල්ල වෙනස් කළා. මම මගේ හැම යාළුවෙකුටම මෙය නිර්දේශ කරනවා!",
        faqTitle: "නිතර අසන ප්‍රශ්න",
        faqSubtitle: "ප්‍රශ්න තිබේද? අප සතුව පිළිතුරු තිබේ.",
        faq1Question: "මෙම පාඨමාලාව කා සඳහාද?",
        faq1Answer: "මෙම පාඨමාලාව අ.පො.ස. සා/පෙළ ඉංග්‍රීසි විභාගය සඳහා සූදානම් වන ශ්‍රී ලාංකික සිසුන් සඳහා විශේෂයෙන් නිර්මාණය කර ඇත, නමුත් ඔවුන්ගේ මූලික ඉංග්‍රීසි කුසලතා වැඩි දියුණු කර ගැනීමට කැමති ඕනෑම කෙනෙකුටද මෙය ඉතා සුදුසුය.",
        faq2Question: "පාඨමාලාවට කොපමණ කාලයක් ගතවේද?",
        faq2Answer: "සම්පූර්ණ පාඨමාලාව මාස 6 ත් 9 ත් අතර කාලයකදී සම්පූර්ණ කිරීමට සැලසුම් කර ඇත, නමුත් ඔබට ඔබේම වේගයෙන් ඉගෙන ගත හැකිය.",
        faq3Question: "නොමිලේ අත්හදා බැලීමක් තිබේද?",
        faq3Answer: "ඔව්! ඔබට නොමිලේ ලියාපදිංචි වී අපගේ වේදිකාව ඔබට ගැලපේදැයි බැලීමට පළමු පාඩම් කිහිපය වෙත පිවිසිය හැකිය. ක්‍රෙඩිට් කාඩ්පතක් අවශ්‍ය නොවේ.",
        faq4Question: "මට මෙය මගේ ජංගම දුරකථනයේ භාවිතා කළ හැකිද?",
        faq4Answer: "අනිවාර්යයෙන්ම! අපගේ වේදිකාව පරිගණක, ටැබ්ලට් සහ ජංගම දුරකථන වල ඉතා හොඳින් ක්‍රියා කරයි, එබැවින් ඔබට ඕනෑම වේලාවක, ඕනෑම තැනක සිට ඉගෙන ගත හැකිය.",
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

  const howItWorksSteps = [
      {
          icon: <UserPlus className="w-10 h-10 text-primary" />,
          title: t.step1Title,
          description: t.step1Desc
      },
      {
          icon: <PencilRuler className="w-10 h-10 text-primary" />,
          title: t.step2Title,
          description: t.step2Desc
      },
      {
          icon: <Goal className="w-10 h-10 text-primary" />,
          title: t.step3Title,
          description: t.step3Desc
      }
  ]

  const testimonials = [
      {
          name: t.testimonial1Name,
          role: t.testimonial1Role,
          text: t.testimonial1Text,
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3NTMxNjk2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
          hint: "portrait female"
      },
      {
          name: t.testimonial2Name,
          role: t.testimonial2Role,
          text: t.testimonial2Text,
          avatar: "https://images.unsplash.com/photo-1521119989659-a83eee488004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxwb3J0cmFpdHxlbnwwfHx8fDE3NTMxNjk2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
          hint: "portrait male"
      },
      {
          name: t.testimonial3Name,
          role: t.testimonial3Role,
          text: t.testimonial3Text,
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3NTMxNjk2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
          hint: "portrait female"
      },
  ]

  const faqs = [
      { q: t.faq1Question, a: t.faq1Answer },
      { q: t.faq2Question, a: t.faq2Answer },
      { q: t.faq3Question, a: t.faq3Answer },
      { q: t.faq4Question, a: t.faq4Answer },
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
        className="text-center py-24 bg-secondary px-4"
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
        className="py-24 bg-background px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold font-headline text-foreground">{t.howItWorksTitle}</h2>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">{t.howItWorksSubtitle}</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border hidden md:block"></div>
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center z-10"
                variants={itemVariants}
                transition={{ delay: index * 0.2 }}
              >
                <div className="bg-background rounded-full p-5 border-4 border-secondary shadow-lg mb-4">
                    {step.icon}
                </div>
                <h3 className="text-xl font-bold font-headline">{step.title}</h3>
                <p className="text-muted-foreground mt-2">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-24 bg-secondary px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-foreground">{t.testimonialsTitle}</h2>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">{t.testimonialsSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                transition={{ delay: index * 0.15 }}
              >
                  <Card className="h-full flex flex-col p-6 bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                      <CardContent className="flex-grow p-0">
                          <Quote className="w-8 h-8 text-primary/20 mb-4" />
                          <p className="text-card-foreground/80 italic mb-6">{testimonial.text}</p>
                      </CardContent>
                      <CardFooter className="p-0 mt-auto">
                           <div className="flex items-center gap-4">
                                <Avatar className='h-12 w-12'>
                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-bold">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                      </CardFooter>
                  </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-24 bg-background px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-foreground">{t.faqTitle}</h2>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">{t.faqSubtitle}</p>
          </div>
          <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqs.map((faq, index) => (
                      <motion.div 
                        key={index} 
                        variants={itemVariants}
                        transition={{ delay: index * 0.1 }}
                      >
                          <AccordionItem value={`item-${index}`} className="bg-background border border-border rounded-2xl px-6">
                              <AccordionTrigger className="text-left font-bold text-lg hover:no-underline">{faq.q}</AccordionTrigger>
                              <AccordionContent className="text-muted-foreground pt-2">
                                  {faq.a}
                              </AccordionContent>
                          </AccordionItem>
                      </motion.div>
                  ))}
              </Accordion>
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
