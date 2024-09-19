import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Qualifications from './Pages/Qualifications';
import Projects from './Pages/Projects';

function App() {
  return (
    <div>
        <Navbar/>

        <BrowserRouter>
          <Routes>
            <Route exact path="/" component={Homepage}/>
            <Route path="/qualifications"component={Qualifications}/>
            <Route path="/projects" components={Projects}/>
          </Routes>
        </BrowserRouter>

        <Footer/>
    </div>
  );
}

export default App;
