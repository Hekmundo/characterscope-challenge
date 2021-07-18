import { useContext } from 'react';
import { useRouteMatch } from 'react-router';
import { PrismicContext } from '../../context/prismic.context';

import Navbar from '../../components/navbar/navbar.component';
import LeaderDescription from '../../components/leader-description/leader-description.component';
import Footer from '../../components/footer/footer.component';

const LeaderPage = () => {
  const { types } = useContext(PrismicContext);
  const match = useRouteMatch();

  const currentLeader = types.find((leaderType) => {
    const nameFormatted = leaderType.name[0].text
      .replace(/ /g, '')
      .toLowerCase();

    return nameFormatted === match.params.leaderId;
  });

  return (
    <>
      <Navbar />
      <LeaderDescription leader={currentLeader} />
      <Footer />
    </>
  );
};

export default LeaderPage;
