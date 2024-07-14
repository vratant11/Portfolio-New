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
  username: "Vratant Singh",
  title: "Hi all, I'm Vratant",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Nextjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1IPwTHyX2NYfjXkbbM2S2xrB6icG_OMuW/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vratant11",
  linkedin: "https://www.linkedin.com/in/vratant-singh/",
  gmail: "vratant11@gmail.com",
  leetcode: "https://leetcode.com/u/vratant11/",
  medium: "https://medium.com/@vratant11",
  
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
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as  AWS "
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
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
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
      schoolName: "Ajay Kumar Garg Engineering College",
      logo: require("./assets/images/AKGEC_Logo.jpeg"),
      subHeader: "Bachelor Of Technology in Computer Science",
      duration: "December 2020 - June 2024",
      desc: "Got overall CGPA of 7.5 in Computer Science Courses."
    },
    {
      schoolName: "Nemi Chand Educational Academy",
      logo: require("./assets/images/Nemi Chand .jpg"),
      subHeader: "Senior Secondary",
      duration: "March 2019 - March 2020",
      desc: "Got 86%. Took courses about Physics, Maths, Chemistry, English, Hindi and Physical Education."
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
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Lohum Cleantech",
      companylogo: require("./assets/images/lohum_cleantech_logo.jpeg"),
      date: "February 2024 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Authored over 15 APIs and contributed to 60% of the frontend development for the Voltfleet project, including the creation of a comprehensive admin portal to enhance project management and operational efficiency.",
        "Developed 20+ AWS Lambda functions to support the project’s backend operations.",
        "Created a conference summarizer application to generate transcripts and summaries of videos using Python,improving content accessibility and reducing manual summarization time by 70%.",
        "Oversaw the Extended Producer Responsibility (EPR) portal on Lohum’s website, taking 100% responsibility for hosting and maintenance.",


      ]
    },
    {
      role: "Front-End Developer Intern",
      company: "Clinqo",
      companylogo: require("./assets/images/Clinqo Logo.png"),
      date: "December 2022 – March 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Enhanced website code with over 20 reusable components, boosting maintainability and development efficiency.",
        "Proficiently integrated 15+ external APIs using Axios to fetch real-time data, enhancing the user interface and elevating website functionality and user experience"
      ]
    },
    {
      role: "MERN developer",
      company: "Computer Society Of India-AKGEC",
      companylogo: require("./assets/images/CSi-Akgec.png"),
      date: "December 2021 – May 2024",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Collaborated with backend engineers and designers for cohesive group projects.",
        "Hosted a workshop of around 200+ students on React JS, promoting knowledge sharing and skill enhancement within the college."
      ]
    }
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
  subtitle: "SOME STARTUP PROJECTS THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/voltfleet logo.jpg"),
      projectName: "Voltfleet",
      projectDesc: "VoltFleet by Lohum is an innovative energy storage solution that provides efficient and sustainable battery systems for electric vehicles and renewable energy applications. It focuses on optimizing battery life, performance, and recyclability to support a cleaner energy future.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://voltfleet.in"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/lohum_cleantech_logo.jpeg"),
      projectName: "EPR-Portal",
      projectDesc: "The EPR (Extended Producer Responsibility) portal of Lohum facilitates efficient tracking and management of waste recycling and disposal activities, ensuring compliance with environmental regulations. It provides real-time data and insights to help producers meet their sustainability goals and regulatory obligations.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://epr.lohum.com/"
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
      title: "CariKture",
      subtitle:
        "Collaborated with Carikture to develop a website for Shri Ram Builders in Ghaziabad, enhancing client engagement by 30% through the integration of video calling functionality. Utilized React.JS and seamlessly integrated the Jitsi API for secure, seamless video communication among clients and stakeholders.",
      image: require("./assets/images/Carikture_logo.jpeg"),
      imageAlt: "CariKture_Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1RwqMrOdbPpBYx0Hvzprrdaaxss1uGjfg/view"
        },
      ]
    },
    {
      title: "Hackathon 7.0",
      subtitle:
        "2nd Runner up at Hackathon 7.0, UPES Dehradun",
      image: require("./assets/images/Upes.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1qloBObMUrGQX4y4UVS4trRSVNYz5Pf6Y/view"
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
      url: "https://medium.com/@vratantsingh/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "#",
      subtitle: "#",
      slides_url: "#",
      event_url: "#"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "#"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6397448487",
  email_address: "vratant11@gmail.com",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "VratantSingh", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
