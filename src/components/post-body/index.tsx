import MDXRenderer from '@/components/mdx';
import { Post } from '@/utils/posts';

interface PostBodyProps {
  post: Post;
}

export default function PostBody({ post }: PostBodyProps) {
  return (
    <main>
      <MDXRenderer source={post.body} />
    </main>
  );
}
