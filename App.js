import './App.css';
import Homepage from "./pages/Homepage"
import Logoutpage from "./pages/Logoutpage"
import Trackorderpage from "./pages/Trackorderpage"
import Navbar from './components/Navbar';
import { Route , Routes } from "react-router-dom";
import Purchaseorderpage from "./pages/Purchaseorderpage"
import Agrnpage from './pages/Agrnpage';
import Addquerypage from './pages/Addquerypage';
import Stockstatuspage from './pages/Stockstatuspage';
import Pendingorderpage from './pages/Pendingorderpage';
import Dispatchedorderpage from './pages/Dispatchedorderpage';

function App() {
  return (
    <div className='main'>

      <Routes>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/logout" element={<Logoutpage/>}/>
        <Route path="/trackorder" element={<Trackorderpage/>}/>
        <Route path="/purchaseorder" element={<Purchaseorderpage/>}/>
        <Route path="/agrn" element={<Agrnpage/>}/>
        <Route path="/addquery" element={<Addquerypage/>}/>
        <Route path="/stockstatus" element={<Stockstatuspage/>}/>
        <Route path="/pendingorder" element={<Pendingorderpage/>}/>
        <Route path="/dispatchedorder" element={<Dispatchedorderpage/>}/>
      </Routes>
      
    </div>
  );
}
export default App;