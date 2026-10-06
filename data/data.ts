import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsLine,
  RiNextjsFill,
  RiGithubFill,
  RiSeoFill,
  RiAccessibilityFill,
  RiCodeBoxFill,
  RiFolder2Fill
} from "@remixicon/react";

export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "About",
    href: "/about",
  },
  {
    id: 3,
    label: "Blog",
    href: "/blog",
  }
];

export const skillItems = [
  {
    id: 1,
    label: "HTML",
    icon: RiHtml5Fill
  },
  {
    id: 2,
    label: "CSS",
    icon: RiCss3Fill
  },
  {
    id: 3,
    label: "JavaScript",
    icon: RiJavascriptFill
  },
  {
    id: 4,
    label: "React",
    icon: RiReactjsLine
  },
  {
    id: 5,
    label: "Next.js",
    icon: RiNextjsFill
  },
  {
    id: 6,
    label: "GitHub",
    icon: RiGithubFill
  },
  {
    id: 7,
    label: "SEO",
    icon: RiSeoFill
  },
  {
    id: 8,
    label: "Accessibility",
    icon: RiAccessibilityFill
  }
]

export const capabilitiesItems = [
  {
    id: 1,
    icon: RiCodeBoxFill,
    title: "Front End Development",
    desc: "Build responsive, modern websites using React, Next.js, Motion, and Sanity CMS",
  },
  {
    id: 2,
    icon: RiAccessibilityFill,
    title: "Accessibility Remediation",
    desc: "Identify and resolve accessibility barriers to create inclusive, WCAG-compliant experiences",
  },
  {
    id: 3,
    icon: RiFolder2Fill,
    title: "Quality Assurance Testing",
    desc: "Test websites across different browsers and devices to catch and eliminate bugs",
  },
  {
    id: 4,
    icon: RiSeoFill,
    title: "Search Engine Optimization",
    desc: "Optimize semantic structure and content to improve search visibility and discoverability",
  },
];

export const projects = [
  {
    id: 1,
    title: "FlashMaster",
    summary: "A landing page for an education platform filled with bright colors and animations",
    imageUrl: "/images/flashmaster.png",
    tags: [
      "React",
      "Motion",
    ],
    demoLink: "https://flashmaster-mm.netlify.app/",
    githubLink: "https://github.com/MichaelRMartinez/flashcard-react-landing-page",
    width: 	1220,
    height: 700,
  },
  {
    id: 2,
    title: "TaskNest",
    summary: "A landing page for a cleaning service filled with bright colors and animations by GSAP",
    imageUrl: "/images/tasknest.png",
    tags: [
      "Next.JS",
      "GSAP",
    ],
    demoLink: "https://tasknest-mm.netlify.app/",
    githubLink: "https://github.com/MichaelRMartinez/GSAP-nextjs-landing-page",
    width: 	1220,
    height: 700,
  },
  {
    id: 3,
    title: "Dentora",
    summary: "A dental business multi-page website with interactive UI components",
    imageUrl: "/images/dentora.png",
    tags: [
      "Next.JS",
    ],
    demoLink: "https://dentora-mm.netlify.app/",
    githubLink: "https://github.com/MichaelRMartinez/dental-nextjs-website",
    width: 	1220,
    height: 700,
  },
  {
    id: 4,
    title: "Simple Jack Finance",
    summary: "A content-focused minimalist-style website for a financial analyst blogger",
    imageUrl: "/images/simplejackfinance.png",
    tags: [
      "Next.JS",
      "Sanity",
    ],
    demoLink: "https://simplejackfinance-mm.netlify.app/",
    githubLink: "https://github.com/MichaelRMartinez/nextjs-sanity-blog-site",
    width: 	1220,
    height: 700,
  },
  {
    id: 5,
    title: "Michael Martinez",
    summary: "My personal web development portfolio with a personal blog and interaction animations",
    imageUrl: "/images/michaelmartinez.png",
    tags: [
      "Next.JS",
      "Sanity",
      "Motion",
    ],
    demoLink: "https://michaelmartinez-dev.netlify.app/",
    githubLink: "https://github.com/MichaelRMartinez/portfolio",
    width: 	1220,
    height: 700,
  },
];

export const benefits = [
  {
    id: 1,
    text: "Since 2023, I have been working as the QA/Section 508 Analyst for WebFirst (a Redhawk company) where I have been remediating functional and accessibility bugs for the Department of Health and Human Services (HHS) and the Department of Labor (DOL).",
  },
  {
    id: 2,
    text: "Between the years of 2019 and 2023, I QA tested and remediated accessibility issues for the private sector. As the Senior QA Analyst/Accessibility Specialist for Pace Communications, I was pleased to turn in great work for Wells Fargo, PepsiCo, Truist, Verizon, and Sysco.",
  },
    {
    id: 3,
    text: "In 2018, I provided digital marketing and search engine optimization for a small business, Advanced Gourmet, that sold food display cases shipped from Italy.",
  },
];