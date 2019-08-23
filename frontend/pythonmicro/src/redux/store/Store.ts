import Reducers from "../reducers"
import defaultStoreState from "./defaultStoreState"
import { createStore } from "redux"

const Store = createStore(Reducers, defaultStoreState)
export default Store

