import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import { courseFeatures, testimonials, youtubeVideos } from "@/data/content";
import { ArrowRight, Star, Youtube, BookOpen, PlayCircle } from "lucide-react";
import CircuitBackground from "@/components/CircuitBackground";

export default function Home() {
  const featuredVideos = youtubeVideos.slice(0, 3);

  return (
    <div className="flex flex-col">
      <Hero />

      <section id="overview" className="py-16 md:py-20 lg:py-24 relative">
        <CircuitBackground />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Why Choose My Course?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              This isn't just another ICT course. It's a comprehensive, result-oriented program I have meticulously designed to ensure your success. I combine my deep subject matter expertise with a teaching style that makes complex topics simple and engaging. My mission is to empower you with the skills and confidence to not only pass, but to excel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseFeatures.map((feature, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                       <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section id="featured-videos" className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              From My YouTube Channel
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Get a taste of my teaching style with these video lessons on key ICT topics.
            </p>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
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
                            <CardDescription className="line-clamp-2">{video.description}</CardDescription>
                        </CardHeader>
                    </Card>
                </a>
            ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link href="/blog">
                  Watch More Videos
                  <Youtube className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
        </div>
      </section>
      
      <section id="testimonials" className="py-16 md:py-20 lg:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Words From My Students
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm proud of the results my students achieve. Here's what some of them have to say about their experience with me.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col justify-between shadow-lg hover:shadow-accent/20 transition-shadow duration-300 bg-card/80">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint="person"
                      />
                       <div className="absolute inset-0 bg-image-overlay-full" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.batch}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                      ))}
                  </div>
                  <blockquote className="text-muted-foreground border-l-2 border-primary pl-4 italic">
                    {testimonial.quote}
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Master ICT?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't leave your HSC results to chance. Join my course that builds a strong foundation for your future. Let's start this journey together.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/courses">
                Explore My Course
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
               <a href="https://web.facebook.com/profile.php?id=61560225422090" target="_blank" rel="noopener noreferrer">Contact Me</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
