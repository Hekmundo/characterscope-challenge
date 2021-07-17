import { useContext } from 'react';
import LeaderLink from '../../components/leader-link/leader-link.component';
import { PrismicContext } from '../../context/prismic.context';

import {
  HomePageContainer,
  HomePageHeader,
  LeadersContainer,
} from './home-page.styles';

const HomePage = () => {
  const { title, types } = useContext(PrismicContext);

  return (
    <HomePageContainer>
      <HomePageHeader className={title[0].type}>{title[0].text}</HomePageHeader>
      <LeadersContainer className='leaders-container'>
        {types.map((props) => (
          <LeaderLink key={props.name[0].text} {...props} />
        ))}
      </LeadersContainer>
    </HomePageContainer>
  );
};

export default HomePage;
