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
      "I am Ellen Pham - a junior full-stack developer, based in Melbourne, Australia. I am a coder by heart, and my experience in business setting have equipped me with valuable skills to be adaptable to any work environment. Since I was young, I have always been fascinated about how technology has evolved and how amazing web applications are created to serve us in daily life. I want to be a part of the tech industry, contributing to creating real programs that solve real-world problems. Soon to be a graduate from Coder Academy, I strive to expand my tech knowledge and sharpen my coding skills. I always put in 100% effort in my study and work. To me, no practical experience is less significant; I can always learn something from them when giving out my best.",
  },
  {
    id: 2,
    title: 'What brought me here?',
    description: 'In 2017, I contributed to the marketing data management team at Bosch, Singapore. Upon returning to Australia in 2019, I took on the role of a resourcing specialist at Programmed Skilled Workforce. Throughout my career, I have navigated various company internal systems, establishing myself as the go-to person for operational expertise. My passion for technology and confidence in system operation developed over years of hands-on experience in data management. However, I sought a more challenging path. Taking a leap of courage, I delved into my newfound passion—coding. I thrive on merging the realms of logic and creative design to craft engaging, functional, and accessible websites and applications. My goal is to convey meaningful storytelling through exceptional digital experiences.',
  },
  {
    id: 3,
    title: 'What am I standing for?',
    description: "I consistently uphold four core values: Integrity, Trust, Dedication, and Humbleness. A quote by Maya Angelou that resonates with me is, 'Do the best you can until you know better. Then when you know better, do better.' Transitioning to a tech career is challenging, but I firmly believe that with dedication, hard work, and perseverance, one can achieve rewarding outcomes.",
  },
  {
    id: 4,
    title: 'Who am I outside of work?',
    description: "Outside of coding, I embrace the role of a dedicated mother to an energetic 3-year-old girl. Motherhood has imparted valuable lessons in empathy, positivity, resilience, time management, and creative thinking. Beyond parenting, I am a yoga enthusiast, a plant lover, an aspiring chef, and a spiritual enthusiast. Mindfulness is integral to everything I do, and I find joy in giving back. This quality extends to my approach in personal life and work environments—I thrive as a team-oriented individual, emphasizing communication and collaboration with dedication and respect. Maintaining a beginner's mindset, I openly seek assistance and clarification, and always committed to learning and working diligently to support everyone around me in achieving common goals.",
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
      'A RESTful API for a self-operated tours booking platform, facilitating global connections between tourists and self-employed tour guides.',
  },
  {
    id: 2,
    name: 'Terminal Application',
    title: 'RosterBoard',
    link: 'https://github.com/ellenpham/RosterBoard-TerminalApp',
    tech_stack: "Python",
    description:
      'Inspired by my previous role as a rosterer, RosterBoard was conceived to mimic scheduling processes within a warehousing company.',
  },
  {
    id: 3,
    name: 'Hackathon Project',
    title: 'MX51 Job Board',
    link: 'https://github.com/katielock92/gh-job-board',
    tech_stack: "JavaScript | React",
    description:
      "An API-driven job board for MX51, utilizing Greenhouse's open APIs. An one-week group project for practicing GitHub collaboration.",
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
      'Currently a work-in-progress, this MERN stack web application for online grocery shopping is anticipated to be completed by Dec 2023.',
  },
  {
    id: 6,
    name: 'Basic challenge',
    title: 'Random Jokes Generator',
    link: 'https://github.com/ellenpham/random-jokes-generator',
    tech_stack: "JavaScript",
    description:
      'Simple jokes generator utilizing the Jokes API, a practice in fundamental API fetch, JS DOM manipulation, and asynchronous functions.',
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
      'With an expected graduation date in December 2023, I am eagerly anticipating the transition into the professional realm of IT. Coder Academy has equipped me with a solid foundation in the latest technologies and programming languages. This academic journey has been a challenging yet rewarding adventure, providing ample opportunities for learning and growth.',
    category: 'education',
  },

  {
    id: 2,
    title: 'La Trobe University',
    subtitle: 'Master of International Business',
    date: '2015 - 2016',
    description:
      'My journey in Australia began with my pursuit of this course. In just a year, I have achieved significant academic milestones and witnessed remarkable self-improvement. During this period, I have cultivated qualities of independence, discipline, diligence, and versatility. Concurrently, I have undertaken various casual roles, such as a cashier, baker, and cafe all-rounder, while pursuing my studies.',
    category: 'education',
  },

  {
    id: 3,
    title: 'Vietnam Foreign Trade University',
    subtitle: 'Economics & International Business',
    date: '2011 - 2015',
    description:
      'Throughout my university years, I actively engaged in numerous extracurricular activities and played a key role in organizing start-up events catering to students nationwide. An interesting aspect of my academic journey is that I pursued economics in the Chinese language. A noteworthy achievement was securing the 2nd prize in a national competition for Chinese language proficiency in 2010. Hence, I am trilingual, fluent in English, Vietnamese, and Mandarin, with a modest grasp of Japanese from self-study. As a linguaphile, my love for languages persists, now extending into the realm of programming languages.',
    category: 'education',
  },

  {
    id: 4,
    title: 'Resourcing Specialist',
    subtitle: 'Programmed Skilled Workforce',
    date: '2019-2022',
    description:
      'In my role at Programmed, I was primarily responsible for maintaining the staff database and organizing work schedules for hundreds of casual workers on a daily basis. This position demanded a high level of accuracy and timely delivery, both of which I proudly fulfilled. Over the course of my tenure, I refined my skills in client relations, customer service, time management, observation, problem-solving, and multitasking.',
    category: 'experience',
  },

  {
    id: 5,
    title: 'Freelancer',
    subtitle: 'Fuson Auto Bosch',
    date: '2017-2019',
    description:
      'Fuson Auto Bosch, a distributor of Bosch Automotive Aftermarket in Vietnam, is my family business. In this capacity, I have contributed by drafting business contracts, composing emails, translating materials, and organizing meetings. This period also served as my gap year, coinciding with my relocation to Australia. During this time, my focus shifted towards enriching my personal experiences through travel, reading, self-cultivation, and re-establishing connections with people around me.',
    category: 'experience',
  },

  {
    id: 6,
    title: 'Data Management Intern',
    subtitle: 'Robert Bosch in Singapore',
    date: 'Feb-Aug 2017',
    description:
      'This internship not only enhanced my technical skills but also refined my ability to collaborate within a professional setting, particularly in a culturally diverse work environment. Over the span of six months, I actively contributed to a range of tasks across different departments, gaining hands-on experience in data management and document handling. The supportive environment and mentorship provided by the team significantly fostered my professional growth, enabling me to seamlessly apply classroom knowledge to real-world scenarios.',
    category: 'experience',
  },
];
