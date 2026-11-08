
export type AboutParagraph = {
  segments: {
    text: string;
    emphasis?: boolean;
  }[];
};

export type AboutHighlight = {
  value: string;
  label: string;
};

export const aboutParagraphs: AboutParagraph[] = [
  {
    segments: [
      { text: "I'm an " },
      {
        text: "Informatics Engineering student",
        emphasis: true,
      },
      {
        text: " in my fourth year at Latakia University, with a focused interest in frontend development — particularly building responsive, maintainable web applications with ",
      },
      {
        text: "React and TypeScript.",
        emphasis: true,
      },
    ],
  },
  {
    segments: [
      {
        text: "I've completed multiple training programs with industry practitioners, worked through real projects from design to deployment, and continue expanding my skills in modern frontend technologies including Next.js, Tailwind CSS, and state management patterns.",
      },
    ],
  },
  {
    segments: [
      {
        text: "My goal is to build interfaces that are technically solid, accessible, and genuinely pleasant to use — combining an engineer's attention to structure with care for the end-user experience.",
      },
    ],
  },
];

export const aboutHighlights: AboutHighlight[] = [
  {
    value: "3+",
    label: "Training Programs",
  },
  {
    value: "3+",
    label: "Completed Projects",
  },
  {
    value: "Y4",
    label: "Informatics Engineering",
  },
  {
    value: "2+",
    label: "Years of Learning",
  },
];
