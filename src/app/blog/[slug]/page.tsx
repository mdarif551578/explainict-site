import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts, type BlogPost } from "@/data/content";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 max-w-4xl">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <article>
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
            </div>
          </div>
        </header>

        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="bg-muted"
            priority
            data-ai-hint="technology abstract"
          />
          <div className="absolute inset-0 bg-image-overlay" />
        </div>

        <div
          className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-blockquote:border-primary prose-code:bg-secondary prose-code:p-1 prose-code:rounded-md"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
