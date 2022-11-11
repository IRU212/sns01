import React from 'react';
import ReactDOM from 'react-dom';
import Header from './content/Header';
import Side from './content/Side';
import Home from './Home';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Create from './Create';
import Register from './auth/Register';
import Login from './auth/Login';
import NotFound404 from './NotFound404';
import Setting from './Setting';
import Show from './Show';

function Example() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <div style={{display:"flex"}}>
                        <Side />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/:productId' element={<Show />} />
                            <Route path="/create" element={<Create />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/setting' element={<Setting />} />
                            <Route path='*' element={<NotFound404 />} />
                        </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
