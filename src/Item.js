import { useRecoilState } from "recoil";
import { user as viewAtom } from "./atoms";
import { index as indexAtom } from "./atoms";
import { us as usAtom } from "./atoms";
import {input as inputAtom} from './atoms'
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom';
import App from './App';
import { useCallback, useEffect } from "react";
import { Button } from "@theme-ui/components";
import { merge } from "@theme-ui/core";
import {ee as eeAtom} from './atoms';

function Item() {

    const [users, setUsers] = useRecoilState(viewAtom);
    const [index, setIndex] = useRecoilState(indexAtom);
    const [user, setUser] = useRecoilState(usAtom);
    const [input, setInput] = useRecoilState(inputAtom);
    const { push } = useHistory();
    const [ee, setEE] = useRecoilState(eeAtom);

    const addInput = (e) => {
     setInput(e.currentTarget.textContent);
    
    }
    const addSub = () => {

      const newMode = Object.assign({}, users[ee], {title: input} );
      const newNode = users.map(el => (el.id === index ? Object.assign({},  ...el.title, newMode ) : el))
      setUsers(newNode);

    }

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
              {user && 
            <tr>
            <td>
                {user.id}
               </td>
                <td contentEditable='true'
                    onInput={addInput} suppressContentEditableWarning={true} >
                {user.title}
               </td>
               <td>
                {user.created_at}
               </td>
               <td>
                {JSON.stringify(user.completed)}
               </td>
            </tr>
            }
            </tbody>
          </table>
          <br />
          <Button type = 'submit' variant='primary' className ='btn0' onClick = {() => push('/')}>Powrót</Button><br />
          <Button type = 'submit' variant='primary' className ='btn0' onClick = {addSub}>Zachowaj zmiany</Button>
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
