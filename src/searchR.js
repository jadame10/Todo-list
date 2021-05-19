import { useRecoilState } from "recoil";
import { us as usAtom } from "./atoms";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import App from './App';
import { search as searchAtom } from "./atoms";
import { index as indexAtom } from "./atoms";

function SearchR() {

    const [search, setSearch] = useRecoilState(searchAtom);
    const [index, setIndex] = useRecoilState(indexAtom);
    console.log(index);
    return (

        <div className="App">
            {console.log(search)}
            {console.log(index)}
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
                {index.id}
               </td>
                <td>
                {index.title}
               </td>
               <td>
                {index.created_at}
               </td>
               <td>
                {JSON.stringify(index.completed)}
               </td>
            </tr>
            </tbody>
          </table>
          <Link className = 'l0' to = '/'>Powrót</Link>
        </header>
        <Router>
            <Switch>
            <Route exact path="/" component={App}  />
            </Switch>
       </Router>
      </div>

    );
  }
  export default SearchR;
