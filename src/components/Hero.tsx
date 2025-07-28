import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative h-[calc(100vh-4rem)] min-h-[500px] w-full flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://scontent.fdac1-1.fna.fbcdn.net/v/t39.30808-6/487495286_3931367967129939_6664907565673839265_n.jpg"
          alt="SakhawoaT SunnY SiR teaching"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="opacity-40"
          priority
          data-ai-hint="teacher portrait"
        />
        <div className="absolute inset-0 bg-image-overlay" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-shadow-lg">
          Master ICT for HSC
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-200">
          Join my proven 4-month course. Go from zero to hero with 50+ classes and a 100% common question guarantee.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
            <a href="https://m.me/sakhawoatsunny.sir" target="_blank" rel="noopener noreferrer">
              Enroll Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-background transition-transform hover:scale-105">
            <Link href="#overview">
              <PlayCircle className="mr-2 h-5 w-5" />
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
