import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import Posts from '../components/Posts';
import SideSection from '../components/SideSection';
import axios from 'axios';

const Home = styled.div`
  display: flex;
`;

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts');
      console.log(res);
    };
    fetchPosts();
  });

  return (
    <>
      <Header />
      <Home>
        <Posts />
        <SideSection />
      </Home>
    </>
  );
};

export default HomePage;
