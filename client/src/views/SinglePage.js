import styled from 'styled-components';
import { SideSection } from '../components/SideSection';
import { SinglePost } from '../components/SinglePost';

const Container = styled.div`
  display: flex;
`;

export const SinglePage = () => {
  return (
    <Container>
      <SinglePost />
      <SideSection />
    </Container>
  );
};
