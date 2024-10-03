
import Navbar from "./components/navbar/navbar";
import Intro from "./components/Intro/intro";
import Skils from "./components/skill/skils";
import Work from "./components/works/work";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Blog from "./components/blog/blogs";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skils/>
      <Work/>
      <Blog/>
      <Contact/>
      <Footer/>




     
    </div>
  );
}

export default App;
