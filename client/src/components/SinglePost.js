import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Delete, Edit } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from '../context/Context';

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

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const PF = 'http://localhost:5000/images/';
  const { user } = useContext(Context);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/', path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.name },
      });
      window.location.replace('/');
    } catch (err) {}
  };

  return (
    <Container>
      <Wrapper>
        {post.photo && <Image src={PF + post.photo} />}
        <Title>
          {title}
          {post.username === user?.username && (
            <EditIcons>
              <Edit sx={{ ml: 1, cursor: 'pointer', color: 'teal' }} />
              <Delete
                sx={{ ml: 1, cursor: 'pointer', color: 'tomato' }}
                onClick={handleDelete}
              />
            </EditIcons>
          )}
        </Title>
        <Info>
          <Author value={desc}>
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
