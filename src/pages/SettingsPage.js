import styled from 'styled-components';
import SideSection from '../components/SideSection';
import { AccountCircle } from '@mui/icons-material';

const Container = styled.div``;
const Wrapper = styled.div``;
const Titles = styled.div``;
const UpdateTitle = styled.div``;
const DeleteTitle = styled.div``;
const Form = styled.div``;
const Label = styled.div``;
const ProfilePicture = styled.div``;
const Image = styled.div``;
const LabelForFileInput = styled.div``;
const FileInput = styled.div``;
const NameInput = styled.div``;
const EmailInput = styled.div``;
const PasswordInput = styled.div``;
const SubmitButton = styled.div``;

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
            <Image src="https://i.ibb.co/jwcV8fw/man.jpg" alt=""></Image>
            <LabelForFileInput htmlFor="fileInput">
              <AccountCircle />
            </LabelForFileInput>
            <FileInput id="fileInput" type="file" style={{ display: 'none' }} />
          </ProfilePicture>
          <Label>Username</Label>
          <NameInput type="text" name="name" placeholder="Ahmed" />
          <Label>Email</Label>
          <EmailInput type="email" name="email" placeholder="ahmed@gmail.com" />
          <Label>Password</Label>
          <PasswordInput
            type="password"
            name="password"
            placeholder="Password"
          />
          <SubmitButton type="submit">Update</SubmitButton>
        </Form>
      </Wrapper>
      <SideSection />
    </Container>
  );
};

export default SettingsPage;
