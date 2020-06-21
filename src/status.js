import React from 'react'

export default class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: this.props.value};  
      this.handleChange = this.handleChange.bind(this);
    } 
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return (
            <React.Fragment>
            <select value={this.state.value} onChange={this.handleChange} className="float-left border-0 text-white" style={{background: this.state.value }}>
              <option value="#FDAB3D" style={{background: "#FDAB3D"}}>Working on it</option>
              <option value="#579BFC" style={{background: "#579BFC"}}>Waiting for review</option>
              <option value="#E2445B" style={{background: "#E2445B"}}>Stuck</option>
              <option value="#00C875" style={{background: "#00C875"}}>Done</option>
            </select>
            <span className="float-right statusBar" style={{background: this.state.value, opacity:0.4 }}></span>           
            </React.Fragment>
      );
    }
  }