import { useContext } from 'react';
import { useRouteMatch, useHistory } from 'react-router';
import { PrismicContext } from '../../context/prismic.context';
import { Link } from 'react-scroll';

import {
  Title,
  HeroContainer,
  ArrowContainer,
  HeroImage,
  HiddenImage,
  ImageContainer,
} from './hero.styles';
import Logo from '../../assets/logo.png';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

const Hero = () => {
  const { title, types } = useContext(PrismicContext);
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <HeroContainer>
      <ImageContainer>
        <HeroImage src={Logo} alt='CharacterScope Logo' />

        {types.map((leaderType, index) => {
          const {
            exemplar_image: { url, alt },
          } = leaderType;
          const { text } = leaderType.name[0];

          return (
            <HiddenImage
              key={`HiddenImage${index}`}
              src={url}
              alt={alt}
              colour={leaderType.colour}
              onClick={() =>
                history.push(
                  `${match.url}${text.replace(/ /g, '').toLowerCase()}`
                )
              }
            />
          );
        })}
      </ImageContainer>

      <Title className={title[0].type}>{title[0].text}</Title>
      <ArrowContainer bottom>
        <Link to='leaders-container' smooth={true}>
          <Arrow />
        </Link>
      </ArrowContainer>
    </HeroContainer>
  );
};

export default Hero;
