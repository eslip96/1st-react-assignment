import "./App.scss";

import SideBar from "../components/SideBar";
import MainBody from "../components/mainBody";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="left-right-container">
        <MainBody />
        <Footer />
      </div>
    </div>
  );
}
export default App;
