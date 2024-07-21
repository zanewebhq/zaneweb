import { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import { MdArrowDownward } from 'react-icons/md';

import { getContentFromFile } from '@/utils/content';

import MDXRenderer from '../mdx';
import {
  Background,
  CTALink,
  Content,
  Heading,
  Paragraph,
  Wrapper,
} from './styles';

const heroComponents: MDXComponents = {
  h1: (props) => <Heading {...props} />,
  p: (props) => <Paragraph {...props} />,
};

export default async function Hero() {
  const content = await getContentFromFile('home.mdx');

  return (
    <Wrapper>
      <Background>
        <Image
          src="/images/hero.webp"
          sizes="100vw"
          alt=""
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </Background>
      <Content>
        <MDXRenderer source={content} components={heroComponents} />

        <CTALink href="#latest-posts">
          <span>Read my latest posts</span>
          <MdArrowDownward size={24} />
        </CTALink>
      </Content>
    </Wrapper>
  );
}
