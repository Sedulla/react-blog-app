import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import Posts from '../components/Posts';
import SideSection from '../components/SideSection';

const Home = styled.div`
  display: flex;
`;

const HomePage = () => {
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
