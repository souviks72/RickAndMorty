import { SET_EPISODES } from "./episode.types";

import axios from "axios";

export const setEpisodes = episodes => ({
  type: SET_EPISODES,
  payload: episodes
});

export const getEpisodes = link => {
  return dispatch => {
    axios
      .get(link)
      .then(res => {
        dispatch(setEpisodes(res));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
