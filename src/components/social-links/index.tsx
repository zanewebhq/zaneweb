import { FaGithub, FaRss, FaXTwitter } from 'react-icons/fa6';

import { IconLink, Wrapper } from './styles';

export const SocialLinks = () => {
  return (
    <Wrapper>
      <IconLink
        href="https://github.com/martinzane"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub title="GitHub" />
      </IconLink>

      <IconLink
        href="https://x.com/itsmartinzane"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter title="X" />
      </IconLink>
      <IconLink href="/feed" target="_blank" rel="noopener noreferrer">
        <FaRss title="RSS Feed" />
      </IconLink>
    </Wrapper>
  );
};
