import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom' 
import usersReducer from './Reducers/UsersReducer';
import quizReducer from './Reducers/QuizReducer';
import playerReducer from './Reducers/PlayerReducer';
import playlistReducer from './Reducers/PlaylistReducer';

const coreReducer = combineReducers({usersReducer, quizReducer, playerReducer, playlistReducer })

const store = createStore(coreReducer, composeWithDevTools( applyMiddleware(thunk)))


console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
