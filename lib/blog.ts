import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  readingTime: string;
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      const wordCount = content.split(/\s+/g).length;
      const readingTime = `${Math.ceil(wordCount / 200)} min read`;

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        content,
        author: data.author,
        readingTime,
      };
    });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const wordCount = content.split(/\s+/g).length;
    const readingTime = `${Math.ceil(wordCount / 200)} min read`;

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content,
      author: data.author,
      readingTime,
    };
  } catch {
    return undefined;
  }
}