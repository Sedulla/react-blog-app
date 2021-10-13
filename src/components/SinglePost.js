import { Delete, Edit } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  flex: 9;
`;

const Wrapper = styled.div`
  padding: 20px;
  padding-right: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  object-fit: cover;
`;

const Title = styled.h1`
  text-align: center;
  margin: 10px;
  font-size: 28px;
  font-family: serif;
  font-weight: normal;
`;
const EditIcons = styled.div`
  float: right;
  font-size: 16px;
`;

const Info = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #be9656;
  font-family: 'Varela', Arial, sans-serif;
`;

const Span = styled.span``;

const Author = styled.b`
  margin-left: 5px;
`;

const Description = styled.p`
  color: #667;
  font-size: 18px;
  line-height: 25px;

  &::first-letter {
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600;
  }
`;
const Br = styled.br``;

const SinglePost = () => {
  return (
    <Container>
      <Wrapper>
        <Image src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <Title>
          Lorem ipsum dolor
          <EditIcons>
            <Edit sx={{ ml: 1, cursor: 'pointer', color: 'teal' }} />
            <Delete sx={{ ml: 1, cursor: 'pointer', color: 'tomato' }} />
          </EditIcons>
        </Title>
        <Info>
          <Span>
            Author:
            <Author>
              <Link style={{ textDecoration: 'none', color: 'inherit' }}>
                Sedulla
              </Link>
            </Author>
          </Span>
          <Span>1 day ago</Span>
        </Info>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vero
          perferendis temporibus officia facere modi, consequuntur explicabo est
          rerum, quae alias ab accusamus nisi tempore eligendi quidem. Quaerat
          aliquid velit perspiciatis cumque, tenetur facilis magni soluta, odit
          in amet eius corporis eaque impedit quibusdam magnam odio ad ducimus
          incidunt dolorum unde? Accusamus eum fugit quae quasi, modi nobis
          dignissimos culpa veritatis animi consequatur dolorem? Temporibus,
          illo? Voluptatem beatae error libero dignissimos, reiciendis, qui eos
          aspernatur eligendi ea odio totam nisi eveniet officia aliquam tenetur
          illo? Voluptatem beatae error libero dignissimos, reiciendis, qui eos
          in amet eius corporis eaque impedit quibusdam magnam odio ad ducimus
          illo? Voluptatem beatae error libero dignissimos, reiciendis, qui eos
          illo? Voluptatem beatae error libero dignissimos, reiciendis, qui eos
          in amet eius corporis eaque impedit quibusdam magnam odio ad ducimus
          dolor est facilis! Praesentium quia aut.
          <Br />
          <Br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vero
          perferendis temporibus officia facere modi, consequuntur explicabo est
          rerum, quae alias ab accusamus nisi tempore eligendi quidem. Quaerat
          aliquid velit perspiciatis cumque, tenetur facilis magni soluta, odit
          in amet eius corporis eaque impedit quibusdam magnam odio ad ducimus
          incidunt dolorum unde? Accusamus eum fugit quae quasi, modi nobis
          dignissimos culpa veritatis animi impedit consequatur dolorem?
          Temporibus, illo? Voluptatem, reiciendis, qui eos aspernatur eligendi
          aliquam tenetur dolor est facilis! Praesentium quia aut asperiores
          eos, rerum dicta doloribus in sint!
        </Description>
      </Wrapper>
    </Container>
  );
};

export default SinglePost;
