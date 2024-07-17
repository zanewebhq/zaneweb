import { PostCategory as PostCategoryType } from '@/utils/posts';

import { Wrapper } from './styles';

interface PostCategoryProps {
  category: PostCategoryType;
}

export default function PostCategory({ category }: PostCategoryProps) {
  const label = category.replace(/-/g, ' ');

  return <Wrapper $category={category}>{label}</Wrapper>;
}
