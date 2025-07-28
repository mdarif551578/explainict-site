import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { syllabus } from "@/data/content";
import { ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function CoursesPage() {
  return (
    <div className="bg-background text-foreground">
       <div className="relative h-64 md:h-80 w-full">
        <Image
          src="https://placehold.co/1200x400.png"
          alt="Students learning in a classroom"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
          data-ai-hint="students classroom"
        />
        <div className="absolute inset-0 bg-image-overlay" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">The Ultimate HSC ICT Course</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-200">
            A meticulously crafted 4-month program to ensure your success.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Course Syllabus</h2>
            <Accordion type="single" collapsible className="w-full">
              {syllabus.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                  <AccordionTrigger className="text-lg hover:no-underline text-left">
                    {item.chapter}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-none space-y-2 pl-4">
                      {item.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="space-y-8">
            <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="text-primary h-6 w-6" />
                  <span>The Guarantee</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I am so confident in my teaching methodology and materials that I offer a <strong>100% common question guarantee</strong> for your board exams. My curriculum is designed to cover every possible angle, ensuring you are perfectly prepared.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-primary/10 border-primary/30">
                <CardHeader>
                    <CardTitle>Ready to Enroll?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Secure your spot and start your journey to mastering ICT.
                    </p>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        <a href="https://m.me/sakhawoatsunny.sir" target="_blank" rel="noopener noreferrer">
                            Contact Me Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
