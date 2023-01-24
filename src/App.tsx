import React from 'react';
import AppRouter from "./components/AppRouter/AppRouter";
import Layout from "./components/Layout/Layout";
import Menu from "./components/Menu/Menu";
import './App.scss';
const App = () => {
    return (
        <>
            <Layout>
                <div className="wrapper">
                    <Menu/>
                    <div className="container">
                        <AppRouter/>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default App;
