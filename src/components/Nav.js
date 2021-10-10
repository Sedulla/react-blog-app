import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  Search,
} from '@mui/icons-material';

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 999;
  font-family: 'Montserrat', sans-serif;
`;

const Left = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  flex: 6;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-right: 20px;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;

  &:hover {
    color: #cccf;
  }
`;

const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  cursor: pointer;
`;

const Nav = () => {
  // const user = true;
  return (
    <Container>
      <Left>
        <Facebook
          sx={{
            fontSize: 20,
            mr: 10,
            color: '#444',
            cursor: 'pointer',
          }}
        />
        <Instagram
          sx={{
            fontSize: 20,
            mr: 10,
            color: '#444',
            cursor: 'pointer',
          }}
        />
        <Pinterest
          sx={{
            fontSize: 20,
            mr: 10,
            color: '#444',
            cursor: 'pointer',
          }}
        />
        <Twitter
          sx={{
            fontSize: 20,
            mr: 10,
            color: '#444',
            cursor: 'pointer',
          }}
        />
      </Left>
      <Center>
        <Menu>
          <MenuItem>
            <Link to="/">HOME</Link>
          </MenuItem>
          <MenuItem>ABOUT</MenuItem>
          <MenuItem>CONTACT</MenuItem>
          <MenuItem>
            <Link to="/write">WRITE</Link>
          </MenuItem>
          <MenuItem>LOGOUT</MenuItem>
        </Menu>
      </Center>
      <Right>
        <Link to="/settings">
          <Image src=""></Image>
        </Link>
        <Menu>
          <MenuItem>
            <Link to="/login">LOGIN</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/register">REGISTER</Link>
          </MenuItem>
        </Menu>
        <Search
          sx={{
            fontSize: 18,
            color: '#666',
            cursor: 'pointer',
          }}
        />
      </Right>
    </Container>
  );
};

export default Nav;
