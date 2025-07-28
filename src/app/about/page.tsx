import Image from "next/image";
import { Award, BookOpen, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="relative h-64 md:h-80 w-full">
        <Image
          src="/item_06_1.jpg"
          alt="A modern classroom or library"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
          data-ai-hint="library classroom"
        />
        <div className="absolute inset-0 bg-image-overlay" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-200">
            I am a passionate educator dedicated to making ICT accessible for everyone.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl shadow-primary/20 border-4 border-primary">
              <Image
                src="/item_07.jpg"
                alt="Sakhawoat Súññÿ Sir"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                data-ai-hint="teacher portrait"
              />
              <div className="absolute inset-0 bg-image-overlay-full"></div>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl font-bold">A Decade of Dedication</h2>
            <p className="text-lg text-muted-foreground">
              For over ten years, I have been a beacon of knowledge in the field of Information and Communication Technology. My journey began with a simple mission: to demystify technology for my students and empower them to excel in their academic and future careers.
            </p>
            <p className="text-lg text-muted-foreground">
              Based in Madaripur, I have become a well-known name for quality ICT education, recognized for my unique ability to break down complex topics into simple, digestible concepts. My students not only score well but also develop a genuine interest in the subject.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="flex flex-col items-center text-center p-4 bg-secondary/30 rounded-lg">
                <BookOpen className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-xl font-bold">Innovative Teaching</h3>
                <p className="text-sm text-muted-foreground">I use practical examples and real-world scenarios.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-secondary/30 rounded-lg">
                <Heart className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-xl font-bold">Student-Centric</h3>
                <p className="text-sm text-muted-foreground">I focus on individual student needs and learning pace.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-secondary/30 rounded-lg">
                <Award className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-xl font-bold">Proven Results</h3>
                <p className="text-sm text-muted-foreground">I have a long history of students achieving A+ grades.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
