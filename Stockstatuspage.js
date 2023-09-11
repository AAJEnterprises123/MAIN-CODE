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



function Stockstatuspage() {
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
    <div className='stock-status-page'>
        
        <div className='stock-status-box'>

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
                <button className='print-btn-stock'>Print</button>
                <button className='export-btn-stock'>Export</button>
            </div>
            
            <div className='order-form-box'>
                <h3 id='order-form-heading'>Stock Status</h3>
            </div>

            <div className='stock-status-page-box2'>

                <div className='ware-pub-stock-box'>
                    <div className='warehouse-box'>
                        <Dropdown label= "Warehouse" options={options1}/>
                    </div>
                    <div className='publisher-box'>
                        <Dropdown label= "Publisher" options={options2}/>
                    </div>
                    <div className='publisher-box'>
                        <Dropdown label= "Stock Type" options={options2}/>
                    </div>
                </div>
                <div className='isbntitle-status-showitem-box'>
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
                    <div className='date-box'>
                        <Datedropdownstock label="Status As On" placeholder="Select a Date"/>
                    </div>
                    <div className='showitem-checkbox-box'>
                        <input type="checkbox" id='showitems-checkbox' name='showitems-checkbox'></input>
                        <label className='showitems-stock-heading' htmlFor='showitems-checkbox'>Show Items of Zero Stock also</label>
                    </div>  
                </div>
                <div className='stockless-stockmore-master-stock-show-box'>
                    <div className='stockless-stock-box'>
                        <p className='stockless-stock-heading'>Stock Less Than</p>
                        <textarea id='stockless-stock'/>
                    </div>
                    <div className='stockmore-stock-box'>
                        <p className='stockmore-stock-heading'>Stock More Than</p>
                        <textarea id='stockmore-stock'/>
                    </div>
                    <div className='master-stock-checkbox-box'>
                        <input type="checkbox" id='master-stock-checkbox' name='master-stock-checkbox'></input>
                        <label className='master-stock-heading' htmlFor='master-stock-checkbox'>Master Price Wise</label>
                    </div>  
                    <div className='stockprice-stock-checkbox-box'>
                        <input type="checkbox" id='stockprice-stock-checkbox' name='stockprice-stock-checkbox'></input>
                        <label className='stockprice-stock-heading' htmlFor='stockprice-stock-checkbox'>Stock Price Wise</label>
                    </div>  
                    <button className='showbtn-stock-box'>Show</button>
                </div>
            </div>

            <div className='order-form-box'>
                <h3 id='order-form-heading'>Item Details</h3>
            </div>
            <div className='matrix-stock-box'>
                <Matrix data={data}/>
            </div>
        </div>
        <div className='save-quantity-amount-orderform'>
            <div className='total-quantity-box'>
                <p className='total-quantity-heading'>Total Quantity : </p>
            </div>
            <div className='total-amount-box'>
                <p className='total-amount-heading'>Total Amount : </p>
            </div>
        </div>

        <Feedback/>
    </div>
  )
}

export default Stockstatuspage