
import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import Person from "./component/Person";
import "bootstrap/dist/css/bootstrap.min.css";


class App extends React.Component {
  state = {
    show: false,
  };
  state = {
    seconds: 1,
  };
 styles={
    color:"pink",
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <div className="App" >
          <Button variant="light" onClick={this.handleShow} className="toggle">
            Toggle
          </Button>
          {this.state.show && <Person />}
        </div>
        <div className="App">
          <h1 style={this.styles}>Number of seconds is {this.state.seconds}</h1>
        </div>
      </div>
    );
  }
}

export default App;
