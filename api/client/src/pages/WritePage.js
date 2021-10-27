import { Add } from '@mui/icons-material';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { axiosInstance } from '../config';
import { Context } from '../context/Context';

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
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState('');
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.name,
      title,
      desc,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;

      try {
        await axiosInstance.post('/upload', data);
      } catch (err) {}
    }
    try {
      const res = await axiosInstance.post('/posts', newPost);
      window.location.replace('/post/' + res.data._id);
    } catch (err) {}
  };

  return (
    <Container>
      {file && <Image src={URL.createObjectURL(file)} alt="" />}
      <Form onSubmit={handleSubmit}>
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
          <FileInput
            id="fileInput"
            type="file"
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <TitleInput
            type="text"
            placeholder="Title"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <TextInput
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e) => setDesc(e.target.value)}
          />
        </FormGroup>
        <SubmitButton type="submit">Publish</SubmitButton>
      </Form>
    </Container>
  );
};

export default Write;
