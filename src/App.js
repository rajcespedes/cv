import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Demograficos from './demograficos';
import Experiencia from './experiencia';
import Educacion from './educacion';
import Competencias from './competencias';
import Resumen from './resumen';
import NewDemo from './newDemo';
import ToCheck from './toCheck';
import Pdf from './pdf';



var browserHistory = [];

function App() {
  return (
    <Router history={browserHistory}>
      <Route path='/' exact component={Demograficos} />
      {/* <Route path='/' exact component={NewDemo} /> */}
      <Route path='/experiencia' component={Experiencia} />
      <Route path='/educacion' component={Educacion} />
      <Route path='/competencias' component={Competencias}/>
      <Route path='/resumen' component={Resumen} />
    </Router>
  );
}

export default App;
