import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FutureComponent from './components/future';
import Blog from './components/blog';
import Tema from './components/tema';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      {/* <FutureComponent /> */}
      <Dashboard/>
    </div>
  );
}

export default App;