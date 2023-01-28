import { Routes, Route } from 'react-router-dom';

import PaginaUm from './pages/PaginaUm'
import PaginaDois from './pages/PaginaDois'

function Rotas () {
    return (
        <Routes>
            <Route exact path="/PaginaUm" element={<PaginaUm/>}/>
            <Route exact path="/PaginaDois" element={<PaginaDois/>}/>
        </Routes>
    );
}

export default Rotas;