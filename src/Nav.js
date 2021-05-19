import { Router, Switch, Route} from 'react-router-dom';
import Item from './Item';
import App from './App';
import SearchR from './searchR'
import history from './history';
import { ThemeProvider} from 'theme-ui';
import theme from './theme';

const Nav = () => {
    return(
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={App} /> 
          <Route path="/item" component={Item} /> 
          <Route path="/searchR" component={SearchR} /> 
        </Switch>
      </Router>
      </ThemeProvider>
    )
  } 
  export default Nav;