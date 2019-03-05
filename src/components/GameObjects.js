import React, { Component } from "react";
import Anim from "./Anim";

class GameObjects extends Component {
  state = {
    default: {
      id: "",
      posX: "",
      posY: "",
      scaleX: "",
      scaleY: "",
      imageName: "",
      orderInLayer: "",
      inText: "",
      label: "",
      destroyOnCollision: "",
      draggable: "",
      anim: []
    }
  };
  render() {
    return (
      <div>
        <div className="side-flex">
          {this.props.mainData.map((p, key) => {
            console.log(key);
            return (
              <div key={key}>
                <p>Game Object {key + 1}</p>
                {Object.keys(p).map((k, i) => {
                  if (k === "anim") {
                    return (
                      <Anim
                        key={i}
                        mainData={p[k]}
                        onAddAnim={d => {
                          let t = JSON.parse(
                            JSON.stringify(this.props.mainData)
                          );
                          t[key][k].push(d);
                          this.props.onChange(t);
                        }}
                        onChange = {d => {
                          let t = JSON.parse(JSON.stringify(this.props.mainData));
                          t[key][k] = d;
                          this.props.onChange(t);
                        }}
                      />
                    );
                  } else {
                    return (
                      <div key={i}>
                        <input
                          placeholder={k}
                          value={p[k]}
                          name={p[k]}
                          onChange={e => {
                            let t = JSON.parse(
                              JSON.stringify(this.props.mainData)
                            );
                            t[key][k] = e.target.value;
                            this.props.onChange(t);
                          }}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
        <button
          onClick={() => {
            let d = Object.assign({}, this.state.default);
            d["id"] = this.props.mainData.length + 1;
            this.props.onAddGameObject(d);
          }}
        >
          Add Game Object
        </button>
      </div>
    );
  }
}

export default GameObjects;
