import React from "react";
import { connect } from "react-redux";
import { setEpisodes } from "./redux/episode/episode.action";
import axios from "axios";
import "./styles.css";

import Episodes from "./components/Episodes";
import Search from "./components/Search";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "https://rickandmortyapi.com/api/episode/",
      btnText: "Next",
      pageNumber: 1
    };
  }

  loadPage = async event => {
    event.preventDefault();
    let { link, pageNumber, btnText } = this.state;

    try {
      await axios.get(link).then(res => {
        if (pageNumber === 1) {
          link = res.data.info.prev;
          pageNumber = 2;
          btnText = "Prev";
        } else {
          link = res.data.info.next;
          btnText = "Next";
          pageNumber = 1;
        }
        this.setState({ link, btnText, pageNumber }, () => {
          this.props.setEpisodes(res.data.results);
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  async componentDidMount() {
    try {
      axios.get("https://rickandmortyapi.com/api/episode/").then(res => {
        this.props.setEpisodes(res.data.results);
        this.setState({ link: res.data.info.next });
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="App">
        <Search />
        <Episodes />
        <button onClick={this.loadPage} className="btn btn-primary">
          {this.state.btnText}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  next: state.next,
  episodes: state.episode
});

const mapDispatchToProps = dispatch => {
  return {
    setEpisodes: episodes => dispatch(setEpisodes(episodes))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
