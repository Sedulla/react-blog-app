import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const Home = styled.div`
  display: flex;
`;

const HomePage = () => {
  return (
    <>
      <Header />
      <Home>
        <div></div>
      </Home>
    </>
  );
};

export default HomePage;
