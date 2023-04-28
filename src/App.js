import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      position: "",
    };
  }

  add = () => {
    if (this.state.start < 10) {
      this.setState((state) => ({
        start: state.start + 1,
      }));
    }
    if (this.state.start === 10) alert("10 is maximum!");
  };

  sub = () => {
    this.setState((state) => ({
      start: state.start - 1,
    }));
  };

  reset = () => {
    this.setState((state) => ({
      start: state.start * 0,
    }));
  };

  random = () => {
    this.setState((state) => ({
      start: Math.floor(Math.random(state.start) * 10),
    }));
  };

  addPosition = (e) => {
    this.setState({
      position: e.target.value,
    });
  };

  render() {
    const { firstName, lastName } = this.props;
    const { start, position } = this.state;
    return (
      <div div>
        <button onClick={this.add}>Add</button>
        <button onClick={this.sub}>Subtract</button>
        <button onClick={this.random}>Random</button>
        <button onClick={this.reset}>Reset</button>
        <img width={50} src={logo} alt="react logo" />
        <h1>
          My name is {firstName}
          {lastName}, {start} -{position}
        </h1>
        <form>
          <input
            onChange={this.addPosition}
            type="text"
            placeholder="Enter a position"
          />
        </form>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Test firstName="Valentyn" lastName="  Lyaskovskiy" />
      <Test firstName="Valentyn" lastName="  Lyaskovskiy" />
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
