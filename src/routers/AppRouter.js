import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            path='/auth'
            component={ JournalScreen }
          />

          <Route
            exact
            path='/'
            component={ AuthRouter }
          />

          <Redirect to='/auth/login' />
        </Switch>
      </div>
    </Router>
  )
}
