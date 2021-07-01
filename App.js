import NavBar from './Components/NavBar';
import Welcome from './Components/Welcome';
import AllUsers from './Components/AllUsers';
import AddUsers from './Components/AddUsers';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import EditUsers from './Components/EditUser';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/all" component={AllUsers}/>
        <Route exact path="/add" component={AddUsers}/>
        <Route exact path="/edit/:id" component={EditUsers}/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
