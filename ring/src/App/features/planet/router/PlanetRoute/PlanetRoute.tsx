import { Route } from 'react-router';

import { ROUTES } from '../../../../core/router/routes';
import PlanetList from '../../PlanetList';

const PlanetRoute = () => [
  <Route path={ROUTES.PLANET.LIST} key={ROUTES.PLANET.LIST} component={PlanetList} />,
];

export default PlanetRoute;
