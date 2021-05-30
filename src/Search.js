import React, { useState, useEffect } from 'react';
import { useRecoilState} from "recoil";
import { ee as eAtom } from "./atoms";
import { user as viewAtom } from "./atoms";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import SearchR from './searchR';
import { search as searchAtom } from "./atoms";
import { index as indexAtom } from "./atoms";
import { ThemeProvider, Button} from 'theme-ui';
import theme from './theme';
import './App.css';

function Search() {

    const [e, setE] = useRecoilState(eAtom);
    const [search, setSearch] = useRecoilState(searchAtom);
    const [loading, setloading] = useState(false);
    const [index, setIndex] = useRecoilState(indexAtom);
    const [users, setUsers] = useRecoilState(viewAtom);

    const handleChange = event => {
        event.preventDefault();
        setE(event.target.value);
     
      };

      const loadingS = () => {
        setloading(true);
        setSearch(users.filter(person =>
          person.title.toLowerCase().includes(e)
        ));
      };


      const addVar = (item, i) => {
        console.log(item[i])
        //setSearch(item);
        setIndex(item);
        }

        
    return (
        <div>
         <input
        type="text"
        placeholder="Szukaj"
        onChange={handleChange}
        className ='inpt0'
      />
         <Button type = 'submit' className ='btn btn-primary' onClick = {loadingS}>Szukaj</Button>
      
         { loading && search.map((item, i) => (
          <ul className = 'list0' key = {i}>
            <li><Link onClick = {(j) => { addVar(item, i)}} to = '/searchR'>{item.title}</Link></li>
            
          </ul>
        ))}
       <Router>
            <Switch>
            <Route exact path="/searchR" component={SearchR}  />
            </Switch>
       </Router>
      </div>
    );
  }
  export default Search;