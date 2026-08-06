import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
export const pythonBasics = [
  {
    title: "What is Python",
    slug: "what-is-python",
    day: 1,
    order: 1,
    content: `
      <p>Python is a powerful and easy-to-learn programming language.</p>
      <h2>Why Learn Python?</h2>
      <p>It is used in web development, AI, automation, and more.</p>
      <pre>print("Hello World")</pre>
    `,
  },
  {
    title: "Installation Guide",
    slug: "install-python",
    day: 2,
    order: 2,
    content: `
      <p>Download Python from official website.</p>
      <pre>python --version</pre>
    `,
  },
  {
    title: "First Program",
    slug: "first-program",
    day: 3,
    order: 3,
    content: `
      <p>Let's write your first Python program.</p>
      <pre>print("My First Program")</pre>
    `,
  },
  {
    title: "Variables",
    slug: "variables",
    day: 4,
    order: 4,
    content: `
      <p>Variables store data.</p>
      <pre>x = 10</pre>
    `,
  },
];

export const tabs = [
  { href: "/articles", label: "Articles" },
  { href: "/categories", label: "Categories" },
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
  { href: "/newsletter", label: "Letters" },
  { href: "/contact", label: "Contact" },
]

export const sections = [
  {
    slug: "life-lessons",
    eyebrow: "LIFE LESSONS",
    title: "Lessons life quietly taught me",
    linkLabel: "View all",
  },
  {
    slug: "mindset",
    eyebrow: "MINDSET",
    title: "Changing how we think",
    linkLabel: "Explore mindset",
  },
  {
    slug: "self-growth",
    eyebrow: "SELF GROWTH",
    title: "Becoming a little better every day",
    linkLabel: "Read more",
  },
  {
    slug: "daily-reflections",
    eyebrow: "DAILY REFLECTIONS",
    title: "Small moments worth remembering",
    linkLabel: "See reflections",
  },
];

export const socialIcons = [
  {
    href: "https://github.com/ranjaniav1/",
    label: "GitHub",
    icon: <GitHubIcon sx={{ fontSize: 20 }} />,
  },
  {
    href: "https://www.linkedin.com/in/varsaniranjani",
    label: "LinkedIn",
    icon: <LinkedInIcon sx={{ fontSize: 20 }} />,
  },
  {
    href: "https://www.instagram.com/varsaniranjani/",
    label: "Instagram",
    icon: <InstagramIcon sx={{ fontSize: 20 }} />,
  },
];