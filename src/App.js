import './App.css';
import Navbar from './components/Navbar';
import Sticker from './components/Sticker';
import SearchSt from './components/SearchSt';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar></Navbar>    
    
    <div className="container">
    
          <Routes>
            <Route path="/" element={<Sticker/>}>
            </Route>
            <Route path="/SearchSt" element={<SearchSt/>}>
            </Route>
          </Routes>
    
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
