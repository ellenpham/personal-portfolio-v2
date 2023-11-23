// Navbar data
export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Projects',
    path: 'projects',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

// About data
const stories = [
  {
    id: 1,
    title: 'Who am I?',
    description: 
      "I am Ellen Pham - a junior full-stack developer, based in Melbourne, Australia. I am a coder by heart, and my experience in business setting have equipped me with valuable skills to be adaptable to any work environment. Since I was young, I has always been fascinated about how technology has evolved and how amazing web applications were created to serve us in daily life. I want to be a part of the tech industry, contributing to create real programs that solve real-world problems. Soon to be a graduate from Coder Academy, I strive to expand my tech knowledge and sharpen my coding skills. I always put in 100% effort in my study and work. To me, no practical experience is less significant, I can always learn something from them when giving out my best.",
  },
  {
    id: 2,
    title: 'What brought me here?',
    description: 'Back in 2017, I worked in marketing data management team at Bosch, Singapore. In 2019, I moved back to Australia and worked as a resourcing specialist at Programmed Skilled Workforce. Throughout my career, I have operated on various company internal systems, and have always been the go-to person when it comes to system operation. My passion for technology and the confidence working with systems gradually grew throughout years of performing database management. Yet, I still found the job was not challenging enough. I then took my courage and leapt into the newfound passion - coding. I love combining the worlds of logic and creative design to make engaging, functional, and accessible websites and applications. My aim is to deliver meaningful storytelling through exceptional digital experience.',
  },
  {
    id: 3,
    title: 'What am I standing for?',
    description: "The four values that I am always upholding: Integrity - Trust - Dedication - Humbleness. And my favourite quote from Maya Angelou 'Do the best you can until you know better. Then when you know better, do better'. Switching to tech career is not easy but I believe that if you put your heart in whatever you do, work hard and never give up, you will get rewarded with fruitful outcome.",
  },
  {
    id: 4,
    title: 'Who am I outside of work?',
    description: "Me, when I am not coding, I am a dedicated mum of an active 3-year-old girl, who has taught me a lot about empathy, positivity, resilience, time management and creative thinking. I am also a yoga lover, a plants addict, an aspiring chef, and a spiritual enthusiast. I am mindful in everything I do and find my happiness in the giving's. That also makes me a team-oriented person, in both personal life and work environment, I communicate and collaborate with others with dedication and respect. I keep a beginner's mindset when it comes to reaching out for assistance and clarifying my questions. By myself, I learn and work diligently to support everyone around me in achieving common goals.",
  }
]

export default stories;

// Projects data
export const projects = [
  {
    id: 1,
    name: 'API Webserver',
    title: 'Local Tours Booking API',
    link : 'https://github.com/ellenpham/API-Webserver-LocalTourBooking',
    tech_stack: "Python | Flask | PostgresSQL",
    description:
      'A RESTful API for a self-operated tours booking platform that connects tourists and self-employed tour guides all over the world.',
  },
  {
    id: 2,
    name: 'Terminal Application',
    title: 'RosterBoard',
    link: 'https://github.com/ellenpham/RosterBoard-TerminalApp',
    tech_stack: "Python",
    description:
      'A project inspired by my previous role as rosterer. RosterBoard was designed to aid roster schedule in a warehousing company.',
  },
  {
    id: 3,
    name: 'Hackathon Project',
    title: 'MX51 Job Board',
    link: 'https://github.com/katielock92/gh-job-board',
    tech_stack: "JavaScript | React",
    description:
      "An API-driven job board developed for MX51, using Greenhouse's open APIs. An one-week group project to practice GitHub collaboration.",
  },
  {
    id: 4,
    name: 'Static Website',
    title: 'Portfolio Website',
    link: 'https://github.com/ellenpham/CAT1A1-personal-portfolio-v1',
    tech_stack: "HTML | CSS | SCSS",
    description:
      'My very first project, created from scratch from design, development to documentation. Built entirely on HTML5, CSS3, SCSS.',
  },
  {
    id: 5,
    name: 'Full-Stack Application',
    title: 'Sakura Pantry',
    link: 'https://github.com/irene2mana-T3A2-2023',
    tech_stack: "React | Node | Express | MongoDB",
    description:
      'A work-in-progress project with an expected completion in December. This is a MERN stack web application for online grocery shopping.',
  },
  {
    id: 6,
    name: 'Basic challenge',
    title: 'Random Jokes Generator',
    link: 'https://github.com/ellenpham/random-jokes-generator',
    tech_stack: "JavaScript",
    description:
      'A simple jokes generator using Jokes API. A practice in basic API fetch, JS DOM and asynchronous functions.',
  }
];

// Skills data
export const skills = [
  {
    id: 1,
    name: 'HTML5',
    icon: "ri:html5-fill"
  },

  {
    id: 2,
    name: 'CSS3',
    icon: "ion:logo-css3"
  },

  {
    id: 3,
    name: 'Python',
    icon: "fa-brands:python" 
  },

  {
    id: 4,
    name: 'Flask',
    icon: "simple-icons:flask"
  },

  {
    id: 5,
    name: 'PostgreSQL',
    icon: "devicon-plain:postgresql"
  },

  {
    id: 6,
    name: 'JavaScript',
    icon: "teenyicons:javascript-outline" 
  },

  {
    id: 7,
    name: 'React',
    icon: "teenyicons:react-outline"
  },
  {
    id: 8,
    name: 'Node',
    icon: "fa-brands:node-js"
  },
  {
    id: 9,
    name: 'Express',
    icon: "simple-icons:express"
  },
  {
    id: 10,
    name: 'MongoDB',
    icon: "simple-icons:mongodb"
  },
  {
    id: 11,
    name: 'Jest',
    icon: "cib:jest"
  },
  {
    id: 12,
    name: 'PyTest',
    icon: "file-icons:pytest"
  },
  {
    id: 13,
    name: 'VSCode',
    icon: "file-icons:vscode"
  },
  {
    id: 14,
    name: 'Trello',
    icon: "fa-brands:trello"
  },
  {
    id: 15,
    name: 'Figma',
    icon: "fa6-brands:figma"
  }
];

// Resume data
export const cv = [
  {
    id: 1,
    title: 'Coder Academy',
    subtitle: 'Web Developement',
    date: 'Feb-Dec 2023',
    description:
      'As I am expecting to graduate in December 2023, I eagerly anticipate stepping into the professional realm of IT with a solid foundation in the latest technologies and programming languages that Coder Academy has equipped me. This academic journey has been a challenging yet rewarding adventure, filled with opportunities for learning and growth.',
    category: 'education',
  },

  {
    id: 2,
    title: 'La Trobe University',
    subtitle: 'Master of International Business',
    date: '2015 - 2016',
    description:
      'My destiny with Australia started from when I pursued this course. I have gained so much within just a year, not only in academic achievement, but also in self-improvement. Within this time, I have built myself towards independence, discipline, diligence and versatility. While studying, I have also done a few casual jobs, including cashier, baker and cafe all-rounder.',
    category: 'education',
  },

  {
    id: 3,
    title: 'Vietnam Foreign Trade University',
    subtitle: 'Economics & International Business',
    date: '2011 - 2015',
    description:
      'During my university years, I attended several extracurricular activities and participated in organizing start-up events for students nationwide. An interesting fact is I have studied economics in Chinese language. I was granted with the 2nd prize in a national competition for Chinese language proficiency back in 2010. So yes, I am a trilingual, speaking English, Vietnamese and Mandarin (and a tiny bit of Japanese from self-studying). It is true to say I am a linguaphile, even now as I am shifting my love to programming languages.',
    category: 'education',
  },

  {
    id: 4,
    title: 'Resourcing Specialist',
    subtitle: 'Programmed Skilled Workforce',
    date: '2019-2022',
    description:
      'My main role in Programmed was to maintain staff database and arrange work schedule for hundreds of casual workers in a daily basis. This job required high level of accuracy and timely delivery, and I have proudly fulfilled both aspects. Throughout my time working here, I have honed my skills in customer service, time management, observation, problem-solving, and multitasking.',
    category: 'experience',
  },

  {
    id: 5,
    title: 'Freelancer',
    subtitle: 'Fuson Auto Bosch',
    date: '2017-2019',
    description:
      'Fuson Auto Bosch is my family business. It is a distributor of Bosch Automotive Aftermarket in Vietnam. I have assisted in drafting business contracts and emails, materials translation and organized meetings. This is also considered as my gap year, as I was relocating to Australia. During this time, I focused more on enriching my personal experience through travelling, reading, self-cultivating and connecting with people around me.',
    category: 'experience',
  },

  {
    id: 6,
    title: 'Data Management Intern',
    subtitle: 'Robert Bosch in Singapore',
    date: 'Feb-Aug 2017',
    description:
      'This internship not only sharpened my technical skills but also honed my ability to collaborate within a professional setting and in a culturally diversed work environment. Over the course of 6 months, I actively contributed to various tasks across different departments, gaining hands-on experience in data management and documents handling. The supportive environment and mentorship provided by the team fostered my professional growth, allowing me to apply classroom knowledge to real-world scenarios.',
    category: 'experience',
  },
];
