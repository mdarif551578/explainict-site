import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import { courseFeatures, testimonials } from "@/data/content";
import { ArrowRight, Star } from "lucide-react";
import CircuitBackground from "@/components/CircuitBackground";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <section id="overview" className="py-16 md:py-20 lg:py-32 relative">
        <CircuitBackground />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Why Choose This Course?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              A complete, result-oriented package designed to help you master ICT for your HSC exams with a 100% common question guarantee. This course is more than just classes; it's a partnership for your success.
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
      
      <section id="testimonials" className="py-16 md:py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Words from My Students
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See what past students have to say about their success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col justify-between shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
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

      <section id="cta" className="py-16 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Master ICT?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join my course today and secure your A+ in the HSC exam. Your journey to success starts here.
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
