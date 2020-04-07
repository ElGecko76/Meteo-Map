import { combineReducers } from "redux";
import WheatherReducer from "./weather";

const rootReducer = combineReducers({
    weather: WheatherReducer
});

export default rootReducer;