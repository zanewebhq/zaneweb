'use client';

import { FaXTwitter } from 'react-icons/fa6';
import { TwitterShareButton } from 'react-share';

import { Post } from '@/utils/posts';

interface ShareButtonProps {
  post: Post;
}

export default function ShareButton({ post }: ShareButtonProps) {
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`;

  return (
    <TwitterShareButton title={post.title} url={url}>
      <FaXTwitter title="Share on X" />
    </TwitterShareButton>
  );
}
