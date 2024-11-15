import React, { useEffect } from 'react'
import data from '../data'
import { data2 } from '../data'
import Product from '../components/Product'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
function Shop() {
  const prodata=[...data,...data2]
useEffect(()=>{
  window.scrollTo({top:0,left:0})
},[])
  return (
    <>
      <section className="shophero ">
        <div className="content center">
          <h2>#stayhome</h2>
          <p>Save more with coupons and upto 70% off</p>
        </div>

      </section>
      <div className="pro-container ">

        {
          prodata.map((pro, key) => {
            pro.key = key
            return (
              <Link className='link' to={`product_detail/${key}`}>
                <Product
                  image={pro.image}
                  title={pro.title}
                  company={pro.company}
                  price={pro.price} /></Link>)
          })
        }
      </div>
     

      <div className="pagination">

        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box"><FontAwesomeIcon icon={faArrowRight} /></div>

      </div>


    </>
  )
}

export default Shop