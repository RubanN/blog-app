// import './App.css';
import { useSelector } from "react-redux";
import Blogs from './Components/Blogs';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import { selectSignedIn } from "./features/userSlice";

function App() {
   
  return (
    <div className="App">
       <Navbar/>
       <Homepage/>
       <Blogs/>
    </div>
  );
}

export default App;
