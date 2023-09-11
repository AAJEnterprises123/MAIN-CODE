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
import Datedropdown from '../components/Datedropdown';


function Addquerypage() {
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
    <div className='add-query-page'>
        <div className='add-query-box1'>

            <Navbar/>

            <div className='extra-add-query-box'>
                <div className='username-prev-box'>
                    <div className='username-box'>
                        <AiOutlineUser id='username-icon'/>
                        <p id='user-name2'>User Name</p>
                        <p id='user-name2'>:</p>
                        <p id='user-name2'>User Name</p>
                    </div>
                    <div className='previous-box'>
                        <Link to="/agrn" >
                            <GrFormPrevious id='previous-icon'/>
                        </Link>
                        <Link to="/agrn">
                            <p id='user-name2'>Previous</p>
                        </Link>
                    </div>
                </div>

                <div className='order-form-addquery-box'>
                        <h3 id='order-form-heading'>Add Query</h3>
                </div>

                <div className='addquery-page-box2'>


                    <div className='ware-publisher-voucherno-current-receiveddate-receivedvia'>
                        <div className='warehouse-publisher-voucherno'>
                            <div className='warehouse-box'>
                                <Dropdown label= "Warehouse" options={options1}/>
                            </div>
                            <div className='publisher-box'>
                                <Dropdownaddquery label= "Publisher" options={options2}/>
                            </div>
                            <div className='voucher-no-addquery-box'>
                                <p id='voucher-no-addquery-heading'>Voucher No :</p>
                                <div className='voucher-no-addquery-textearea'>123</div>
                            </div>
                        </div>
                        <div className='current-receiveddate-receivedvia'>
                            <div className='current-box'>
                                <Dropdown label= "Current" options={options2}/>
                            </div>
                            <div className='query-received-date-box'>
                                <p id='query-received-via-heading'>Query Received Date</p>
                                <Livetimedateaddquery/>
                            </div>
                            <div className='query-received-via-box'>
                                <p id='query-received-via-heading'>Query Received Via</p>
                                <textarea id='query-received-via'/>
                            </div>
                        </div>
                    </div>

                    <div className='receivedfrom-relatedvoucher-box'>
                        <div className='receivedfrom-addquery-box'>
                            <p id='receivedfrom-addquery-heading'>Query Recieved From</p>
                            <textarea id='receivedfrom-addquery'/>
                        </div>
                        <div className='relatedvoucher-addquery-box'>
                            <p id='relatedvoucher-addquery-heading'>Related Voucher No</p>
                            <textarea id='relatedvoucher-addquery'/>
                        </div>
                    </div>

                    <div className='querytitle-voucher-reference-addquery-box'>
                        <div className='query-addquery-box'>
                            <Dropdown label= "Query Title" options={options1}/>
                        </div>
                        <div className='date-box-addquery'>
                            <Datedropdown label="Voucher Date" placeholder="Select Date"/>
                        </div>
                        <div className='reference-no-addquery-box'>            
                            <p id='reference-no-addquery-heading'>Reference No</p>               
                            <textarea className='reference-no-addquery-textearea'/>
                        </div>
                    </div>
                    
                    <div className='order-ref-no-box'>
                        <p id='order-refno-heading'>Order Ref No</p>
                        <textarea id='order-ref-no'/>
                    </div>

                    <div className='agrn-choosefile-import'>
                        <Fileupload/>
                    </div>
                </div>

                <div className='isbn-title-variance-remarks-additem'>
                    <div className='isbn-title-radiobtn-box'>
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
                    <div className='price-quantity-additem-box'>
                        <div className='price-orderform-box'>
                            <textarea id='price-orderform'/>
                            <p id='price-orderform-heading'>Variance</p>
                        </div>
                        <div className='quantity-orderform-box'>
                            <textarea id='quantity-orderform'/>
                            <p id='quantity-orderform-heading'>Remarks</p>
                        </div>
                        <button className='add-item-btn-orderform'>Add Item</button>
                    </div>
                </div>
            </div>
            <div className='matrix-addquery-box2'>
                <Matrix data={data}/>
            </div>
        </div>
        <div className='save-quantity-amount-orderform'>
            <div className='save-button-box'>
                <button className='save-button-heading'>Save Data</button>
            </div>
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

export default Addquerypage