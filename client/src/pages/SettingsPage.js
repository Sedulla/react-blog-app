import styled from 'styled-components';
import SideSection from '../components/SideSection';
import { AccountCircle } from '@mui/icons-material';

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

const SettingsPage = () => {
  return (
    <Container>
      <Wrapper>
        <Titles>
          <UpdateTitle>Update Your Account</UpdateTitle>
          <DeleteTitle>Delete Your Account</DeleteTitle>
        </Titles>
        <Form>
          <Label>Profile Picture</Label>
          <ProfilePicture>
            <PPImage src="https://i.ibb.co/jwcV8fw/man.jpg" alt=""></PPImage>
            <LabelForFileInput htmlFor="fileInput">
              <AccountCircle
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
            <FileInput id="fileInput" type="file" style={{ display: 'none' }} />
          </ProfilePicture>
          <Label>Username</Label>
          <Input type="text" name="name" placeholder="Ahmed" />
          <Label>Email</Label>
          <Input type="email" name="email" placeholder="ahmed@gmail.com" />
          <Label>Password</Label>
          <Input type="password" name="password" placeholder="Password" />
          <SubmitButton type="submit">Update</SubmitButton>
        </Form>
      </Wrapper>
      <SideSection />
    </Container>
  );
};

export default SettingsPage;
