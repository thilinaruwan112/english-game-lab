export const courseModules = [
  {
    id: "module-1",
    title: "Module 1: The Basics",
    lessons: [
      { id: 1, title: "Lesson 1: Alphabet & Greetings", completed: true },
      { id: 2, title: "Lesson 2: Simple Sentences (I am, You are)", completed: true },
      { id: 3, title: "Lesson 3: Asking 'What' and 'Where'", completed: false },
    ],
  },
  {
    id: "module-2",
    title: "Module 2: Building Vocabulary",
    lessons: [
      { id: 4, title: "Lesson 4: Common Objects", completed: false },
      { id: 5, title: "Lesson 5: Family & People", completed: false },
      { id: 6, title: "Lesson 6: Describing Things (Colors & Sizes)", completed: false },
    ],
  },
  {
    id: "module-3",
    title: "Module 3: Essential Grammar",
    lessons: [
      { id: 7, title: "Lesson 7: Present Tense", completed: false },
      { id: 8, title: "Lesson 8: Past Tense", completed: false },
      { id: 9, title: "Lesson 9: Future Tense", completed: false },
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
