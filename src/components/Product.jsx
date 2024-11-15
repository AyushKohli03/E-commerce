import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faCartShopping } from '@fortawesome/free-solid-svg-icons'
function Product({ image, company, title, price }) {
    return (
        <div>
            <div className="pro">
                <img src={image} alt="" />
                <div className="pro-content">
                    <div className="protext">
                        <p>{company}</p>
                        <h5>{title}</h5>
                        <div className="star">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </div>
                        <h6>{price}</h6>
                    </div>
                    <a href="#"><FontAwesomeIcon  icon={faCartShopping} /></a>
                </div>
            </div>

        </div>
    )
}

export default Product