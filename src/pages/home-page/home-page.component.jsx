import { useContext } from 'react';
import LeaderLink from '../../components/leader-link/leader-link.component';
import { PrismicContext } from '../../context/prismic.context';

import Header from '../../components/header/header.component';
import { HomePageContainer, LeadersContainer } from './home-page.styles';

const HomePage = () => {
  const { types } = useContext(PrismicContext);

  return (
    <HomePageContainer>
      <Header />
      <LeadersContainer id='leaders-container' className='leaders-container'>
        {types.map((props, index) => (
          <LeaderLink
            id={index}
            typesLength={types.length}
            key={props.name[0].text}
            {...props}
          />
        ))}
      </LeadersContainer>
    </HomePageContainer>
  );
};

export default HomePage;
