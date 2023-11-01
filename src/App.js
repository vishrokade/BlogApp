import Home from "./pages/home/Home";
import TopBar from "./Components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/setting/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom/dist";

function App() {
  const user = false;
  return (
   <BrowserRouter>
      <TopBar/>
      <Routes>
          <Route exact path="/Blog-Application" element={<Home/>}/>
          <Route exact path="" element={<Home/>}/>
          <Route path="/register" element={user ? <Home/> : <Register/>}/>
          <Route path="/login" element={user ? <Home/> : <Login/>}/>
          <Route path="/write" element={user ? <Write/> : <Register/>}/>
          <Route path="/setting" element={user ? <Settings/> : <Register/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/post/:postID" element={<Single/>}/>
      </Routes>
      
      
   </BrowserRouter>
      
  );
}
export default App;
