import emoji from "react-easy-emoji";

export const greetings = {
  name: "Hayk Mnatsakanyan",
  title: "Hi there, I'm Hayk",
  description:`Full Stack Web Developer leveraging my background in 3D graphic design, entrepreneurship, and engineering  to build more intuitive user experiences on the web. Completed two coding bootcamps at UC Davis and General Assembly in full stack web development and web engineering. Passion for learning new technologies, including tackling AWS. A multi-modality thinker able to see the bigger picture from the top-down perspective. Cross-cultural experience from living in both Armenia and the U.S., fluent in three languages and a strong ability to communicate across differences.`,
  resumeLink:
    "https://docs.google.com/document/d/1FYyNXTtVXG17lH1m2cXD4BBqxbnZ9dQrs5G7PvIFVfI/edit?usp=sharing",
};

export const openSource = {
  githubUserName: "zoneam",
};

export const contact = {};

export const socialLinks = {
  github: "https://github.com/zoneam",
  linkedin: "https://www.linkedin.com/in/haykmn/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
        ),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
        emoji("⚡ Building RESTful MEN Stack Applications Using Ejs"),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "vscode-icons:file-type-django",
        },

        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience of working on multiple cloud platforms"),
        emoji(
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
        ),
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "logos:heroku-icon",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassname: "logos:github-actions",
        },
      ],
    },
  ],
};

export const educationInfo = [
  {
    schoolName: "General Assembly",
    subHeader: "Software Engineer",
    duration: "March 2022 - June 2022",
    desc: "Full time immersive program spending 60+ hours per week learning various programming languages and computer science concepts. ",
  },
  {
    schoolName: "State Engineering University of Armenia",
    subHeader: "Bachelor of Science",
    duration: "September 2000 - May 2004",
    desc: "State Engineering University of Armenia with a major in Standardization, Certification, and Quality Control.",
  },
  {
    schoolName: "UC Davis Continuing and Professional Education",
    subHeader: "Full Stack Web Developer",
    duration: "March 2021 - September 2021",
    desc: "Demonstrated knowledge of coding, algorithms and data structures while developing applications in Javascript, Node.js, HTML, CSS, jQuery and other front-end and back-end and back-end tools and technologies. Program instructional time was 250 hours and up to an additional 500 hours on projects.",
  },
];

export const projects = [
  {
    name: "Code-Room",
    desc: "A web application that enables one to save favorite code snippets, share snippets, like and comment on others shared code.",
    github: "https://github.com/Zoneam/Code-Room",
    link: "https://code-room.space/",
  },
  {
    name: "Photofy",
    desc: "Web app for photographers to keep track of their customers, transactions, bookings also to showcase their portfolio for potential new customers.",
    github: "https://github.com/Zoneam/Photofy",
    link: "https://photofy-project.herokuapp.com/",
  },
  {
    name: "BattleShips (AI Game)",
    desc: "Battleship (also known as Battleships or Sea Battle) is a strategy type guessing game for two players. It is played on ruled grids on which each player's fleet of warships are marked. The locations of the fleets are concealed from the other player.",
    github: "https://github.com/Zoneam/Battleship",
    link: "https://battle-ships2.netlify.app",
  },
  {
    name: "Tic-Tac-Toe (AI Game)",
    desc: "Web based Tic-Tac-Toe game where you can play with an intuitive computer player, and choose difficulty levels.",
    github: "https://github.com/Zoneam/Tic-Tac-Toe",
    link: "https://ticxtacxtoe.netlify.app/",
  },
  {
    name: "Eventory (Social)",
    desc: "A web portal to create events for friends and meet new people, embark on new adventures, or try new experiences.",
    github: "https://github.com/Zoneam/Eventory",
    link: "https://eventoryproject.herokuapp.com/",
  },
  {
    name: "Alumn Space (Social Media)",
    desc: "A place for coding bootcamp Alumni to connect with each other and share ideas. An alternative and secure platform for like-minded people outside of social media distraction.",
    github: "https://github.com/Zoneam/alumn-space",
    link: "http://alumn-space.herokuapp.com",
  },
  {
    name: "Amaze Scrape 2.0 (Web Scraper)",
    desc: "Web app to search for products on Amazon.com and compare prices between two major retailers, Amazon and Walmart.com",
    github: "https://github.com/Zoneam/Amaze-Scrape-2.0",
    link: "https://amaze-scrape-2.herokuapp.com/search/",
  },
  {
    name: "Food Base",
    desc: "This full CRUD application is designed to search (fetch) EDAMAM food API where you can choose your favorite recipes and save them in database, after saving recipe user can edit title for recipe or delete from database. Also user will be able to see other users saved recipes and like them.",
    github: "https://github.com/Zoneam/Food-Base",
    link: "https://food--base.herokuapp.com/",
  },
];
