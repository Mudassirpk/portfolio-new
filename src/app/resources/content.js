import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Mudassir",
  lastName: "Khan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpeg",
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
    experiences: [{
      company: "Packachange",
      timeframe: "June 2025 - Present",
      role: "Frontend Developer",
      achievements: [
        <>Enhance UI/UX for eCommerce web applications, improving user engagement for a US-based packaging company.</>,
        <>Developed interactive, animated, and responsive frontends using Next.js, increasing user retention and satisfaction.</>,
        <>Implemented Next.js markup streaming to prioritize critical UI sections, reducing perceived load times and improving performance metrics.</>,
        <>Collaborated closely with the UI team to deliver pixel-perfect implementations from Figma designs, ensuring design consistency.</>,
        <>
          Optimized images and static assets using CDNs, achieving faster load times and improved
          Core Web Vitals scores.
        </>,
        <>
          Collaborated closely with business management to analyze and design user flows, ensuring
          intuitive and efficient interactions for potential users.
        </>
      ],
      images: [],
    },
    {
      company: "HumAi Webs",
      timeframe: "Sep 2024 - Present",
      role: "Full Stack Developer",
      achievements: [
        <>Created end-to-end eCommerce platforms with Next.js, focusing on performance
          optimization, scalability, and seamless user experiences.</>,
        <>
          Improved search performance by implementing SEO best practices in Next.js, utilizing
          structured data, optimized SSR output, and server-side caching for faster data delivery.</>,
        <>
          Delivered fast, user-centric websites by aligning performance with Core Web Vitals metrics
          and Google UX best practices.</>,
        <>Managed VPS-based hosting for eCommerce platforms and implemented distributed/edge
          hosting architectures to enhance scalability, availability, and load times.</>,
        <>Improved page load speeds by deploying CDNs for images and static assets across eCommerce
          and web platforms.</>,
        <>Integrated multiple payment gateways securely, ensuring accurate payment processing,
          transaction reliability, and robust order tracking systems.</>,
      ],
      images: [],
    },
    {
      company: "Iancon Group LTD. UAE",
      timeframe: "July 2023 - Sep 2024",
      role: "Full Stack Developer",
      achievements: [
        <>Built modern, interactive, and user-friendly dashboards with React.js and Next.js, utilizing
          shadcn/ui and Framer Motion, implementing secure access controls, and improving data
          load performance across multiple dashboards.</>,
        <>Implemented a scalable, secure, and high-performance backend using NestJS/Node.js,
          ensuring reliability, maintainability, and efficient system growth.</>,
        <>Designed extensible, scalable, industry-standard databases ensuring high performance,
          data integrity, and seamless future expansion.</>,
        <>Deployed self-hosted AI models with Ollama, built and integrated a WebUI, and leveraged
          vector databases to enrich models with contextual marine data from multiple sources for
          more accurate and relevant outputs.</>,
        <>Worked closely with business stakeholders to architect scalable applications and
          coordinated with system design teams to translate designs into accurate, production-ready
          implementations.</>,
        <>Managed production deployments on Linux VPS servers using Docker, Apache2/Nginx, PM2,
          and GitHub Actions for CI/CD, while implementing security best practices to ensure system
          reliability and protection.</>,
        <>Led and mentored junior developers and interns, driving development workflows, enforcing
          best practices, and ensuring consistent project progress.</>,
      ],
      images: [],
    },
    {
      company: "Teknotize",
      timeframe: "Sep 2023 - Feb 2024",
      role: "Associate Full Stack Developer",
      achievements: [
        <>Migrated a ruby on rails backend to NodeJS/NestJS.</>,
        <>Improved the performance of app by 50% using best data structure
          practices.</>,
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
