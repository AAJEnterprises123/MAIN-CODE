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
import Checkboxdropdown from '../components/Checkboxdropdown';




function Pendingorderpage() {
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
    <div className='pending-order-page'>

        <div className='pending-order-box'>

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
                <h3 id='order-form-heading'>Pending Orders</h3>
            </div>
            
            <div className='pending-order-page-box2'>
                <div className='ware-pub-reforder-box'>
                    <div className='warehouse-box'>
                        <Dropdown label= "Warehouse" options={options1}/>
                    </div>
                    <div className='publisher-box'>
                        <Dropdown label= "Publisher" options={options2}/>
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
                </div>
                <div className='customer-isbntitle-show-box'>
                    <div className='current-pending-box'>
                        <Checkboxdropdown label="Current" options={options2}/>
                    </div>
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
                    <div className='show-btn-pending-box'>
                        <button className='show-btn-pending-heading'>Show</button>
                    </div>
                </div>
            </div>

            <div className='order-form-box'>
                <h3 id='order-form-heading'>Pending Order Details</h3>
            </div>
            <div className='matrix-stock-box'>
                <Matrix data={data}/>
            </div>
            <div className='orders-quantity-amount-pending-box'>
                <div className='total-order-pending-box'>
                    <p className='total-order-pending-heading'>Total Orders : </p>
                </div>
                <div className='total-quantity-box'>
                    <p className='total-quantity-heading'>Total Dispatch Quantity : </p>
                </div>
                <div className='total-amount-box'>
                    <p className='total-amount-heading'>Total Amount : </p>
                </div>
            </div>
        </div>
        <Feedback/>
    </div>
  )
}

export default Pendingorderpage