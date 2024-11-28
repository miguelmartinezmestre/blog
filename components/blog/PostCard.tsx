import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';
import type { Post } from '@/lib/blog';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full transition-colors hover:bg-muted/50">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
          <p className="mt-2 line-clamp-3 text-muted-foreground">{post.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
}