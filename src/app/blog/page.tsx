import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { youtubeVideos } from "@/data/content";
import { Youtube, PlayCircle } from "lucide-react";

export default function VideoGalleryPage() {
  return (
    <div>
      <div className="relative h-64 md:h-80 w-full">
        <Image
          src="https://placehold.co/1200x400.png"
          alt="A person watching educational videos"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
          data-ai-hint="watching videos"
        />
        <div className="absolute inset-0 bg-image-overlay" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">My Video Lessons</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-200">
            Explore my collection of video tutorials and lectures to help you master ICT concepts.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {youtubeVideos.map((video) => (
            <a key={video.id} href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="group block">
              <Card className="h-full flex flex-col overflow-hidden bg-secondary/30 shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={video.thumbnailUrl}
                    alt={video.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint="youtube thumbnail"
                  />
                  <div className="absolute inset-0 bg-image-overlay"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white/80 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{video.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{video.description}</CardDescription>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
