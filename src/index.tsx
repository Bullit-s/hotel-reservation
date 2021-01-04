import React from 'react';
import ReactDOM from 'react-dom';
import {RoomProvider} from './store/context';
import {HashRouter as Router} from 'react-router-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {ScrollToTop} from "./core/helpers/ScrollToTop";

ReactDOM.render(
    <RoomProvider>
        <Router>
            <ScrollToTop/>
            <App/>
        </Router>
    </RoomProvider>,
    document.getElementById('root'));

serviceWorker.unregister();
