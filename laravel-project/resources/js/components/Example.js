import React from 'react';
import ReactDOM from 'react-dom';
import Header from './content/Header';
import Side from './content/Side';
import Home from './Home';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Create from './Create';
import Register from './auth/Register';
import Login from './auth/Login';

function Example() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <div style={{display:"flex"}}>
                        <Side />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path="/create" element={<Create />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/login' element={<Login />} />
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
