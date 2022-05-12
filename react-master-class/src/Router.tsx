import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Coin from './rountes/Coin';
import Coins from './rountes/Coins';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;