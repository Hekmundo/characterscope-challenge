import { useHistory } from 'react-router-dom';

import { getContentByType } from './leader-description.utils';
import {
  LeaderDescriptionContainer,
  BackButton,
  LeaderHeader,
  ListSection,
  DescriptionParagraph,
  LeaderImage,
  List,
  ListItem,
  HeroContainer,
  ParagraphHeader,
  ListHeader,
  HeaderUnderline,
  StyledArrow,
  ParagraphAndListContainer,
  ParagraphSection,
} from './leader-description.styles';

const LeaderDescription = ({ leader }) => {
  const history = useHistory();

  const { name, exemplar_image, description, colour } = leader;
  const { url, dimensions, alt } = exemplar_image;

  const heading3 = getContentByType(description, 'heading3');
  const heading4 = getContentByType(description, 'heading4');
  const paragraph = getContentByType(description, 'paragraph');
  const listItems = getContentByType(description, 'list-item', true);

  return (
    <LeaderDescriptionContainer>
      <HeroContainer>
        <LeaderImage
          width={dimensions.width}
          height={dimensions.height}
          src={url}
          alt={alt}
        />
        <LeaderHeader colour={colour}>{name[0].text}</LeaderHeader>
      </HeroContainer>

      <ParagraphAndListContainer>
        <ParagraphSection>
          <ParagraphHeader className={heading3.type}>
            {heading3.text}
          </ParagraphHeader>
          <DescriptionParagraph>{paragraph.text}</DescriptionParagraph>
        </ParagraphSection>

        <ListSection colour={colour}>
          <ListHeader className={heading4.type}>
            {heading4.text}
            <HeaderUnderline colour={colour} />
          </ListHeader>
          <List>
            {listItems.map((li) => (
              <ListItem key={li.text} className={li.type}>
                {li.text}
              </ListItem>
            ))}
          </List>
        </ListSection>
      </ParagraphAndListContainer>

      <BackButton colour={colour} onClick={() => history.goBack()}>
        <StyledArrow />
        <span>Back</span>
      </BackButton>
    </LeaderDescriptionContainer>
  );
};

export default LeaderDescription;
