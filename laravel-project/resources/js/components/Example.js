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
import Profile from './Profile';
import Transaction from './Transaction';
import Situation from './Situation';
import Mypage from './Mypage';
import SituationPurchase from './Situation/SituationPurchase';
import SituationCreate from './Situation/SituationCreate';
import SettingProfile from './Setting/SettingProfile';

function Example() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <div style={{display:"flex"}}>
                        <Side />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/product/:productId' element={<Show />} />
                            <Route path='/product/room/:productId' element={<Transaction />} />
                            <Route path="/create" element={<Create />} />
                            <Route path='/profile/:profileId' element={<Profile />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/situation' element={<Situation />} />
                            <Route path='/situation/create' element={<SituationCreate />} />
                            <Route path='/situation/purchase' element={<SituationPurchase />} />
                            <Route path='/mypage' element={<Mypage />} />
                            <Route path='/setting' element={<Setting />} />
                            <Route path='/setting/profile' element={<SettingProfile />} />
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
