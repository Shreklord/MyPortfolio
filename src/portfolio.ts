export const profile = {
  name: 'Anthony Goldhammer',
  email: 'AnthonyGoldhammer03@gmail.com',
  github: 'https://github.com/Shreklord',
  linkedin: 'https://www.linkedin.com/in/anthony-goldhammer-0bb7aa2b5/',
  resume: '/Resume/Anthony_Goldhammer_Resume_2026.docx',
};

export const navigation = [
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Selected work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const experiences = [
  {
    company: 'Secure Process Intelligence',
    role: 'Full Stack IIoT Software Engineer',
    date: 'Jul 2026 — Present',
    current: true,
    description: 'Turning operational and industrial data into software people can use. Building across web applications, backend systems, and React Native alongside a collaborative development team.',
    note: 'Previously Full Stack IIoT Intern · May — Jul 2026',
    tags: ['Industrial IoT', 'Full stack', 'React Native'],
  },
  {
    company: 'Syndesys',
    role: 'Full Stack Engineer',
    date: 'Nov 2025 — May 2026',
    current: false,
    description: 'Partnered with the CEO to design and develop a production-ready platform, from authentication and role-based access to relational data models, REST APIs, and an admin dashboard.',
    note: 'Built tools to manage content and job postings.',
    tags: ['React', 'TypeScript', 'Node.js', 'Supabase', 'SQL'],
  },
  {
    company: 'Synchro',
    role: 'Software Developer / Full Stack Engineer',
    date: 'May 2024 — May 2026',
    current: false,
    description: 'Contributed to full-stack web applications using React, TypeScript, Node.js, and PostgreSQL. Worked with the development team to break down requirements, build reusable modules, and improve development workflows.',
    note: 'Deployed applications, PostgreSQL databases, and media to Microsoft Azure.',
    tags: ['React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Azure'],
  },
];

export const skillGroups = [
  { label: 'Interfaces', skills: ['React', 'React Native', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Tailwind CSS'] },
  { label: 'Systems & data', skills: ['Node.js', 'REST APIs', 'PostgreSQL', 'Supabase', 'SQL', 'Java', 'Python'] },
  { label: 'Build & ship', skills: ['Microsoft Azure', 'Git', 'Jest', 'TestFlight', 'API design', 'Distributed systems'] },
];
