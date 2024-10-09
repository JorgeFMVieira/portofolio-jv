import React from 'react';
import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';

const App = () => {
    return (
        <div className={styles.App}>
            <Routes>
                <Route path='/' element={<LandingPage />} />
            </Routes>
        </div>
    )
}

export default App
