import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      years: 47
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
    // console.log(1221);
  }

  render() {
    const { firstName, lastName } = this.props
    return (
      <div div >
        <button onClick={this.nextYear}>+++</button>
        <h1>My name is {firstName} {lastName}, age - {this.state.years}</h1>
      </div >
    )
  }
}

function App() {
  return (
    <div>
      <Test firstName='Valentyn' lastName='Lyaskovskiy' />
      <Test firstName='Valentyn' lastName='Lyaskovskiy' />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
