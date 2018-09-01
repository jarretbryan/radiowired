import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom' 
import usersReducer from './Reducers/UsersReducer';
import quizReducer from './Reducers/QuizReducer';

const coreReducer = combineReducers({usersReducer, quizReducer })

const store = createStore(coreReducer)


console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
