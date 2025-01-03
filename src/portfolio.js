/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Moeez's Portfolio",
  description:
    "A passionate individual who thrives on working on end-to-end products, developing sustainable and scalable mobile applications that create a social and technical impact.",
  og: {
    title: "Moeez Ali Portfolio",
    type: "website",
    url: "https://moeezally.github.io",
  },
};

//Home Page
const greeting = {
  title: "Moeez Ali",
  logo_name: "MoeezAli",
  nickname: "moeezally",
  subTitle:
    "A passionate individual who thrives on working on end-to-end products, developing sustainable and scalable mobile applications that create a social and technical impact.",
  resumeLink:
    "https://drive.google.com/file/d/1kl7hUlYlaURmdzUP8NtrbycQOTs_48Xq/view?usp=drive_link",
  portfolio_repository: "https://github.com/moeezally/moeezPortfolio",
  githubProfile: "https://github.com/moeezally",
  projectPortfolioDocument: "https://docs.google.com/document/d/1UCx_PQZw0v8_fdFw7QsZE2hllFmtPGIG-11cspPvenU/edit?tab=t.0"
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/moeezally",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-moeez-ali/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:moeezally@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/moeezally/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Mobile Applications",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building high-performance, scalable mobile applications with smooth and responsive user interfaces",
        "⚡ Expertise in integrating REST APIs, WebSocket, and third-party services to create dynamic, data-driven applications",
        "⚡ Skilled in managing complex state with Redux and Redux Toolkit for streamlined and maintainable code",
        "⚡ Focused on performance optimization and debugging to ensure seamless app functionality and user satisfaction",
        "⚡ Strong knowledge of app release processes, including CI/CD pipelines, app store submissions, and versioning"
      ],
      softwareSkills: [
        {
          skillName: "React Native",
          fontAwesomeClassname: "logos-react",
          style: {
            backgroundColor: "transparent",
            color: "#61DAFB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos-javascript",
          style: {
            backgroundColor: "transparent",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos-redux",
          style: {
            backgroundColor: "transparent",
            color: "#764ABC",
          },
        },

        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos-firebase",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Expo",
          fontAwesomeClassname: "logos:expo-icon",
          style: {
            backgroundColor: "transparent",
            color: "white",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "logos-html-5",
          style: {
            backgroundColor: "transparent",
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "logos-css-3",
          style: {
            backgroundColor: "transparent",
            color: "#1572B6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "skill-icons:git",
          style: {
            backgroundColor: "transparent",
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "skill-icons:github-dark",
          style: {
            backgroundColor: "transparent",
            color: "#F05032",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "skill-icons:nodejs-dark",
          style: {
            backgroundColor: "transparent",
            color: "#339933",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "skill-icons:typescript",
          style: {
            backgroundColor: "transparent",
            color: "#3178C6",
          },
        },
      ],

    }
    // {
    //   title: "Full Stack Development",
    //   fileName: "FullStackImg",
    //   skills: [
    //     "⚡ Building responsive website front end using React-Redux",
    //     "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
    //     "⚡ Creating application backend in Node, Express & Flask",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "HTML5",
    //       fontAwesomeClassname: "simple-icons:html5",
    //       style: {
    //         color: "#E34F26",
    //       },
    //     },
    //     {
    //       skillName: "CSS3",
    //       fontAwesomeClassname: "fa-css3",
    //       style: {
    //         color: "#1572B6",
    //       },
    //     },
    //     {
    //       skillName: "Sass",
    //       fontAwesomeClassname: "simple-icons:sass",
    //       style: {
    //         color: "#CC6699",
    //       },
    //     },
    //     {
    //       skillName: "JavaScript",
    //       fontAwesomeClassname: "simple-icons:javascript",
    //       style: {
    //         backgroundColor: "#000000",
    //         color: "#F7DF1E",
    //       },
    //     },
    //     {
    //       skillName: "ReactJS",
    //       fontAwesomeClassname: "simple-icons:react",
    //       style: {
    //         color: "#61DAFB",
    //       },
    //     },
    //     {
    //       skillName: "NodeJS",
    //       fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
    //       style: {
    //         color: "#339933",
    //       },
    //     },
    //     {
    //       skillName: "NPM",
    //       fontAwesomeClassname: "simple-icons:npm",
    //       style: {
    //         color: "#CB3837",
    //       },
    //     },
    //     {
    //       skillName: "Yarn",
    //       fontAwesomeClassname: "simple-icons:yarn",
    //       style: {
    //         color: "#2C8EBB",
    //       },
    //     },
    //     {
    //       skillName: "Gatsby",
    //       fontAwesomeClassname: "simple-icons:gatsby",
    //       style: {
    //         color: "#663399",
    //       },
    //     },
    //     {
    //       skillName: "Flutter",
    //       fontAwesomeClassname: "simple-icons:flutter",
    //       style: {
    //         color: "#02569B",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "COMSATS University Islamabad, Lahore Campus",
      subtitle: "BSCS",
      logo_path: "COMSATS.png",
      alt_name: "COMSATS",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic computer science subjects like PF, DSA, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Mobile Application Development and Web Development.",
        "⚡ I was selected for Ehsas Scholarship which is given to top performing students in university.",
      ],
      website_link: "https://lahore.comsats.edu.pk/default.aspx",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Fastlane for React Native: Deploy your app autonomously!",
      subtitle: "- Cory McAboy",
      logo_path: "Udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1QZWBBAW1cbM7Sc0A8kLNTf-VUXxf3l7Q/view?usp=drive_link",
      alt_name: "Udemy",
      color_code: "#ffffff",
    },
    {
      title: "Master React Native Animations",
      subtitle: "- Jason Brown",
      logo_path: "Udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1dF-LD-5uPX7gDNvNFJfTtDULRcd2c6bd/view?usp=drive_link",
      alt_name: "Udemy",
      color_code: "#ffffff",
    },
    {
      title: "MERN Stack E-Commerce Mobile App with React Native",
      subtitle: "- Alex Bakker, Laila Sermon",
      logo_path: "Udemy.png",
      certificate_link:
        "",
      alt_name: "Udemy",
      color_code: "#ffffff",
    },

    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },

    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with startups and some well established companies mostly as Mobile Application Developer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior React Native Developer",
          company: "Corvit Networks.",
          company_url: "https://corvit.com/networks/",
          logo_path: "Corvit.png",
          duration: "May 2024 - Present",
          location: "Lahore, Pakistan",
          description:
            "Driving the development of an LMS mobile app, seamlessly integrating it with the company's existing LMS product.Collaborating closely with clients, the design and product teams to implement the required use cases.",
          color: "#000000",
        },
        {
          title: "Mobile Application Development Team Lead",
          company: "Alphasquad Technologies",
          company_url: "https://alphasquadinc.com/",
          logo_path: "Alphasquad.png",
          duration: "November 2022 - May 2024",
          location: "Lahore, Pakistan",
          description:
            "Led a team of mobile developers, ensuring timely delivery of high-quality applications through regular progress meetings and strategic challenge resolution. Collaborated with stakeholders to define project scope and prioritize features, aligning with business goals. Worked on the sigmaGO mobile app, company's mobile app product, creating and publishing new POCs to the stores, while providing support and adding new features to existing sigmaGO POCs. Worked on multiple on- going mobile app projects focusing on e-commerce, navigation, etc. Spearheaded the development of the company's new mobile app product, Nebula, building it from the ground up.",
          color: "#0879bf",
        },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "MERN Intern",
          company: "NexusBerry Solutions.",
          company_url: "https://www.nexusberry.com/",
          logo_path: "Nexusberry.png",
          duration: "July 2021 - September 2021",
          location: "Lahore, Pakistan",
          description:
            "Worked on React E-Commerce application and secured a major international client for the company. Worked on React-Native E-Commerce application. ",
          color: "#000000",
        },
        // {
        //   title: "Data Science Research Intern",
        //   company: "Delhivery Pvt. Ltd.",
        //   company_url: "https://www.delhivery.com/",
        //   logo_path: "delhivery_logo.png",
        //   duration: "May 2019 - Sept 2019",
        //   location: "Gurgaon, Haryana",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Management Coordinator",
          company: "ACM Student Chapter CUI",
          company_url: "https://www.linkedin.com/company/acmcuilhr/?originalSubdomain=pk",
          logo_path: "ACM.png",
          duration: "September 2019 - May 2022",
          location: "Lahore, Pakistan",
          description:
            "",
          color: "#4285F4",
        },
        {
          title: "English Debater",
          company: "Comsats Lahore Debating Society",
          company_url: "https://www.instagram.com/cldebating/",
          logo_path: "CLDS.png",
          duration: "September 2019 - April 2021",
          location: "Lahore, Pakistan",
          description:
            "",
          color: "#D83B01",
        },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a wide range of the latest technology tools. My best experience is in creating dynamic React Native applications and deploying them.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Moeez.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Mobile Application Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Lahore, Pakistan 54000",
    locality: "Lahore",
    country: "Pakistan",
    region: "Punjab",
    postalCode: "540000",
    streetAddress: "Lahore",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/UGfYv1C2NyQ3v14Z9",
  },
  phoneSection: {
    title: "Mobile / Whatsapp",
    subtitle: "+923244609466",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
