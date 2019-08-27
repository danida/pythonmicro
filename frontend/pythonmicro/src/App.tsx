import * as React from 'react';
import { render } from 'react-dom';
import MainView from './views/index'
import {Provider} from "react-redux";
import Store from './redux/store/Store';




render(<Provider store={Store}><MainView /></Provider>, document.getElementById('main'));


