import About from "./components/About"
import Footer from "./components/Footer"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Project from "./components/Project/Project"

function App() {

  return (
    <div className="bg-black h-auto w-full overflow-hidden">
      <NavBar/>
      <Home/>
      <About/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default App
