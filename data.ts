
import { Experience, Project, SkillCategory, EventItem, EducationItem, Story } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com/imaryan02",
  linkedin: "https://linkedin.com/in/imaryan02",
  email: "aryan.official02@gmail.com",
  instagram: "https://instagram.com/imaryan02",
};

export const EXPERIENCE: Experience[] = [
  {
    id: "infosys",
    company: "Infosys",
    role: "System Engineer / Trainee",
    period: "2025 – Present",
    bullets: [
      "Focusing on enterprise-scale system architecture and software development best practices.",
      "Undergoing rigorous training in full-stack methodologies and cloud infrastructure."
    ]
  },
  {
    id: "amazon-ml",
    company: "Amazon ML School",
    role: "Machine Learning Trainee",
    period: "2024",
    bullets: [
      "Selected among a highly competitive applicant pool for specialized ML training.",
      "Gained hands-on experience with ML fundamentals, supervised learning, and real-world model deployment."
    ]
  },
  {
    id: "brand-innerworld",
    company: "Brand Innerworld",
    role: "Prompt Engineer",
    period: "Nov 2023 – Feb 2024",
    bullets: [
      "Architected a custom Data Analyst GPT for pharma analytics, increasing processing efficiency by 40%.",
      "Achieved 30% higher response accuracy through advanced prompt engineering techniques.",
      "Led a generative AI workshop for 50+ brand managers at Cipla."
    ]
  },
  {
    id: "glametique",
    company: "Glametique India",
    role: "Frontend Web Developer (Freelance)",
    period: "Freelance",
    bullets: [
      "Developed a responsive, high-performance beauty e-commerce interface.",
      "Optimized UX for mobile users, resulting in increased session duration."
    ]
  },
  {
    id: "ocean-biotech",
    company: "Ocean Biotech",
    role: "Web Developer",
    period: "Project",
    bullets: [
      "Built and deployed the official product website (oceanbiotech.in).",
      "Designed a clean catalog system for pharmaceutical products."
    ]
  },
  {
    id: "yuvashakti",
    company: "YuvaShakti Team Lead",
    role: "Leadership",
    period: "College",
    bullets: [
      "Led a 6-member team to Top 15 in Smart India Hackathon (SIH) 2024 internal rounds.",
      "Secured 8th position in SIH SKIT 2023 prelims, driving project strategy and execution."
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
    institution: "Delhi Public School (DPS)",
    degree: "Higher Secondary, PCM",
    period: "Apr 2017 - May 2019",
    grade: "76%"
  },
  {
    institution: "Usha Martin World School",
    degree: "High School",
    period: "Apr 2014 - Mar 2017",
    grade: "9.8 CGPA"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming",
    summary: "Core logic and algorithmic problem solving.",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "C"]
  },
  {
    title: "Frontend & UI",
    summary: "Crafting pixel-perfect, accessible digital experiences.",
    skills: ["React.js", "Tailwind CSS", "Framer Motion", "UI/UX Design", "FaceAPI.js", "Electron.js"]
  },
  {
    title: "AI & ML",
    summary: "Integrating intelligence into web applications.",
    skills: ["TensorFlow.js", "Gemini API", "LangChain", "Prompt Engineering", "RAG Architecture"]
  },
  {
    title: "Backend & Infra",
    summary: "Scalable foundations and deployment.",
    skills: ["Supabase", "GCP", "Selenium", "Git", "Docker"]
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
    tagline: "Premium Medical Portfolio for Tier-2 India",
    type: "Flagship",
    nature: "Freelance",
    date: "Jan 2025",
    links: {
      demo: "https://dramit.com", // Placeholder
      github: "https://github.com/imaryan02/dr-amit-portfolio"
    },
    imageUrl: "/images/drAmitkr.jpeg",
    tags: ["HealthTech", "Branding", "Bilingual"],
    techStack: ["React.js", "Tailwind CSS", "Supabase"],
    hook: "Premium bilingual personal branding website for a gastroenterologist, inspired by Paytm / Zomato UX, built for Tier-2 India.",
    modalContent: {
      problem: "Doctors in smaller cities (like Muzaffarpur, Patna) lack a strong, verified digital presence, leading to patient mistrust and reliance on chaotic aggregators.",
      solution: "A mobile-first, high-trust personal website featuring a digital 'Trust Card', bilingual content (Hindi/English) for accessibility, and clear clinic operational data.",
      features: [
        "Bilingual Interface (Hindi/English) for local inclusivity",
        "Digital Trust Card & Verified Credentials",
        "One-tap Appointment Booking & Location Navigation",
        "Optimized for 2G/3G networks common in Tier-2/3 regions"
      ],
      technicalDetails: "Built with React for state management of language toggles. Styled with Tailwind for rapid, mobile-first design. Supabase backend allows the clinic staff to update timings in real-time.",
      impact: "Established a verified digital identity, reducing patient inquiries about availability by 40% and building trust before the patient even enters the clinic.",
      future: "V2 roadmap includes SEO dominance for local keywords and integration with a lightweight queuing system."
    }
  },
  {
    id: "wellmind",
    title: "WellMind Junction",
    tagline: "AI-Powered Youth Mental Wellness",
    type: "Flagship",
    nature: "Personal",
    date: "Oct 2024",
    links: {
      github: "https://github.com/imaryan02/wellmind-junction"
    },
    imageUrl: "/images/wellmind.png",
    tags: ["AI", "Mental Health", "TensorFlow"],
    techStack: ["React.js", "TensorFlow.js", "Gemini API", "Supabase"],
    hook: "AI-powered mental wellness platform with real-time emotion recognition and Arogya, an AI therapist-style chatbot.",
    modalContent: {
      problem: "Mental health stigma is rampant in India, and professional therapy is often inaccessible or too expensive for students.",
      features: [
        "Real-time Facial Emotion Detection via TensorFlow.js",
        "Arogya: Empathetic AI Chatbot powered by Gemini API",
        "Stress-relief games: 'Blast the Hen' & 'FacePlay'",
        "Private User Dashboard tracking emotional trends over time"
      ],
      technicalDetails: "Utilizes browser-based machine learning (TensorFlow.js) to ensure privacy—video data never leaves the client. Gemini API is fine-tuned via system instructions to act as a supportive, non-clinical listener.",
      future: "Plans to introduce voice-based journaling analysis and vernacular language support to reach rural demographics."
    }
  },
  {
    id: "spotme",
    title: "SpotMe",
    tagline: "Privacy-First Event Photo Finder",
    type: "Flagship",
    nature: "Personal",
    date: "Dec 2024",
    links: {
      github: "https://github.com/imaryan02/spotme-faceapi"
    },
    imageUrl: "/images/spotme.png",
    tags: ["Computer Vision", "Privacy", "Offline"],
    techStack: ["React.js", "FaceAPI.js", "Local Inference"],
    hook: "Privacy-first offline photo finder for event photos (like Indian weddings), 98% accurate, works with local folders.",
    modalContent: {
      problem: "At Indian weddings and events, 10,000+ photos are clicked. Finding your own photos involves manually scrolling through gigabytes of data for hours.",
      flow: "1. Upload Event Folder (Local) -> 2. Scan User's Face -> 3. AI Filters & Returns Matches.",
      features: [
        "100% Offline Processing - No Cloud Uploads",
        "98% Accuracy on diverse Indian faces",
        "Instant ZIP download or WhatsApp sharing",
        "Zero Server Cost architecture"
      ],
      technicalDetails: "Leverages FaceAPI.js models loaded directly into the browser. Compute happens on the client device (Edge Computing), ensuring user photos are never stored on a third-party server.",
      story: "Built out of personal frustration after waiting weeks for wedding photos. The chaotic scale of Indian events needed a technological solution."
    }
  },
  {
    id: "jarvis",
    title: "JARVIS Assistant",
    tagline: "Voice-Activated Web Navigator",
    type: "Advanced",
    nature: "R&D",
    date: "Aug 2024",
    links: {
      github: "https://github.com/imaryan02/jarvis-assistant"
    },
    imageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80",
    tags: ["Voice AI", "Automation", "Gemini"],
    techStack: ["Gemini LLM", "Selenium", "Electron.js"],
    hook: "Voice-activated assistant inspired by Iron Man. Handles hands-free browsing and Spotify control.",
    modalContent: {
      problem: "Keyboard interaction is slow for multitasking.",
      features: ["Wake-word activation ('Jarvis')", "Real-time web research summaries", "Spotify playback control via voice"],
      technicalDetails: "Electron.js bridge allows the React frontend to execute system-level scripts via Selenium. Gemini processes natural language into actionable commands."
    }
  },
  {
    id: "copypaste",
    title: "Copy Paste Guru",
    tagline: "Ephemeral Real-Time Sharing",
    type: "Advanced",
    nature: "Personal",
    date: "July 2024",
    links: {
      demo: "https://copypaste.guru"
    },
    imageUrl: "/images/copypaste.png",
    tags: ["Productivity", "Real-Time"],
    techStack: ["React", "Supabase Realtime"],
    hook: "Room-based, real-time note sharing for quick collaboration without login fatigue.",
    modalContent: {
      problem: "Sharing a snippet of code or text between devices usually involves emailing oneself or using bloated apps.",
      features: ["Auto-expiring rooms (10 mins)", "Instant sync across devices", "No signup required"],
      technicalDetails: "Uses Supabase Realtime subscriptions to broadcast keystrokes instantly to all connected clients in a specific room ID."
    }
  },
  {
    id: "pharma-gpt",
    title: "Pharma Data GPT",
    tagline: "Custom Analytics LLM",
    type: "Advanced",
    nature: "Client Work",
    date: "Dec 2023",
    links: {},
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2187d80aeff2?auto=format&fit=crop&q=80",
    tags: ["Prompt Engineering", "Analytics"],
    techStack: ["GPT-4", "Python"],
    hook: "Custom GPT built for Brand Innerworld to analyze complex pharmaceutical datasets.",
    modalContent: {
      problem: "Brand managers drowned in spreadsheets and struggled to extract quick insights.",
      features: ["Natural language query for data", "40% faster analysis", "Context-aware answers"],
      technicalDetails: "Heavily optimized system prompts ensuring strict adherence to medical compliance and data accuracy."
    }
  },
  {
    id: "glametique",
    title: "Glametique India",
    tagline: "Beauty E-commerce UI",
    type: "Client",
    nature: "Freelance",
    date: "June 2023",
    links: {},
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&q=80",
    tags: ["Frontend", "Design"],
    techStack: ["HTML", "CSS", "JS"],
    hook: "Responsive beauty website focusing on aesthetic product displays.",
    modalContent: {
      problem: "Client needed a visual upgrade to compete in the crowded beauty market.",
      features: ["Mobile-first layout", "High-fidelity imagery", "Fast load times"],
      technicalDetails: "Custom CSS architecture without heavy frameworks to ensure maximum performance on low-end devices."
    }
  },
  {
    id: "ocean",
    title: "Ocean Biotech",
    tagline: "Pharma Portfolio",
    type: "Client",
    nature: "Client Work",
    date: "May 2023",
    links: {
      demo: "https://oceanbiotech.in"
    },
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80",
    tags: ["Corporate", "Web"],
    techStack: ["HTML", "CSS", "JS"],
    hook: "Official product website for a biotech firm showcasing medicines.",
    modalContent: {
      problem: "Legacy offline catalog restricted business reach.",
      features: ["Digital Medicine Catalog", "Corporate Profile", "Contact Integration"],
      technicalDetails: "Static site generation approach for reliability and SEO."
    }
  },
  {
    id: "chaiwale",
    title: "ChaiWale",
    tagline: "Hyperlocal Cafe Site",
    type: "Client",
    nature: "Client Work",
    date: "2022",
    links: {},
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80",
    tags: ["Local Business", "Web"],
    techStack: ["HTML", "CSS", "JS"],
    hook: "Where it started—helping a local cafe business go digital.",
    modalContent: {
      problem: "Local cafe had no way to showcase menu to digital-first students.",
      features: ["Digital Menu", "Vibrant Aesthetic", "Social Media Integration"],
      technicalDetails: "Simple, robust HTML/CSS structure tailored for a quick launch."
    }
  }
];

export const EVENTS: EventItem[] = [
  {
    name: "Google GDC",
    location: "Jaipur",
    year: "2024",
    description: "Google Developer Conference focusing on Cloud and AI.",
    takeaway: "Gained insights into the latest Gemini models and Google Cloud infrastructure, influencing the architecture of WellMind Junction."
  },
  {
    name: "Startup Mahakumbh",
    location: "Delhi",
    year: "2025",
    description: "India's largest gathering of startups and investors.",
    takeaway: "Validated the 'Building for Bharat' thesis. Connected with healthtech founders who emphasized the need for offline-first capabilities in Tier-2 India."
  },
  {
    name: "Bengaluru Tech Summit",
    location: "Bengaluru",
    year: "2025",
    description: "Asia's leading technology innovation summit.",
    takeaway: "Deep dive into Enterprise AI. Realized the gap between 'cool demos' and 'scalable products', reshaping my approach to engineering discipline."
  }
];