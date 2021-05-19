import { useRecoilState } from "recoil";
import { user as viewAtom } from "./atoms";
import { index as indexAtom } from "./atoms";
import { us as usAtom } from "./atoms";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import App from './App';

function Item() {

    const [users, setUsers] = useRecoilState(viewAtom);
    const [index, setIndex] = useRecoilState(indexAtom);
    const [user, setUser] = useRecoilState(usAtom);
 
  
    return (

        <div className="App">
        <header className="App-header">
        <table>
            <thead>
              <tr>
              <th>Id</th>
              <th>Text</th>
              <th>Date</th>
              <th>Completed</th>
              </tr>
            </thead>
            <tbody>
            <tr>
            <td>
                {user.id}
               </td>
                <td>
                {user.title}
               </td>
               <td>
                {user.created_at}
               </td>
               <td>
                {JSON.stringify(user.completed)}
               </td>
            </tr>
            </tbody>
          </table>
          <Link to = '/' className = 'l0'>Powrót</Link>
        </header>
        <Router>
            <Switch>
            <Route exact path="/" component={App}  />
            </Switch>
       </Router>
      </div>

    );
  }
  export default Item;
