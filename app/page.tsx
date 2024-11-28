import { getAllPosts } from '@/lib/blog';
import { PostCard } from '@/components/blog/PostCard';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-4xl font-bold">Blog</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}