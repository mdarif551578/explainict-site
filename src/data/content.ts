import { BookCopy, CheckSquare, Clock, Star, type LucideIcon } from "lucide-react";

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
    excerpt: 'Understand binary, octal, decimal, and hexadecimal number systems, a fundamental concept in ICT.',
    date: 'July 15, 2024',
    author: 'SakhawoaT SunnY SiR',
    imageUrl: 'https://placehold.co/600x400.png',
    content: `
      <h2 class="text-2xl font-bold mb-4">Introduction to Number Systems</h2>
      <p class="mb-4">Number systems are the cornerstone of digital computing. In this post, we'll explore the four main types you need to know for your HSC exams.</p>
      <h3 class="text-xl font-bold mb-2">1. Decimal (Base-10)</h3>
      <p class="mb-4">This is the system we use every day, with digits 0-9. It's our natural way of counting.</p>
      <h3 class="text-xl font-bold mb-2">2. Binary (Base-2)</h3>
      <p class="mb-4">The language of computers. It uses only two digits: 0 and 1. Every command, character, and pixel is represented in binary.</p>
      <img src="https://placehold.co/500x300.png" alt="Binary code" class="my-4 rounded-lg shadow-md" data-ai-hint="binary code" />
      <h3 class="text-xl font-bold mb-2">3. Octal (Base-8)</h3>
      <p class="mb-4">Uses digits 0-7. It's a convenient way to represent binary numbers in a more compact form.</p>
      <h3 class="text-xl font-bold mb-2">4. Hexadecimal (Base-16)</h3>
      <p class="mb-4">Uses digits 0-9 and letters A-F. Hexadecimal is widely used in programming for color codes, memory addresses, and more.</p>
      <p>Mastering conversions between these systems is key to scoring high in Chapter 3. Practice is essential!</p>
    `,
  },
  {
    slug: 'mastering-html-and-css',
    title: 'Mastering HTML & CSS for Chapter 4',
    excerpt: 'Learn the essentials of web design and development with HTML for structure and CSS for styling.',
    date: 'July 20, 2024',
    author: 'SakhawoaT SunnY SiR',
    imageUrl: 'https://placehold.co/600x400.png',
    content: `
      <h2 class="text-2xl font-bold mb-4">Building the Web</h2>
      <p class="mb-4">Chapter 4 introduces you to the visual side of computing: web development. HTML and CSS are the two pillars of building websites.</p>
      <h3 class="text-xl font-bold mb-2">HTML: The Skeleton</h3>
      <p class="mb-4">HTML (HyperText Markup Language) provides the basic structure of sites. Think of it as the skeleton that holds everything together. You use tags like <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, and <code>&lt;div&gt;</code> to organize content.</p>
      <h3 class="text-xl font-bold mb-2">CSS: The Style</h3>
      <p class="mb-4">CSS (Cascading Style Sheets) is used to style the HTML. Colors, fonts, layouts - it's all handled by CSS. It's what makes websites look good.</p>
      <pre class="bg-gray-800 text-white p-4 rounded-md my-4"><code class="language-css">
body {
  font-family: 'Inter', sans-serif;
  color: #333;
}
      </code></pre>
      <p>A solid understanding of both is required for the practical and theoretical parts of your exam.</p>
    `,
  },
  {
    slug: 'c-programming-basics',
    title: 'Getting Started with C Programming',
    excerpt: 'An introduction to the C programming language, a powerful tool and a critical part of the HSC syllabus.',
    date: 'July 25, 2024',
    author: 'SakhawoaT SunnY SiR',
    imageUrl: 'https://placehold.co/600x400.png',
    content: `
      <h2 class="text-2xl font-bold mb-4">The Power of C</h2>
      <p class="mb-4">Chapter 5, "Programming Language," is often the most challenging for students. This post will demystify the basics of C.</p>
      <h3 class="text-xl font-bold mb-2">Your First Program: "Hello, World!"</h3>
      <p class="mb-4">Every programmer starts here. It's a simple program that prints "Hello, World!" to the screen.</p>
      <pre class="bg-gray-800 text-white p-4 rounded-md my-4"><code class="language-c">
#include &lt;stdio.h&gt;

int main() {
  printf("Hello, World!");
  return 0;
}
      </code></pre>
      <h3 class="text-xl font-bold mb-2">Key Concepts</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Variables & Data Types</li>
        <li>Input & Output</li>
        <li>Conditional Logic (if-else)</li>
        <li>Loops (for, while)</li>
      </ul>
      <p>Don't be intimidated! With a step-by-step approach, anyone can learn to code in C.</p>
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
        title: "4-Month Course",
        description: "A comprehensive curriculum designed to cover the entire HSC ICT syllabus from start to finish.",
        icon: Clock,
    },
    {
        title: "50+ Topic Classes",
        description: "In-depth, topic-based classes that break down complex concepts into easy-to-understand lessons.",
        icon: BookCopy,
    },
    {
        title: "12 Chapter Exams",
        description: "Rigorous chapter-based exams to test your knowledge and prepare you for the real test.",
        icon: CheckSquare,
    },
    {
        title: "100% Common Guarantee",
        description: "Our meticulously designed course ensures you will face familiar questions in any exam.",
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
        quote: "Sunny Sir's teaching method is incredible. I was weak in programming, but his classes made it so easy. Got an A+!",
        avatar: "https://placehold.co/100x100.png",
    },
    {
        name: "Fahim Ahmed",
        batch: "HSC Batch 2023",
        quote: "The '100% common' guarantee sounded too good to be true, but it was real! The board exam felt just like one of our mock tests.",
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
        topics: ["Concept of World Village", "Communication", "Networking", "Value of ICT in society"],
    },
    {
        chapter: "Chapter 2: Communication Systems & Networking",
        topics: ["Communication Medium", "Wireless Communication", "Networking Devices", "Cloud Computing"],
    },
    {
        chapter: "Chapter 3: Number Systems & Digital Devices",
        topics: ["Number Systems Conversion", "Binary Logic", "Logic Gates", "Encoders & Decoders"],
    },
    {
        chapter: "Chapter 4: Introduction to Web Design & HTML",
        topics: ["Concept of Website", "HTML Fundamentals", "Creating Tables", "Hyperlinks and Images"],
    },
    {
        chapter: "Chapter 5: Programming Language",
        topics: ["Concepts of Programming", "C Programming Basics", "Control Structures", "Arrays and Functions"],
    },
    {
        chapter: "Chapter 6: Database Management System",
        topics: ["Database Concepts", "RDBMS", "Introduction to SQL", "Data Security"],
    },
];
