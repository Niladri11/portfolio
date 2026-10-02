// ============================================================
// portfolioData.js — Centralized configuration for Niladri Tewari's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Niladri Tewari",
  firstName: "Niladri",
  brandName: "Niladri",
  title: "Cloud & DevOps Engineer",
  location: "Durgapur, West Bengal, India",
  phone: "+91-8293222567",
  emails: {
    primary: "niladritewari86@gmail.com",
    secondary: "niladritewari86@gmail.com",
  },
  summary:
    "Cloud and DevOps Engineering student with hands-on experience designing, deploying, and automating production-grade AWS infrastructure using Terraform, Docker, GitHub Actions, and Bash. Built ResQOps, a multi-region disaster recovery platform on AWS that delivers automated infrastructure failover in under 5 minutes with defined RTO and RPO targets.",
  resumeUrl: "/Niladri Tewari_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/Niladri11",
  linkedin: "https://www.linkedin.com/in/niladritewari",
  featuredProject: "https://github.com/Niladri11/ResQops",
};

export const heroContent = {
  greeting: "Hi, I'm Niladri Tewari",
  titleHighlight: "Cloud & DevOps Engineer",
  subtitle:
    "I design and automate production-grade AWS infrastructure using Terraform, Docker, and CI/CD — built for failure, not just for uptime.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:niladritewari86@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Niladri,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Niladri Tewari_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Niladri Tewari</span>, a Cloud & DevOps Engineering student based in Durgapur, India, focused on building resilient, automated, production-grade AWS infrastructure.`,
  techStack: ["AWS", "Terraform", "Docker"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn infrastructure into resilient systems",
  description:
    "I follow a structured, automation-first approach to designing, provisioning, and operating cloud infrastructure.",
  cards: [
    {
      number: "01",
      title: "Design",
      text: "I start by mapping infrastructure requirements, failure modes, and RTO/RPO targets to lay a rock-solid architectural foundation.",
    },
    {
      number: "02",
      title: "Provision",
      text: "Writing modular Infrastructure as Code with Terraform — remote state, state locking, and reproducible multi-region deployments.",
    },
    {
      number: "03",
      title: "Automate",
      text: "Building CI/CD pipelines with GitHub Actions and OIDC, containerizing workloads with Docker for consistent, repeatable delivery.",
    },
    {
      number: "04",
      title: "Observe",
      text: "Deploying Prometheus, Grafana, and AlertManager for real-time observability, alerting, and fast incident response.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS EC2 / VPC", level: 90 },
        { name: "AWS IAM", level: 85 },
        { name: "AWS S3 / RDS", level: 85 },
        { name: "AWS Lambda / SNS", level: 78 },
        { name: "AWS ECR", level: 82 }
      ]
    },
    {
      title: "Infrastructure as Code",
      skills: [
        { name: "Terraform", level: 90 },
        { name: "Modular IaC", level: 85 },
        { name: "S3 Remote State", level: 85 },
        { name: "DynamoDB State Locking", level: 80 }
      ]
    },
    {
      title: "DevOps & CI/CD",
      skills: [
        { name: "Docker & Docker Compose", level: 88 },
        { name: "GitHub Actions", level: 88 },
        { name: "CI/CD Pipelines", level: 85 },
        { name: "Git", level: 90 }
      ]
    },
    {
      title: "Monitoring & Observability",
      skills: [
        { name: "Prometheus", level: 82 },
        { name: "Grafana", level: 82 },
        { name: "AlertManager", level: 78 },
        { name: "Slack Alerting", level: 80 }
      ]
    },
    {
      title: "Scripting & Languages",
      skills: [
        { name: "Python", level: 78 },
        { name: "Bash", level: 85 },
        { name: "C", level: 70 }
      ]
    },
    {
      title: "Systems & Networking",
      skills: [
        { name: "Linux (Ubuntu)", level: 88 },
        { name: "TCP/IP & DNS", level: 80 },
        { name: "VPC Networking", level: 85 },
        { name: "Security Groups & Subnets", level: 82 }
      ]
    }
  ]
};

export const internshipsList = [
  {
    organization: "Indian Institute of Technology (IIT) Jammu",
    role: "Technical Intern — Ethical Hacking & Cyber Security",
    duration: "June 2025 - August 2025 (Remote)",
    skills: [
      "Network Security Analysis",
      "Infrastructure Hardening",
      "Traffic Analysis",
      "Security Documentation",
    ],
    tech: ["Linux", "Network Reconnaissance", "Enterprise Infra Simulation"],
  },
];

export const softSkillsList = [
  { name: "Ownership", icon: "🛠️", desc: "Taking end-to-end responsibility for infrastructure — from design through failure recovery." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex infrastructure and networking issues into clean, systematic fixes." },
  { name: "Documentation", icon: "📄", desc: "Writing clear, reproducible setup and remediation docs so systems stay maintainable." },
  { name: "Incident Response", icon: "🚨", desc: "Staying calm under failure conditions, diagnosing root cause, and restoring service fast." },
  { name: "Automation Mindset", icon: "⚙️", desc: "Defaulting to Infrastructure as Code and CI/CD over manual, repeatable work." },
  { name: "Collaboration", icon: "🤝", desc: "Working across security, infra, and application teams to harden shared systems." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new cloud services, tools, and monitoring stacks as needed." },
  { name: "Communication", icon: "💬", desc: "Translating technical infrastructure decisions into clear, actionable terms." },
];

export const projects = [
  {
    id: "resqops",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "ResQOps",
    description:
      "An automated multi-region disaster recovery orchestration platform on AWS, architected across ap-south-1 (primary) and ap-southeast-1 (DR). Delivers automated infrastructure failover in under 5 minutes with defined RTO and RPO targets. Provisions 20+ AWS resources via modular Terraform IaC with S3 remote state and DynamoDB locking, backed by a GitHub Actions CI/CD pipeline with OIDC auth to ECR, and a Prometheus/Grafana/AlertManager observability stack with under 1-minute downtime detection and Slack alerting. Lambda + SNS trigger automated failover workflows on primary region failure.",
    techTags: [
      "AWS",
      "Terraform",
      "Docker",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "AlertManager",
      "Lambda",
      "SNS",
      "Python",
      "Bash",
    ],
    links: {
      github: "https://github.com/Niladri11/ResQops",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "terraform-aws-infra",
    number: "02",
    badge: null,
    title: "Terraform AWS Infrastructure Automation",
    description:
      "Automated provisioning of AWS VPC, subnets, EC2, S3, and security groups using Terraform IaC with an S3 remote state backend, enabling reproducible and team-safe infrastructure deployments.",
    techTags: ["Terraform", "AWS EC2", "AWS VPC", "AWS S3", "AWS CLI", "GitHub"],
    links: {
      github: "https://github.com/Niladri11",
    },
    isFlagship: false,
  },
  {
    id: "dockerized-webapp",
    number: "03",
    badge: null,
    title: "Dockerized Web Application Deployment on AWS EC2",
    description:
      "Containerized and deployed an NGINX web application on AWS EC2 using Docker and Docker Compose, configuring Linux networking, persistent storage volumes, and security group hardening for production readiness.",
    techTags: ["AWS EC2", "Docker", "Docker Compose", "NGINX", "Linux"],
    links: {
      github: "https://github.com/Niladri11",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy (via The Neotia University)",
      icon: "🔒",
    },
    {
      name: "Integrations: APIs & Connected Workflows",
      issuer: "n8n Academy",
      icon: "🔗",
    },
    {
      name: "In Practice: AI, Testing & Best Practices",
      issuer: "n8n Academy",
      icon: "🧪",
    },
    {
      name: "Essentials: Your First Workflows",
      issuer: "n8n Academy",
      icon: "⚡",
    },
    {
      name: "n8n Quickstart",
      issuer: "n8n Academy",
      icon: "🚀",
    },
    {
      name: "Ethical Hacking & Cyber Security — Summer School 2025",
      issuer: "IIT Jammu × Techible × I3C",
      icon: "🎓",
    },
  ],
  viewAllUrl: null,
};

export const education = {
  degree: "B.Tech – Computer Science and Engineering (Cybersecurity Specialization)",
  institution: "The Neotia University, West Bengal",
  cgpa: "8.43",
  graduation: "2027",
  duration: "Aug 2023 – Expected Jul 2027",
};

export const footerContent = {
  taglines: [
    "Cloud & DevOps Engineering",
    "AWS · Terraform · Docker",
    "CI/CD & Observability",
  ],
  credential: "B.Tech CSE (Cybersecurity) · CGPA 8.43",
  copyright: `© ${new Date().getFullYear()} Niladri Tewari`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
