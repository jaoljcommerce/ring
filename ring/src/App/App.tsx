import { Container } from '@mui/material';
import { Redirect, Switch } from 'react-router-dom';
import { Route } from 'react-router';

import PlanetRoute from './features/planet/router/PlanetRoute';
import { ROUTES } from './core/router/routes';

import './App.scss';

const App: React.FC = () => {
  return (
    <Container>
      <Switch>
        <Route exact path={ROUTES.DEFAULT} render={() => <Redirect to={ROUTES.PLANET.LIST} />} />
        {PlanetRoute()}
        <Route render={() => <Redirect to={ROUTES.ERROR_404} />} />
      </Switch>
    </Container>
  );
};

export default App;
