
import type { Project, BlogPost, ResearchProject, Award, TimelineEvent, Education, Skill, Publication, Certification, InvestmentOpportunity } from './types';
import { Briefcase, BookOpen, Users, GraduationCap, Award as AwardIcon, CheckCircle, BrainCircuit, MessageSquare, TrendingUp, ShoppingBag, BarChart3, Mic, FileText, ClipboardCheck, Layers, Handshake, Lightbulb, Scale } from 'lucide-react';

export const personalInfo = {
  name: "MD. SABBIR RAHMAN AKASH",
  title: "Engineer | Researcher | Business Strategist",
  profilePicture: "https://i.imgur.com/0HemqBs.jpeg",
  bio: "A dynamic professional blending technical precision with strategic business acumen. As an Engineer and Researcher, I specialize in AI-driven industrial automation and sustainable engineering solutions. Simultaneously, as a Business Strategist, I have successfully led merchandising and business development for global fashion giants like Calvin Klein and Tommy Hilfiger. My expertise lies in bridging the gap between complex technical innovations and commercial viability. Whether optimizing supply chains, negotiating high-stakes contracts, or deploying Computer Vision models, I deliver results that drive growth, efficiency, and sustainability. I am currently open to investment partnerships and leadership roles that demand a fusion of analytical rigor and executive vision.",
  contact: {
    email: "sabbir4research@gmail.com",
    phone: "+880 133 26 53 669",
    address: "Dhaka, Bangladesh",
  },
  socials: {
    github: "https://github.com/sabbir-the-faaz",
    linkedin: "https://www.linkedin.com/in/md-sabbir-rahman-akash-78a70716b/",
    researchGate: "https://www.researchgate.net/profile/Md-Sabbir-Rahman-Akash",
    youtube: "https://www.youtube.com/@parallelxacademia8622",
    facebook: "https://www.facebook.com/parallelx.academia"
  },
};

export const technicalSkills: Skill[] = [
  { name: 'Computer Vision (YOLOv8, Detectron2)', level: 95 },
  { name: 'Python (PyTorch, OpenCV, Pandas)', level: 95 },
  { name: 'NVIDIA Jetson Nano & Edge AI', level: 85 },
  { name: 'Data Structures & Algorithms', level: 90 },
  { name: 'C / C++ Programming', level: 80 },
  { name: 'System Design & Implementation', level: 85 },
  { name: 'SQL & Database Management', level: 75 },
  { name: 'Web Development (React/Node)', level: 70 },
];

export const professionalSkills: Skill[] = [
  { name: 'Business Development & Strategy', level: 98, icon: TrendingUp },
  { name: 'Business Communication & Negotiation', level: 95, icon: Handshake },
  { name: 'Merchandising (Product Lifecycle)', level: 92, icon: ShoppingBag },
  { name: 'Advanced Excel & Google Sheets Analytics', level: 98, icon: BarChart3 },
  { name: 'Strategic Leadership & Team Management', level: 95, icon: Users },
  { name: 'Public Speaking & Presentation', level: 90, icon: Mic },
  { name: 'Market Research & Analysis', level: 88, icon: Lightbulb },
  { name: 'Project Management', level: 90, icon: ClipboardCheck },
];

export const timelineEvents: TimelineEvent[] = [
  {
    type: 'Career',
    icon: TrendingUp,
    title: 'Investment Acquisition Engineer',
    subtitle: 'Mart Builders',
    duration: 'January 2025 - Present',
    description: 'Spearheading investment acquisition initiatives for government and private engineering contracts. Managing the Mudarabah investment portfolio, ensuring Shariah compliance, and maintaining transparent investor relations for high-value projects.'
  },
  {
    type: 'Teaching',
    icon: BookOpen,
    title: 'Mathematics & Computer Science Lecturer',
    subtitle: 'East West School & College, Dhaka',
    duration: 'June 2025 - Continuing',
    description: 'Teaching Edexcel O Level & A Level Computer Science and Mathematics. Designing curriculum-aligned lessons on algorithms, Python, and system fundamentals.'
  },
  {
    type: 'Career',
    icon: Briefcase,
    title: 'Computer Vision Engineer',
    subtitle: 'Mart Builders, Sylhet',
    duration: 'June 2024 - Dec 2024',
    description: 'Researched and deployed computer vision models (YOLOv8, Detectron2) on Jetson Nano for real-time gas pipeline defect detection. Developed custom datasets and trained models to achieve high accuracy.'
  },
  {
    type: 'Career',
    icon: Briefcase,
    title: 'Junior Officer - Business Development',
    subtitle: 'Picard (A Reputed Leather Bag manufacturing company)',
    duration: 'Jan 2025 - June 2025',
    description: 'Worked on leather bag development for Calvin Klein (CK) and Tommy Hilfiger (TH), communicating with buyers and developing prototypes. Presented tech-driven process improvement ideas.'
  },
  {
    type: 'Research',
    icon: BrainCircuit,
    title: 'Undergraduate Researcher',
    subtitle: 'Khulna University of Engineering & Technology (KUET)',
    duration: '2020 - 2024',
    description: 'Conducted thesis on "Development of an Automated Grading System for Finished Leather" using Detectron2 and YOLOv8. Also contributed to multiple international journal and conference publications on sustainable engineering solutions.'
  },
  {
    type: 'Teaching',
    icon: BookOpen,
    title: 'Founder & Teacher',
    subtitle: 'ParallelX Academia, Khulna',
    duration: 'May 2020 - Present',
    description: 'Founded an online STEM-focused organization. Taught mathematics, programming, and science, creating opportunities for others to share their knowledge.'
  },
  {
    type: 'Leadership',
    icon: Users,
    title: 'Founder & President',
    subtitle: 'Neuronite, KUET, Khulna, Bangladesh',
    duration: 'May 2023 - March 2024',
    description: 'Established a club, and led a 40-member executive team, impacting the lives of thousands. Led 9 programs in 1 year focusing on AI, Machine Learning, and leadership. Also organized social welfare activities.',
    image: 'https://i.imgur.com/wYKiVUA.png'
  },
  {
    type: 'Leadership',
    icon: Users,
    title: 'Senior Executives of IT & Resources',
    subtitle: 'KUET Career Club, Khulna, Bangladesh',
    duration: 'March 2022 - March 2023',
    description: 'Hosted & organized 4 career-oriented podcasts impacting thousands. Organized 13 programs in 1 year, leading the junior executive panel for IT & Resources.'
  },
  {
    type: 'Leadership',
    icon: Users,
    title: 'Junior Executives of IT & Resources',
    subtitle: 'KUET Career Club, Khulna, Bangladesh',
    duration: 'February 2020 - March 2022',
    description: 'Supported club programs through execution, creative design, and video editing, while adhering to senior leadership guidance.'
  },
  {
    type: 'Leadership',
    icon: Users,
    title: 'Assistant Training Officer',
    subtitle: 'Prism, KUET, Khulna, Bangladesh',
    duration: 'April 2022- March 2023',
    description: 'Developed questions for evaluation tests of different workshops related to data analysis, Excel, etc. Monitored the quality of classes and class materials.'
  },
  {
    type: 'Leadership',
    icon: Users,
    title: 'IT & Content Creation Officer',
    subtitle: 'KUET Robotics & IoT Club, Khulna, Bangladesh',
    duration: 'March 2022 - 2024',
    description: 'Used Photoshop, Premier Pro, Illustrator, Canva, etc. in order to create different content. Provided technical support during workshops and events.'
  }
];

export const education: Education[] = [
  {
    institution: 'Khulna University of Engineering & Technology (KUET)',
    degree: 'B.Sc in Leather Engineering (CGPA 3.27 out of 4.00)',
    duration: '2020 - 2024',
    details: [
      'Medium of Education: English.',
      'Participated in four semesters of undergraduate research, resulting in a thesis, 3 conference publications, and 1 journal publication.'
    ],
    thesisTitle: 'Development of an Automated Grading System for Finished Leather',
    images: [
      'https://picsum.photos/seed/kuet1/800/600',
      'https://picsum.photos/seed/kuet2/800/600',
      'https://picsum.photos/seed/kuet3/800/600',
      'https://picsum.photos/seed/kuet4/800/600',
      'https://picsum.photos/seed/kuet5/800/600',
      'https://picsum.photos/seed/kuet6/800/600'
    ]
  }
];

export const certifications: Certification[] = [
    { name: 'Google Data Analytics Professional Certificate', issuer: 'Google', date: '9 months' },
    { name: 'CSE Fundamentals with Phitron', issuer: 'Phitron (Online Programming Bootcamp)', date: 'N/A' },
    { name: 'Introduction to Artificial Intelligence (AI)', issuer: 'Coursera', date: '4 hours' },
    { name: 'Introduction to Python', issuer: 'DataCamp', date: '4 hours' },
    { name: 'Data Science for Everyone', issuer: 'DataCamp', date: '2 hours' },
];

export const projects: Project[] = [
  {
    slug: 'gas-pipeline-defect-detection',
    title: 'Real-Time Gas Pipeline Defect Detection',
    category: 'Computer Vision',
    thumbnail: 'https://picsum.photos/seed/pipeline/600/400',
    description: 'Deployed YOLOv8 and Detectron2 on Jetson Nano for real-time gas pipeline defect detection, integrated into a Mars rover-inspired robot.',
    longDescription: 'As a Computer Vision Engineer at Mart Builders, I led the research and deployment of computer vision models for industrial safety. This involved developing custom datasets, training models for high-accuracy crack detection, and integrating the AI system into a robotic platform to apply computational techniques to real-world problems.',
    images: ['https://picsum.photos/seed/pipeline-detail1/800/600', 'https://picsum.photos/seed/pipeline-detail2/800/600'],
    technologies: ['Python', 'PyTorch', 'YOLOv8', 'Detectron2', 'Jetson Nano', 'OpenCV'],
    repoLink: '#'
  },
  {
    slug: 'automated-leather-grading',
    title: 'Automated Grading System for Finished Leather',
    category: 'Machine Learning',
    thumbnail: 'https://picsum.photos/seed/leather/600/400',
    description: 'My undergraduate thesis, this system employs Detectron2 for defect segmentation and YOLOv8 for hair root detection, achieving a mAP50 of 0.995.',
    longDescription: 'This project aimed to automate the quality control process in the leather industry. It utilizes Detectron2 with ResNet50 for instance segmentation of defects and YOLOv8 to detect subtle imperfections like hair roots. The models achieved high precision (0.928) and recall (0.977). Data was collected from Apex Footwear Limited, and results were analyzed against original samples.',
    images: ['https://picsum.photos/seed/leather-detail1/800/600', 'https://picsum.photos/seed/leather-detail2/800/600'],
    technologies: ['Python', 'Detectron2', 'YOLOv8', 'ResNet50', 'Computer Vision'],
    repoLink: '#'
  },
  {
    slug: 'ride-sharing-system',
    title: 'Ride-Sharing System',
    category: 'Software Engineering',
    thumbnail: 'https://picsum.photos/seed/ride/600/400',
    description: 'A Python-based Object-Oriented Programming (OOP) system for user management, ride matching, and payment processing.',
    longDescription: 'Completed as part of my coursework, this project demonstrates core software engineering principles. It is a Python-based system built with OOP concepts for handling user registration, matching riders with drivers, and simulating payment processing.',
    images: ['https://picsum.photos/seed/ride-detail1/800/600'],
    technologies: ['Python', 'OOP', 'System Design'],
    liveLink: '#',
    repoLink: '#'
  },
  {
    slug: 'restaurant-management-system',
    title: 'Restaurant Management System',
    category: 'Software Engineering',
    thumbnail: 'https://picsum.photos/seed/restaurant/600/400',
    description: 'A Python-based system for menu handling and order processing in a restaurant environment.',
    longDescription: 'Another coursework project focused on practical application of software engineering. This Python system provides functionalities for managing a restaurant\'s menu and processing customer orders, built with clean, object-oriented code.',
    images: ['https://picsum.photos/seed/restaurant-detail1/800/600'],
    technologies: ['Python', 'OOP', 'System Design'],
    liveLink: '#',
    repoLink: '#'
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'the-rise-of-yolov8',
    title: 'The Rise of YOLOv8: A New Era in Real-Time Object Detection',
    date: '2023-10-26',
    author: 'MD. SABBIR RAHMAN AKASH',
    excerpt: 'YOLOv8 has taken the computer vision world by storm. In this article, we dive deep into its architecture, performance improvements, and how it sets a new benchmark for real-time object detection.',
    content: `
## Introduction
Object detection has been one of the most significant fields in computer vision, and the YOLO (You Only Look Once) family of models has consistently been at the forefront of real-time applications. The latest iteration, YOLOv8, developed by Ultralytics, continues this legacy by introducing a host of improvements that make it faster, more accurate, and easier to use than ever before.

## Key Architectural Changes
Unlike its predecessors, YOLOv8 is anchor-free. This means it directly predicts the center of an object rather than relying on predefined anchor boxes, which simplifies the training process and improves accuracy on objects with varied aspect ratios. It also introduces a new backbone network and a new C2f module in the neck, which enhances feature fusion.

## Performance Gains
YOLOv8 comes in several sizes, from the nano version for edge devices to the extra-large version for cloud-based applications. On the COCO dataset, YOLOv8 models outperform previous versions like YOLOv5 and YOLOv7 across all scales, achieving better mAP (mean Average Precision) scores at similar or faster inference speeds.

### Example Code Snippet
\`\`\`python
from ultralytics import YOLO

# Load a pretrained model
model = YOLO('yolov8n.pt')

# Run inference on an image
results = model('path/to/image.jpg')

# View results
for r in results:
    print(r.boxes)
\`\`\`

## Conclusion
YOLOv8 is a powerful and flexible framework that is suitable for a wide range of object detection tasks. Its user-friendly API, combined with state-of-the-art performance, makes it an excellent choice for both researchers and developers. As the field continues to evolve, YOLOv8 has firmly established itself as a key player.
    `,
    featuredImage: 'https://picsum.photos/seed/yolo/800/400',
    category: 'Computer Vision'
  },
  {
    slug: 'sustainable-technology',
    title: 'Sustainable Technology: A Path to a Greener Future',
    date: '2023-11-15',
    author: 'MD. SABBIR RAHMAN AKASH',
    excerpt: 'Technology and sustainability are often seen as opposing forces. However, a new wave of "Green Tech" is proving that innovation can be the key to solving our biggest environmental challenges.',
    content: `
## The Need for Green Tech
As the world grapples with climate change, pollution, and resource depletion, the need for sustainable solutions has never been more urgent. The tech industry, with its massive energy consumption and electronic waste, has a significant role to play. Sustainable technology, or Green Tech, aims to mitigate this impact by creating products and services that are environmentally friendly.

## Areas of Innovation
1.  **Renewable Energy:** AI-powered smart grids that optimize energy distribution from solar and wind sources.
2.  **Circular Economy:** Developing devices that are easier to repair, upgrade, and recycle, reducing e-waste.
3.  **Sustainable AI:** Creating more energy-efficient machine learning models and data centers.
4.  **Precision Agriculture:** Using IoT sensors and drones to reduce water and pesticide usage while maximizing crop yields.

## A Personal Perspective
In my research on using industrial byproducts for eco-friendly materials, I've seen firsthand how scientific innovation can turn waste into value. The same principles can be applied to technology. By designing with sustainability in mind from the outset, we can build a tech ecosystem that supports both human progress and planetary health.

## Conclusion
The path to a greener future requires a fundamental shift in how we design, build, and consume technology. It's a challenge that requires collaboration between engineers, policymakers, and consumers, but it's a challenge we must meet.
    `,
    featuredImage: 'https://picsum.photos/seed/green-tech/800/400',
    category: 'Technology'
  }
];

export const researchProjects: ResearchProject[] = [
    {
        slug: 'leather-grading-thesis',
        title: 'THESIS: Development of an Automated Grading System for Finished Leather',
        institution: 'Khulna University of Engineering & Technology (KUET)',
        duration: '2020-2024',
        supervisor: 'Prof. Dr. Md. Abul Hashem',
        description: 'Employs Detectron2 with resnet50 for defect instance segmentation and YOLOv8 for hair roots, achieving Precision:0.928, Recall: 0.977, mAP50: 0.995.',
        longDescription: 'This undergraduate thesis project developed a novel system for automatically grading finished leather. It involved creating a custom dataset, training a VGG-16 based convolutional neural network, and achieving over 95% accuracy in classifying leather into four distinct grades. The work was published and presented at an international conference.',
        image: 'https://picsum.photos/seed/leather-tech/800/400',
        images: ['https://picsum.photos/seed/leather-tech-detail1/800/600', 'https://picsum.photos/seed/leather-tech-detail2/800/600'],
    },
    {
        slug: 'compost-technique-research',
        title: 'International Journal: Atypical co-composting technique of managing tannery limed fleshing',
        institution: 'Md. Abul Hashem\'s Lab',
        duration: 'Published 2024',
        supervisor: 'Prof. Dr. Md. Abul Hashem',
        description: 'Developed an atypical co-composting technique to transform tannery limed fleshing into nutrient-rich compost, reducing solid waste pollution.',
        longDescription: 'This research presents a new co-composting method that effectively breaks down harmful solid waste from the leather tanning process. By optimizing the mix of waste materials and microbial activity, the technique reduces environmental impact and produces a safe, usable compost.',
        image: 'https://picsum.photos/seed/compost-science/800/400',
        images: ['https://picsum.photos/seed/compost-science-detail1/800/600'],
    },
    {
        slug: 'goatskin-preservation-research',
        title: 'International Conference: Bagasse for goatskin preservation to reduce chloride in soaking operation',
        institution: 'Research Project',
        duration: '2020',
        supervisor: 'Research Team',
        description: 'Conducted research on sustainable goat skin preservation methods using plant-based alternatives to reduce environmental impact.',
        longDescription: 'This study explored the use of bagasse, a byproduct of sugarcane processing, as a natural and sustainable agent for preserving goatskin. The method aims to replace or reduce the reliance on salt-based preservation, which has a significant negative environmental footprint.',
        image: 'https://i.imgur.com/cN9pjkI.png'
    },
    {
        slug: 'chromium-adsorption-research',
        title: 'International Conference: Adsorption of chromium from tannery wastewater on russet potato peel charcoal',
        institution: 'Environmental Science Research',
        duration: '2021',
        supervisor: 'Lab Team',
        description: 'Investigated chromium adsorption from tannery wastewater using russet potato peel charcoal, achieving 98.9% chromium removal.',
        longDescription: 'This project focused on an eco-friendly adsorbent to remove toxic chromium from industrial wastewater. The research involved optimizing parameters like pH, contact time, and dose to meet discharge limits. Published in Proceedings of ICSTB-2021, Dhaka, Bangladesh.',
        image: 'https://picsum.photos/seed/chemistry-water/800/400',
        images: ['https://i.imgur.com/9KAJR8t.png', 'https://i.imgur.com/Qgobdft.png', 'https://i.imgur.com/1JeMFXz.png'],
    },
];

export const awards: Award[] = [
    {
        slug: 'winner-best-poster',
        title: 'Winner and Best Poster Presentation Award for Outstanding Research',
        organization: 'KUET Leather Engineering Seminar Series 2023',
        date: 'September 2023',
        description: 'Awarded for research on "Biodegradable Solid Waste (Orange Peel) Preserved Goat Skin in the Production of Fire Resistance Automobile Seat Leather".',
        longDescription: 'As Team Leader, I led our team to win the top prize for our innovative research. This award recognized the project for its significant potential impact and the clarity and quality of its presentation.',
        image: 'https://i.imgur.com/NZ4Z7zt.png',
        images: ['https://picsum.photos/seed/award1-detail1/800/600', 'https://picsum.photos/seed/award1-detail2/800/600'],
    },
    {
        slug: 'first-runners-up-olympiad',
        title: 'First Runners Up, Red & White Innovation Olympiad 1.0',
        organization: 'Red & White Innovations (National Level Competition)',
        date: 'January 2021',
        description: 'Secured second place for a Health Based Case Study Competition focused on brainstorming and researching for new ideas.',
        longDescription: 'Our team developed a concept for a low-cost, biodegradable material from industrial waste. The project was judged on its feasibility, market potential, and environmental impact. We presented a detailed business plan and a prototype to a panel of industry experts.',
        image: 'https://picsum.photos/seed/award2/400/200',
        images: ['https://picsum.photos/seed/award2-detail1/800/600'],
    },
    {
        slug: 'second-runners-up-redesign',
        title: 'Second Runners Up, Redesign 2020',
        organization: 'IIT, University of Dhaka (National Level Competition)',
        date: 'December 2020',
        description: 'Achieved third place in an IT-based Case Study Competition focused on creative solutions for project management software.',
        longDescription: 'The challenge was to redesign a common household item to be more sustainable and user-friendly. Our team redesigned a water purifier to use less plastic, incorporate recyclable filters, and feature a smart monitoring system.',
        image: 'https://picsum.photos/seed/award3/400/200',
        images: ['https://picsum.photos/seed/award3-detail1/800/600', 'https://picsum.photos/seed/award3-detail2/800/600'],
    },
    {
        slug: 'biz-bash-case-study',
        title: '6th Position, Biz Bash Case Study',
        organization: 'KUET Career Club, Khulna, Bangladesh',
        date: 'May 2020',
        description: 'Placed 6th in a business case study competition to research and identify a new location for a new business.',
        longDescription: 'Analyzed a complex business case and presented a strategic plan. The solution focused on market repositioning, product diversification, and operational efficiency improvements.',
        image: 'https://i.imgur.com/f3YBqjQ.png',
    },
    {
        slug: 'technical-scholarship',
        title: 'Technical Scholarship',
        organization: 'Khulna University of Engineering & Technology',
        date: '2019-2024',
        description: 'Awarded a scholarship for 4 consecutive years for academic excellence.',
        longDescription: 'This merit-based scholarship was awarded each year based on maintaining a high GPA and academic standing within the department.',
        image: 'https://picsum.photos/seed/award5/400/200',
    },
];

export const publications: Publication[] = [
    {
        type: 'Journal',
        title: 'Atypical co-composting technique of managing tannery limed fleshing',
        details: 'Hashem, M. A., Paul, H., Akash, M. S. R., Mim, S., & Zahin, M. E. H. (2024). Waste Management Bulletin, 1(4), 23-29.',
        link: 'https://doi.org/10.1016/j.wmb.2023.08.003'
    },
    {
        type: 'Conference',
        title: 'Laboratory scale brick production from leather buffing dust to manage solid waste in tannery',
        details: 'Hashem, M. A., Ahmed, T., Fuad, M. M., & Akash, M. S. R. (2023). WasteSafe 2023, Khulna, Bangladesh, February 25-26.',
    },
    {
        type: 'Conference',
        title: 'Adsorption of chromium from tannery wastewater on russet potato peel charcoal',
        details: 'Paul, S., Milu, M. S., Hashem, M. A., & Akash, M. S. R. (2021). ICSTB-2021, Dhaka, Bangladesh, March 11-13.',
    },
    {
        type: 'Poster Presentation',
        title: 'Designed air-technology-based autofitting footwear with eco-friendly composite sole',
        details: 'Akash, M.S.R., et al. (2023). Presented at 4th Annual Seminar on Leather Sector, KUET.',
    },
    {
        type: 'Poster Presentation',
        title: 'Developed fire-resistant automobile seat leather using biodegradable orange peel-preserved goat skin',
        details: 'Akash, M.S.R., et al. (2023). Presented at 4th Annual Seminar on Leather Sector, KUET.',
    }
];

export const youtubeChannel = {
  name: "ParallelX Academia",
  description: "An online organization that focuses on the promotion of knowledge particularly on STEM; Acted as a teacher to teach mathematics, programming and Science. Created an opportunity for others to share their knowledge with the world.",
  featuredVideoUrl: "https://www.youtube-nocookie.com/embed/K8s1DzGeDj0",
  featuredVideoThumbnail: "https://i.ytimg.com/vi/K8s1DzGeDj0/hqdefault.jpg"
};

export const investmentOpportunities: InvestmentOpportunity[] = [
  {
    slug: 'emergency-electrical-repair-sylhet',
    title: 'Emergency Electrical Repair Works',
    category: 'Govt. Project',
    status: 'Open',
    model: 'Mudarabah',
    roi: '28% of Profit',
    minInvestment: 'BDT 100,000',
    duration: 'Return: 30 Jan 2026',
    riskLevel: 'Low',
    contractValue: 'BDT 189,773.90',
    estimatedProfit: 'BDT 25,000 – 35,000',
    description: 'Emergency Electrical Repair Works for Cyber Tribunal & Metropolitan Sessions Judge Court, Sylhet under Mart Builders.',
    longDescription: `
We invite you to join us in a Shariah-compliant business opportunity under the **Mudarabah Islamic Investment Model**.

**Project Overview:**
*   **Project Name:** Emergency Electrical Repair Works – Cyber Tribunal & Metropolitan Sessions Judge Court, Sylhet
*   **Contract Value:** BDT 189,773.90
*   **Required Capital:** BDT 100,000
*   **Return Date:** 30 January 2026

**Financial Projections:**
*   **Estimated Profit:** BDT 25,000 – 35,000
*   **Profit Sharing (No cap):** If profit >= 35,000 → Investor gets 28% of profit (Approx. BDT 9,800)

**Islamic Compliance:**
*   No fixed or guaranteed return.
*   Profit shared as per actual performance.
*   Loss borne by investor unless caused by negligence.
*   Fully based on Mudarabah principles (no riba, no gharar).

**Why this investment is low-risk:**
*   ✔️ Government-issued NOA (Notice of Award)
*   ✔️ Short project duration
*   ✔️ Full transparency in expenses & documentation

If you’d like to participate or need more information, feel free to contact us.
    `,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
  }
];
