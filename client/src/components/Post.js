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

const Post = ({ img }) => {
  return (
    <Container>
      <Image src={img} alt=""></Image>
      <Info>
        <Categories>
          <Category>
            <Link className="link" to="/post?/cat/Life">
              Life
            </Link>
          </Category>
          <Category>
            <Link className="link" to="/post?/cat/Life">
              Plant
            </Link>
          </Category>
        </Categories>
        <Title>
          <Link className="link" to="/post/abc">
            Lorem ipsum dolor sit amet.
          </Link>
        </Title>
        <Hr />
        <PDate>1 hour ago</PDate>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, earum
          porro sint hic voluptate doloremque iusto ratione molestiae ex. Omnis
          natus, corporis deserunt inventore facere aliquid vero nihil quis
          porro sint hic voluptate doloremque iusto ratione molestiae ex. Omnis
          rerum hic voluptate doloremque iusto rat
        </Description>
      </Info>
    </Container>
  );
};

export default Post;
