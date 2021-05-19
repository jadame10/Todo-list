
import { useRecoilState } from "recoil";
import { user as viewAtom } from "./atoms";
import { ee as eAtom } from "./atoms";
import {counterT as counterTAtom} from './atoms';
import { Button} from 'theme-ui';


function Buttonn() {
    const [users, setUsers] = useRecoilState(viewAtom);
    const [counterT, setCounterT] = useRecoilState(counterTAtom);
    const [e, setE] = useRecoilState(eAtom);

    const checkItem = () =>{

        setUsers(users.filter(item => item.completed === false));
          console.log(e);
          setCounterT(0);
          //setCounterF(e.filter(item => item === false).length);
      }
  
    return (
      <Button className = 'btn1' onClick={checkItem}>
      Ukryj zaznaczone
      </Button>
    );
  }
  export default Buttonn;