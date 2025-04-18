interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Figma",
    description: "最喜欢的UI矢量设计工具，完成产品界面与交互设计",
    icon: "astro_dark"
  },
  {
    name: "NextJs",
    description: "My favorite React framework for building modern web apps",
    icon: "nextjs_icon_dark"
  },
  {
    name: "NodeJs",
    description: "I've been using NodeJs for backend development since 2018",
    icon: "nodejs"
  },
  {
    name: "MongoDB",
    description: "My favorite database for modern apps",
    icon: "mongodb"
  }
];

export default hardSkills;