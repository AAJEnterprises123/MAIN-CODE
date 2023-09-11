import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { GrFormPrevious } from 'react-icons/gr';
import Dropdown from '../components/Dropdown';
import Fileupload from '../components/Fileupload';
import Feedback from '../components/Feedback';
import Navbar from '../components/Navbar';
import Livetimedate from '../components/Livetimedate';
import Matrix from '../components/Matrix';

function Purchaseorderpage() {

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
        <div className='purchase-order-page'>

            <div className='purchase-order-box1'>

                <Navbar/>

                <div className='username-prev-box'>
                    <div className='username-box'>
                        <AiOutlineUser id='username-icon'/>
                        <p id='user-name2'>User Name</p>
                        <p id='user-name2'>:</p>
                        <p id='user-name2'>User Name</p>
                    </div>
                    <div className='previous-box'>
                        <Link to="/home" >
                            <GrFormPrevious id='previous-icon'/>
                        </Link>
                        <Link to="/home">
                            <p id='user-name2'>Previous</p>
                        </Link>
                    </div>
                </div>

                <div className='purchasebox'>
                    <h3 id='purchaseorder'>Purchase Order</h3>
                </div>

                <div className='purchase-order-box2'>

                    <div className='voucher-no-box'>
                        <p className='voucher-no'>Voucher No : 1953</p>
                    </div>

                    <div className='ware-da-ship-pub-pri-ref-box'>
                        <div className='warehouse-date-shipment'>
                            <div className='warehouse-box'>
                                <Dropdown label= "Warehouse" options={options1}/>
                            </div>
                            <div className='date-box'>
                                <p id='date-heading'>Date</p>
                                <Livetimedate/>
                            </div>
                            <div className='shipment-box'>
                                <p id='shipment-heading'>Shipment Mode</p>
                                <textarea id='shipment-mode'/>
                            </div>
                        </div>
                        <div className='publisher-printer-refno'>
                            <div className='publisher-box'>
                                <Dropdown label= "Publisher" options={options2}/>
                            </div>
                            <div className='printer-box'>
                                <Dropdown label= "Printer" options={options3}/>
                            </div>
                            <div className='ref-no-box'>
                                <p id='ref-no-heading'>Ref No</p>
                                <textarea id='ref-no'/>
                            </div>
                        </div>
                    </div>

                    <div className='order-ref-no-box'>
                        <p id='order-refno-heading'>Order Ref No</p>
                        <textarea id='order-ref-no'/>
                    </div>

                    <div className='choosefile-import'>
                        <Fileupload/>
                        <div className='import-isbn-box'>
                            <button id='isbn-button'>Import ISBN</button>
                            <p id='isbn-button-paragraph'>Use 97-2003 Excel File Type. Excel Data should be in Sheet1.Row 1 for ISBN,Row 2 for Qty and Row 3 for Discount.If Load Manual discount then fill the cell if not then leave blank cell.</p>
                        </div>
                    </div>
                </div>

                <div className='matrix-box'>
                    <Matrix data={data}/>
                </div>

                <div className='save-quantity-amount'>
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

            </div>

            <Feedback/>
        </div>
    );
}

export default Purchaseorderpage;