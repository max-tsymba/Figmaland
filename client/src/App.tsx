import React, { FunctionComponent } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import AppRoutes from './components/AppRoutes';
import Header from './components/Header';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <AppRoutes />
        </BrowserRouter>
    )
}

export default App
