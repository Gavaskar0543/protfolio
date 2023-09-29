import HomePage from "../Pages/HomePage";
import Styled from 'styled-components';
import Header from './Header';
import Projects from "./Projects";
import '../Styles/index.css';
import Contact from "./Contact";
function App() {
  return (
    <div className="App">
    <Header/>
    <HomePage/>
    <Projects/>
    <Contact/>
    </div>
  );
}


export default App;
