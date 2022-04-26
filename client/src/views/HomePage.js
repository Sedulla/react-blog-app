import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { axiosInstance } from '../utils/config';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { SideSection } from '../components/SideSection';
import { Posts } from '../components/Posts';

const Home = styled.div`
  display: flex;
`;

export const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get('/posts' + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <Home>
        <Posts posts={posts} />
        <SideSection />
      </Home>
    </>
  );
};
