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
import { blogPosts } from "@/data/content";
import CircuitBackground from "@/components/CircuitBackground";
import { Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function BlogPage() {
  return (
    <div>
        <div className="relative py-16 md:py-20 lg:py-28 text-center">
            <CircuitBackground />
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">ICT Insights</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Tips, tricks, and strategies from SakhawoaT SunnY SiR to help you excel.
                </p>
            </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                    <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-2">
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
        </div>
    </div>
  );
}
