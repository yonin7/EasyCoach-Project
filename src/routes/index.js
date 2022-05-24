
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayoutWrapper from '../layouts/Main';
import Pitch from '../pages/Pitch';
import Graphs from '../pages/Graphs';
import NotFound from '../pages/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <MainLayoutWrapper exact path="/" component={Graphs} />
      <MainLayoutWrapper exact path="/Pitch" component={Pitch} />
      <Route path='*' component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;