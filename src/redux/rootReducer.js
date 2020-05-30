import { combineReducers } from "redux";
import episode from "./episode/episode.reducer";

const rootReducer = combineReducers({
  episode
});

export default rootReducer;
