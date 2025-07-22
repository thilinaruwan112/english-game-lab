'use client';
import { useLanguage } from '@/context/language-context';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const content = {
    en: {
        title: "Our Story",
        subtitle: "A Passion for Accessible English Education in Sri Lanka",
        p1: "EnglishGameLab was born from a simple idea: learning English should be an exciting and accessible adventure for every Sri Lankan student. We saw the challenges many face with traditional methods—often dry, intimidating, and disconnected from real-world use. We knew there had to be a better way.",
        p2: "Our team, a blend of experienced educators and tech innovators, came together to create a platform that combines structured learning with the fun of interactive games. We focus on the specific needs of O/L students and the common hurdles for Sinhala and Tamil speakers, ensuring our content is relevant, effective, and, most importantly, engaging.",
        missionTitle: "Our Mission",
        missionDesc: "To empower Sri Lankan students with the confidence and skills to master English, opening doors to a world of opportunities.",
        approachTitle: "Our Unique Approach",
        approachPoint1: "Gamified Learning: We turn grammar and vocabulary into fun challenges.",
        approachPoint2: "Cultural Relevance: Lessons are designed with the Sri Lankan context in mind.",
        approachPoint3: "Expert Support: Our team is always here to guide and motivate you.",
        teamTitle: "Meet the Team",
        teamSubtitle: "The passionate individuals behind EnglishGameLab.",
        teamMember1Name: "Kavya Perera",
        teamMember1Role: "Founder & Lead Educator",
        teamMember2Name: "Nimal Silva",
        teamMember2Role: "Lead Developer",
        teamMember3Name: "Fathima Rizwan",
        teamMember3Role: "Curriculum Designer",
    },
    si: {
        title: "අපේ කතාව",
        subtitle: "ශ්‍රී ලංකාවේ සැමට ඉංග්‍රීසි අධ්‍යාපනයක් සඳහා වූ දැඩි ආශාව",
        p1: "EnglishGameLab උපත ලැබුවේ සරල අදහසකිනි: ඉංග්‍රීසි ඉගෙනීම සෑම ශ්‍රී ලාංකික ශිෂ්‍යයෙකුටම උද්යෝගිමත් සහ ප්‍රවේශ විය හැකි වික්‍රමාන්විතයක් විය යුතුය. සාම්ප්‍රදායික ක්‍රම සමඟ බොහෝ දෙනෙක් මුහුණ දෙන අභියෝග අපි දුටුවෙමු - බොහෝ විට නීරස, බිය ගන්වන සුළු සහ සැබෑ ලෝක භාවිතයෙන් විසන්ධි වූවකි. වඩා හොඳ ක්‍රමයක් තිබිය යුතු බව අපි දැන සිටියෙමු.",
        p2: "පළපුරුදු අධ්‍යාපනඥයින් සහ තාක්ෂණික නවෝත්පාදකයින්ගේ සම්මිශ්‍රණයක් වන අපගේ කණ්ඩායම, ව්‍යුහගත ඉගෙනීම අන්තර්ක්‍රියාකාරී ක්‍රීඩාවල විනෝදය සමඟ ඒකාබද්ධ කරන වේදිකාවක් නිර්මාණය කිරීමට එකතු විය. අපි O/L සිසුන්ගේ නිශ්චිත අවශ්‍යතා සහ සිංහල සහ දෙමළ කථිකයන් සඳහා වන පොදු බාධක කෙරෙහි අවධානය යොමු කරමු, අපගේ අන්තර්ගතය අදාළ, ඵලදායී සහ, වඩාත්ම වැදගත් ලෙස, සිත් ඇදගන්නා සුළු බව සහතික කරමු.",
        missionTitle: "අපගේ මෙහෙවර",
        missionDesc: "ශ්‍රී ලාංකික සිසුන්ට ඉංග්‍රීසි ප්‍රගුණ කිරීමට විශ්වාසය සහ කුසලතා ලබා දීම, අවස්ථා ලෝකයකට දොරටු විවර කිරීම.",
        approachTitle: "අපගේ අද්විතීය ප්‍රවේශය",
        approachPoint1: "ක්‍රීඩා මගින් ඉගෙනීම: අපි ව්‍යාකරණ සහ වචන මාලාව විනෝදජනක අභියෝග බවට පත් කරමු.",
        approachPoint2: "සංස්කෘතික අදාළත්වය: පාඩම් ශ්‍රී ලාංකීය සන්දර්භය මනසේ තබාගෙන නිර්මාණය කර ඇත.",
        approachPoint3: "විශේෂඥ සහාය: අපගේ කණ්ඩායම ඔබට මග පෙන්වීමට සහ අභිප්‍රේරණය කිරීමට සැමවිටම මෙහි සිටී.",
        teamTitle: "කණ්ඩායම හමුවන්න",
        teamSubtitle: "EnglishGameLab පිටුපස සිටින දැඩි උනන්දුවක් දක්වන පුද්ගලයින්.",
        teamMember1Name: "කාව්‍යා පෙරේරා",
        teamMember1Role: "නිර්මාතෘ සහ ප්‍රධාන අධ්‍යාපනඥ",
        teamMember2Name: "නිමල් සිල්වා",
        teamMember2Role: "ප්‍රධාන සංවර්ධක",
        teamMember3Name: "ෆාතිමා රිස්වාන්",
        teamMember3Role: "විෂයමාලා නිර්මාණකරු",
    }
};

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const teamMembers = [
    { nameKey: 'teamMember1Name', roleKey: 'teamMember1Role', image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3NTMxNjk2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080", hint: "portrait female" },
    { nameKey: 'teamMember2Name', roleKey: 'teamMember2Role', image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxwb3J0cmFpdHxlbnwwfHx8fDE3NTMxNjk2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080", hint: "portrait male" },
    { nameKey: 'teamMember3Name', roleKey: 'teamMember3Role', image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3NTMxNjk2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080", hint: "portrait female" },
];

export default function AboutUsPage() {
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
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                        <Image
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzdHVkZW50cyUyMGxhdWdoaW5nfGVufDB8fHx8MTc1MzE2OTYxMnww&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="Happy students learning"
                            width={600}
                            height={400}
                            className="rounded-2xl shadow-xl"
                            data-ai-hint="students laughing"
                        />
                    </motion.div>
                    <div className="space-y-4 text-lg text-muted-foreground">
                        <p>{t.p1}</p>
                        <p>{t.p2}</p>
                    </div>
                </div>
            </motion.section>
            
            <motion.section 
                 className="py-16 bg-secondary"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.3 }}
                 variants={sectionVariants}
            >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold font-headline text-primary">{t.missionTitle}</h2>
                    <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto italic">
                        &ldquo;{t.missionDesc}&rdquo;
                    </p>
                </div>
            </motion.section>
            
            <motion.section 
                className="py-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-headline text-primary text-center">{t.approachTitle}</h2>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                            <h3 className="font-semibold text-xl mb-2">{t.approachPoint1}</h3>
                        </div>
                        <div className="p-6">
                            <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                            <h3 className="font-semibold text-xl mb-2">{t.approachPoint2}</h3>
                        </div>
                        <div className="p-6">
                           <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                           <h3 className="font-semibold text-xl mb-2">{t.approachPoint3}</h3>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section 
                className="py-16 bg-secondary"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-headline text-primary">{t.teamTitle}</h2>
                        <p className="mt-2 text-lg text-muted-foreground">{t.teamSubtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                             <motion.div 
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <Image
                                    src={member.image}
                                    alt={t[member.nameKey as keyof typeof t]}
                                    width={150}
                                    height={150}
                                    className="rounded-full mx-auto mb-4 shadow-lg"
                                    data-ai-hint={member.hint}
                                />
                                <h3 className="font-bold text-xl">{t[member.nameKey as keyof typeof t]}</h3>
                                <p className="text-muted-foreground">{t[member.roleKey as keyof typeof t]}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
