import React, { useState } from 'react';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  TitleContentOne,
  UtilityList,
  ReadMoreButton,
  StyledDiv,
  Img,
} from './ProjectsStyles';

const Project = ({ id, image, title, description, tags, demo, github }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <BlogCard key={id}>
      <Img src={image} />
      <TitleContentOne>
        <HeaderThree title>{title}</HeaderThree>
        <Hr />
      </TitleContentOne>
      <CardInfo>
        {readMore ? description : `${description.substring(0, 0)}`}
        <ReadMoreButton onClick={() => setReadMore(!readMore)}>
          {readMore ? 'show less' : 'Read More'}
        </ReadMoreButton>
      </CardInfo>
      <StyledDiv>
        <TitleContent>Stack</TitleContent>
        <TagList>
          {tags.map((tag, idx) => (
            <Tag key={idx}>{tag}</Tag>
          ))}
        </TagList>
      </StyledDiv>
      <UtilityList>
        <ExternalLinks target="_blank" href={demo}>
          Demo
        </ExternalLinks>
        <ExternalLinks target="_blank" href={github}>
          Github
        </ExternalLinks>
      </UtilityList>
    </BlogCard>
  );
};

export default Project;
