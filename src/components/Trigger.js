import React, { Component } from "react";

class Trigger extends Component {
  state = {
    default: {
      stnzaId: 0,
      textId: 2,
      timestamp: null,
      sceneObjectId: 0,
      animId: -1,
      typeOfLinking: 3
    }
  };
  render() {
    return (
      <div>
      <div className="side-flex">
        {this.props.mainData.map((p, key) => {
          return (
            <div key={key}>
              <p>Trigger {key + 1}</p>
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
            this.props.onAddTrigger(d);
          }}
        >
          Add Trigger
        </button>
      </div>
    );
  }
}

export default Trigger;
