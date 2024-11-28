import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

interface MDXContentProps {
  source: string;
}

export async function MDXContent({ source }: MDXContentProps) {
  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          format: 'mdx',
        },
      }}
    />
  );
}