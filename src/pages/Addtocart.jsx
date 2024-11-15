import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removetocart } from '../actions'
function Addtocart() {
    const [prices, setprices] = useState([])
    const [emptycart, setemptycart] = useState()
    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    useEffect(() => {
        setprices(cart.map((item) => (item.subtotal)))
        if (cart.length==0) {
            setemptycart(true)
        } else {
            setemptycart(false)
        }
    }, [cart])

    const handleRemove = (item) => {
        dispatch(removetocart(item.key))
        setprices(prices.filter(price => price != item.subtotal))
    }

    const total = prices.reduce((item1, item2) => {
        if (item1 == null | item2 == null) {
            return
        } else {
            return (item1 + item2)
        }

    }, 0)


    return (<div className='cartpage'>
        {emptycart ? 
        <div className='center emptydiv'>
            <h2>Your cart is empty...!</h2>
            <Link to={"/shop"}><button className="shopbtn">Shop now</button></Link>
        </div>
         : <div className='addtocart'>

            {
                cart.map((item) => (
                    <div className='center cartitem'>
                        <div className='cartimg'>
                        <img src={item.image} alt="" />
                        </div>
                        
                        <div className='itemdetail'>
                            <p><span>Item: </span>{item.title}</p>
                            <p><span>Price: </span>${item.price}</p>
                            <p><span>Quantity: </span>{item.quantity}</p>
                            <p> <span> Sub Total:</span>${item.subtotal} </p>

                        </div>

                        {/* {prices.push(item.subtotal)} */}

                        <button className="explorebtn addbtn removecart" onClick={() => handleRemove(item)}>Remove</button>
                    </div>


                ))
            }
            <div className="ordersum">
                <p>items: <span>{cart.length}</span></p>
                <p>shipping cost: <span>$50</span></p>
                <p>Subtotals: <span>${total}</span></p>
                <h3>Grand Total: <span>${total+50}</span></h3>
            </div>

        </div>}

    </div>
    )
}

export default Addtocart