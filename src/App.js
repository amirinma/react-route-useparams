import './App.css';
import {Routes, Route} from "react-router-dom"
import ServiceDetail from './ServiceDetail';
import ServicesList from './ServicesList';
import Headers from './Header';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<ServicesList />}/>
        <Route path='/services/:serviceId' element={<ServiceDetail />}/>
      </Routes>
      
    </div>
  );
}

export default App;
