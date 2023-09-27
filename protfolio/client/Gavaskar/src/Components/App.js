import HomePage from "../Pages/HomePage";
import Styled from 'styled-components';
import Header from './Header';
import '../Styles/index.css';
import Contact from "./Contact";
function App() {
  return (
    <div className="App">
    <Header/>
    <HomePage/>
    <Contact/>
    </div>
  );
}


export default App;
