import React, { Component } from "react";
import Sequence from "./Sequence";

class Anim extends Component {
  state = {
    default: {
      id: "",
      animName: "",
      startX: "",
      startY: "",
      startIndex: "",
      endIndex: "",
      onTouch: "",
      onStart: "",
      secPerFrame: [],
      sequences: []
    }
  };
  render() {
    return (
      <div>
        <div className="side-flex">
          {this.props.mainData.map((p, key) => {
            return (
              <div key={key}>
                <p>Anim {key + 1}</p>
                {Object.keys(p).map((k, i) => {
                  if (k === "sequences") {
                    return (
                      <Sequence
                        mainData={p[k]}
                        onAddSeq={d => {
                          let t = JSON.parse(
                            JSON.stringify(this.props.mainData)
                          );
                          t[key][k].push(d);
                          this.props.onChange(t);
                        }}
                        onChange={d => {
                          let t = JSON.parse(
                            JSON.stringify(this.props.mainData)
                          );
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
                          value={k === "secPerFrame" ? p[k].join() : p[k]}
                          name={p[k]}
                          onChange={e => {
                            let t = JSON.parse(
                              JSON.stringify(this.props.mainData)
                            );

                            if (k === "secPerFrame") {
                              let d = e.target.value;
                              d = d.split(",").map((v, i) => {
                                console.log(v);
                                // return parseInt(v);
                                return v;
                              });
                              t[key][k] = d;
                            } else {
                              t[key][k] = e.target.value;
                            }
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
            let d = JSON.parse(JSON.stringify(this.state.default));
            d["id"] = this.props.mainData.length + 1;
            this.props.onAddAnim(d);
          }}
        >
          Add Animation
        </button>
      </div>
    );
  }
}

export default Anim;
