import React from 'react';

class Todos extends React.Component {
  constructor(props){
    super(props)
    this.colors =  ['red', 'blue', 'green'];
    this.state = {color: 'black'};
    this.setColor = this.setColor.bind(this);
  }
  setColor(e) {
    this.setState({color: e.target.attributes[0].value});
  }

  render() {
    return (
      <div>
        <h1 style={{color: this.state.color}}>Change this color</h1>
        <div>
          {this.colors.map((c, i) => <button key={i} color={c} onClick={this.setColor}>{c.charAt(0).toUpperCase() + c.slice(1)}</button> )}
        </div>
      </div>
    )
  }
}

export default Todos