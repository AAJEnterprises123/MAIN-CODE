import React from 'react'

const Matrix = ({data}) => {
  return (
    <div className='matrix-box2'>
        <table className='main-matrix-box'>
                <tr className='matrix-heading-box'>
                    <th className='sr-no-column'>SrNo</th>
                    <th className='isbn-column'>ISBN</th>
                    <th className='title-column'>Title</th>
                    <th className='author-column'>Author</th>
                    <th className='division-code-column'>Division Code</th>
                    <th className='price-column'>Price</th>
                    <th className='quantity-column'>Quantity</th>
                    <th className='discount-column'>Discount</th>
                    <th className='amount-column'>Amount</th>
                    <th className='delete-column'>Delete</th>
                </tr>
                {data.map((item , index) => (
                    <tr key={index} className='matrix-data-box'>
                        <td className='sr-no-data'>
                            <p id='sr-no-heading'>{item.SrNo}</p>
                        </td>
                        <td className='isbn-data'>
                            <p id='sr-no-heading'>{item.ISBN}</p>
                        </td>
                        <td className='title-data'>
                            <p id='sr-no-heading'>{item.Title}</p>
                        </td>
                        <td className='author-data'>
                            <p id='sr-no-heading'>{item.Author}</p>
                        </td>
                        <td className='division-code-data'>
                            <p id='sr-no-heading'>{item.DivisionCode}</p>
                        </td>
                        <td className='price-data'>
                            <p id='sr-no-heading'>{item.Price}</p>
                        </td>
                        <td className='quantity-data'>
                            <p id='sr-no-heading'>{item.Quantity}</p>
                        </td>
                        <td className='discount-data'>
                            <p id='sr-no-heading'>{item. Discount}</p>
                        </td>
                        <td className='amount-data'>
                            <p id='sr-no-heading'>{item.Amount}</p>
                        </td>
                        <div className='matrix-delete-button-box'>
                            <button className='matrix-delete-button'>delete</button>
                        </div>
                    </tr>
                ))}

        </table>
    </div>
  )
}

export default Matrix