import type { MDXComponents } from 'mdx/types';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';

import Link, { LinkProps } from '@/components/link';
import PostImage from '@/components/post-image';
import { PostImage as PostImageType } from '@/utils/posts';

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Italic,
  ListItem,
  OrderedList,
  Paragraph,
  Strong,
  UnorderedList,
} from './styles';

const mdxComponents: MDXComponents = {
  h1: (props) => <Heading1 {...props} />,
  h2: (props) => <Heading2 {...props} />,
  h3: (props) => <Heading3 {...props} />,
  h4: (props) => <Heading4 {...props} />,
  h5: (props) => <Heading5 {...props} />,
  h6: (props) => <Heading6 {...props} />,
  p: (props) => <Paragraph {...props} />,
  strong: (props) => <Strong {...props} />,
  em: (props) => <Italic {...props} />,
  ol: (props) => <OrderedList {...props} />,
  ul: (props) => <UnorderedList {...props} />,
  li: (props) => <ListItem {...props} />,
  // blockquote: (props) => <BlockQuote {...props} />,
  // code: (props) => <Code {...props} />,
  // pre: (props) => <Pre {...props} />,
  a: (props) => <Link {...(props as LinkProps)} />,
  img: (props) => <PostImage {...(props as PostImageType)} />,
  // table: (props) => <Table {...props} />,
  // th: (props) => <TableHead {...props} />,
  // tr: (props) => <TableRow {...props} />,
  // td: (props) => <TableCell {...props} />,
  // hr: (props) => <Hr {...props} />,
  // More?
};

interface MDXRendererProps {
  source: string;
  components?: MDXComponents;
}

export default function MDXRenderer({ source, components }: MDXRendererProps) {
  return (
    <MDXRemote
      source={source}
      components={components || mdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: 'material-theme-palenight',
              },
            ],
          ],
        },
      }}
    />
  );
}
