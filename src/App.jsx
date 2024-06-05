import { Outlet } from "react-router-dom";
import NavBar from "./Components/Reusable/NavBar"
import Footer from "./Components/Reusable/Footer"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <div className='border-t-4 border-[#ABE948]'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
