import React from 'react';
import { Link } from 'react-router-dom';
import Mainbox from '../components/Mainbox';
import Feedback from '../components/Feedback';
import Navbar from '../components/Navbar';


function Homepage() {
  return (
    <div className='homepagebox'>
      
      <div className='homebox1'>
        
        <Navbar/>

        <div className='dashboardbox1'>
          <h3 id='dashboard'>Dashboard</h3>
        </div>

        <div className='dashboardbox2'>
          <div className='totalorderbox1'>
            <p id='totalorder'>Total Order Status</p>
            <Link to="/trackorder">
              <p id='clicktrackorder'>Click Here To Track Order</p>
            </Link>
          </div>

            <div className='poolandpicking'>
              <Mainbox heading="Order Pool" number={0} />
              <div className='horizontalline'></div>
              <Mainbox heading="Order Under Picking" number={0} />
            </div>
            
            <div className='verticalline'></div>

            <div className='dispatchandunderdispatch'>
              <Mainbox heading="Today Dispatched Order" number={0} />
              <div className='horizontalline'></div>
              <Mainbox heading="Under Dispatch" number={0} />
            </div>
          
          <div className='inwardbox1'>
            <p id='inward'>Inward Status</p>
          </div>

          <div className='pendingandprogressandcompleted'>
            <Mainbox heading="Putaway Pending" number={0} />
            <Mainbox heading="Putaway Progress" number={0} />
            <Mainbox heading="Putaway Completed" number={0} />
          </div>
        </div>
      </div>

      <Feedback/>

    </div>
    

  );
}
export default Homepage;