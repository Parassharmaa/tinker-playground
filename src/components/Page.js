import React, { Component } from "react";
import GameObjects from "./GameObjects";
import Text from "./Text";
import Timestamps from "./Timestamps";
import Trigger from "./Trigger";

class Page extends Component {
  state = {
    default: {
      pageNumber: 1,
      script: "GSManager",
      audio: {
        audioName: "audio-name",
        isAnim: true,
        objectId: 1
      },
      gameObjects: [],
      texts: [],
      audioFile: "The happy cat wags.mp3",
      timestamps: [],
      triggers: []
    }
  };
  render() {
    return (
      <div>
        {this.props.mainData.map((p, pageId) => {
          return (
            <div key={pageId}>
              <p>Page {pageId + 1}</p>
              {Object.keys(p).map((k, i) => {
                if (k === "texts") {
                  return (
                    <Text
                      key={i}
                      mainData={p[k]}
                      pageId={pageId}
                      onAddText={d => {
                        let t = JSON.parse(JSON.stringify(this.props.mainData));
                        t[pageId][k].push(d);
                        this.props.onUpdate(t);
                      }}
                      onChange = {d => {
                        let t = JSON.parse(JSON.stringify(this.props.mainData));
                        t[pageId][k] = d;
                        this.props.onUpdate(t);
                      }}
                    />
                  );
                } else if (k === "gameObjects") {
                  return (
                    <GameObjects
                      key={i}
                      mainData={p[k]}
                      pageId={pageId}
                      onAddGameObject={d => {
                        let t = JSON.parse(JSON.stringify(this.props.mainData));
                        t[pageId][k].push(d);
                        this.props.onUpdate(t);
                      }}

                      onChange = {d => {
                        let t = JSON.parse(JSON.stringify(this.props.mainData));
                        t[pageId][k] = d;
                        this.props.onUpdate(t);
                      }}
                    />
                  );
                } else if (k === "timestamps") {
                  return (
                    <Timestamps
                      key={i}
                      mainData={p[k]}
                      pageId={pageId}
                      onAddTimestamp={d => {
                        let t = JSON.parse(JSON.stringify(this.props.mainData));
                        t[pageId][k].push(d);
                        this.props.onUpdate(t);
                      }}
                      onChange = {d => {
                        let t = JSON.parse(JSON.stringify(this.props.mainData));
                        t[pageId][k] = d;
                        this.props.onUpdate(t);
                      }}
                    />
                  );
                } else if (k === "triggers") {
                  return (
                    <Trigger
                      key={i}
                      mainData={p[k]}
                      pageId={pageId}
                      onAddTrigger={d => {
                        let t = JSON.parse(JSON.stringify(this.props.mainData));
                        t[pageId][k].push(d);
                        this.props.onUpdate(t);
                      }}

                      onChange = {d => {
                        let t = JSON.parse(JSON.stringify(this.props.mainData));
                        t[pageId][k] = d;
                        this.props.onUpdate(t);
                      }}
                    />
                  );
                } else if (k === "audio") {
                  return (
                    <div key={i}>
                      <p>{k}</p>
                      {Object.keys(p[k]).map((key, i) => {
                        return (
                          <div key={i}>
                            <input
                              placeholder={key}
                              value={p[k][key]}
                              name={p[k][key]}
                              onChange={e => {
                                let t = JSON.parse(
                                  JSON.stringify(this.props.mainData)
                                );
                                t[pageId][k][key] = e.target.value;
                                this.props.onUpdate(t);
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  );
                } else {
                  return (
                    <div key={i}>
                      <input
                        placeholder={k}
                        value={p[k]}
                        name={p[k]}
                        onChange={e => {
                          let t = Object.assign([], this.props.mainData);
                          t[pageId][k] = e.target.value;
                          this.props.onUpdate(t);
                        }}
                      />
                    </div>
                  );
                }
              })}
              <hr />
            </div>
          );
        })}

        <button
          onClick={() => {
            let d = JSON.parse(JSON.stringify(this.state.default));
            d["pageNumber"] = this.props.mainData.length + 1;
            this.setState({ pa: this.state.pa + 1 });
            this.props.onAddPage(d);
          }}
        >
          Add Page
        </button>
      </div>
    );
  }
}

export default Page;
