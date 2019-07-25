import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import countReducer from "../reducers/countReducer";

const store = createStore(
    combineReducers({
		countReducer: countReducer,
	}),
    applyMiddleware(thunk)
    )

export default store;