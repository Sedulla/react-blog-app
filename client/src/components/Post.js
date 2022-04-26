import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 385px;
  margin: 0px 25px 40px 25px;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 385px;
  height: 280px;
  object-fit: cover;
  border-radius: 7px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Categories = styled.div``;

const Category = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 11px;
  color: #be9656;
  line-height: 19px;
  margin-top: 15px;
  margin-right: 10px;
  cursor: pointer;
`;

const Title = styled.span`
  font-family: 'Varela', Arial, sans-serif;
  font-size: 24px;
  font-weight: 900;
  margin-top: 15px;
  cursor: pointer;
`;

const Hr = styled.hr``;

const PDate = styled.span`
  font-family: 'Raleway', serif;
  font-style: italic;
  font-size: 13px;
  font-weight: 400;
  color: #999;
  margin-top: 15px;
`;

const Description = styled.p`
  font-family: 'Varela', Arial, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #444;
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const Post = ({ post }) => {
  const PF = 'http://localhost:5000/images/';

  return (
    <Container>
      {post.photo && <Image src={PF + post.photo} alt="" />}
      <Info>
        <Categories>
          {post.categories.map((c) => (
            <Category>{c.name}</Category>
          ))}
        </Categories>
        <Link className="link" to={`/post/${post._id}`}>
          <Title>{post.title}</Title>
        </Link>
        <Hr />
        <PDate>{new Date(post.date).toDateString()}</PDate>
        <Description>{post.desc}</Description>
      </Info>
    </Container>
  );
};
