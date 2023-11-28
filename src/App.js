import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/works";
// import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="App">
    
      <Navbar /> 
      <Intro />
      <Skills />
      <Works />
      {/* <Contact/> */}
    </div>
  );
}
 /**---- */
export default App;
