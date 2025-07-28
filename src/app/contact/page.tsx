import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";
import CircuitBackground from "@/components/CircuitBackground";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
        <div className="relative py-20 lg:py-28 text-center">
            <CircuitBackground />
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get In Touch</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Have questions or ready to enroll? Reach out to us.
                </p>
            </div>
        </div>

        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-secondary/30 p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
                    <ContactForm />
                </div>
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                        <div className="space-y-4 text-lg">
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
                    </div>
                     <div>
                        <h2 className="text-3xl font-bold mb-4">Find Us</h2>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
