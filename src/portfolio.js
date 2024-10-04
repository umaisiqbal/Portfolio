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
  username: "Umais Iqbal",
  title: "Hi all, I'm Umais",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Njm2AgKxeh67e-4Lmp8Q3rYWa672nWFe/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/umaisiqbal",
  linkedin: "https://www.linkedin.com/in/umais-iqbal-2b396a304/",
  gmail: "malikumais555@gmail.com",
  facebook: "https://web.facebook.com/profile.php?id=100076527041678",
  stackoverflow: "https://stackoverflow.com/users/27582125/malik-umais",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
  
    "⚡ Progressive Mobiile & Web Applications ( PWA ) in React Native/Reactjs",
   
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "react natvie",
      fontAwesomeClassname: "fab fa-react"
    },
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
      schoolName: "Air University Islamabad",
      logo: require("./assets/images/aulogo.png"),
      subHeader: "Bachelor of Information Technology",
      duration: "September 2019 - july 2023",
      desc: "Participated in the AI Tech Projects",
    },
    {
      schoolName: "Punjab Group of Colleges",
      logo: require("./assets/images/images.png"),
      subHeader: "Ics in Computer Science",
      duration: "March 2016 - April 2018",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Apps, Operating Systems, ...",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    
    {
      Stack: "React Native", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Reactjs", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "87%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Third Part Integrations",
      progressPercentage: "78%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mobile App Developer",
      company: "HyseTech Private Ltd.",
      companylogo: require("./assets/images/hyse.png"),
      date: "September 2023 – Feb 2024",
      desc: "Worked as a Mobile App Developer and built two Mobile Applications which one was Sahan Trip and the second one was Maqqan App.",
      descBullets: [
        "Sahan Trip App was working as booking flights and searching airlines",
        "Maqqan App was about booking houses and flats online"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Maqool Solutions",
      companylogo: require("./assets/images/maqbool.png"),
      date: "June 2022 – September 2022",
      desc: "Gained proficiency in React Native for cross-platform mobile app development. Collaborated effectively within agile development teams. "
    },
    {
      role: "Software Engineer",
      company: "Fiverr",
      companylogo: require("./assets/images/fiverr.png"),
      date: "Jan 2015 – Sep 2015",
      desc: " I have gained expertise in developing mobile frontend applications and have successfully delivered multiple projects for international clients on the Fiverr platform. I consistently meet all client requirements and possess the skills to handle projects at an international level. ."
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
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/logo.png"),
      projectName: "Sahan Trip",
      projectDesc: "Sahan Trip, a React Native application developed, offers users seamless access to airline services. From flight searches to booking management, users can effortlessly navigate available slots and streamline their travel experience",
      footerLink: [
        {
          name: "Check Project",
          url: "https://github.com/umaisiqbal/Sahan_Trip"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/EZ.jpg"),
      projectName: "EZ Bulletin App",
      projectDesc: "EZ Bulletin App, delivering a consistent user experience across platforms Implemented AI algorithms to provide users with summarized news content, enhancing readability and engagement. Developed Web Panel to manage the App uer's records. Integrated back",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
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
      title: "University Code Competition ",
      subtitle:
        "To be selected as Code Finalist from 1000 students from 10 different Universities.",
      image: require("./assets/images/awards.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {name: "Award", url: "https://drive.google.com/file/d/16VQJU-orN7hwGV_TwfsyAMYegP0oQ8NQ/view?usp=sharing"}
      ]
    },
    {
      title: "Best Software Enigneer Award",
      subtitle:
        "Honored to receive the Best Software Engineer Award at Hystech Private Limited – a recognition of dedication, innovation, and teamwork in software development.",
      image: require("./assets/images/winner.png"),
      imageAlt: "Winner Logo",
      footerLink: [
        {name: "Award", url: " https://drive.google.com/file/d/1bNV-qWz4syCscH2DD3iN6cZZhpGcP9YR/view?usp=sharing"}
      ]
    },

    {
      title: "Level 1 Seller",
      subtitle: "Proud to be a Level 1 Seller on Fiverr, delivering high-quality services in software development and IT solutions. Let's bring your ideas to life!",
      image: require("./assets/images/fiverr.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Award", url: ""},
        
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
      url: "https://medium.com/@malikumais555/win-a-google-assistant-tshirt-and-200-in-google-cloud-credits-81faf24dde21",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@malikumais555/why-react-is-the-best-2aba3d4b4362",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};



const talkSection = {
  // title: "TALKS",
  // subtitle: emoji(
  //   "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  // ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      // event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

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
  number: "+923035540807",
  email_address: "malikumais555@gmail.com"
};

// Twitter Section

const twitterDetails = {
  
  userName: "umais", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
 
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
