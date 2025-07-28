"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function ContactForm() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // This is a dummy submission. In a real app, this would redirect to messenger.
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        toast({
            title: "Redirecting to Messenger",
            description: "You would be redirected to Facebook Messenger to send your message.",
        });
        setIsSubmitting(false);
        window.open("https://m.me/YOUR_USERNAME_HERE", "_blank");
    }

  return (
    <>
      <p className="mb-4 text-muted-foreground">
          For a faster response, please send a message directly on Facebook Messenger.
      </p>
      <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mb-6">
        <a href="https://m.me/YOUR_USERNAME_HERE" target="_blank" rel="noopener noreferrer">
            Send Message on Messenger
            <Send className="ml-2 h-4 w-4" />
        </a>
      </Button>
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-secondary/30 px-2 text-muted-foreground">
            Or use the form
          </span>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Ask a question or leave a comment..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send via Form"}
            {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
          </Button>
        </form>
      </Form>
    </>
  );
}
