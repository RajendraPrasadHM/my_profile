import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { useContext } from "react";
import { themeContext } from "./Context";
import { Routes, Route } from 'react-router-dom';
import MyProjectsComponent from "./components/MyProjects/MyProjectsComponent";
// sdfjspdjfp
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Routes>


        <Route path="/" element={
          <><Navbar /><Intro /><Services /><Experience /><Portfolio /><Contact /></>
        } />
        <Route path="/my-project-details/:projectName" element={<MyProjectsComponent />} />
      </Routes>
    </div>
  );
}

export default App;
