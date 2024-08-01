import { Component } from "react";

class MainBody extends Component {
  render() {
    return (
      <div className="main-body-container">
        <div className="top-container">
          <h1>IMAGE</h1>
          <h1>HEADER</h1>
          <h1>SUBHEADER</h1>
        </div>
        <div className="class-container">
          <div className="main-content-wrapper">
            <h1>MAIN CONTENT</h1>
          </div>
          <div className="first-container">
            <h1>MAIN CONTENT</h1>
            <h1>IMAGE</h1>
          </div>
          <div className="second-container">
            <h1>IMAGE</h1>
            <h1>MAIN CONTENT</h1>
          </div>
          <div className="main-content-wrapper">
            <h1>MAIN CONTENT</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBody;
