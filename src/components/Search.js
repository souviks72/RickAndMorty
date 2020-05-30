import React from "react";
import { setEpisodes } from "../redux/episode/episode.action";
import { connect } from "react-redux";
import axios from "axios";
import buildUrl from "build-url";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      episodeName: "",
      details: null,
      err: 0
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ episodeName: "" });
    var url = buildUrl("https://rickandmortyapi.com/api/episode/", {
      path: "",
      hash: "",
      queryParams: {
        name: this.state.episodeName
      }
    });
    console.log(url);

    axios
      .get(url)
      .then(res => {
        this.setState({ details: res.data.results });
        this.props.setEpisodes(this.state.details);
        console.log(this.state);
      })
      .catch(err => {
        this.setState({ err: 1 });
        console.log(this.state);
      });
    // this.setState({episodeName:''});
  };

  handleChange = event => {
    this.setState({ episodeName: event.target.value });
  };

  render() {
    return (
      <nav className="nav navbar-nav search">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm-8">
              <input
                onChange={this.handleChange}
                value={this.state.episodeName}
                type="text"
                placeholder="Enter episode name"
                required
              />
              <input type="submit" />
            </div>
          </div>
        </form>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setEpisodes: episodes => dispatch(setEpisodes(episodes))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
