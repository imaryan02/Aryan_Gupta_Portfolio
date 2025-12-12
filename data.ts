
import { Experience, Project, SkillCategory, EventItem, EducationItem, Story } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com/imaryan02",
  linkedin: "https://linkedin.com/in/imaryan02",
  email: "aryan.official02@gmail.com",
  instagram: "https://instagram.com/im_aryan02",
};

export const EXPERIENCE: Experience[] = [
  {
    id: "infosys",
    company: "Infosys",
    role: "System Engineer",
    period: "2025 – Present",
    bullets: [
      "Started as a System Engineer Trainee and completed 6 months of structured training at the Infosys Mysuru campus.",
      "Trained in Java, Advanced Java, Spring Boot, React (TypeScript), OOPs, DBMS, and SQL.",
      "Currently working as a full-time System Engineer, focusing on writing clean, scalable code and understanding enterprise systems."
    ]
  },
  {
    id: "amazon-ml",
    company: "Amazon ML School",
    role: "Machine Learning Trainee",
    period: "2024",
    bullets: [
      "Selected from a large applicant pool for Amazon’s Machine Learning Summer School program.",
      "Learned machine learning fundamentals, problem framing, and how ML is applied in real-world products."
    ]
  },
  {
    id: "brand-innerworld",
    company: "Brand Innerworld",
    role: "Prompt Engineer",
    period: "Nov 2023 – Feb 2024",
    bullets: [
      "Built a custom Data Analyst GPT for pharmaceutical data analysis, improving processing efficiency by 40%.",
      "Improved response accuracy by around 30% using structured prompt design and domain-specific context.",
      "Conducted generative AI workshops for 50+ brand managers at Cipla, focusing on practical AI usage."
    ]
  },
  {
    id: "glametique",
    company: "Glametique India",
    role: "Frontend Web Developer (Freelance)",
    period: "Freelance",
    bullets: [
      "Developed a responsive and user-friendly website for a beauty and cosmetics brand.",
      "Focused on mobile performance, clean UI, and smooth user experience."
    ]
  },
  {
    id: "ocean-biotech",
    company: "Ocean Biotech",
    role: "Web Developer",
    period: "Project",
    bullets: [
      "Designed and developed the official website for a pharmaceutical company (oceanbiotech.in).",
      "Worked on presenting product information in a clear and structured way."
    ]
  },
  {
    id: "yuvashakti",
    company: "YuvaShakti",
    role: "Team Lead",
    period: "College",
    bullets: [
      "Led a 6-member team and reached Top 15 in Smart India Hackathon (SIH) 2024 internal rounds.",
      "Secured 8th position in SIH SKIT 2023 prelims by handling project direction and execution."
    ]
  }
];


export const EDUCATION: EducationItem[] = [
  {
    institution: "Swami Keshvanand Institute of Technology, Jaipur",
    degree: "Bachelor's degree, Computer Science",
    period: "Nov 2021 - May 2025",
    grade: "8.0 CGPA"
  },
  {
    institution: "Delhi Public School (DPS), Jaipur",
    degree: "Higher Secondary, PCM",
    period: "Apr 2017 - May 2019",
    grade: "76%"
  },
  {
    institution: "Usha Martin World School, Patna",
    degree: "High School",
    period: "Apr 2014 - Mar 2017",
    grade: "9.8 CGPA"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming",
    summary: "Writing logic-driven code and solving problems step by step.",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "C"]
  },
  {
    title: "Frontend & UI",
    summary: "Building clean, responsive interfaces that are easy to use.",
    skills: ["React.js", "Tailwind CSS", "Framer Motion", "UI/UX Design", "FaceAPI.js", "Electron.js"]
  },
  {
    title: "AI & ML",
    summary: "Using AI tools to add real functionality to applications.",
    skills: ["TensorFlow.js", "Gemini API", "LangChain", "Prompt Engineering"]
  },
  {
    title: "Backend & Infra",
    summary: "Working with backend services, databases, and cloud tools.",
    skills: ["Node.js", "Express.js", "PostgreSQL", "MySQL", "Supabase", "GCP", "Git", "Docker"]
  }
];

export const STORIES: Story[] = [
  {
    id: "infosys-mysuru",
    title: "From Colorful Tags to The Black Tag 🖤",
    role: "System Engineer Trainee",
    company: "Infosys Mysuru",
    date: "2025",
    imageUrl: "/images/infy.jpeg",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7399117446961520640/", // Update with actual post link
    tags: ["#InfosysMysuru", "#Resilience", "#SystemEngineer"],
    description: "4–5 months of intense training... A lot of ups and downs, moments of low confidence, and a journey full of learning. Morning 9:15 AM – 5:30 PM back-to-back classes. During my stream training, I hit my lowest. I scored 56%, then 58% — and only one exam was left. I had to cross 65% to clear training in the first attempt. My last hope was the Group Project. I gave my 110%, and our project turned out exceptionally well! Scored 92/100. It was none other than God’s plan. And finally, I have the Black Tag."
  },
  {
    id: "prompt-engineer",
    title: "Brand Building Breakthroughs: AI Workshop",
    role: "Prompt Engineer",
    company: "Brand Innerworld",
    date: "Nov 2023",
    imageUrl: "/images/bii.jpeg",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7136428089676341248/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7136428089676341248%29", // Update with actual post link
    tags: ["#AIWorkshop", "#Cipla", "#PromptEngineering"],
    description: "Just a few days into my internship, I had the incredible opportunity to be part of a transformative workshop on 'BRAND BUILDING BREAKTHROUGHS-USING AI' at Cipla’s Mumbai head office. Led by industry veterans, we unveiled the potential of AI tools like ChatGPT and MidJourney. My segment delved into Market Data Analysis, where I explored the vital role of data in shaping impactful branding strategies. The energy from the 50+ Brand Managers was truly inspiring."
  },
  {
    id: "sih-2023",
    title: "Leading Team YuvaShakti at SIH",
    role: "Team Lead",
    company: "Smart India Hackathon",
    date: "2023",
    imageUrl: "/images/sih.jpeg",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7136786988896075776/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7136786988896075776%29", // Update with actual post link
    tags: ["#SIH2023", "#Leadership", "#MentalHealthTech"],
    description: "Team YuvaShakti participated in Smart India Hackathon 2023. Out of 71 participating teams, we secured an impressive 8th position in prelims. Our Problem Statement focused on a Mental health surveillance solution. We worked tirelessly day and night, overcoming countless sleepless nights. Though it hurts that we couldn't make it to the SIH finals, the journey of 3 months taught us teamwork, resilience, and the power of believing in a shared vision."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "dr-amit",
    title: "Dr. Amit Personal Branding",
    tagline: "Medical Website for Tier-2 / Tier-3 India",
    type: "Flagship",
    nature: "Freelance",
    date: "Jun 2025 – Present",
    links: {
      demo: "https://dramitgastro.com"
    },
    imageUrl: "/images/drAmitkr.jpeg",
    tags: ["HealthTech", "Branding", "Bilingual"],
    techStack: ["React.js", "Tailwind CSS", "Supabase"],
    hook:
      "A live, bilingual medical website built to establish trust and online presence for a practicing gastroenterologist in Tier-2 / Tier-3 cities.",
    modalContent: {
      problem:
        "Doctors in Tier-2 and Tier-3 cities often lack a verified digital presence. Patients rely on word of mouth, leading to confusion, repeated queries, and lack of trust.",
      solution:
        "Built a simple, premium-feel personal branding website focused on trust, language accessibility, and clear clinic information rather than complex booking systems.",
      features: [
        "Fully bilingual interface (English & Hindi)",
        "Premium mobile web-app style UI",
        "Separate mobile and desktop experiences",
        "Clear doctor profile, qualifications, and clinic details"
      ],
      technicalDetails:
        "Built using React.js and Tailwind CSS with a mobile-first approach. Supabase allows clinic staff to update timings and notices in real time without developer dependency.",
      impact:
        "The website is live on a custom domain and actively used by real patients, significantly reducing repeated availability-related queries.",
      future:
        "Version 2 will focus on performance optimization and stronger local SEO for improved regional reach."
    }
  },
  {
    id: "wellmind",
    title: "WellMind Junction",
    tagline: "Digital Mental Wellness Platform for Youth",
    type: "Flagship",
    nature: "Personal",
    date: "Aug 2023 – Present",
    links: {
      demo: "https://www.wellmindjunction.com/"
    },
    imageUrl: "/images/wellmind.png",
    tags: ["AI", "Mental Health", "TensorFlow"],
    techStack: ["React.js", "Tailwind CSS", "TensorFlow.js", "Supabase", "Gemini API"],
    hook:
      "A live mental wellness platform designed for early emotional awareness and self-reflection, tested with 50+ real users.",
    modalContent: {
      problem:
        "Mental health support in India is stigmatized and often inaccessible, especially for students and young adults.",
      solution:
        "Built a privacy-first digital platform focused on early emotional awareness and self-help, not as a replacement for therapy.",
      features: [
        "Real-time facial emotion recognition using TensorFlow.js",
        "Arogya: AI-based supportive chatbot powered by Gemini",
        "Mental health assessments and emotion tracking via facial analysis",
        "Stress-relief games like Blast the Hen and FacePlay",
        "User dashboard for progress tracking and emotional insights"
      ],
      technicalDetails:
        "Emotion detection runs fully in the browser to ensure privacy. Supabase manages user data, while Gemini API is scoped to act as a non-clinical, supportive listener.",
      impact:
        "The platform is live with real users and a deployed domain, validating user engagement and ethical AI boundaries.",
      future:
        "Future plans include voice journaling, vernacular language support, and deeper emotional trend analysis."
    }
  },
  {
    id: "spotme",
    title: "SpotMe",
    tagline: "Offline Smart Photo Finder",
    type: "Flagship",
    nature: "Personal",
    date: "Dec 2025",
    links: {
      demo: "https://spotmeindia.vercel.app"
    },
    imageUrl: "/images/spotme.png",
    tags: ["Computer Vision", "Privacy", "Offline"],
    techStack: ["React.js", "FaceAPI.js"],
    hook:
      "An offline photo finder that helps users instantly locate their photos from large event folders like Indian weddings.",
    modalContent: {
      problem:
        "Indian weddings generate thousands of photos, making it frustrating to manually search for personal images.",
      solution:
        "Built a fully offline, browser-based tool that performs face matching locally without uploading photos to any server.",
      flow:
        "Upload event folder → Scan your face → Get matching photos instantly",
      features: [
        "100% offline processing",
        "98% face-matching accuracy",
        "ZIP download or WhatsApp sharing",
        "No server, no uploads, no data storage"
      ],
      technicalDetails:
        "Uses FaceAPI.js models loaded directly in the browser, ensuring privacy and zero infrastructure cost.",
      story:
        "Inspired by personal frustration after waiting weeks to find photos from family events."
    }
  },
  {
    id: "jarvis",
    title: "JARVIS Assistant",
    tagline: "Voice-Based Web Navigator",
    type: "Advanced",
    nature: "R&D",
    date: "Nov 2024 – Feb 2025",
    links: {
      // demo: "#"
    },
    imageUrl:
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80",
    tags: ["Voice AI", "Automation", "Gemini"],
    techStack: ["Gemini LLM", "Electron.js", "Selenium"],
    hook:
      "An experimental Jarvis-inspired voice assistant for hands-free system interaction.",
    modalContent: {
      problem:
        "Keyboard and mouse interactions slow down multitasking-heavy workflows.",
      solution:
        "Created a voice-first assistant that converts spoken commands into real system actions.",
      features: [
        "Wake-word activation ('Jarvis')",
        "Context-aware voice conversations",
        "Live web research summaries",
        "Voice-controlled browsing and Spotify playback"
      ],
      technicalDetails:
        "Electron bridges the UI with system-level actions, while Gemini interprets voice commands into executable steps."
    }
  },
  {
    id: "copypaste",
    title: "Copy Paste Guru",
    tagline: "Real-Time Text Sharing",
    type: "Advanced",
    nature: "Personal",
    date: "Jun 2025 – Jul 2025",
    links: {
      demo: "https://copypasteguru.vercel.app/"
    },
    imageUrl: "/images/copypaste.png",
    tags: ["Productivity", "Real-Time"],
    techStack: ["React", "Supabase Realtime"],
    hook:
      "A minimal real-time text sharing tool designed to remove friction during quick collaborations.",
    modalContent: {
      problem:
        "Sharing small snippets across devices usually involves unnecessary steps.",
      solution:
        "Built a temporary, room-based sharing tool with no login requirement.",
      features: [
        "Room-based real-time sharing",
        "Auto-expiring rooms (10 minutes)",
        "No signup required"
      ],
      technicalDetails:
        "Uses Supabase Realtime subscriptions for instant text synchronization."
    }
  },
  {
    id: "pharma-gpt",
    title: "Pharma Data GPT",
    tagline: "Pharma Analytics Assistant",
    type: "Advanced",
    nature: "Client Work",
    date: "Nov 2023 – Jan 2024",
    links: {
      demo: "https://chatgpt.com/g/g-QBAZNQhMv-brand-innerworld-pharma-data-analyst"
    },
    imageUrl: "/images/bigpt.png",
    tags: ["Prompt Engineering", "Analytics"],
    techStack: ["GPT-4", "Python"],
    hook:
      "A custom GPT built to help pharma teams extract insights from complex datasets.",
    modalContent: {
      problem:
        "Brand managers struggled to derive insights from large pharma datasets.",
      solution:
        "Designed a prompt-optimized GPT that converts natural language questions into accurate analytical insights.",
      features: [
        "Natural language data queries",
        "40% faster analysis",
        "30% improvement in response accuracy"
      ],
      technicalDetails:
        "Focused on prompt optimization, accuracy, and medical data compliance."
    }
  },
  {
    id: "glametique",
    title: "Glametique India",
    tagline: "Beauty Brand Website",
    type: "Client",
    nature: "Freelance",
    date: "Jan 2024",
    links: {
      demo: "https://glametique-jaipur-433su944m-imaryan02s-projects.vercel.app/"
    },
    imageUrl: "/images/glam.png",
    tags: ["Frontend", "Design"],
    techStack: ["HTML", "CSS", "JS"],
    hook:
      "A responsive website built for a beauty and cosmetics brand on a tight budget.",
    modalContent: {
      problem:
        "The client needed a modern website without heavy development costs.",
      solution:
        "Delivered a lightweight, responsive frontend using plain web technologies.",
      features: [
        "Mobile-first layout",
        "Optimized performance",
        "Clear product presentation"
      ],
      technicalDetails:
        "Built using HTML, CSS, and JavaScript to maximize performance on low-end devices."
    }
  },
  {
    id: "ocean",
    title: "Ocean Biotech",
    tagline: "Pharma Company Website",
    type: "Client",
    nature: "Client Work",
    date: "Jul 2023 – Aug 2023",
    links: {
      demo: "https://ocean-biotech.vercel.app/"
    },
    imageUrl: "/images/ocean.png",
    tags: ["Corporate", "Web"],
    techStack: ["HTML", "CSS", "JS"],
    hook:
      "A corporate website built to showcase a pharmaceutical product portfolio.",
    modalContent: {
      problem:
        "Offline catalogs limited the company’s digital reach.",
      solution:
        "Created a static, SEO-friendly website to reliably present products online.",
      features: [
        "Digital product catalog",
        "Company profile",
        "Contact information"
      ],
      technicalDetails:
        "Static site approach chosen for simplicity, stability, and SEO."
    }
  },
  {
    id: "chaiwale",
    title: "ChaiWale",
    tagline: "Local Cafe Website",
    type: "Client",
    nature: "Client Work",
    date: "Aug 2022 – Sep 2022",
    links: {
      demo: "https://chaiwale-aryan.vercel.app/"
    },
    imageUrl: "/images/chai.png",
    tags: ["Local Business", "Web"],
    techStack: ["HTML", "CSS", "JS"],
    hook:
      "My first real-world project, helping a local cafe go digital.",
    modalContent: {
      problem:
        "The cafe had no digital presence for nearby students.",
      solution:
        "Built a simple, fast-loading website to showcase menu and location.",
      features: [
        "Digital menu",
        "Simple layout",
        "Social media integration"
      ],
      technicalDetails:
        "Kept intentionally simple for quick delivery and easy maintenance."
    }
  }
];


export const EVENTS: EventItem[] = [
  {
    name: "Google GDC",
    location: "Jaipur",
    year: "2024",
    description: "Google Developer Conference focused on Cloud, AI, and developer tooling.",
    takeaway:
      "Gained hands-on exposure to Gemini models and Google Cloud services. This influenced my decision to use Gemini thoughtfully in WellMind Junction, focusing on privacy, scope control, and real user impact rather than demo-driven AI."
  },
  {
    name: "Startup Mahakumbh",
    location: "Delhi",
    year: "2025",
    description: "India’s largest startup ecosystem event bringing together founders, investors, and policymakers.",
    takeaway:
      "Strongly validated my 'Building for Bharat' mindset. Conversations with healthtech founders highlighted the importance of offline-first design, simple UX, and trust-driven systems for Tier-2 and Tier-3 India."
  },
  {
    name: "Bengaluru Tech Summit",
    location: "Bengaluru",
    year: "2025",
    description: "Large-scale technology and innovation summit focused on enterprise and deep-tech solutions.",
    takeaway:
      "Helped me understand the gap between impressive demos and production-grade systems. Reinforced the importance of engineering discipline, scalability, and long-term thinking while building real products."
  }
];
