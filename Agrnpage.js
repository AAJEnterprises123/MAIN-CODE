import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { GrFormPrevious } from 'react-icons/gr';
import Dropdown from '../components/Dropdown';
import Fileupload from '../components/Fileupload';
import Feedback from '../components/Feedback';
import Navbar from '../components/Navbar';
import Livetimedate from '../components/Livetimedate';
import Matrix from '../components/Matrix';

function Agrnpage() {
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
    <div className='agrn-page'>

        <div className='agrn-page-box1'>

            <Navbar/>

            <div className='username-prev-box'>
                <div className='username-box'>
                    <AiOutlineUser id='username-icon'/>
                    <p id='user-name2'>User Name</p>
                    <p id='user-name2'>:</p>
                    <p id='user-name2'>User Name</p>
                </div>
                <div className='previous-box'>
                    <Link to="/purchaseorder" >
                        <GrFormPrevious id='previous-icon'/>
                    </Link>
                    <Link to="/purchaseorder">
                        <p id='user-name2'>Previous</p>
                    </Link>
                </div>
            </div>

            <div className='order-form-box'>
                    <h3 id='order-form-heading'>Order Form</h3>
            </div>

            <div className='agrn-orderpage-box2'>

                <div className='voucher-no-box'>
                    <p className='voucher-no'>Voucher No : 1953</p>
                </div>

                <div className='ware-da-type-pub-pri-received-box'>
                    <div className='warehouse-date-type'>
                        <div className='warehouse-box'>
                            <Dropdown label= "Warehouse" options={options1}/>
                        </div>
                        <div className='date-box'>
                            <p id='date-heading'>Date</p>
                            <Livetimedate/>
                        </div>
                        <div className='agrn-type-box'>
                            <Dropdown label= "AGRN Type" options={options1}/>
                        </div>
                    </div>
                    <div className='publisher-printer-received'>
                        <div className='publisher-box'>
                            <Dropdown label= "Publisher" options={options2}/>
                        </div>
                        <div className='printer-box'>
                            <Dropdown label= "Printer" options={options3}/>
                        </div>
                        <div className='received-by-box'>
                            <p id='received-by-heading'>Received By</p>
                            <textarea id='received-by'/>
                        </div>
                    </div>
                </div>

                <div className='agrn-narration-box'>
                    <div className='agrn-ref-no-box'>
                        <p id='agrn-ref-no-heading'>AGRN Ref No</p>
                        <textarea id='agrn-ref-no'/>
                    </div>
                    <div className='narration-box'>
                        <p id='narration-heading'>Narration</p>
                        <textarea id='narration'/>
                    </div>
                </div>

                <div className='agrn-choosefile-import'>
                    <Fileupload/>
                    <div className='import-isbn-box'>
                        <button id='isbn-button'>Import ISBN</button>
                        <p id='isbn-button-paragraph'>Use 97-2003 Excel File Type. Excel Data should be in Sheet1.Row 1 for ISBN, Row 2 for Qty and Row 3 for Price.</p>
                    </div>
                </div>
            </div>

            <div className='isbn-title-price-quantity-additem'>
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
                        <p id='price-orderform-heading'>Price</p>
                    </div>
                    <div className='quantity-orderform-box'>
                        <textarea id='quantity-orderform'/>
                        <p id='quantity-orderform-heading'>Quantity</p>
                    </div>
                    <button className='add-item-btn-orderform'>Add Item</button>
                </div>
            </div>
            <div className='matrix-box'>
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

export default Agrnpage