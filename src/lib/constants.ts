export const courseModules = [
  {
    id: "module-1",
    slug: "beginners-english-the-fundamentals",
    title: "Beginner's English: The Fundamentals",
    category: "Beginner",
    price: 1500,
    image: "https://placehold.co/600x400.png",
    hint: "students learning",
    lessons: [
      { id: 1, title: "Lesson 1: Alphabet & Greetings", completed: true },
      { id: 2, title: "Lesson 2: Simple Sentences (I am, You are)", completed: true },
      { id: 3, title: "Lesson 3: Asking 'What' and 'Where'", completed: false },
    ],
  },
  {
    id: "module-2",
    slug: "intermediate-english-build-your-vocabulary",
    title: "Intermediate English: Build Your Vocabulary",
    category: "Intermediate",
    price: 2500,
    image: "https://placehold.co/600x400.png",
    hint: "library books",
    lessons: [
      { id: 4, title: "Lesson 4: Common Objects", completed: false },
      { id: 5, title: "Lesson 5: Family & People", completed: false },
      { id: 6, title: "Lesson 6: Describing Things (Colors & Sizes)", completed: false },
    ],
  },
  {
    id: "module-3",
    slug: "advanced-english-master-essential-grammar",
    title: "Advanced English: Master Essential Grammar",
    category: "Advanced",
    price: 3000,
    image: "https://placehold.co/600x400.png",
    hint: "writing notes",
    lessons: [
      { id: 7, title: "Lesson 7: Present Tense", completed: false },
      { id: 8, title: "Lesson 8: Past Tense", completed: false },
      { id: 9, title: "Lesson 9: Future Tense", completed: false },
    ],
  },
  {
    id: "module-4",
    slug: "spoken-english-practice",
    title: "Spoken English Practice",
    category: "Intermediate",
    price: 4000,
    image: "https://placehold.co/600x400.png",
    hint: "people talking",
    lessons: [
      { id: 10, title: "Lesson 10: Everyday Conversations", completed: false },
      { id: 11, title: "Lesson 11: Public Speaking Basics", completed: false },
      { id: 12, title: "Lesson 12: Debating and Discussions", completed: false },
    ],
  },
];

export const progressData = {
    overallProgress: 22,
    completedLessons: [
        { lesson: "Lesson 1: Alphabet & Greetings", score: "95%", date: "2024-07-10" },
        { lesson: "Lesson 2: Simple Sentences", score: "88%", date: "2024-07-12" },
    ],
    lessonsInProgress: courseModules.flatMap(m => m.lessons).filter(l => !l.completed).length,
    totalLessons: courseModules.flatMap(m => m.lessons).length,
};
