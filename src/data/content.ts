import { BookCopy, CheckSquare, Clock, Star, type LucideIcon, BrainCircuit, Target, BookOpenText, Users } from "lucide-react";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'number-systems-deep-dive',
    title: 'A Deep Dive into Number Systems',
    excerpt: 'I will help you understand binary, octal, decimal, and hexadecimal number systems, a fundamental concept in ICT.',
    date: 'July 15, 2024',
    author: 'Sakhawoat Súññÿ Sir',
    imageUrl: 'https://placehold.co/600x400.png',
    content: `
      <h2 class="text-2xl font-bold mb-4">An Introduction to Number Systems from My Perspective</h2>
      <p class="mb-4">Number systems are the cornerstone of digital computing. In this post, I'll explore the four main types you need to know for your HSC exams.</p>
      <h3 class="text-xl font-bold mb-2">1. Decimal (Base-10)</h3>
      <p class="mb-4">This is the system we use every day, with digits 0-9. It's our natural way of counting.</p>
      <h3 class="text-xl font-bold mb-2">2. Binary (Base-2)</h3>
      <p class="mb-4">This is the language of computers. It uses only two digits: 0 and 1. Every command, character, and pixel is represented in binary.</p>
      <div class="relative my-4 rounded-lg shadow-md overflow-hidden">
        <img src="https://placehold.co/500x300.png" alt="Binary code" class="w-full" data-ai-hint="binary code" />
        <div class="absolute inset-0 bg-image-overlay"></div>
      </div>
      <h3 class="text-xl font-bold mb-2">3. Octal (Base-8)</h3>
      <p class="mb-4">This system uses digits 0-7. I find it's a convenient way to represent binary numbers in a more compact form.</p>
      <h3 class="text-xl font-bold mb-2">4. Hexadecimal (Base-16)</h3>
      <p class="mb-4">This uses digits 0-9 and letters A-F. I frequently use hexadecimal in programming for color codes, memory addresses, and more.</p>
      <p>From my experience, mastering conversions between these systems is key to scoring high in Chapter 3. Practice is essential!</p>
    `,
  },
  {
    slug: 'mastering-html-and-css',
    title: 'How I Teach HTML & CSS for Chapter 4',
    excerpt: 'I will teach you the essentials of web design and development with HTML for structure and CSS for styling.',
    date: 'July 20, 2024',
    author: 'Sakhawoat Súññÿ Sir',
    imageUrl: 'https://placehold.co/600x400.png',
    content: `
      <h2 class="text-2xl font-bold mb-4">My Approach to Building the Web</h2>
      <p class="mb-4">In Chapter 4, I introduce you to the visual side of computing: web development. HTML and CSS are the two pillars of building websites.</p>
      <h3 class="text-xl font-bold mb-2">HTML: The Skeleton</h3>
      <p class="mb-4">I teach that HTML (HyperText Markup Language) provides the basic structure of sites. I tell my students to think of it as the skeleton that holds everything together. We use tags like <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, and <code>&lt;div&gt;</code> to organize content.</p>
      <h3 class="text-xl font-bold mb-2">CSS: The Style</h3>
      <p class="mb-4">CSS (Cascading Style Sheets) is what I use to style the HTML. Colors, fonts, layouts - it's all handled by CSS. It's what makes websites look good.</p>
      <pre class="bg-card text-foreground p-4 rounded-md my-4"><code class="language-css">
body {
  font-family: 'Inter', sans-serif;
  color: #FFFFFF;
}
      </code></pre>
      <p>I believe a solid understanding of both is required for the practical and theoretical parts of your exam.</p>
    `,
  },
  {
    slug: 'c-programming-basics',
    title: 'How I Introduce C Programming',
    excerpt: 'I provide an introduction to the C programming language, a powerful tool and a critical part of the HSC syllabus.',
    date: 'July 25, 2024',
    author: 'Sakhawoat Súññÿ Sir',
    imageUrl: 'https://placehold.co/600x400.png',
    content: `
      <h2 class="text-2xl font-bold mb-4">The Power of C</h2>
      <p class="mb-4">Chapter 5, "Programming Language," is often the most challenging for students. In this post, I'll demystify the basics of C for you.</p>
      <h3 class="text-xl font-bold mb-2">Your First Program: "Hello, World!"</h3>
      <p class="mb-4">I believe every programmer should start here. It's a simple program that prints "Hello, World!" to the screen.</p>
      <pre class="bg-card text-foreground p-4 rounded-md my-4"><code class="language-c">
#include <stdio.h>

int main() {
  printf("Hello, World!");
  return 0;
}
      </code></pre>
      <h3 class="text-xl font-bold mb-2">Key Concepts I Focus On</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Variables & Data Types</li>
        <li>Input & Output</li>
        <li>Conditional Logic (if-else)</li>
        <li>Loops (for, while)</li>
      </ul>
      <p>You don't have to be intimidated! With my step-by-step approach, I am confident you can learn to code in C.</p>
    `,
  },
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
        quote: "The strategic preparation was amazing! I felt so confident in the board exam because it was just like one of our mock tests.",
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
