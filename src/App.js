import {Route,Routes } from "react-router-dom";
import SignupUpdated from "./Components/pages/signup"
import Dashboard from "./Components/dashboard/Dashboard";
import Privacy_Policy from "./Components/pages/privacy_policy";
import Products from "./Components/pages/products";
import Contact from "./Components/pages/contact"
import Blogs from "./Components/pages/blogs"
import Marketplace from "./Components/pages/marketplace"
import About from "./Components/pages/about";
import LoginUpdated from "./Components/pages/login";
import Profile from "./Components/pages/profile";
import Admin from "./Components/pages/admin";
import AdminLogin from "./adminlogin";
import FAQ from "./Components/pages/FAQ"


function App() {
  return (
    <div className="App">
      
      <Routes>

          <Route path="signin" element={<LoginUpdated/>}></Route>
          <Route path="signup" element={<SignupUpdated/>}></Route>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="marketplace" element={<Marketplace />}></Route> 
          <Route path='contact' element={<Contact />}></Route>
          <Route path="about" element={<About /> } ></Route>
          <Route path="admin" element={<Admin />}></Route>
          <Route path="adminlogin" element={<AdminLogin />}></Route>
          <Route path="blogs" element={<Blogs /> }></Route>
          <Route path="privacy_policy" element={<Privacy_Policy /> }></Route>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="faq" element={<FAQ/>}></Route>
          
      </Routes>
    </div>
  );
}
export default App;
