
import type { Project, BlogPost, ResearchProject, Award, TimelineEvent, Education, Skill, Publication, Certification } from './types';
import { Briefcase, BookOpen, Users, GraduationCap, Award as AwardIcon, CheckCircle } from 'lucide-react';

export const personalInfo = {
  name: "MD. SABBIR RAHMAN AKASH",
  title: "Engineer | Researcher | Business Development Strategist",
  profilePicture: "https://i.imgur.com/0HemqBs.jpeg",
  bio: `I'm a passionate Software Engineer and Researcher with a strong background in Computer Science and Engineering. My work focuses on creating innovative solutions using Machine Learning, Computer Vision, and Full-Stack Web Development. I thrive on solving complex problems and am dedicated to continuous learning and pushing the boundaries of technology. With experience leading teams and contributing to significant research projects, I am eager to apply my skills to impactful and challenging opportunities.`,
  contact: {
    email: "sabbir.akash@example.com",
    phone: "+1 (555) 123-4567",
    address: "Khulna, Bangladesh",
  },
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
};

export const skills: Skill[] = [
  { name: 'JavaScript / TypeScript', level: 95 },
  { name: 'React / Next.js', level: 90 },
  { name: 'Node.js / Express', level: 85 },
  { name: 'Python', level: 90 },
  { name: 'TensorFlow / PyTorch', level: 80 },
  { name: 'Computer Vision (OpenCV)', level: 85 },
  { name: 'MongoDB / SQL', level: 75 },
  { name: 'Docker / CI/CD', level: 70 },
];

export const timelineEvents: TimelineEvent[] = [
  {
    type: 'Career',
    icon: Briefcase,
    title: 'Software Engineer',
    subtitle: 'Tech Solutions Inc.',
    duration: '2022 - Present',
    description: 'Developed and maintained full-stack web applications, focusing on scalable backend services and responsive user interfaces. Led a project to integrate a machine learning model for real-time data analysis.'
  },
  {
    type: 'Teaching',
    icon: BookOpen,
    title: 'Teaching Assistant',
    subtitle: 'Khulna University of Engineering & Technology',
    duration: '2020 - 2021',
    description: 'Assisted in teaching undergraduate courses on Data Structures and Algorithms. Conducted lab sessions and graded assignments for over 100 students.'
  },
  {
    type: 'Leadership',
    icon: Users,
    title: 'Founder & President',
    subtitle: 'Neuronite, KUET',
    duration: '2019 - 2021',
    description: 'Founded and led a student organization focused on AI and robotics. Organized workshops, competitions, and seminars, growing the community to over 200 active members.',
    image: 'https://i.imgur.com/wYKiVUA.png'
  },
];

export const education: Education[] = [
  {
    institution: 'Khulna University of Engineering & Technology (KUET)',
    degree: 'Bachelor of Science in Computer Science and Engineering',
    duration: '2017 - 2021',
    details: [
      'Graduated with high honors, focusing on Artificial Intelligence and Software Engineering.',
      'Active member of the university programming club.'
    ],
    thesisTitle: 'Real-Time Gas Pipeline Defect Detection using Deep Learning',
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
    { name: 'Deep Learning Specialization', issuer: 'Coursera (deeplearning.ai)', date: '2021' },
    { name: 'TensorFlow Developer Certificate', issuer: 'Google', date: '2021' },
    { name: 'Certified Kubernetes Application Developer (CKAD)', issuer: 'The Linux Foundation', date: '2022' },
];


export const projects: Project[] = [
  {
    slug: 'automated-leather-grading',
    title: 'Automated Grading System for Finished Leather',
    category: 'Machine Learning',
    thumbnail: 'https://picsum.photos/seed/leather/600/400',
    description: 'A computer vision-based system to automatically classify the quality of finished leather, improving efficiency and consistency in the tanning industry.',
    longDescription: 'This project utilizes advanced image processing and deep learning techniques to analyze leather surfaces for defects. By training a convolutional neural network (CNN) on a large dataset of leather images, the system can accurately grade leather into multiple quality categories, significantly reducing manual labor and human error. The system is designed to be integrated into existing production lines.',
    images: ['https://picsum.photos/seed/leather-detail1/800/600', 'https://picsum.photos/seed/leather-detail2/800/600'],
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'React'],
    liveLink: '#',
    repoLink: '#'
  },
  {
    slug: 'gas-pipeline-defect-detection',
    title: 'Real-Time Gas Pipeline Defect Detection',
    category: 'Computer Vision',
    thumbnail: 'https://picsum.photos/seed/pipeline/600/400',
    description: 'A real-time system for detecting defects in gas pipelines using camera-equipped robots and deep learning models.',
    longDescription: 'This project aims to enhance safety and maintenance efficiency in the gas industry. A custom-trained YOLOv8 model is deployed on an edge device attached to a pipeline inspection robot. The system processes video streams in real-time to identify and locate defects such as corrosion, cracks, and leaks, alerting operators immediately.',
    images: ['https://picsum.photos/seed/pipeline-detail1/800/600', 'https://picsum.photos/seed/pipeline-detail2/800/600'],
    technologies: ['Python', 'PyTorch', 'YOLOv8', 'ROS', 'OpenCV'],
    repoLink: '#'
  },
  {
    slug: 'ride-sharing-system',
    title: 'Ride-Sharing System',
    category: 'Web Development',
    thumbnail: 'https://picsum.photos/seed/ride/600/400',
    description: 'A full-stack ride-sharing web application with real-time geolocation tracking, user authentication, and a payment gateway.',
    longDescription: 'A comprehensive MERN stack application that mimics the functionality of popular ride-sharing services. It features user and driver roles, real-time map integration using Mapbox, WebSocket communication for location updates, secure authentication with JWT, and payment processing with Stripe.',
    images: ['https://picsum.photos/seed/ride-detail1/800/600'],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSocket', 'Stripe API'],
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
        slug: 'leather-grading-research',
        title: 'Automated Grading System for Finished Leather using Image Processing',
        institution: 'Khulna University of Engineering & Technology',
        duration: '2020-2021',
        supervisor: 'Dr. John Doe',
        description: 'Pioneering research on applying CNNs for quality control in the leather industry.',
        longDescription: 'This undergraduate thesis project developed a novel system for automatically grading finished leather. It involved creating a custom dataset, training a VGG-16 based convolutional neural network, and achieving over 95% accuracy in classifying leather into four distinct grades. The work was published and presented at an international conference.',
        image: 'https://picsum.photos/seed/leather-tech/800/400',
        images: ['https://picsum.photos/seed/leather-tech-detail1/800/600', 'https://picsum.photos/seed/leather-tech-detail2/800/600'],
    },
    {
        slug: 'pipeline-defect-detection-research',
        title: 'Real-Time Gas Pipeline Defect Detection using Computer Vision',
        institution: 'Independent Research',
        duration: '2021',
        supervisor: 'N/A',
        description: 'An independent project focusing on the practical application of YOLO models for industrial safety.',
        longDescription: 'This research focused on optimizing a YOLOv8 model for deployment on edge devices for real-time video analysis. The project addressed challenges like varying light conditions and motion blur. The resulting system demonstrated high-speed, accurate defect detection capabilities, which was documented in a technical report and shared as an open-source project.',
        image: 'https://picsum.photos/seed/pipeline-cv/800/400',
        images: ['https://picsum.photos/seed/pipeline-cv-detail1/800/600'],
        videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4',
    },
    {
        slug: 'compost-technique-research',
        title: 'Atypical co-composting technique for degrading tannery solid waste',
        institution: 'Journal of Environmental Management',
        duration: 'Published 2022',
        supervisor: 'Multiple Authors',
        description: 'Investigating a novel composting method to safely degrade solid waste from tanneries.',
        longDescription: 'This research presents a new co-composting method that effectively breaks down harmful solid waste from the leather tanning process. By optimizing the mix of waste materials and microbial activity, the technique reduces environmental impact and produces a safe, usable compost.',
        image: 'https://picsum.photos/seed/compost-science/800/400',
        images: ['https://picsum.photos/seed/compost-science-detail1/800/600'],
    },
     {
        slug: 'goatskin-preservation-research',
        title: 'Sustainable Goatskin Preservation using Bagasse',
        institution: 'Research Project',
        duration: '2020',
        supervisor: 'Research Team',
        description: 'An innovative, eco-friendly approach to preserving goatskin using sugarcane bagasse.',
        longDescription: 'This study explored the use of bagasse, a byproduct of sugarcane processing, as a natural and sustainable agent for preserving goatskin. The method aims to replace or reduce the reliance on salt-based preservation, which has a significant negative environmental footprint.',
        image: 'https://i.imgur.com/cN9pjkI.png'
    },
    {
        slug: 'chromium-adsorption-research',
        title: 'Adsorption of chromium from tannery wastewater',
        institution: 'Environmental Science Research',
        duration: '2021',
        supervisor: 'Lab Team',
        description: 'Developing a method to remove toxic chromium from tannery wastewater using natural adsorbents.',
        longDescription: 'This project focused on the synthesis and application of a novel adsorbent material derived from agricultural waste to remove hexavalent chromium from industrial wastewater. The research involved material characterization, adsorption kinetics, and isotherm studies, demonstrating high efficiency and reusability.',
        image: 'https://picsum.photos/seed/chemistry-water/800/400',
        images: ['https://i.imgur.com/9KAJR8t.png', 'https://i.imgur.com/Qgobdft.png', 'https://i.imgur.com/1JeMFXz.png'],
    },
];

export const awards: Award[] = [
    {
        slug: 'winner-best-poster',
        title: 'Winner and Best Poster Presentation Award',
        organization: 'International Conference on Mechanical, Industrial and Energy Engineering',
        date: '2020',
        description: 'Awarded for research on "Real-Time Gas Pipeline Defect Detection using Computer Vision".',
        longDescription: 'This award recognized the project for its innovative approach, significant potential impact, and the clarity and quality of its presentation. The poster session involved competing against dozens of graduate and undergraduate research projects from around the world.',
        image: 'https://i.imgur.com/NZ4Z7zt.png',
        images: ['https://picsum.photos/seed/award1-detail1/800/600', 'https://picsum.photos/seed/award1-detail2/800/600'],
        videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4',
    },
    {
        slug: 'first-runners-up-olympiad',
        title: 'First Runners Up, Red & White Innovation Olympiad',
        organization: 'Red & White Group',
        date: '2021',
        description: 'Secured second place in a national innovation competition for a sustainable technology idea.',
        longDescription: 'Our team developed a concept for a low-cost, biodegradable material from industrial waste. The project was judged on its feasibility, market potential, and environmental impact. We presented a detailed business plan and a prototype to a panel of industry experts.',
        image: 'https://picsum.photos/seed/award2/400/200',
        images: ['https://picsum.photos/seed/award2-detail1/800/600'],
    },
    {
        slug: 'second-runners-up-redesign',
        title: 'Second Runners Up, Redesign 2020',
        organization: 'Innovation Hub',
        date: '2020',
        description: 'Achieved third place in a product redesign competition.',
        longDescription: 'The challenge was to redesign a common household item to be more sustainable and user-friendly. Our team redesigned a water purifier to use less plastic, incorporate recyclable filters, and feature a smart monitoring system.',
        image: 'https://picsum.photos/seed/award3/400/200',
        images: ['https://picsum.photos/seed/award3-detail1/800/600', 'https://picsum.photos/seed/award3-detail2/800/600'],
    },
    {
        slug: 'biz-bash-case-study',
        title: '6th Position, Biz Bash Case Study',
        organization: 'Business Challenge Forum',
        date: '2019',
        description: 'Placed in the top 10 in a national business case study competition.',
        longDescription: 'Analyzed a complex business case for a struggling tech company and presented a strategic turnaround plan. The solution focused on market repositioning, product diversification, and operational efficiency improvements.',
        image: 'https://i.imgur.com/f3YBqjQ.png',
    },
    {
        slug: 'technical-scholarship',
        title: 'Technical Scholarship, KUET',
        organization: 'Khulna University of Engineering & Technology',
        date: '2017-2021',
        description: 'Awarded a scholarship for academic excellence throughout my undergraduate studies.',
        longDescription: 'This merit-based scholarship was awarded each year based on maintaining a high GPA and academic standing within the Computer Science and Engineering department.',
        image: 'https://picsum.photos/seed/award5/400/200',
    },
];

export const publications: Publication[] = [
    {
        type: 'Journal',
        title: 'Atypical co-composting technique for degrading tannery solid waste enriched with recalcitrant particles, high-fat, and chromium',
        details: 'Journal of Environmental Management, Volume 309, 2022',
        link: '#'
    },
    {
        type: 'Conference',
        title: 'Real-Time Gas Pipeline Defect Detection using Computer Vision',
        details: 'Proceedings of the International Conference on Mechanical, Industrial and Energy Engineering (ICMIEE), 2020',
        link: '#'
    }
];

export const youtubeChannel = {
  name: "ParallelX Academia",
  description: "Your gateway to mastering complex subjects in engineering, technology, and science. We provide high-quality, in-depth tutorials and lectures to help students and enthusiasts alike. Join us on a journey of discovery and learning.",
  featuredVideoUrl: "https://www.youtube-nocookie.com/embed/K8s1DzGeDj0",
  featuredVideoThumbnail: "https://i.ytimg.com/vi/K8s1DzGeDj0/hqdefault.jpg"
};
