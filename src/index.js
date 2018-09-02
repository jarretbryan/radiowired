import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom' 
import usersReducer from './Reducers/UsersReducer';
import quizReducer from './Reducers/QuizReducer';

const coreReducer = combineReducers({usersReducer, quizReducer })

const store = createStore(coreReducer, applyMiddleware(thunk))


console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
