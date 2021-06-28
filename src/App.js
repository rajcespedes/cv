import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Demograficos from './demograficos';
import Experiencia from './experiencia';
import Educacion from './educacion';
import Competencias from './competencias';

function App() {
  return (
    <Router>
      <Route path='/' exact component={Demograficos} />
      <Route path='/experiencia' component={Experiencia} />
      <Route path='/educacion' component={Educacion} />
      <Route path='/competencias' component={Competencias}/>
    </Router>
  );
}

export default App;
