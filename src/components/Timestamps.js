import React, { Component } from "react";

class Timestamps extends Component {
  state = {
    default: {
      start: 149,
      wordIdx: 0,
      audio: "thuh.mp3",
      end: 286,
      starWord: "No"
    }
  };
  render() {
    return (
      <div>
      <div className="side-flex">
        {this.props.mainData.map((p, key) => {
          return (
            <div key={key}>
              <p>Timestamp {key + 1}</p>
              {Object.keys(p).map((k, i) => {
                return (
                  <div key={i}>
                    <input
                      placeholder={k}
                      value={p[k]}
                      name={p[k]}
                      onChange={e => {
                        let t = JSON.parse(JSON.stringify(this.props.mainData))
                        t[key][k] = e.target.value
                        this.props.onChange(t)
                      }}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
        </div>
        <br/>
        <button
          onClick={() => {
            let d = Object.assign({}, this.state.default);
            d["id"] = this.props.mainData.length + 1;
            this.props.onAddTimestamp(d);
          }}
        >
          Add Timestamps
        </button>
      </div>
    );
  }
}

export default Timestamps;
