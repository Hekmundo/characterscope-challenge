import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home-page/home-page.component';
import LeaderPage from './pages/leader-page/leader-page.component';
import { GlobalStyle } from './global.styles';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/leader' component={LeaderPage} />
      </Switch>
    </div>
  );
};

export default App;
