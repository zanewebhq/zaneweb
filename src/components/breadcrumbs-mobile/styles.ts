import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  }
`;
