import { SET_EPISODES } from "./episode.types";

const episode = (state = [], action) => {
  switch (action.type) {
    case SET_EPISODES:
      return [...action.payload];
    default:
      return state;
  }
};

export default episode;
