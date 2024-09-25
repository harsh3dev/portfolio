import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  "name": "Harsh Pandey",
  "initials": "HP",
  "url": "https://www.harshin.tech",
  "location": "Kolkata, India",
  "locationLink": "https://www.google.com/maps/place/Kolkata",
  "description": "Building full-stack web applications and finding solutions with tech.",
  "summary": "As a passionate full-stack web developer, I'm on a goal to innovate solutions that captivate, inspire and leave a lasting impact on the life of the masses. Skilled in the MERN stack with Next JS, and more - I love bringing ideas to code 🚀. ",
  "avatarUrl": "/me.png",
  "display-work": false,
  "display-education": true,
  "display-projects": true,
  "display-hackathons": true,
  "skills": [
    "React",
    "Node.js",
    "Next.js",
    "MongoDB",
    "Mongoose",
    "Prisma",
    "PostgreSQL",
    "JavaScript",
    "Tailwind CSS",
    "C/C++",
    "HTML/CSS",    
    "Langchain",
    "Git",
    "GitHub",
    "Docker",
    "Postman",
    "Visual Studio",
  ],
  skillicons: "next,react,nodejs,mongodb,express,prisma,postgres,ts,js,redis,redux,tailwind,cpp,html,css,git,github,docker,postman,vscode,vite,solidity,pnpm,npm",
  "navbar": [
    { "href": "/", "icon": HomeIcon, "label": "Home" },
    { "href": "/blog", "icon": NotebookIcon, "label": "Blog" }
  ],
  "contact": {
    "email": "harshpandey.tech@gmail.com",
    "tel": "+91 7980100756",
    "social": {
      "GitHub": {
        "name": "GitHub",
        "url": "https://github.com/harsh3dev",
        "icon": Icons.github,
        "navbar": true
      },
      "LinkedIn": {
        "name": "LinkedIn",
        "url": "https://linkedin.com/in/harsh3dev",
        "icon": Icons.linkedin,
        "navbar": true
      },
      "X": {
        "name": "X",
        "url": "https://x.com/harsh3dev",
        "icon": Icons.x,
        "navbar": true
      }
    }
  },
  "work": [
        {
          company: "",
          href: "",
          badges: [],
          location: "",
          title: "",
          logoUrl: "",
          start: "",
          end: "",
          description:
            "",
        },
      ],
  "education": [
    {
      "school": "Institute of Engineering and Management",
      "degree": "B.Tech - Computer Science and Engineering (IoT)",
      "start": "2022",
      "end": "2026",
      "location": "Kolkata, India",
      "grade": "CGPA - 9.1"
    },
    {
      "school": "Sri Ram Narayan Singh Memorial High School",
      "degree": "ISC - XII",
      "start": "2019",
      "end": "2021",
      "location": "Kolkata, India",
      "grade": "86.5%"
    }
  ],
  "projects": [
    {
      "title": "WroteUs",
      href: "https://wrote-us.vercel.app",
      "dates": "Feb 2024 - March 2024",
      "description": "Developed a real-time collaborative whiteboard platform using Next.js, Redux Toolkit, Socket.IO, and HTML Canvas for drawing features.",
      "technologies": ["Next.js", "Redux Toolkit", "Socket.IO", "Node.js", "Tailwind CSS"],
      "links": [
        {
          type: "GitHub",
          href: "https://github.com/harsh3dev/WroteUS",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://wroteus.vercel.app",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "/wroteusvideo - Trim.mp4",
    },
    {
      "title": "TickrNet",
      href: "",
      "dates": "July 2024 - Aug 2024",
      "description": "Built a decentralized ticketing platform using Solidity and Hardhat on Avalanche Fuji Testnet.",
      "technologies": ["Next.js", "Solidity", "Hardhat", "Web3.js", "Redux Toolkit", "Tailwind CSS"],
      "links": [
        {
          type: "GitHub",
          href: "https://github.com/harsh3dev/hackermen",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video: "/tickernetvideo.mp4",
    },
    {
      "title": "DevMatchups",
      href: "https://devmatchups.vercel.app",
      "dates": "Aug 2024 - Present",
      "description": "Developed a platform to connect developers worldwide for hackathons. Integrated Next Auth with Google and GitHub.",
      "technologies": ["Next.js", "Prisma ORM", "PostgreSQL", "Redis", "Zod", "Redux Toolkit"],
      "links": [
        {
          type: "GitHub",
          href: "https://github.com/harsh3dev/devmatchups",
          icon: <Icons.github className="size-3" />,

        },
        {
          type: "Website",
          href: "https://devmatchups.vercel.app",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/devmatchupsimg.png",
      video: "",
    }
  ],
  hackathons: [
        {
          title: "Buildspace S5",
          dates: "June 5th - Aug 31st, 2024",
          location: "Online",
          description:
            "Participated in the Buildspace S5 cohort, building full-stack web applications using Next.js, Prisma, and PostgreSQL.",
          image:
            "/buildspace.jpg",
          mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
          links: [
            {
              title: "GitHub",
              href: "https://github.com/harsh3dev/devmatchups",
              icon: <Icons.github className="size-3" />,
            },
            {
              title: "Website",
              href: "https://devmatchups.vercel.app",
              icon: <Icons.globe className="size-3" />,
            },
          ],
        },
        {
          title: "Hack4Bengal 3.0",
          dates: "June 28rd - 30th, 2024",
          location: "Kalyani, Kolkata",
          description:
            "Developed a decentralized ticketing platform hosted on Avalanche Fuji Testnet, leveraging Solidity and Hardhat for smart contract development.",
          image:
            "https://media.licdn.com/dms/image/v2/D560BAQGix3PITG0ixw/company-logo_200_200/company-logo_200_200/0/1698558226426/hack4bengal_logo?e=1735171200&v=beta&t=SxIrPUcsbqGlx_tPkM6lD0MjZT-0qa7AJp_VDvdRJiI",
          mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
          links: [
            {
              title: "GitHub",
              href: "https://github.com/harsh3dev/hackermen",
              icon: <Icons.github className="size-3" />,
            },
          ],
        },
        {
          title: "HackAI",
          dates: "March 8th - 10th, 2024",
          location: "IEM, Kolkata",
          description:
            "Developed a Celebrity face generator project using deep learning DCGAN neural network to generate realistic faces from celebrity images.",
          image:
            "/innovacion2k24-logo.png",
          links: [],
        },
        {
          title: "IEM Hacks 2.0",
          dates: "August 26th - 28th, 2023",
          location: "IEM, Kolkata",
          description:
            "Developed an online store for farmers to sell their products directly to consumers, using React, Node.js, and MongoDB.",
          image:
            "/356401959_607371667873287_4199940680176059304_n.jpg",
          links: [],
        },
      ],
  "achievements": [
    "1st Runner-up, Hack4Bengal 3.0 (Best Built on Avalanche Track)",
    "Frontend Lead, Innovacion IEM"
  ]
} as const;
