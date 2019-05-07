import React, {Component} from 'react';
import Colors from './pages/colors/index.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.pages = ['colors', 'todos'];
    this.state = {activePage: this.pages[0]};
    this.setPage = this.setPage.bind(this);
  }

  setPage(e) {this.setState({activePage: e.target.innerText})}

  render() {
    return (
      <div>
        <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
          {this.pages.map(p => <div key={p} style={{padding: '10px', backgroundColor: 'gray', margin: '2px'}}
                                    onClick={this.setPage}>{p}</div>)}
        </div>
        <div>
          {!this.state.activePage && <p>Select an exercise</p>}
          {this.state.activePage === 'colors' && <Colors/>}
        </div>
      </div>
    )
  }
}

export default App;
