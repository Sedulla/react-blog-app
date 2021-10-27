import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Delete, Edit } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
import {axiosInstance} from '../config';
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

const TitleInput = styled.input`
  margin: 10px;
  font-size: 28px;
  text-align: center;
  border: none;
  color: gray;
  border-bottom: 1px solid lightgray;

  &:focus {
    outline: none;
  }
`;

const TextInput = styled.textarea`
  border: none;
  color: #555;
  font-size: 18px;
  line-height: 25px;

  &:focus {
    outline: none;
  }
`;

const UpdateButton = styled.button`
  width: 100px;
  border: none;
  background-color: teal;
  padding: 5px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 20px;
`;

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);
  const PF = 'http://localhost:5000/images/';
  const { user } = useContext(Context);

  useEffect(() => {
    const getPost = async () => {
      const res = await axiosInstance.get('/posts/', path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/posts/${post._id}`, {
        data: { username: user.name },
      });
      window.location.replace('/');
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axiosInstance.put(`/posts/${post._id}`, {
        username: user.name,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <Container>
      <Wrapper>
        {post.photo && <Image src={PF + post.photo} />}
        {updateMode ? (
          <TitleInput
            type="text"
            value={title}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <Title>
            {title}
            {post.username === user?.username && (
              <EditIcons>
                <Edit
                  sx={{ ml: 1, cursor: 'pointer', color: 'teal' }}
                  onClick={() => setUpdateMode(true)}
                />
                <Delete
                  sx={{ ml: 1, cursor: 'pointer', color: 'tomato' }}
                  onClick={handleDelete}
                />
              </EditIcons>
            )}
          </Title>
        )}
        <Info>
          <Author>
            Author:
            <Link to={`/?user=$post{post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </Author>
          <Span>{new Date(post.date).toDateString()}</Span>
        </Info>
        {updateMode ? (
          <TextInput value={desc} onChange={(e) => setDesc(e.target.value)} />
        ) : (
          <Description>{post.desc}</Description>
        )}
        {updateMode && (
          <UpdateButton onClikc={handleUpdate}>Update</UpdateButton>
        )}
      </Wrapper>
    </Container>
  );
};

export default SinglePost;
