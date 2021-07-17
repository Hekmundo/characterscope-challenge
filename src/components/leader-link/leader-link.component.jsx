import { useHistory, useRouteMatch } from 'react-router';

import {
  LeaderLinkHeader,
  LeaderLinkContainer,
  LeaderTypeContainer,
  HeaderUnderline,
} from './leader-link.styles';

const LeaderLink = ({ colour, exemplar_image, name, id, typesLength }) => {
  const { text, type } = name[0];
  const { alt, dimensions, url } = exemplar_image;

  const history = useHistory();
  const match = useRouteMatch();

  return (
    <LeaderTypeContainer id={id}>
      <LeaderLinkContainer
        colour={colour}
        onClick={() =>
          history.push(`${match.url}${text.replace(/ /g, '').toLowerCase()}`)
        }
      >
        <img
          style={{ width: dimensions.width, height: dimensions.height }}
          src={url}
          alt={alt}
        />
        <LeaderLinkHeader className={type}>
          {text}
          <HeaderUnderline colour={colour} />
        </LeaderLinkHeader>
      </LeaderLinkContainer>
    </LeaderTypeContainer>
  );
};
export default LeaderLink;
