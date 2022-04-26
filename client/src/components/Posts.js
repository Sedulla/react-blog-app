import styled from 'styled-components';
import { Post } from './Post';

const Container = styled.div`
  flex: 9;
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
`;

export const Posts = ({ posts }) => {
  return (
    <Container>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </Container>
  );
};
