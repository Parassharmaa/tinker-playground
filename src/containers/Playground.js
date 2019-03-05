import React, { Component } from "react";
import { Format } from "../components/";
import Download from "downloadjs";
import _ from "lodash";

class Playground extends Component {
  state = {
    mainData: {
      id: "",
      fontColor: "",
      textStartPositionX: "",
      textStartPositionY: "",
      textFontSize: "",
      storyImageFile: "",
      backgroundColor: "",
      arrowColor: "",
      fontFamily: "",
      language: "",
      pages: []
    }
  };

  replacePropertyValue(object) {
    const newObject = _.clone(object);

    _.each(object, (val, key) => {
      if (Array.isArray(val) && val.length == 0) {
        newObject[key] = null;
      } else if (typeof val === "object" || Array.isArray(val)) {
        newObject[key] = this.replacePropertyValue(val);
      }
    });

    return newObject;
  }

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
            let d = JSON.stringify(
              this.replacePropertyValue(this.state.mainData)
            );

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
