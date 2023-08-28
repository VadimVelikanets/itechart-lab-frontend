import React, {useEffect, useState} from 'react';
import AppRouter from "./components/organisms/AppRouter/AppRouter";
import Layout from "./components/layouts/Layout/Layout";
import Menu from "./components/molecules/Menu/Menu";
import './App.scss';
import {useAppDispatch, useAppSelector} from "./hooks/store";
import {authUser} from "./store/action-creators/user";
import AppLoader from "./components/atoms/AppLoader/AppLoader";

const App = () => {
    const {user, isLoading} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    useEffect(() => {
            dispatch(authUser())
    }, [])

    if(isLoading) return <AppLoader/>

    console.log(isLoading)

    return (
        <>
            <Layout>
                    <div className="wrapper">
                        {user && (
                            <Menu/>
                        )}
                        <div className="container">
                            <AppRouter user={user}/>
                        </div>
                    </div>
            </Layout>
        </>
    );
}

export default App;
