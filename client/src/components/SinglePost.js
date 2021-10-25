import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Delete, Edit } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Container = styled.div`
  flex: 9;
`;

const Wrapper = styled.div`
  padding: 20px;
  padding-right: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  object-fit: cover;
`;

const Title = styled.h1`
  text-align: center;
  margin: 10px;
  font-size: 28px;
  font-family: serif;
  font-weight: normal;
`;
const EditIcons = styled.div`
  float: right;
  font-size: 16px;
`;

const Info = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #be9656;
  font-family: 'Varela', Arial, sans-serif;
`;

const Span = styled.span``;

const Author = styled.b`
  margin-left: 5px;
`;

const Description = styled.p`
  color: #667;
  font-size: 18px;
  line-height: 25px;

  &::first-letter {
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600;
  }
`;
const Br = styled.br``;

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/', path);
      setPost(res.data);
      setPost(res.data.title);
      setPost(res.data.desc);
    };
    getPost();
  }, [path]);

  return (
    <Container>
      <Wrapper>
        {post.photo && <Image src={post.photo} />}
        <Title>
          {title}
          <EditIcons>
            <Edit sx={{ ml: 1, cursor: 'pointer', color: 'teal' }} />
            <Delete sx={{ ml: 1, cursor: 'pointer', color: 'tomato' }} />
          </EditIcons>
        </Title>
        <Info>
          <Author>
            Author:
            <Link to={`/?user=$post{post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </Author>
          <Span>{new Date(post.date).toDateString()}</Span>
        </Info>
        <Description>{post.desc}</Description>
      </Wrapper>
    </Container>
  );
};

export default SinglePost;
