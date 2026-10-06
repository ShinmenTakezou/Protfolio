export type Achievement = {
  year: string;
  title: string;
  description: string;
  evidence: string;
  skill: string;
};

export const achievements: Achievement[] = [
  {
    year: "2026",
    title: "TBA achievement",
    description: "Add a university milestone, event, presentation, certificate, or experience.",
    evidence: "Link, screenshot, certificate, or note",
    skill: "Reflection"
  },
  {
    year: "2026",
    title: "New university experience",
    description: "Add a class experience, group work moment, club activity, or campus event.",
    evidence: "Short summary of what happened",
    skill: "Communication"
  },
  {
    year: "2026",
    title: "Basketball or personal milestone",
    description: "Add a team moment, practice habit, challenge, or personal improvement.",
    evidence: "Memory, photo, result, or routine",
    skill: "Consistency"
  }
];
