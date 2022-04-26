import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material';
import { useState } from 'react';
import { useEffect } from 'react';
import { axiosInstance } from '../utils/config';

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
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get('./categories');
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <Container>
      <Item>
        <Title>ABOUT ME</Title>
        <Image src="https://i.ibb.co/p3xdqc3/about-me.jpg"></Image>
        <Text>
          Some text here.
        </Text>
      </Item>

      <Item>
        <Title>CATEGORIES</Title>
        <List>
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <ListItem>{c.name}</ListItem>
            </Link>
          ))}
        </List>
      </Item>
      <Item>
        <Title>FOLLOW US</Title>
        <SocialIcons>
          <Facebook
            sx={{
              fontSize: 16,
              ml: 2,
            }}
          />
          <Instagram
            sx={{
              fontSize: 16,
              ml: 2,
            }}
          />
          <Pinterest
            sx={{
              fontSize: 16,
              ml: 2,
            }}
          />
          <Twitter
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
