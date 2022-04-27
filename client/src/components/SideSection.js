import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  FaPinterest as PinterestIcon,
  FaTwitter as TwitterIcon,
  FaFacebook as FacebookIcon,
  FaInstagram as InstagramIcon,
} from 'react-icons/fa';
import { apiBaseUrl } from '../utils/config';
import axios from 'axios';

const Container = styled.div`
  flex: 3;
  height: fit-content;
  margin: 20px;
  padding-bottom: 30px;
  background-color: #fdfbfb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  margin: 10px;
  padding: 5px;
  width: 80%;
  border-top: solid 1px #a7a4a4;
  border-bottom: solid 1px #a7a4a4;
  text-align: center;
  font-family: 'Varela', sans-serif;
  font-size: 12px;
  line-height: 19px;
  color: #222;
  font-weight: 600;
`;

const Image = styled.img`
  margin-top: 15px;
  height: 250px;
  width: 250px;
`;

const Text = styled.p`
  padding: 30px;
`;

const List = styled.ul`
  list-style-type: none;
  margin-bottom: 30px;
`;

const ListItem = styled.li`
  display: inline-block;
  width: 50%;
  margin-top: 15px;
  cursor: pointer;
`;

const SocialIcons = styled.li`
  margin-top: 15px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SideSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories');
      setCategories(res.data);
    };
    getCats();
  }, []);

  return (
    <Container>
      <Item>
        <Title>ABOUT ME</Title>
        <Image src="https://i.ibb.co/p3xdqc3/about-me.jpg" />
        <Text>Some text here.</Text>
      </Item>

      <Item>
        <Title>CATEGORIES</Title>
        <List>
          {categories.map((category) => (
            <Link to={`/?cat=${category.name}`} className="link">
              <ListItem>{category.name}</ListItem>
            </Link>
          ))}
        </List>
      </Item>
      <Item>
        <Title>FOLLOW US</Title>
        <SocialIcons>
          <FacebookIcon
            sx={{
              fontSize: 16,
              ml: 2,
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: 16,
              ml: 2,
            }}
          />
          <PinterestIcon
            sx={{
              fontSize: 16,
              ml: 2,
            }}
          />
          <TwitterIcon
            sx={{
              fontSize: 20,
              ml: 2,
            }}
          />
        </SocialIcons>
      </Item>
    </Container>
  );
};
