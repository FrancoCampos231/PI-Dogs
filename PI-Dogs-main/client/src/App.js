import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Landing from './Views/Landing/Landing';
import Home from './Views/Home/Home';
import Create from './Views/Create/Create';
import Detail from './Views/Detail/Detail';


function App() {


  return (
    <div>
      <BrowserRouter>
        <Route path={'*'} component={NavBar}/>
      <Switch>
        <Route exact path={'/'} component={Landing}/>
        <Route path={'/home'} component={Home}/>
        <Route path={'/create'} component={Create}/>
        <Route path={'/detail'} component={Detail}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
