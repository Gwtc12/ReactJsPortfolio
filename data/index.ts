export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritize code quality and consistency, knowing they are key to sustainable development",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Open to flexible schedules and remote collaboration",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My work",
    description: "Continuous learning drive",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Enthusiast of modern technologies and clean coding practices",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently building a Java-based solution to optimize medication adherence through smart reminders",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Interested in collaborating on a project with me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Mario has been both inspiring and educational. His depth in Java and his proactive use of AWS tools set a high bar for the rest of our team. He’s the kind of developer who’s always one step ahead, proposing scalable and elegant solutions. I’d gladly work alongside him again.",
    name: "Kyle Evans",
    title: "Senior Backend Developer, NexaTech Solutions",
     avatar:"KyleE.jpg",
  },
  {
    quote:
      "Mario is more than a developer — he’s a problem solver. Every time we faced a challenge, he brought not just technical knowledge, but also calm and clarity. His ability to simplify complex problems, especially in cloud-based architectures, makes him an invaluable teammate.",
    name: "Jason MacFadden",
    title: "Full Stack Engineer, NexaTech Solutions",
    avatar:"JasonM.jpg",
  },
  {
    quote:
      "Mario stood out from the very beginning of our advanced cloud architecture course. His questions reflected a deep curiosity and his assignments consistently exceeded expectations. He brought strong Java fundamentals into every AWS use case we explored. A committed learner with a real-world mindset.",
    name: "Melissa Johnson",
    title: "Lead Technical Instructor, SGS Société Générale de Surveillance",
    avatar:"MelissaJ.jpg",
  },
  {
    quote:
      "I hired Mario to build a secure backend for our e-commerce platform and the experience was seamless. He handled both Java development and AWS deployment with total confidence. The delivery was ahead of schedule, and he was incredibly responsive to feedback. Highly recommend!",
    name: "Shawn Kumar",
    title: "Founder, Oaklane Apparel",
    avatar:"ShawnK.jpg",
  },
  {
    quote:
      "From day one, Mario brought clarity, structure, and great communication to our custom CRM project. His understanding of user needs and system efficiency helped us go from idea to production smoothly. If you're looking for someone who truly cares about quality, Mario's your guy.",
    name: "Natalie Paterson",
    title: "Operations Manager, GEG Consulting",
    avatar:"NatalieP.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: " AWS",
    img: "/awslo.svg",
    nameImg: "awsly.png",
  },
  {
    id: 2,
    name: "Kubernets",
    img: "/Kubernetes.svg",
    nameImg: "/Ku.png",
  },
  {
    id: 3,
    name: "GitHub",
    img: "/gitH.svg",
    nameImg: "/GitHubLy.png",
  },
  {
    id: 4,
    name: "Spring",
    img: "/Spring.svg",
    nameImg: "/SpringLy2.png",
  },
  {
    id: 5,
    name: "docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
