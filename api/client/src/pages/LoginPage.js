import { useContext, useRef } from 'react';
import styled from 'styled-components';
import { axiosInstance } from '../config';
import { Context } from '../context/Context';

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
    url('https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
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
  margin-top: 20px;
  background-color: #f08080;
  text-align: center;

  &:disabled {
    cursor: not-allowed;
    background-color: rgb(252, 173, 173);
  }
`;

const RegisterButton = styled(Button)`
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #008080;
`;

const LoginPage = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axiosInstance.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Username</Label>
        <Input type="text" placeholder="Enter your username..." />
        <Label>Password</Label>
        <Input type="password" placeholder="Enter your password..." />
        <LoginButton type="submit" disabled={isFetching}>
          Login
        </LoginButton>
      </Form>
      <RegisterButton>Register</RegisterButton>
    </Container>
  );
};

export default LoginPage;
