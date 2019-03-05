import React, { Component } from "react";
import { Format } from "../components/";
import Download from 'downloadjs';

class Playground extends Component {
  state = {
    mainData: {
      id: 6,

      fontColor: "black",
      textStartPositionX: -420.0,
      textStartPositionY: 132.0,
      textFontSize: 35,
      storyImageFile: "",
      backgroundColor: "blue",
      arrowColor: "red",
      fontFamily: "helvetica",
      language: "english",
      pages: []
    },
  };

  render() {
    return (
      <div className="App">
        <Format
          mainData={this.state.mainData}
          dataChange={e => {
            this.setState({
              mainData: {
                ...this.state.mainData,
                [e.target.name]: e.target.value
              }
            });
          }}
          onUpdate={t => {
            this.setState({ mainData: { ...this.state.mainData, pages: t } });
          }}
          onAddPage={d => {
            let p = [...this.state.mainData.pages];

            p.push(d);
            let mainData = Object.assign({}, this.state.mainData);
            mainData["pages"] = p;

            this.setState({
              mainData
            });
          }}
        />

        <button
          onClick={e => {
            let d = JSON.stringify(this.state.mainData);
            Download(d, "data.json", "text/json");
          }}
        >
          Download JSON
        </button>
      </div>
    );
  }
}

export default Playground;
