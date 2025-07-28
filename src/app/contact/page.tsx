import Map from "@/components/Map";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div>
        <div className="relative h-64 md:h-80 w-full">
            <Image
              src="https://placehold.co/1200x400.png"
              alt="Contact center with operators"
              layout="fill"
              objectFit="cover"
              className="opacity-40"
              data-ai-hint="contact support"
            />
            <div className="absolute inset-0 bg-image-overlay" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get In Touch</h1>
                <p className="mt-4 max-w-3xl text-lg text-slate-200">
                    Have questions or ready to enroll? Reach out to me.
                </p>
            </div>
        </div>

        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-secondary/30 p-6 sm:p-8 rounded-lg shadow-lg flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">Contact Information</h2>
                    <div className="space-y-6 text-lg">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Location</h3>
                                <p className="text-muted-foreground">DC Bridge, Madaripur, Bangladesh</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <a href="tel:01788811826" className="text-muted-foreground hover:text-primary transition-colors">01788811826</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <a href="mailto:sunny.sir@example.com" className="text-muted-foreground hover:text-primary transition-colors">sunny.sir@example.com</a>
                            </div>
                        </div>
                    </div>
                     <div className="mt-8">
                        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                            <a href="https://m.me/sakhawoatsunny.sir" target="_blank" rel="noopener noreferrer">
                                Send a Message on Messenger
                                <Send className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>
                 <div>
                    <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">My Location</h2>
                    <div className="rounded-lg overflow-hidden shadow-lg h-full min-h-[400px]">
                        <Map />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
