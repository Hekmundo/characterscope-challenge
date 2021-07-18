import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home-page/home-page.component';
import LeaderPage from './pages/leader-page/leader-page.component';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';
import { GlobalStyle } from './global.styles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path={`/:leaderId`} component={LeaderPage} />
      </Switch>
    </>
  );
};

export default App;
