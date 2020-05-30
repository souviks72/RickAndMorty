import React from "react";
import { connect } from "react-redux";
import EpisodeItem from "./EpisodeItem";

class Episodes extends React.Component {
  render() {
    let { episodes } = this.props;
    let episodeList = null;
    if (episodes !== null) {
      episodeList = episodes.map(episode => <EpisodeItem {...episode} />);
    }
    return <ul className="list-group">{episodeList}</ul>;
  }
}

const mapStateToProps = state => ({
  episodes: state.episode
});

export default connect(
  mapStateToProps,
  null
)(Episodes);
