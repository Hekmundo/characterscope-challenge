import { Route, Switch } from 'react-router-dom';
import PrismicProvider from './context/prismic.context';

import HomePage from './pages/home-page/home-page.component';
import LeaderPage from './pages/leader-page/leader-page.component';
import { GlobalStyle } from './global.styles';

const App = () => {
  return (
    <PrismicProvider>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path={`/:leaderId`} component={LeaderPage} />
      </Switch>
    </PrismicProvider>
  );
};

export default App;
