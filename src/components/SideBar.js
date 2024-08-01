import { Component } from "react";

class SideBar extends Component {
  render() {
    return (
      <div className="side-bar-container">
        <div className="logo-container">Logo</div>
        <div className="button-wrapper">
          <button>button</button>
          <button>button</button>
          <button>button</button>
          <button>button</button>
          <button>button</button>
        </div>
        <div className="logo-container">Logo</div>
      </div>
    );
  }
}

export default SideBar;
