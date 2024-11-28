import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { MDXContent } from '@/components/MDXContent';
import Link from 'next/link';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <article className="container max-w-3xl py-8">
      <Link className="border border-border rounded-lg p-2 bg-card text-card-foreground shadow-sm h-full transition-colors hover:bg-muted/50" href="/">Back to main page</Link>
        <header className="mb-8">
        <h1 className="mb-2 text-4xl font-bold">{post.title}</h1>
        <div className="flex items-center space-x-2 text-muted-foreground">
          <time dateTime={post.date}>
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </time>
          <span>•</span>
          <span>{post.readingTime}</span>
          <span>•</span>
          <span>By {post.author}</span>
        </div>
      </header>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXContent source={post.content} />
      </div>
    </article>
    </div>
  );
}