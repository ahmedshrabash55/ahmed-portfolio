// ─────────────────────────────────────────────────────────
// Centralized content. Edit this file to update the site —
// components read from here, so you rarely need to touch JSX.
// ─────────────────────────────────────────────────────────

export const profile = {
  name: 'Ahmed Shrabash',
  title: 'Cybersecurity Student | Aspiring Penetration Tester',
  focus: ['Web Security', 'Mobile Security', 'Network Pentesting', 'Active Directory'],
  location: 'Gharbia, Egypt',
  linkedin: 'https://www.linkedin.com/in/ahmed-shrabash',
  email: 'secshrabash@gmail.com',
  phone: '+201020601085',
  photo: '/ahmed-photo.jpg',
  cv: '/Ahmed-Shrabash-CV.pdf',
}

export const heroStatement =
  "I'm building practical cybersecurity skills through hands-on training, structured labs, and applied security projects — with a growing focus on offensive security."

export const stats = [
  { label: 'Computer Science Student', detail: 'Akhbar ElYom Academy, 2023–2027' },
  { label: 'DEPI Penetration Tester', detail: 'Digital Egypt Pioneers Initiative' },
  { label: 'NTI Trainee', detail: 'Penetration Testing Training' },
  { label: '4 Practical Projects', detail: 'Lab-based security work' },
]

export const about = {
  paragraphs: [
    "I'm a Computer Science student at Akhbar ElYom Academy with a strong and growing interest in cybersecurity — particularly web application security and mobile security. My path into the field started with structured, hands-on training rather than theory alone.",
    "Through the Digital Egypt Pioneers Initiative (DEPI), I'm currently training as a Penetration Tester, working on web and mobile penetration testing, Active Directory, and network security using industry-standard tools. Before that, I completed a Penetration Testing traineeship at the National Telecommunication Institute (NTI) and a summer training program with the Ministry of Communications and Information Technology (MCIT).",
    "My training so far has covered vulnerability assessment, penetration testing fundamentals, threat hunting, log analysis, cloud security auditing, network security, and security awareness. I learn primarily by doing — working through labs, documenting findings, and rebuilding concepts until they hold up under practical testing.",
    "My goal is straightforward: gain real-world cybersecurity experience, contribute meaningfully to a security team, and keep growing as a penetration tester.",
  ],
  currentlyLearning: [
    'Web Penetration Testing',
    'Mobile Penetration Testing',
    'Network Security',
    'Advanced Offensive Security Concepts',
  ],
}

export const expertiseAreas = [
  {
    title: 'Web Penetration Testing',
    description: 'Testing web applications against common vulnerability classes in controlled lab environments.',
    items: ['OWASP Top 10', 'Burp Suite', 'Request/response analysis', 'Vulnerability assessment'],
  },
  {
    title: 'Mobile Security',
    description: 'Assessing mobile applications for common weaknesses in data handling and communication.',
    items: ['Insecure data storage', 'Weak authentication', 'Insecure communication', 'Static & dynamic review'],
  },
  {
    title: 'Network Security',
    description: 'Analyzing network traffic and infrastructure to identify potential security issues.',
    items: ['Nmap', 'Wireshark', 'Traffic analysis', 'TCP/IP, DNS, HTTP/HTTPS'],
  },
  {
    title: 'Active Directory',
    description: 'Developing practical, hands-on knowledge of AD environments as part of DEPI training.',
    items: ['AD fundamentals', 'Enumeration concepts', 'Hands-on lab training', 'Windows environments'],
  },
]

export const skillCategories = [
  {
    category: 'Security',
    skills: [
      'Penetration Testing',
      'Vulnerability Assessment',
      'Threat Hunting',
      'Log Analysis',
      'Cloud Security Auditing',
      'Security Awareness',
    ],
  },
  {
    category: 'Networking',
    skills: ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'Network Traffic Analysis'],
  },
  {
    category: 'Web Security',
    skills: ['OWASP Top 10', 'Web Application Security Testing', 'Vulnerability Assessment', 'Burp Suite'],
  },
  {
    category: 'Mobile Security',
    skills: ['Mobile Application Security Testing', 'Insecure Data Storage', 'Weak Authentication', 'Insecure Communication'],
  },
  {
    category: 'Tools',
    skills: ['Burp Suite', 'Nmap', 'Wireshark', 'Metasploit Framework', 'GoPhish'],
  },
  {
    category: 'Operating Systems',
    skills: ['Linux', 'Kali Linux', 'Windows'],
  },
  {
    category: 'Programming',
    skills: ['Python', 'C++', 'HTML', 'CSS'],
  },
]

export const projects = [
  {
    id: 'phishing-simulation',
    title: 'Phishing Simulation',
    category: 'Security Awareness',
    image: '/project-phishing-gophish.jpg',
    description:
      'Set up and ran controlled phishing simulations to evaluate awareness and response, from campaign configuration through results analysis.',
    tools: ['GoPhish'],
    skills: ['Campaign configuration', 'Email & landing page design', 'Results monitoring', 'User-interaction analysis'],
    whatIDid: [
      'Configured phishing campaigns in a controlled environment using GoPhish',
      'Prepared email templates and landing pages for the simulation',
      'Monitored campaign results as they came in',
      'Analyzed user interactions to understand response patterns',
    ],
    outcome: 'Practical, hands-on experience with how phishing campaigns are built, delivered, and measured.',
    link: null,
  },
  {
    id: 'web-security-testing',
    title: 'Web Security Testing',
    category: 'Web Security',
    image: '/project-web-security.jpg',
    description:
      'Hands-on web application security testing in controlled lab environments, working through the OWASP Top 10 with Burp Suite.',
    tools: ['Burp Suite'],
    skills: ['HTTP interception', 'OWASP Top 10 testing', 'Vulnerability documentation', 'Impact analysis'],
    whatIDid: [
      'Intercepted and analyzed HTTP requests using Burp Suite',
      'Tested lab applications against OWASP Top 10 vulnerability categories',
      'Documented findings clearly, including reproduction steps',
      'Assessed the potential impact of each identified issue',
    ],
    outcome: 'Stronger practical grasp of how common web vulnerabilities are found and documented.',
    link: null,
  },
  {
    id: 'mobile-app-security',
    title: 'Mobile Application Security Testing',
    category: 'Mobile Security',
    image: '/project-mobile-security.jpg',
    description:
      'Security assessments of mobile applications in lab environments, focused on data storage, authentication, and communication weaknesses.',
    tools: ['Mobile testing lab environment'],
    skills: ['Insecure data storage review', 'Authentication weakness testing', 'Communication security review', 'Impact analysis'],
    whatIDid: [
      'Assessed mobile applications in a controlled lab setting',
      'Focused on insecure data storage patterns',
      'Reviewed authentication mechanisms for weaknesses',
      'Analyzed communication channels for insecure handling of data',
    ],
    outcome: 'Practical familiarity with the most common mobile application security pitfalls.',
    link: null,
  },
  {
    id: 'network-security-analysis',
    title: 'Network Security & Analysis',
    category: 'Network Security',
    image: '/project-network-nmap.jpg',
    description:
      'Hands-on network security testing and traffic analysis using Kali Linux and standard offensive-security tooling.',
    tools: ['Kali Linux', 'Metasploit', 'Wireshark'],
    skills: ['Packet capture & analysis', 'Traffic pattern investigation', 'Network testing fundamentals'],
    whatIDid: [
      'Used Kali Linux as the base environment for hands-on testing',
      'Worked with Metasploit and Wireshark for network analysis exercises',
      'Captured and analyzed network packets',
      'Investigated communication patterns to identify potential issues',
    ],
    outcome: 'A practical foundation in network traffic analysis and common network testing tools.',
    link: null,
  },
]

export const timeline = [
  {
    period: 'July 2026 – Present',
    org: 'Digital Egypt Pioneers Initiative (DEPI)',
    role: 'Penetration Tester',
    location: 'Egypt',
    description:
      'Hands-on training in web & mobile penetration testing, Active Directory, and network security using industry-standard security tools.',
  },
  {
    period: 'Aug 2025 – Sep 2025',
    org: 'National Telecommunication Institute (NTI)',
    role: 'Penetration Testing Trainee',
    location: 'Egypt',
    description: 'Structured training in penetration testing fundamentals and practical lab work.',
  },
  {
    period: '2025',
    org: 'Ministry of Communications and Information Technology (MCIT)',
    role: 'Summer Training Program',
    location: 'Egypt',
    description: 'Summer training program covering foundational technology and security topics.',
  },
]

export const education = {
  institution: 'Akhbar ElYom Academy, Egypt',
  degree: "Bachelor's Degree in Computer Science",
  period: '2023 – 2027',
  grade: 'Overall Grade: Very Good',
  logo: '/akhbar-elyom-academy-logo.png',
}

// Certificates: add real certificates here as you earn them.
export const certifications = [
  {
    name: 'Cybersecurity Academy (Undergraduate Level) — 2025',
    org: 'National Telecommunication Institute (NTI)',
    date: '2025',
    link: null,
    image: '/certificate-nti-cybersecurity-academy.jpg',
  },
]

export const usp = {
  heading: 'A practical, security-first combination',
  statement:
    "I bring together a Computer Science foundation with hands-on, lab-based training across web security, mobile security, network security, and Active Directory — through structured programs like DEPI and NTI rather than self-reported experience alone. I document what I test, learn continuously, and I'm actively building toward real-world offensive security work.",
  points: [
    'Computer Science foundation, not just security tooling',
    'Hands-on training through DEPI and NTI, not self-taught claims only',
    'Coverage across web, mobile, network, and Active Directory',
    'A documented, methodical approach to testing and learning',
  ],
}

export const contact = {
  heading: "Let's build a more secure digital world.",
  sub: "I'm actively looking to connect with security teams, mentors, and anyone working in offensive security. If you have a conversation, opportunity, or feedback in mind, I'd like to hear from you.",
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
