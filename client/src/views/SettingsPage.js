import styled from 'styled-components';
import { SideSection } from '../components/SideSection';
import { FaFacebook as FacebookIcon} from 'react-icons/fa';
import { useState } from 'react';
import { useContext } from 'react';
import { apiBaseUrl } from '../utils/config';
import axios from 'axios';

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  flex: 9;
  padding: 20px;
`;

const Titles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UpdateTitle = styled.span`
  font-size: 30px;
  margin-bottom: 20px;
  color: #f08080;
`;

const DeleteTitle = styled.span`
  color: #ff0000;
  font-size: 12px;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 20px;
  margin-top: 20px;
`;

const LabelForFileInput = styled.label``;

const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const PPImage = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 20px;
  object-fit: cover;
`;

const Input = styled.input`
  color: gray;
  margin-top: 10px;
  margin-top: 10px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #d3d3d3;
`;

const FileInput = styled(Input)`
  width: 30%;
`;

const SubmitButton = styled.button`
  align-self: center;
  width: 150px;
  border: none;
  color: #fff;
  background-color: #008080;
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #017272;
  }
`;

const Span = styled.span``;

export const SettingsPage = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(useContext);
  // const PF = 'http://localhost:7000/images/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_START' });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profilePicture = filename;

      try {
        await axios.post('/upload', data);
      } catch (err) {}
    }
    try {
      const res = await axios.put('/users/' + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'UPDATE_FAILURE' });
    }
  };

  return (
    <Container>
      <Wrapper>
        <Titles>
          <UpdateTitle>Update Your Account</UpdateTitle>
          <DeleteTitle>Delete Your Account</DeleteTitle>
        </Titles>
        <Form onSubmit={handleSubmit}>
          <Label>Profile Picture</Label>
          <ProfilePicture>
            <PPImage
              // src={file ? URL.createObjectURL(file) : PF + user.profilePicture}
              alt=""
            ></PPImage>
            <LabelForFileInput htmlFor="fileInput">
              <FacebookIcon
                sx={{
                  width: '20px',
                  height: '20px',
                  p: '5px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: 'none',
                  borderRadius: '50%',
                  ml: '10px',
                  color: '#fff',
                  backgroundColor: '#f08080',
                  cursor: 'pointer',
                }}
              />
            </LabelForFileInput>
            <FileInput
              id="fileInput"
              type="file"
              style={{ display: 'none' }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </ProfilePicture>
          <Label>Username</Label>
          <Input
            type="text"
            name="name"
            placeholder="Ahmed"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="ahmed@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitButton type="submit">Update</SubmitButton>
          {success && (
            <Span
              style={{ color: 'green', textAlign: 'center', marginTop: '20px' }}
            >
              Profile has been updated ...
            </Span>
          )}
        </Form>
      </Wrapper>
      <SideSection />
    </Container>
  );
};
