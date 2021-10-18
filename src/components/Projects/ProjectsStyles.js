import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  background-color: #d4e2d4;
  border-radius: 10px;
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  padding: 10px 0;
  font-size: Large;
  font-weight: 700;
  text-align: center;
  z-index: 20;
  width: 100%;
  color: #11324d;
`;

export const TitleContentOne = styled.div`
  margin-top: 10px;
  text-align: center;
  z-index: 20;
  width: 100%;
  color: #11324d;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  color: #11324d;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? '3rem' : '2rem')};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  color: #324a32;
  width: 100%;
  font-family: 'Raleway', sans-serif;
  font-style: 2rem;
  line-height: 16px;
  padding: 0 50px;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const ReadMoreButton = styled.button`
  color: #113cfc;
  background-color: transparent;
  text-align: center;
  border: none;
  cursor: pointer;

`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #cee5d0;
  font-size: 1.5rem;
  width: 10rem;
  padding: 1rem 1.5rem;
  background: #0f1624;
  border-radius: 50px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;

export const StyledDiv = styled.div`
  padding: 10px 0;
  height: 75px;
  margin-top: 2rem;
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top .5rem;
`;
export const Tag = styled.li`
  margin: 0 0;
  padding: 0 0;
  font-size: Large;
  color: #11324d;
  font-size: 1.5rem;
  font-weight: 500;
`;
