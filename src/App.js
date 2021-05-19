import './App.css';
import { Link} from 'react-router-dom';
import React, { useState,  useCallback } from 'react';
import Buttonn from './Button';
import Search from  './Search';
import { useRecoilState } from 'recoil';
import { user as userAtom } from "./atoms";
import { us as usAtom } from "./atoms";
import {counterT as counterTAtom} from './atoms';
import {counterF as counterFAtom} from './atoms';
import { search as searchAtom } from "./atoms";
import {  Button} from 'theme-ui';

const App = () =>{


  const [newItem, setNewItem] = useState('');
  const [users, setUsers] = useRecoilState(userAtom);
  const [user, setUser] = useRecoilState(usAtom);
  const [counterT, setCounterT] = useRecoilState(counterTAtom);
  const [counterF, setCounterF] = useRecoilState(counterFAtom);
  const [search, setSearch] = useRecoilState(searchAtom);


const fetchRequest = useCallback(() => {
  fetch('https://gorest.co.in/public-api/todos')
  .then(results => results.json())
  .then(data => {
    setUsers(data.data);
    setCounterT(data.data.filter(o => o.completed === true).length);
    setCounterF(data.data.filter(o => o.completed === false).length);
  });
}, [setUsers, setCounterT, setCounterF]);

const updateNewText = (event)=> {
  event.preventDefault();
  setNewItem(event.target.value);
}

const createNew = () =>{
  if(users){
  setUsers(users.concat({
  id:  Math.floor(Math.random() * (200 - 144 + 1)) + 144, title: newItem, completed: false, created_at:
   `${new Date().toLocaleDateString()}`
  }))
  setSearch(search.concat({title: newItem}));
 }
 }

 const addDelete = (i,j) => { 
  const data = users;
  setUsers([...data.slice(0,i), ...data.slice(i+1)]);
  setCounterT(data.filter(o => o.completed === true).length);
  setCounterF(data.filter(o => o.completed === false).length);
}

const addToggle = (j) => {

  const newState = users.map(obj =>
    obj.id === j ? { ...obj, completed: !obj.completed  } : obj
);
setUsers(newState);

setCounterT(newState.filter(o => o.completed === true).length);
setCounterF(newState.filter(o => o.completed === false).length);
}

const addVar = (item) => {
setUser(item);
}

 
  return (
    <div className="App">
      <header className="App-header">
      <Search />
        <div className = 'counters'> <p>Liczba zadań zakończonych: {counterT}</p>
        <p>Liczba zadań niezakończonych: {counterF}</p></div>
      <div className = 'btns'>
      <Button type = 'submit' variant='primary' className ='btn0' onClick = {fetchRequest}>Wgraj Dane</Button>
      <Buttonn />
      </div>
      <table>
          <thead>
            <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
            </tr>
          </thead>
          <tbody>
    
          { users && users.map((item, i) =>
                  
                  <tr key = {item.id}>
                  <td>
                    {item.id}
                
                    </td>
                     <td>
                     <Link onClick = {(j) => { addVar(item)}} to ='/item'  > {item.title}</Link>
                    </td>
                    <td>
                    
                    <input className = 'inpt1' type ='checkbox' data-id={i} defaultChecked= {item.completed} onChange = {(j) => {
                     addToggle(item.id)}} />
                    </td>
                  
                    <td>
                    <Button type = 'submit' variant='secondary' className ='btn btn-warning' onClick= {addDelete.bind(null, i)}>Ukryj</Button>
                    </td>
                  
                </tr>
      
                )}
              
          </tbody>
        </table>
        <input className = 'inpt2' onChange = {updateNewText} />
       <Button type = 'submit' variant='secondary' className ='btn3' onClick = {createNew}>Dodaj tytuł czynności</Button>
      </header>
       <footer><p>autor: Maciej Zaleski</p>
       </footer>               
    </div>
  );

}
export default App;
