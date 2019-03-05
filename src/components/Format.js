import React, { Component } from "react";
import Page from './Page';


class Format extends Component {
  state = {};
  render() {
    return (
      <div>
        {Object.keys(this.props.mainData).map((k, i) => {
          if (Array.isArray(this.props.mainData[k])) {
            return (
              <div key={i}>
                <Page
                  mainData={this.props.mainData.pages}
                  onAddPage={(d) => this.props.onAddPage(d)}
                  onUpdate={t => this.props.onUpdate(t)}
                />
              </div>
            );
          } else {
            return (
              <div key={i}>
                <input
                  placeholder={k}
                  value={this.props.mainData[k]}
                  name={k}
                  onChange={e => this.props.dataChange(e)}
                />
              </div>
            );
          }
        })}

        {/* <p>{JSON.stringify(this.props.mainData)}</p> */}
      </div>
    );
  }
}

export default Format;
