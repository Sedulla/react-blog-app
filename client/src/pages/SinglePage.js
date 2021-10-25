import styled from 'styled-components';
import SideSection from '../components/SideSection';
import SinglePost from '../components/SinglePost';

const Container = styled.div`
  display: flex;
`;

const SinglePage = () => {
  return (
    <Container>
      <SinglePost />
      <SideSection />
    </Container>
  );
};

export default SinglePage;
