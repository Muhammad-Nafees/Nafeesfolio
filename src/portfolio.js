/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nafees Ahmed",
  title: "Hi all, I'm Nafees",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Muhammad-Nafees",
  linkedin: "https://www.linkedin.com/in/muhammad-nafees2002/",
  gmail: "nafeessocial@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/profile.php?id=100049798183538",
  // medium: "https://medium.com/@nafeessocial",
  stackoverflow: "https://stackoverflow.com/users/edit/23714537",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "react native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Nusrat Bhutto College",
      logo: require("./assets/images/nusratBhutto.jpeg"),
      subHeader: "Intermediate in Computer Science (ICS)",
      duration: "August 2020 - July 2022",
      desc: "Gained foundational knowledge in computer science and programming concepts, with a strong emphasis on mathematics and logical thinking.",
      descBullets: [
        "Achieved distinction in programming and mathematics subjects.",
        "Participated in inter-college coding competitions and won 1st place.",
        "Led a team project on basic software development, showcasing skills in problem-solving and collaboration."
      ]
    },
    {
      schoolName: "St. Patrick College",
      logo: require("./assets/images/stPatrickLogo.jpeg"), // Replace with the actual logo path
      subHeader: "Diploma of Associate Engineering (DAE) in Information Technology",
      duration: "September 2019 - April 2022",
      desc: "Specialized in Information Technology with a focus on networking, programming, and database management. Developed hands-on skills through practical projects and assignments.",
      descBullets: [
        "Achieved distinction in software development and database management.",
        "Led a final-year project on creating an inventory management system.",
        "Participated in inter-college IT competitions and secured 1st place in a coding challenge.",
        "Completed multiple certifications in networking and web development."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "React Native",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "React Native Full Stack Developer",
      company: "97 Solutions",
      companylogo: require("./assets/images/97logo.jpeg"), // Replace with actual logo path
      date: "April 2023 – september 2024",
      desc: "Developed and deployed cross-platform mobile applications with full-stack functionalities. Collaborated with teams to deliver high-quality solutions tailored to client requirements.",
      descBullets: [
        "Developed high-performance React Native apps with seamless API integrations.",
        "Streamlined state management using Redux, ensuring optimal user experiences.",
        "Collaborated closely with designers to deliver visually appealing and intuitive UI/UX."
      ]

    },
    {
      role: "React Native Developer",
      company: "InApp Solutions",
      companylogo: require("./assets/images/inapp-logo.gif"),
      date: "September 2024 – Present",
      desc: "Working as a React Native Developer at InApp Solutions, focusing on building high-performance, user-friendly mobile applications. Contributing to the design, development, and deployment of cross-platform apps while ensuring code quality and efficient integration with backend services."
    },


  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/peacemakerlogo.webp"),
      projectName: "Peace Maker",
      projectDesc: "PeaceMaker is an innovative digital health app that redefines mental health care with cutting-edge AI, offering personalized, real-time support for mental well-being. Ideal for both users and professionals, PeaceMaker provides dynamic, holistic care accessible right from your smartphone.",
      footerLink: [
        {
          name: "App Link",
          url: "https://play.google.com/store/apps/details?id=com.softwareAlliance.peaceMaker&hl=en&gl=US&pli=1"
        }
        // you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/storytimelogo.webp"),
      projectName: "Story Time",
      projectDesc: "Story Time is a revolutionary app reshaping the art of storytelling. By enabling users to convert voice to text, share stories, and engage in creative, meaningful interactions, Story Time is transforming the way we tell and experience stories.",
      footerLink: [
        {
          name: "App link",
          // url: "http://nextu.se/",
        }
      ]
    },
    {
      image: require("./assets/images/fitCirclelogo.webp"),
      projectName: "Fit Circle",
      projectDesc: "FitCircle is a cutting-edge social media fitness app designed to connect fitness enthusiasts with gym buddies, expert coaches, and a motivational community. By tackling common barriers like lack of motivation, support, and personalized insights, FitCircle ensures a comprehensive and engaging fitness experience.",
      footerLink: [
        {
          name: "App link",
          // url: "http://nextu.se/",
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Coursera",
      subtitle:
        "Server-side Development with NodeJS, Express and MongoDB",
      image: require("./assets/images/courseralogo.png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          // name: "Certification",
          // url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          // name: "Award Letter",
          // url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          // name: "Google Code-in Blog",
          // url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Coursera",
      subtitle:
        "Front-End Web UI Frameworks and Tools",
      image: require("./assets/images/courseralogo.png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach out to Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "nafeessocial@gmail.com",
  location: "nafeessocial@gmail.com",
  expertise: "React Native Full Stack Developer"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
