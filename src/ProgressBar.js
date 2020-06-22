import React, { Component } from 'react'

export default class ProgressBar extends Component {
  render() {
    let {first, second, third, fourth, bg1,bg2,bg3,bg4} = this.props;
    return (
      <div className="progress progressBar rounded-0   height1 ">
        <div className="progress-bar" role="progressbar" style={{width: first, background: bg1}}></div>
        <div className="progress-bar" role="progressbar" style={{width: second, background: bg2}}></div>
        <div className="progress-bar" role="progressbar" style={{width: third, background: bg3}}></div>
        <div className="progress-bar" role="progressbar" style={{width: fourth, background: bg4}}></div>
      </div>
    )
  }
}