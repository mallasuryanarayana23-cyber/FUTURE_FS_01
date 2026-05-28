import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaGithub, FaDatabase, FaLinkedin } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiMysql, SiGithub, SiLeetcode, SiCodechef } from 'react-icons/si';
import { BiNetworkChart } from 'react-icons/bi';
import { BsBoxes } from 'react-icons/bs';
import { FiAward, FiCode, FiCpu, FiLayout } from 'react-icons/fi';

// Original Navbar Links
export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Profiles', href: '#profiles' },
  { name: 'Contact', href: '#contact' },
];

// Original About Me Focus Areas
export const focusCards = [
  {
    icon: 'code',
    title: 'Frontend Development',
    desc: 'Creating immersive, pixel-perfect UIs with React and modern CSS.'
  },
  {
    icon: 'cpu',
    title: 'Backend Systems',
    desc: 'Building robust, scalable server-side architectures and APIs.'
  },
  {
    icon: 'layout',
    title: 'UI/UX Design',
    desc: 'Designing intuitive and beautiful user experiences.'
  }
];

// Original About Me Bio
export const aboutBio = {
  heading: "I'm an engineer who loves building things.",
  para1: "Currently pursuing my studies in Computer Science and Engineering, I have developed a strong passion for full-stack web development. I enjoy bridging the gap between engineering and design—combining technical knowledge with a keen eye for aesthetics.",
  para2: "My goal is to always build products that provide pixel-perfect, performant experiences. When I'm not in front of a computer screen, I'm probably exploring new technologies or solving algorithmic challenges."
};

// Original Skills List
export const skillsData = [
  { name: 'Java', icon: FaJava, color: '#f89820' },
  { name: 'JavaScript', icon: IoLogoJavascript, color: '#f7df1e' },
  { name: 'React.js', icon: FaReact, color: '#61dafb' },
  { name: 'HTML', icon: FaHtml5, color: '#e34f26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572b6' },
  { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
  { name: 'Git', icon: FaDatabase, color: '#f05032' },
  { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
  { name: 'DSA', icon: BiNetworkChart, color: '#7c3aed' },
  { name: 'OOP', icon: BsBoxes, color: '#06b6d4' },
];

// Original Projects List
export const projectsData = [
  {
    title: 'SkillMap — MSME Worker Connect',
    description: 'A comprehensive platform designed to bridge the gap between MSMEs and skilled workers. Features advanced filtering, real-time matching, and an intuitive dashboard.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/mallasuryanarayana23-cyber/Saikona.git',
    live: 'https://saikona-1.onrender.com',
    glowColor: 'from-primary/20 to-transparent',
    tag: 'Full-Stack'
  },
  {
    title: 'Smart Crop Recommendation System',
    description: 'An intelligent system utilizing machine learning algorithms to recommend optimal crops based on soil metrics and environmental conditions to maximize yield.',
    tech: ['Python', 'Machine Learning', 'Flask', 'React', 'Data Analysis'],
    github: 'https://github.com/chaitanya2230/Team-Explorers-Final.git',
    live: 'https://team-explorers-upd.vercel.app/',
    glowColor: 'from-cyanGlow/20 to-transparent',
    tag: 'AI/ML & React'
  },
  {
    title: 'Visitor Management System',
    description: 'A secure, scalable digital logging system replacing traditional paper logs. Features QR code generation, real-time notifications, and admin analytics.',
    tech: ['ASP.NET Core', 'C#', 'SQL Server', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/mallasuryanarayana23-cyber/visitor-management.git',
    live: 'https://visitor-management-935s.onrender.com',
    glowColor: 'from-accent/20 to-transparent',
    tag: 'Enterprise ASP.NET'
  }
];

// Original Certifications List
export const certificationsData = [
  {
    title: 'Python Essentials',
    issuer: 'Cisco',
    icon: FiAward,
    glowColor: '#7c3aed',
    glow: 'group-hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]'
  },
  {
    title: 'HTML/CSS/JS',
    issuer: 'Cisco',
    icon: FiAward,
    glowColor: '#06b6d4',
    glow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]'
  },
  {
    title: 'Database Management Systems',
    issuer: 'Infosys',
    icon: FiAward,
    glowColor: '#3b82f6',
    glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]'
  }
];

// Original Coding Profiles List
export const codingProfiles = [
  { 
    name: 'GitHub', 
    icon: SiGithub, 
    url: 'https://github.com/mallasuryanarayana23-cyber', 
    color: '#ffffff', 
    stats: '' 
  },
  { 
    name: 'LinkedIn', 
    icon: FaLinkedin, 
    url: 'https://www.linkedin.com/in/malla-surya-narayana-5520a9349', 
    color: '#0a66c2', 
    stats: '' 
  },
  { 
    name: 'LeetCode', 
    icon: SiLeetcode, 
    url: 'https://leetcode.com/u/suryamalla/', 
    color: '#ffa116', 
    stats: '100+ Problems' 
  },
  { 
    name: 'CodeChef', 
    icon: SiCodechef, 
    url: 'https://www.codechef.com/users/surya189489', 
    color: '#5B4638', 
    stats: '1054 Rating' 
  },
];
