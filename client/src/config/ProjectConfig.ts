import ChatSys from "../assets/chatsys-image.png";
import Blog from "../assets/blog-image.png";
import Smendship from "../assets/smendship-image.png";

interface ProjectInterface {
  name: string;
  description: string;
  details: Array<string>;
  links: {
    liveDemo: string;
    github: string;
  };
  image: string;
  tag?: Array<string>;
}

export const projects: Array<ProjectInterface> = [
  {
    name: "ChatSys",
    description: "Real-Time Messaging System",
    details: [
      "Developed a real-time messaging platform using a GraphQL API to retrieve user-specific data, reducing client-side data over-fetching and minimizing payload overhead.",
      "Engineered user conversation tracking using a GraphQL subscription and WebSockets with Redis pub/sub for real-time chatting",
      "Constructed a database with PostgreSQL and the Prisma ORM for persistent data, providing scalable queries and unread conversation tracking.",
    ],
    links: {
      liveDemo: "https://type-ritik-chat-sys.onrender.com/",
      github: "https://github.com/type-ritik/chat-sys",
    },
    image: ChatSys,
    tag: [
      "PostgreSQL",
      "Express.js",
      "React.js",
      "Node.js",
      "GraphQL",
      "Redis",
    ],
  },
  {
    name: "Smendship",
    description: "Facebook-Oriented Backend System",
    details: [
      " Architected a full-stack social network application using React.js and a GraphQL API to enable single-page rendering and retrieve user-specific data, leveraging queries and mutations to eliminate REST API over-fetching and under-fetching overhead.",
      "Implemented secure user authentication by integrating Nodemailer and OAuth,facilitating third-party login via Google and GitHub alongside email OTP verification.",
      "Designed a relational database schema with PostgreSQL and the Prisma ORM, ensuring data consistency and maintaining referential integrity across tables",
    ],
    links: {
      liveDemo: "#",
      github: "https://github.com/type-ritik/smendship",
    },
    image: Smendship,
    tag: [
      "PostgreSQL",
      "Express.js",
      "React.js",
      "Node.js",
      "Nodemailer",
      "OAuth",
      "GraphQL",
      "Redis",
    ],
  },
  {
    name: "MERN-Blog",
    description: "Blog Web Application",
    details: [
      "Handles CRUD (Create, Read, Update, Delete) operations for posts, user authentication, and data validation",
      "User Markdown parser to convert raw text into HTML on the client or server side",
      "Ensure seamless rendering across mobile and desktop browsers",
      "Enhance discoverability, the application must support server-side rendering (SSR) or static site generation (SSG) for fast indexing",
    ],
    links: {
      liveDemo: "https://mern-blog-s5q9.onrender.com/",
      github: "https://github.com/type-ritik/mern-blog",
    },
    image: Blog,
    tag: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
  },
];
