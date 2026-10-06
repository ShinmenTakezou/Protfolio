export type Project = {
  title: string;
  type: "University" | "Personal" | "Learning" | "Career";
  summary: string;
  lesson: string;
  nextStep: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "ISSE course project",
    type: "University",
    summary: "TBA. Add an assignment summary, role, tools used, and result.",
    lesson: "Write one useful lesson from the class or group work.",
    nextStep: "Add screenshots, links, or a short reflection.",
    image: "https://picsum.photos/seed/isse-university-project-interface/1200/800"
  },
  {
    title: "Game idea notebook",
    type: "Personal",
    summary: "TBA. Store concepts, references, mechanics, and game design ideas.",
    lesson: "Notice what makes a game enjoyable, readable, and replayable.",
    nextStep: "Turn one idea into a tiny written design brief.",
    image: "https://picsum.photos/seed/game-inspired-dark-web-project/1200/800"
  },
  {
    title: "Programming practice log",
    type: "Learning",
    summary: "TBA. Add exercises, code snippets, mistakes, and useful discoveries.",
    lesson: "AI can help, but understanding the code is still the skill.",
    nextStep: "Add one small practice project with a clear goal.",
    image: "https://picsum.photos/seed/programming-learning-black-desk/1200/800"
  }
];
