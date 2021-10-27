import { useState } from 'react';
import styled from 'styled-components';
import { axiosInstance } from '../config';

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-size: cover;
`;

const Title = styled.span`
  font-size: 50px;
`;

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 10px 0;
`;

const Input = styled.input`
  padding: 10px;
  background-color: #fff;
  border: none;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  cursor: pointer;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 10px;
`;

const LoginButton = styled(Button)`
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #f08080;
`;

const RegisterButton = styled(Button)`
  margin-top: 20px;
  background-color: #008080;
  text-align: center;
`;

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await axiosInstance.post('/auth/register', {
        username,
        email,
        password,
      });
      res.data && window.location.replace('/login');
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Container>
      <Title>Register</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Username</Label>
        <Input
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label>Email</Label>
        <Input
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <RegisterButton type="submit">Register</RegisterButton>
      </Form>
      <LoginButton>Login</LoginButton>
      {error && (
        <span style={{ color: 'red', marginTop: '10px' }}>
          Something went wrong!
        </span>
      )}
    </Container>
  );
};

export default RegisterPage;
