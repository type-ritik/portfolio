import ChatSys from "../assets/chatsys-image.png";
import Blog from "../assets/blog-image.png";

interface ProjectInterface {
  name: string;
  description: string;
  details: Array<string>;
  links: {
    liveDemo: string;
    github: string;
  };
  image: string;
}

export const projects: Array<ProjectInterface> = [
  {
    name: "ChatSys",
    description: "Real-Time Messaging System",
    details: [
      "Developed a real-time messaging backend using Redis pub/sub and PostgreSQL transactional persistence.",
      "Modeled conversation invariant and ensured atomic message writes",
      "Designed secure GraphQL mutations preventing inconsistent state transitions",
      "Build scalable query patterns for conversation history and unread tracking",
    ],
    links: {
      liveDemo: "https://type-ritik-chat-sys.onrender.com/",
      github: "https://github.com/type-ritik/chat-sys",
    },
    image: ChatSys,
  },
  {
    name: "Smendship",
    description: "Facebook-Oriented Backend System",
    details: [
      "Build a domain-driven social backend",
      "Implemented JWT-based authentication with resolver-level authorization",
      "Designed relational schema ensuring referential integrity and transactional consistency",
      "Integrated Redis caching layer to optimize ready-heavy operations",
    ],
    links: {
      liveDemo: "#",
      github: "https://github.com/type-ritik/smendship",
    },
    image:
      "https://socialnetworking.solutions/wp-content/uploads/2017/12/Facebook-theme-Package.png",
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
  },
];
