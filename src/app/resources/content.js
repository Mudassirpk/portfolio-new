import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Mudassir",
  lastName: "Khan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Mudassirpk",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mudassir-khan-7512151b8",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:mudassir.pk.mp@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer</>,
  subline: <>I'm Mudassir, a full stack developer.</>,
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Mudassir is full stack developer with passion of turning ideas into
        products, problems into solutions and requirements into features. With
        3+ years of experience I have built solutions of various complexities,
        using appropriate tech stacks.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "HumAi Webs",
        timeframe: "Sep 2024 - Present",
        role: "Full Stack Developer",
        achievements: [
          <>
            Built E-commerce webs app using NextJS, insuring best design,
            archetecture and seo practices.
          </>,
          <>Integreated Stripe and Ngenius pay payment gateways.</>,
          <>Worked with github actions, Docker to implement CI/CD.</>,
        ],
        images: [],
      },
      {
        company: "Iancon Group LTD. UAE",
        timeframe: "July 2023 - Sep 2024",
        role: "Full Stack Developer",
        achievements: [
          <>
            Lead a team of developers to build consoles (Dashboard panels) in
            ReactJS, NestJS and PostgreSQL.
          </>,
          <>Implemented Intra-Platform payments using Stripe Connect.</>,
          <>
            Developed RAGs using LLama3.1 (LLM), Nomic (Embedding model) and
            Melvis vector database.
          </>,
          <>Self Hosted LLM models on VPS</>,
          <>Handled application deployment, integration responsibilities.</>,
          <>
            Developed Data Piplines, ETL systems through webscrapping techniques
          </>,
        ],
        images: [],
      },
      {
        company: "Teknotize",
        timeframe: "Sep 2023 - Feb 2024",
        role: "Associate Full Stack Developer",
        achievements: [
          <>Migrated a ruby on rails backend to NodeJS/NestJS.</>,
          <>
            Improved the performance of app by 50% using best data structure
            practices.
          </>,
        ],
        images: [],
      },
      {
        company: "Remote",
        timeframe: "Feb 2023 - April 2023",
        role: "Full Stack Developer Intern",
        achievements: [
          <>Built wordpress plugins with PHP and ReactJS.</>,
          <>
            Worked with Open AI api to build an AI bot to chat with documents.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Virtual University of Pakistan.",
        description: <>Studied software engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>
            Able to develop responsive, accessible and interactive frontend
            using <span></span>
            ReactJS,Angular, NextJS, ShadCN UI, Bootstrab and Material UI.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "Backend Development",
        description: (
          <>
            Able to develop scallable backends using NestJS/NodeJS, MVC
            archetecture, MYSQL, PostgreSQL and MongoDB.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "Desktop Application Development",
        description: (
          <>
            Able to develop cross-platform desktop apps using ElectronJS,
            NodeJS.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "Mobile Application Development",
        description: (
          <>
            Able to develop cross-platform mobile apps using React Native,
            NodeJS.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
