import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  FaPinterest as PinterestIcon,
  FaTwitter as TwitterIcon,
  FaFacebook as FacebookIcon,
  FaInstagram as InstagramIcon,
  FaSearch as SearchIcon,
} from 'react-icons/fa';
import { useContext } from 'react';
import { Context } from '../context/Context';

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

export const Nav = () => {
  const { user, dispatch } = useContext(Context);
  // const PF = 'http://localhost:7000/images/';

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <Container>
      <Left>
        <FacebookIcon
          sx={{
            fontSize: 20,
            mr: 1,
            color: '#444',
            cursor: 'pointer',
          }}
        />
        <InstagramIcon
          sx={{
            fontSize: 20,
            mr: 1,
            color: '#444',
            cursor: 'pointer',
          }}
        />
        <PinterestIcon
          sx={{
            fontSize: 20,
            mr: 1,
            color: '#444',
            cursor: 'pointer',
          }}
        />
        <TwitterIcon
          sx={{
            fontSize: 20,
            mr: 1,
            color: '#444',
            cursor: 'pointer',
          }}
        />
      </Left>
      <Center>
        <Menu>
          <MenuItem>
            <Link className="link" to="/">
              HOME
            </Link>
          </MenuItem>
          <MenuItem>ABOUT</MenuItem>
          <MenuItem>CONTACT</MenuItem>
          <MenuItem>
            <Link className="link" to="/write">
              WRITE
            </Link>
          </MenuItem>
          <MenuItem onClick={handleLogout}>{user && 'LOGOUT'}</MenuItem>
        </Menu>
      </Center>
      <Right>
        {user ? (
          <Link className="link" to="/settings">
            {/* <Image src={PF + user.profilePicture}></Image> */}
          </Link>
        ) : (
          <Menu>
            <MenuItem>
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="link" to="/signup">
                REGISTER
              </Link>
            </MenuItem>
          </Menu>
        )}
        <SearchIcon
          sx={{
            fontSize: 24,
            color: '#666',
            cursor: 'pointer',
          }}
        />
      </Right>
    </Container>
  );
};
