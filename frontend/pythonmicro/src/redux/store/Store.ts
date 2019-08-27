import Reducers from "../reducers"
import defaultStoreState from "./defaultStoreState"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(Reducers, defaultStoreState,composeEnhancers(applyMiddleware(thunk)))
export default Store

