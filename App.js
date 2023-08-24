import './App.css';
import Homepage from "./pages/Homepage"
import Logoutpage from "./pages/Logoutpage"
import Trackorderpage from "./pages/Trackorderpage"
import Navbar from './components/Navbar';
import { Route , Routes } from "react-router-dom";
import Purchaseorderpage from "./pages/Purchaseorderpage"

function App() {
  return (
    <div className='main'>
      <Navbar/>

      <Routes>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/logout" element={<Logoutpage/>}/>
        <Route path="/trackorder" element={<Trackorderpage/>}/>
        <Route path="/purchaseorder" element={<Purchaseorderpage/>}/>
      </Routes>
      
    </div>
  );
}
export default App;