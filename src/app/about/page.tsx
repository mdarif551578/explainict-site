import Image from "next/image";
import { Award, BookOpen, Heart } from "lucide-react";
import CircuitBackground from "@/components/CircuitBackground";

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="relative py-20 lg:py-28 text-center">
        <CircuitBackground />
        <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About SakhawoaT SunnY SiR</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                A passionate educator dedicated to making ICT accessible for everyone.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl shadow-primary/20 border-4 border-primary">
              <Image
                src="https://scontent.fdac1-1.fna.fbcdn.net/v/t39.30808-6/487495286_3931367967129939_6664907565673839265_n.jpg"
                alt="SakhawoaT SunnY SiR"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold">A Decade of Dedication</h2>
            <p className="text-lg text-muted-foreground">
              SakhawoaT SunnY SiR has been a beacon of knowledge in the field of Information and Communication Technology for over ten years. His journey began with a simple mission: to demystify technology for students and empower them to excel in their academic and future careers.
            </p>
            <p className="text-lg text-muted-foreground">
              Based in Madaripur, he has become a household name for quality ICT education, known for his unique ability to break down complex topics into simple, digestible concepts. His students not only score well but also develop a genuine interest in the subject.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="flex flex-col items-center text-center p-4 bg-secondary/30 rounded-lg">
                <BookOpen className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-xl font-bold">Innovative Teaching</h3>
                <p className="text-sm text-muted-foreground">Uses practical examples and real-world scenarios.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-secondary/30 rounded-lg">
                <Heart className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-xl font-bold">Student-Centric</h3>
                <p className="text-sm text-muted-foreground">Focuses on individual student needs and learning pace.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-secondary/30 rounded-lg">
                <Award className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-xl font-bold">Proven Results</h3>
                <p className="text-sm text-muted-foreground">A long history of students achieving A+ grades.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
