import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {QuestionFormProvider} from "./context/QuestionFormContext";
import {store} from "./store";
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <>
        <Provider store={store}>
            <QuestionFormProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </QuestionFormProvider>
        </Provider>
    </>
);

