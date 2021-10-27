import Header from '../components/Header';
import styled from 'styled-components';
import Posts from '../components/Posts';
import SideSection from '../components/SideSection';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { axiosInstance } from '../config';

const Home = styled.div`
  display: flex;
`;

const HomePage = () => {
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

export default HomePage;
