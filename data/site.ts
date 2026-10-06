export type NavItem = {
  href: string;
  label: string;
};

export type CareerPath = {
  title: string;
  description: string;
};

export const navItems: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Archive" },
  { href: "/career", label: "Career" },
  { href: "/playground", label: "Play" },
  { href: "/admin", label: "Admin" }
];

export const profile = {
  name: "JI-won",
  university: "Ritsumeikan University",
  course: "ISSE course",
  headline: "ISSE student. IT direction loading.",
  intro:
    "Projects, class work, new experiences, and the honest process of learning what to build next.",
  about:
    "I like games, music, basketball, and the feeling of starting something new. This portfolio helps me store progress before it disappears into old files.",
  interests: ["Games", "Music", "Basketball", "IT", "University life", "Learning slowly"],
  socials: [
    { label: "Email TBA", href: "mailto:your-email@example.com" },
    { label: "GitHub TBA", href: "#" },
    { label: "LinkedIn TBA", href: "#" }
  ]
};

export const careerPaths: CareerPath[] = [
  {
    title: "Software development",
    description: "Learn how real apps are planned, built, tested, and improved."
  },
  {
    title: "IT support",
    description: "Understand systems, users, troubleshooting, and practical service work."
  },
  {
    title: "Data analysis",
    description: "Use information to explain what happened and what should happen next."
  },
  {
    title: "Cybersecurity basics",
    description: "Explore how people protect accounts, systems, networks, and data."
  },
  {
    title: "QA testing",
    description: "Find bugs, explain risk clearly, and help teams ship with confidence."
  },
  {
    title: "Product work",
    description: "Connect user problems, technical choices, and realistic priorities."
  }
];

export const prompts = [
  "Open one old assignment and write the thing it taught you.",
  "Rename one TBA card with an actual idea.",
  "Write the first bug you remember fixing, even if it was tiny.",
  "Add one class moment that made you understand teamwork better.",
  "Spend ten minutes on one programming concept, then save the note.",
  "Add one basketball or music memory that says something about you."
];

export const moods = [
  "Late-night focus, dark room, headphones on.",
  "Basketball warmup energy, fast playlist, no overthinking.",
  "Rainy campus walk, slower music, one clean thought.",
  "Game lobby focus, ready but relaxed.",
  "Library mode, low volume, finish one small thing."
];
