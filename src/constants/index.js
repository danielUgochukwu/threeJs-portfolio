export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Ifeoluwa Isaac',
    position: 'CEO of Bending Waters',
    img: 'assets/pastor.jpeg',
    review:
      'Working with Daniel was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Okerien Emmanuel',
    position: 'Founder of Spartan Builders',
    img: 'assets/okerien.jpeg',
    review:
      'Daniel’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our platform, and our acquisitions have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'Demilade Ayinde',
    position: 'Full-stack Web and Mobile Developer ',
    img: 'assets/micheal.jpeg',
    review:
      'I can’t say enough good things about Daniel. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ugochuku godfrey',
    position: 'CEO of Solidray Technology',
    img: 'assets/ugo.jpeg',
    review:
      'Daniel was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Viraly - Social Media Web App',
    desc: 'Viraly is a dynamic social media platform designed for seamless interaction and sharing among users. It provides a highly interactive interface and robust backend to enhance user engagement.',
    subdesc:
      'Built with Vite, React, TypeScript, TailwindCSS, TanStack Query, and Appwrite, Viraly is optimized for performance and scalability.',
    href: 'https://github.com/danielUgochukwu/viraly',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/viraly-icon.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Appwrite', path: '/assets/appwrite.svg' },
    ],
  },
  {
    title: 'Apple iPhone 15 Pro Clone',
    desc: 'A visually stunning and highly interactive clone of the Apple iPhone 15 Pro website. It showcases cutting-edge features with smooth animations and 3D effects.',
    subdesc:
      'Developed using React, TailwindCSS, Three.js, GSAP, and Sentry, this project highlights advanced web animation techniques and responsive design.',
    href: 'https://apple-15-pro.vercel.app/',
    texture: '/textures/project/apple15.mp4',
    logo: '/assets/apple.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'GSAP', path: '/assets/gsap.png' },
      { id: 5, name: 'Sentry', path: '/assets/sentry.png' },
    ],
  },
  {
    title: 'Xora SaaS AI Landing Page',
    desc: 'Xora is a sleek and modern landing page designed for SaaS AI platforms, featuring advanced animations and a polished user interface.',
    subdesc:
      'Created with React, TailwindCSS, TypeScript, and GSAP, Xora demonstrates professional design practices and animation integration.',
    href: 'https://xora-saas-ai.netlify.app/',
    texture: '/textures/project/xora_clip.mp4',
    logo: '/assets/xora.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background: 'linear-gradient(177deg, rgba(45,241,255,0.1769) 0%, rgba(45,241,255,0.1348) 80%)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'GSAP', path: '/assets/gsap.png' },
    ],
  },
  {
    title: 'Nike Landing Page',
    desc: 'A responsive and visually appealing landing page for Nike, highlighting their product lineup with stunning visuals and modern design.',
    subdesc:
      'Built with React and TailwindCSS, this project demonstrates expertise in responsive web development and product-focused design.',
    href: 'https://nike-dan.netlify.app/',
    texture: '/textures/project/nike.mp4',
    logo: '/assets/nike-16.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
    ],
  },
];
export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Bending Waters',
    pos: 'Front-end Web Developer',
    duration: '2023 - Present',
    title:
      'Collaborate with cross-functional teams to design and develop engaging, responsive, and user-centric web interfaces for marketing campaigns.\n Optimize website performance and accessibility to ensure seamless user experiences across all devices.\n Implement cutting-edge front-end technologies and frameworks to enhance digital marketing solutions.\n Contribute to the development of innovative hybrid marketing strategies that combine technology and creativity to drive business growth in Nigeria and the Middle East.\n Support diverse marketing services, including SEO, email marketing, social media, influencer campaigns, and video advertising, by delivering top-tier web assets.',

    icon: '/assets/bending-waters.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Solidray Technology',
    pos: 'Front-end Developer',
    duration: '202 - 2023',
    title:
      'Developed user-friendly web interfaces to enhance customer engagement for computer, mobile, and game console repair services. \n Collaborated with the team to design and implement a seamless booking system for repair services, improving service delivery efficiency. \n Leveraged Figma for collaborative design processes, ensuring real-time feedback and rapid design iterations. \n Contributed to optimizing the company’s online presence, driving increased traffic and service inquiries.',
    icon: '/assets/solid-ray.png',
    animation: 'clapping',
  },
];
