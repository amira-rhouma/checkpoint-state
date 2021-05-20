
import React from "react";
import { Button, Form } from "react-bootstrap";


class Person extends React.Component {
  state = {
    FullName: "Amira Rhouma",
    Bio: "My name is Amira Rhouma i'm 25 years old i'm a student at GOMYCODE",
    Profession: "student",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8h8XFt8-0As9tre_H6I0I_G3sdvlu_aAxjg&usqp=CAU",
  };

  // componentDidMount
  componentDidMount() {
    console.log("Counter Component did mount");
  }

  // componentWillUnmount
  componentWillUnmount() {
    console.log("Counter Component wil unmount");
  }

  // componentDidUpdate
  componentDidUpdate(prevprops, prevstate) {
    console.log("Counter Component did update");
    console.log(prevprops, prevstate);
  }

  render() {
    console.log("render");
    return (
      <div className="Bio">
        <img src={this.state.Image}></img>
        <h1 >FullName:{this.state.FullName}</h1>
        <h2>Bio:{this.state.Bio}</h2>
        <h2>Profession:{this.state.Profession}</h2>
      </div>
    );
  }
}
export default Person;