import { Add } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 50px;
`;

const Image = styled.img`
  margin-left: 150px;
  width: 70vw;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
`;

const Form = styled.form`
  position: relative;
`;

const FormGroup = styled.div`
  margin-left: 150px;
  display: flex;
  align-items: center;
`;

const LabelForFileInput = styled.label``;
const FileInput = styled.input``;

const TitleInput = styled.input`
  font-size: 30px;
  border: none;
  padding: 20px;
  width: 70vw;

  &::placeholder {
    color: rgb(189, 185, 185);
    font-weight: 400;
  }

  &:focus {
    outline-style: none;
  }
`;

const TextInput = styled.textarea`
  border: none;
  padding: 20px;
  width: 70vw;
  height: 100vh;
  font-size: 20px;
  font-family: inherit;

  &::placeholder {
    color: rgb(189, 185, 185);
    font-weight: 400;
  }

  &:focus {
    outline-style: none;
  }
`;

const SubmitButton = styled.button`
  position: absolute;
  top: 20px;
  right: 50px;
  color: #fff;
  background-color: teal;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Write = () => {
  return (
    <Container>
      <Image
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <Form>
        <FormGroup>
          <LabelForFileInput htmlFor="fileInput">
            <Add
              sx={{
                width: 25,
                height: 25,
                fontSize: 20,
                border: '1px solid',
                borderRadius: '50%',
                color: 'rgb(129,125,125)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            />
          </LabelForFileInput>
          <FileInput id="fileInput" type="file" style={{ display: 'none' }} />
          <TitleInput type="text" placeholder="Title" autoFocus={true} />
        </FormGroup>
        <FormGroup>
          <TextInput
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </FormGroup>
        <SubmitButton type="submit">Publish</SubmitButton>
      </Form>
    </Container>
  );
};

export default Write;
