import React from "react";
import Search from "./Search";
import axios from "axios";
import VideosList from "./Videos";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  SearchYouTube = async (query) => {
    const resp = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          q: query,
          part: "snippet",
          type: "video",
          maxResults: 15,
          key: "AIzaSyDSbu-iHqqZ5USiIi4m3YgNnYHPK-LnBao",
        },
      }
    );
    this.setState({ videos: resp.data.items , selectedVideo: resp.data.items[0]});
    console.log(resp.data.items);
  };

  OnVideoSelect = (video) => {
    console.log(video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <Search onChange={this.SearchYouTube} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideosList
                vidoes={this.state.videos}
                videoSelect={this.OnVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
