import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { GrFormPrevious } from 'react-icons/gr';
import Dropdown from '../components/Dropdown';
import Dropdownaddquery from '../components/Dropdownaddquery';
import Fileupload from '../components/Fileupload';
import Feedback from '../components/Feedback';
import Navbar from '../components/Navbar';
import Livetimedateaddquery from '../components/Livetimedateaddquery';
import Matrix from '../components/Matrix';
import Datedropdownstock from '../components/Datedropdownstock';
import Datedropdown from '../components/Datedropdown';
import Datefromto from '../components/Datefromto';
import Checkboxdropdown from '../components/Checkboxdropdown';

function Dispatchedorderpage() {
    const options1 = [
        { value: 'ghaziabad', label: 'GHAZIABAD' },
        { value: 'kundli', label: 'KUNDLI' },
        { value: 'kundli2', label: 'KUNDLI-2' },
    ];
    const options2 = [
        { value: 'souveneirs', label: 'Souvenir Publishers' },
        { value: 'maoli', label: 'MAOLI MEDIA' },
        { value: 'kips', label: 'KIPS' },
    ];
    const options3 = [
        { value: '2aenterprises', label: '2-A ENTERPRISES' },
        { value: 'shrisay', label: '1651 SHRISAY' },
    ];

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const data = [
        {
            SrNo: 1,
            ISBN: '987654321',
            Title: 'Sample Book 1',
            Author: 'Author 1',
            DivisionCode: 'XYZ',
            Price: 24.99,
            Quantity: 5,
            Discount: 2.50,
            Amount: 1200,
        },
        {
          SrNo: 2,
          ISBN: '987654321',
          Title: 'Sample Book 2',
          Author: 'Author 2',
          DivisionCode: 'XYZ',
          Price: 24.99,
          Quantity: 5,
          Discount: 2.50,
          Amount: 1200,
        },
        {
            SrNo: 2,
            ISBN: '987654321',
            Title: 'Sample Book 2',
            Author: 'Author 2',
            DivisionCode: 'XYZ',
            Price: 24.99,
            Quantity: 5,
            Discount: 2.50,
            Amount: 1200,
          },
          {
            SrNo: 2,
            ISBN: '987654321',
            Title: 'Sample Book 2',
            Author: 'Author 2',
            DivisionCode: 'XYZ',
            Price: 24.99,
            Quantity: 5,
            Discount: 2.50,
            Amount: 1200,
          },
          {
            SrNo: 2,
            ISBN: '987654321',
            Title: 'Sample Book 2',
            Author: 'Author 2',
            DivisionCode: 'XYZ',
            Price: 24.99,
            Quantity: 5,
            Discount: 2.50,
            Amount: 1200,
          },
          {
            SrNo: 2,
            ISBN: '987654321',
            Title: 'Sample Book 2',
            Author: 'Author 2',
            DivisionCode: 'XYZ',
            Price: 24.99,
            Quantity: 5,
            Discount: 2.50,
            Amount: 1200,
          },
          {
            SrNo: 2,
            ISBN: '987654321',
            Title: 'Sample Book 2',
            Author: 'Author 2',
            DivisionCode: 'XYZ',
            Price: 24.99,
            Quantity: 5,
            Discount: 2.50,
            Amount: 1200,
          },
          {
            SrNo: 2,
            ISBN: '987654321',
            Title: 'Sample Book 2',
            Author: 'Author 2',
            DivisionCode: 'XYZ',
            Price: 24.99,
            Quantity: 5,
            Discount: 2.50,
            Amount: 1200,
          },
    ];

  return (
    <div className='dispatched-order-page'>
        
        <div className='dispatched-order-box'>

            <Navbar/>

            <div className='username-prev-box'>
                <div className='username-box'>
                    <AiOutlineUser id='username-icon'/>
                    <p id='user-name2'>User Name</p>
                    <p id='user-name2'>:</p>
                    <p id='user-name2'>User Name</p>
                </div>
                <div className='previous-box'>
                    <Link to="/addquery" >
                        <GrFormPrevious id='previous-icon'/>
                    </Link>
                    <Link to="/addquery">
                        <p id='user-name2'>Previous</p>
                    </Link>
                </div>
            </div>

            <div className='print-export-btn-stock-box'>
                <button className='export-btn-stock'>Export</button>
            </div>

            <div className='order-form-box'>
                <h3 id='order-form-heading'>Dispatched Orders</h3>
            </div>

            <div className='dispatched-order-page-box2'>
                <div className='ware-pub-cutomer-dispatched-box'>
                    <div className='warehouse-box'>
                        <Dropdown label= "Warehouse" options={options1}/>
                    </div>
                    <div className='publisher-box'>
                        <Dropdown label= "Publisher" options={options2}/>
                    </div>
                    <div className='customer-dipatched-box'>
                        <p id='customer-dipatched-heading'>Customer</p>
                        <textarea id='customer-dipatched'/>
                    </div>
                </div>
                <div className='isbntitle-order-invoice-dispatched-box'>
                    <div className='isbn-title-textarea-stock-box'>
                        <div className='isbn-title-stock-box'>
                            <label className='isbn-radiobtn-box'>
                                <input
                                    type='radio'
                                    value="isbn-radio"
                                    checked={selectedOption === 'isbn-radio'}
                                    onChange={handleOptionChange}
                                />
                                ISBN
                            </label>
                            <label className='title-radiobtn-box'>
                                <input
                                    type='radio'
                                    value="title-radio"
                                    checked={selectedOption === 'title-radio'}
                                    onChange={handleOptionChange}
                                />
                                Title
                            </label>
                        </div>  
                        <textarea id='isbn-title-text'/>
                    </div>
                    <div className='current-pending-box'>
                        <Checkboxdropdown label="Order Type" options={options2}/>
                    </div>
                    <div className='current-pending-box'>
                        <Checkboxdropdown label="Invoice No" options={options2}/>
                    </div>
                </div>
                <div className='datefromto-orderref-show-dipatched-box'>
                    <div className='date-from-to-dispatched-box'>
                        <div className='date-from-dispatched-box'>
                            <p>Date From</p>
                        </div>
                        <div className='date-from-to-dispatched-box2'>
                            <Datefromto placeholder="Select A Date"/>
                            <p>To</p>
                            <Datefromto placeholder="Select A Date"/>
                        </div>
                    </div>
                    <div className='order-ref-checkbox-text-box'>
                        <div className='order-pending-checkbox-box'>
                            <input type="checkbox" id='order-pending-checkbox' name='order-pending-checkbox'></input>
                            <label className='order-pending-heading' htmlFor='order-pending-checkbox'>Order No</label>
                        </div>  
                        <div className='ref-pending-checkbox-box'>
                            <input type="checkbox" id='ref-pending-checkbox' name='ref-pending-checkbox'></input>
                            <label className='ref-pending-heading' htmlFor='ref-pending-checkbox'>Ref No</label>
                        </div>
                        <textarea id='order-ref-text'/>
                    </div>
                    <div className='show-btn-pending-box'>
                        <button className='show-btn-pending-heading'>Show</button>
                    </div>
                </div>
            </div>

            <div className='order-form-box'>
                <h3 id='order-form-heading'>Total Order Details</h3>
            </div>

            <div className='matrix-stock-box'>
                <Matrix data={data}/>
            </div>
        </div>
        <div className='quantity-fresh-back-amount-cartons-dispatched-box'>
            <div className='quantity-fresh-back-dispatched-box'>
                <p>Total Order Quantity :</p>
                <p>Total Dispatched Quantity Against Fresh Order :</p>
                <p>Total Dispatched Quantity Against Back Order :</p>
            </div>
            <div className='amount-cartons-dispatched-box'>
                <p>Total Amount :</p>
                <p>Total Cartons :</p>
            </div>
        </div>
        <Feedback/>
    </div>
  )
}

export default Dispatchedorderpage