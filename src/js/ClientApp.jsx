import { hot } from 'react-hot-loader';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'value'
    };
  }

  handleChange(e) {
    let value = e.target.value;
    this.setState({ value: value });
  }

  render() {
    return (
      <div className="app__container">
        <h1 className="app__header">Markdown formater</h1>
        <div className="app">
          <Component
            onChange={e => this.handleChange(e)}
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
