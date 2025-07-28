import { BookCopy, CheckSquare, Clock, Star, type LucideIcon, BrainCircuit, Target, BookOpenText, Users } from "lucide-react";

export interface YoutubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
}

export const youtubeVideos: YoutubeVideo[] = [
  {
    id: 'nS4h-k4O9gA', // Example YouTube Video ID
    title: 'Number Systems Explained',
    description: 'A comprehensive tutorial on binary, decimal, and hexadecimal number systems. I cover everything you need for the HSC exam.',
    thumbnailUrl: 'https://placehold.co/600x400.png'
  },
  {
    id: 'zN83vY8kC_A', // Example YouTube Video ID
    title: 'Mastering HTML & CSS',
    description: 'In this video, I walk you through building a complete webpage from scratch using HTML for structure and CSS for styling.',
    thumbnailUrl: 'https://placehold.co/600x400.png'
  },
  {
    id: 'f9vWAqMv4aI', // Example YouTube Video ID
    title: 'Introduction to C Programming',
    description: 'Your first step into the world of programming. I make C language easy and approachable for absolute beginners.',
    thumbnailUrl: 'https://placehold.co/600x400.png'
  },
   {
    id: '7l4sVxSlA6E', // Example YouTube Video ID
    title: 'Understanding Logic Gates',
    description: 'A deep dive into AND, OR, NOT, NAND, NOR, and XOR gates. I use animations to make it clear and simple.',
    thumbnailUrl: 'https://placehold.co/600x400.png'
  },
  {
    id: '5p20-Yt2y4s', // Example YouTube Video ID
    title: 'Data Communication Concepts',
    description: 'Learn about simplex, half-duplex, and full-duplex communication, along with network topologies.',
    thumbnailUrl: 'https://placehold.co/600x400.png'
  },
  {
    id: 'jI-R_lI4-L8', // Example YouTube Video ID
    title: 'SQL Database for Beginners',
    description: 'A practical guide to writing SQL queries. I cover everything from SELECT statements to JOINs.',
    thumbnailUrl: 'https://placehold.co/600x400.png'
  }
];


interface CourseFeature {
    title: string;
    description: string;
    icon: LucideIcon;
}

export const courseFeatures: CourseFeature[] = [
    {
        title: "My Simplified Learning Method",
        description: "I break down complex topics into simple, easy-to-digest modules that make learning ICT feel effortless and enjoyable for you.",
        icon: BrainCircuit,
    },
    {
        title: "My Targeted Exam Prep",
        description: "I provide focused preparation for CQ, MCQ, and practical exams, with my special techniques to answer any question.",
        icon: Target,
    },
    {
        title: "My Exclusive Resources",
        description: "You get access to my custom-made, exclusive lecture sheets and notes that you won't find anywhere else.",
        icon: BookOpenText,
    },
    {
        title: "My Proven Success",
        description: "I have a strong track record of helping students like you achieve outstanding A+ results. Join my course and be my next success story.",
        icon: Star,
    },
];

interface Testimonial {
    name: string;
    batch: string;
    quote: string;
    avatar: string;
}

export const testimonials: Testimonial[] = [
    {
        name: "Anika Rahman",
        batch: "HSC Batch 2023",
        quote: "Sir's teaching method is incredible. I was weak in programming, but his classes made it so easy. I got an A+ because of him!",
        avatar: "https://placehold.co/100x100.png",
    },
    {
        name: "Fahim Ahmed",
        batch: "HSC Batch 2023",
        quote: "The strategic preparation was amazing! I felt so confident in the board exam because the questions felt so familiar.",
        avatar: "https://placehold.co/100x100.png",
    },
    {
        name: "Sadia Islam",
        batch: "HSC Batch 2022",
        quote: "I highly recommend this course. The chapter-wise exams were a game-changer for my preparation. Thank you, sir!",
        avatar: "https://placehold.co/100x100.png",
    },
];


export const syllabus = [
    {
        chapter: "Chapter 1: Information & Communication Technology: World & Bangladesh Perspective",
        topics: ["Concept of World Village & its elements", "Virtual Reality", "Artificial Intelligence", "Robotics", "Cryosurgery", "Biometrics & Bioinformatics", "Genetic Engineering & Nanotechnology"],
    },
    {
        chapter: "Chapter 2: Communication Systems & Networking",
        topics: ["Concept of Communication", "Data Transmission Methods & Modes", "Communication Mediums (Wired & Wireless)", "Wireless Communication Technologies (Bluetooth, Wi-Fi, WiMAX)", "Mobile Communication Generations", "Computer Networking & Topologies", "Networking Devices", "Cloud Computing"],
    },
    {
        chapter: "Chapter 3: Number Systems & Digital Devices",
        topics: ["Number Systems & Conversions", "2's Complement", "Binary Logic & Codes (BCD, ASCII, EBCDIC, Unicode)", "Logic Gates (Basic, Universal, Special)", "Encoders & Decoders", "Adders (Half & Full)"],
    },
    {
        chapter: "Chapter 4: Introduction to Web Design & HTML",
        topics: ["Concept of Website & Structure", "HTML Fundamentals & Tags", "Text Formatting", "Creating Tables", "Hyperlinks and Images", "Website Publishing"],
    },
    {
        chapter: "Chapter 5: Programming Language",
        topics: ["Concepts of Programming & Generations", "Algorithms, Flowcharts & Pseudocode", "C Programming Basics (Variables, Data Types, Keywords, Operators)", "Input/Output Statements", "Conditional Statements (if, else, switch)", "Loop Control Structures (for, while, do-while)", "Arrays and Functions"],
    },
    {
        chapter: "Chapter 6: Database Management System",
        topics: ["Database Concepts (DBMS, RDBMS)", "Data Models & Relationships", "Introduction to SQL (DDL, DML, DQL)", "Data Security & Normalization"],
    },
];
