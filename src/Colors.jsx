import React from 'react';

export class Colors extends React.Component {
  constructor(){
    super();
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

const ColorString2 = Colors.prototype
console.log(ColorString2)


export const ColorsString = 'export default class Colors extends React.Component {\n' +
  '  constructor(){\n' +
  '    super();\n' +
  '    this.colors =  [\'red\', \'blue\', \'green\'];\n' +
  '    this.state = {color: \'black\'};\n' +
  '    this.setColor = this.setColor.bind(this);\n' +
  '  }\n' +
  '  setColor(e) {\n' +
  '    this.setState({color: e.target.attributes[0].value});\n' +
  '  }\n' +
  '\n' +
  '  render() {\n' +
  '    return (\n' +
  '      <div>\n' +
  '        <h1 style={{color: this.state.color}}>Change this color</h1>\n' +
  '        <div>\n' +
  '          {this.colors.map((c, i) => <button key={i} color={c} onClick={this.setColor}>{c.charAt(0).toUpperCase() + c.slice(1)}</button> )}\n' +
  '        </div>\n' +
  '      </div>\n' +
  '    )\n' +
  '  }\n' +
  '}\n'