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
import { courseFeatures, testimonials, blogPosts } from "@/data/content";
import { ArrowRight, Star, Calendar, User, BookOpen } from "lucide-react";
import CircuitBackground from "@/components/CircuitBackground";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="flex flex-col">
      <Hero />

      <section id="overview" className="py-16 md:py-20 lg:py-24 relative">
        <CircuitBackground />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Why Choose This Course?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              This isn't just another ICT course. It's a comprehensive, result-oriented program meticulously designed to ensure your success. I combine deep subject matter expertise with a teaching style that makes complex topics simple and engaging. My mission is to empower you with the skills and confidence to not only pass but to excel.
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

       <section id="featured-posts" className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              From My Blog
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Get a taste of my teaching style with these insights and tips on key ICT topics.
            </p>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                    <Card className="h-full flex flex-col overflow-hidden bg-secondary/30 shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative w-full h-48 overflow-hidden">
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-500 group-hover:scale-110"
                                data-ai-hint="programming technology"
                            />
                            <div className="absolute inset-0 bg-image-overlay"></div>
                        </div>
                        <CardHeader>
                            <Badge variant="outline" className="w-fit mb-2 border-accent text-accent">{post.slug.split('-')[0].toUpperCase()}</Badge>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                            <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow" />
                        <CardFooter className="flex justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{post.date}</span>
                            </div>
                        </CardFooter>
                    </Card>
                </Link>
            ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link href="/blog">
                  Read More Posts
                  <BookOpen className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
        </div>
      </section>
      
      <section id="testimonials" className="py-16 md:py-20 lg:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Words from My Students
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm proud of the results my students achieve. Here's what some of them have to say about their experience.
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
            Don't leave your HSC results to chance. Join a course that guarantees success and builds a strong foundation for your future. Let's start this journey together.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/courses">
                Explore The Course
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
               <a href="https://m.me/sakhawoatsunny.sir" target="_blank" rel="noopener noreferrer">Contact Me</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
