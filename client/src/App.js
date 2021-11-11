import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/appNavbar';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Products />
    </div>
  );
}

export default App;
