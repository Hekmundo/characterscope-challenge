import { useContext } from 'react';
import { PrismicContext } from '../../context/prismic.context';

import LeaderLink from '../leader-link/leader-link.component';
import { LeadersContainer } from './leader-preview.styles';

const LeadersPreview = () => {
  const { types } = useContext(PrismicContext);

  return (
    <LeadersContainer id='leaders-container'>
      {types.map((props) => (
        <LeaderLink key={props.name[0].text} {...props} />
      ))}
    </LeadersContainer>
  );
};

export default LeadersPreview;
