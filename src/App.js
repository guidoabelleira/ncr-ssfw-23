import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './views/Home'
import './App.css';
import Detalle from './views/Detalle';

function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<Home/>}/>
                <Route path="/detalle" element={<Detalle />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
