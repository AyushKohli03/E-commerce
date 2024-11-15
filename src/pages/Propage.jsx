import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import data, { data2 } from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../actions';
function Propage() {
  const params = useParams();

  const dispatch = useDispatch()
  const [prodata, setprodata] = useState([...data2, ...data])
  const [added, setadded] = useState(false)
  let { key } = params
  console.log(key)

  useEffect(() => {

    const prodetail = (JSON.parse(localStorage.getItem('product')))
    console.log('useeffect 1')
    setprodata(prodetail)
    window.scrollTo({ top: 0, left: 0 })
  }, [])


  useEffect(() => {

    window.localStorage.setItem('product', JSON.stringify([...data2, ...data]))
    console.log("useeffect2")
  }, [prodata])
  console.log(prodata)
  const [quantity, setquantity] = useState(1)

  const decreament = () => {
    if (quantity > 1) {
      setquantity((prev) => prev - 1)
    }
  }
  const increament = () => {

    setquantity((prev) => parseInt(prev) + 1)

  }

  const additem = (pro, quantity) => {

    if (added == false) {
      setadded(true)
      const subtotal = pro.price * quantity
      dispatch(addtocart(pro, quantity, subtotal))
    }


  }
  return (

    <>
      {
        prodata.map((pro) => {
          if (pro.key == key) {
            return <>
              <div class="prodetails">
                <div class="imgcont">
                  <div class="mainimg">
                    <img id="mainimg" src={pro.image} alt="" />
                  </div>
                  <div class="smimage">
                    <img class="small-img" src="images/products/f1.jpg" alt="" />
                    <img class="small-img" src="images/products/f2.jpg" alt="" />
                    <img class="small-img" src="images/products/f3.jpg" alt="" />
                    <img class="small-img" src="images/products/f4.jpg" alt="" />
                  </div>
                </div>
                <div class="prodes">
                  <h6>Home / T-shirt</h6>
                  <h4>{pro.title}</h4>
                  <h2>{pro.price}</h2>
                  <select name="" id="">
                    <option>Select Size</option>
                    <option>XL</option>
                    <option>XXL</option>
                    <option>Small</option>
                    <option>Large</option>
                  </select><br />
                  <div className='quantitycont'>
                    <div className='chquantity' onClick={decreament}>-</div>
                    <input className='quantity' type='number' value={quantity} onChange={(e) => setquantity(e.target.value)} />
                    <div className='chquantity' onClick={increament}>+</div>
                  </div>


                  <button class={added ? "itemadded" : "explorebtn addbtn"} onClick={() => additem(pro, quantity)}>{added ? "Added" : "Add to cart"}</button>
                  {added ? <Link to={'/cart'}><button className=' viewcart'>View Cart</button></Link> : ''}
                  <h4>Product Details</h4>
                  <span>{pro.detail}</span>

                </div>
              </div>
            </>
          }
        })
      }


    </>

  )
}

export default Propage