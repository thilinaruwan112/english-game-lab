'use client';

import { useLanguage } from '@/context/language-context';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const content = {
    en: {
        title: "Success Stories",
        subtitle: "Real journeys, real results. Hear from students who transformed their English skills with us.",
        testimonial1Name: "Kavya Perera",
        testimonial1Role: "O/L Student, Colombo",
        testimonial1Text: "Before EnglishGameLab, I was really nervous about the O/L English exam. The lessons made everything so clear, and the AI coach was a game-changer for my speaking. I passed with a distinction! I never thought that would be possible.",
        testimonial2Name: "Nimal Silva",
        testimonial2Role: "Parent, Kandy",
        testimonial2Text: "My son struggled with English for years. After enrolling him here, I saw a huge difference. He was more engaged, and his confidence grew every day. The platform is excellent, and the progress tracking helped me stay involved. Highly recommended.",
        testimonial3Name: "Fathima Rizwan",
        testimonial3Role: "O/L Student, Galle",
        testimonial3Text: "I used to hate grammar, but the interactive exercises made it feel like a game. The friendly environment helped me overcome my fear of speaking English. I'm now confident in conversations, and it's all thanks to this amazing course.",
        testimonial4Name: "Dasun Jayasuriya",
        testimonial4Role: "O/L Student, Jaffna",
        testimonial4Text: "The best part for me was the focus on practical skills. I learned how to use English in real-life situations, not just for the exam. The teachers are so supportive and always ready to help. It made a huge impact on my results.",
    },
    si: {
        title: "සාර්ථක කතා",
        subtitle: "සැබෑ ගමන්, සැබෑ ප්‍රතිඵල. අප සමඟ ඔවුන්ගේ ඉංග්‍රීසි කුසලතා පරිවර්තනය කළ සිසුන්ගෙන් අසන්න.",
        testimonial1Name: "කාව්‍යා පෙරේරා",
        testimonial1Role: "O/L ශිෂ්‍යාව, කොළඹ",
        testimonial1Text: "EnglishGameLab එකට කලින් මම O/L ඉංග්‍රීසි විභාගෙට ගොඩක් බයෙන් හිටියෙ. පාඩම් වලින් හැමදේම පැහැදිලි වුණා, AI coach මගේ කතා කිරීමේ හැකියාවට ලොකු වෙනසක් කළා. මම විභාගය distinction එකකින් සමත් වුණා! මම කවදාවත් හිතුවෙ නෑ ඒක පුළුවන් වෙයි කියලා.",
        testimonial2Name: "නිමල් සිල්වා",
        testimonial2Role: "දෙමාපිය, මහනුවර",
        testimonial2Text: "මගේ පුතා අවුරුදු ගාණක් ඉංග්‍රීසි වලට අමාරු වුණා. මෙහි ඇතුළත් කළාට පස්සේ මම ලොකු වෙනසක් දැක්කා. එයා ඉගෙනීමට වඩාත් උනන්දු වුණා, එයාගේ විශ්වාසය දිනෙන් දින වැඩි වුණා. වේදිකාව විශිෂ්ටයි, ප්‍රගති ලුහුබැඳීම මට සම්බන්ධ වී සිටීමට උදව් වුණා. ඉතා ඉහළින් නිර්දේශ කරනවා.",
        testimonial3Name: "ෆාතිමා රිස්වාන්",
        testimonial3Role: "O/L ශිෂ්‍යාව, ගාල්ල",
        testimonial3Text: "මම ඉස්සර ව්‍යාකරණ වලට වෛර කළා, නමුත් අන්තර්ක්‍රියාකාරී අභ්‍යාස නිසා ඒක ක්‍රීඩාවක් වගේ දැනුණා. මිත්‍රශීලී පරිසරය මට ඉංග්‍රීසි කතා කිරීමට තිබූ බිය නැති කරගන්න උදව් කළා. මම දැන් සංවාද වලදී විශ්වාසයි, ඒ හැමදේම මේ පුදුම පාඨමාලාවට පින්සිදු වෙන්න.",
        testimonial4Name: "දසුන් ජයසූරිය",
        testimonial4Role: "O/L ශිෂ්‍ය, යාපනය",
        testimonial4Text: "මට හොඳම කොටස වුණේ ප්‍රායෝගික කුසලතා කෙරෙහි අවධානය යොමු කිරීම. විභාගයට විතරක් නෙවෙයි, සැබෑ ජීවිත තත්වයන් වලදී ඉංග්‍රීසි භාවිතා කරන හැටි මම ඉගෙන ගත්තා. ගුරුවරු ගොඩක් සහයෝගයෙන් කටයුතු කරනවා, හැමවිටම උදව් කරන්න සූදානම්. ඒක මගේ ප්‍රතිඵල වලට ලොකු බලපෑමක් කළා.",
    }
};

const testimonials = [
    { nameKey: 'testimonial1Name', roleKey: 'testimonial1Role', textKey: 'testimonial1Text', avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3NTMxNjk2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080", hint: "portrait female" },
    { nameKey: 'testimonial2Name', roleKey: 'testimonial2Role', textKey: 'testimonial2Text', avatar: "https://images.unsplash.com/photo-1521119989659-a83eee488004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxwb3J0cmFpdHxlbnwwfHx8fDE3NTMxNjk2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080", hint: "portrait male" },
    { nameKey: 'testimonial3Name', roleKey: 'testimonial3Role', textKey: 'testimonial3Text', avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3NTMxNjk2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080", hint: "portrait female" },
    { nameKey: 'testimonial4Name', roleKey: 'testimonial4Role', textKey: 'testimonial4Text', avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3NTMxNjk2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080", hint: "portrait male" },
];

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function SuccessStoriesPage() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <div className="bg-background text-foreground">
            <motion.section
                className="text-center py-20 bg-primary/5"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
            >
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">{t.title}</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">{t.subtitle}</p>
                </div>
            </motion.section>

            <motion.section
                className="py-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card hover:-translate-y-2 rounded-2xl">
                                    <CardHeader>
                                        <div className="flex items-center gap-4">
                                            <Avatar className="w-16 h-16">
                                                <AvatarImage src={testimonial.avatar} alt={t[testimonial.nameKey as keyof typeof t]} data-ai-hint={testimonial.hint} />
                                                <AvatarFallback>{t[testimonial.nameKey as keyof typeof t].charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <CardTitle className="text-xl">{t[testimonial.nameKey as keyof typeof t]}</CardTitle>
                                                <CardDescription>{t[testimonial.roleKey as keyof typeof t]}</CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <Quote className="w-8 h-8 text-primary/20 mb-2" />
                                        <p className="text-card-foreground/80 italic">{t[testimonial.textKey as keyof typeof t]}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
