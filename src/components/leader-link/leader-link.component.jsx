import { useHistory, useRouteMatch } from 'react-router';
import { LeaderLinkHeader, LeaderLinkContainer } from './leader-link.styles';

const LeaderLink = ({ colour, exemplar_image, name }) => {
  const { text, type } = name[0];
  const { alt, dimensions, url } = exemplar_image;

  const history = useHistory();
  const match = useRouteMatch();

  return (
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
      <LeaderLinkHeader className={type}>{text}</LeaderLinkHeader>
    </LeaderLinkContainer>
  );
};

export default LeaderLink;
