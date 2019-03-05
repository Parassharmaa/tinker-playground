import React, { Component } from "react";

class Sequences extends Component {
  state = {
    default: {
      startFrame: 0,
      endFrame: 5,
      noOfLoops: 100,
      movable: {
        speed: 0
      }
    }
  };
  render() {
    return (
      <div>
        {this.props.mainData.map((p, key) => {
          return (
            <div key={key}>
              <p>Sequence {key + 1}</p>
              {Object.keys(p).map((k, i) => {
                if (k === "movable") {
                    return (
                      <div key={i}>
                        <p>{k}</p>
                        {Object.keys(p[k]).map((kk, j) => {
                          return (
                            <div key={j}>
                              <input
                                placeholder={key}
                                value={p[k][key]}
                                name={p[k][key]}
                                onChange={e => {
                                  let t = JSON.parse(
                                    JSON.stringify(this.props.mainData)
                                  );
                                  t[key][k][kk] = e.target.value;
                                  this.props.onChange(t);
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    );
                  }  else {
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

        <button
          onClick={() => {
            let d = Object.assign({}, this.state.default);
            d["id"] = this.props.mainData.length + 1;
            this.props.onAddSeq(d);
          }}
        >
          Add Sequence
        </button>
      </div>
    );
  }
}

export default Sequences;
