import { useHistory, useRouteMatch } from 'react-router';
import { Link } from 'react-scroll';

import { ArrowContainer } from '../../global.styles';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
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
      <ArrowContainer top>
        <Link to={id !== 0 ? id - 1 : 'header'} smooth={true}>
          <Arrow />
        </Link>
      </ArrowContainer>

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

      {id !== typesLength - 1 ? (
        <ArrowContainer bottom>
          <Link to={id + 1} smooth={true}>
            <Arrow />
          </Link>
        </ArrowContainer>
      ) : null}
    </LeaderTypeContainer>
  );
};

export default LeaderLink;
