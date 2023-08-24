import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { GrFormPrevious } from 'react-icons/gr';
import Dropdown from '../components/Dropdown';
import Datedropdown from '../components/Datedropdown';
import Fileupload from '../components/Fileupload';

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

    return (
        <div className='purchase-order-page'>

            <div className='purchase-order-box1'>

                <div className='username-prev-box'>
                    <div className='username-box'>
                        <AiOutlineUser/>
                        <p>User Name :</p>
                        <p>User Name</p>
                    </div>
                    <div className='previous-box'>
                        <Link to="/home">
                            <GrFormPrevious/>
                        </Link>
                        <Link to="/home">
                            <p>Previous</p>
                        </Link>
                    </div>
                </div>

                <div className='purchasebox'>
                    <h3 id='purchaseorder'>Purchase Order</h3>
                </div>

                <div className='purchase-order-box2'>

                    <div className='voucher-no-box'>
                        <p className='voucherno'>Voucher No</p>
                    </div>

                    <div className='warehouse-date-shipment'>
                        <Dropdown label="Warehouse" options={options1}/>
                        <Datedropdown label="Date" placeholder="Choose a Date"/>
                        <div className='shipment-box'>
                            <p>Shipment Mode</p>
                            <textarea id='shipment-mode'/>
                        </div>
                    </div>

                    <div className='publisher-printer-refno'>
                        <Dropdown label="Publisher" options={options2}/>
                        <Dropdown label="Printer" options={options3}/>
                        <div className='ref-no-box'>
                            <p>Ref No</p>
                            <textarea id='ref-no'/>
                        </div>
                    </div>

                    <div className='order-ref-no-box'>
                            <p>Order Ref No</p>
                            <textarea id='order-ref-no'/>
                    </div>

                    <div className='choosefile-import'>
                        <Fileupload/>
                    </div>

                    <div className='import-isbn-box'>
                        <button>Import ISBN</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Purchaseorderpage