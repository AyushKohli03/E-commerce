import React, { useEffect } from 'react'
import b1 from '../images/blog/b1.jpg'
import b2 from '../images/blog/b2.jpg'
import b3 from '../images/blog/b3.jpg'
import b4 from '../images/blog/b4.jpg'
import b5 from '../images/blog/b5.jpg'
function Blog() {
  useEffect(()=>{
    window.scrollTo({top:0,left:0})
  },[])
  
  return (
    <>
      <section className="bloghero ">
        <div className="content center">
          <h2>#readmore</h2>
          <p>Read all case studies about our products</p>
        </div>

      </section>
      <section className='blog'>
        <div className='blogbox'>
          <div className='blogimg'>
            <img src={b1} alt="" />
          </div>
          <div className='blogtxt'>
            <h2>The cotton jersey zip-up hoodie</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, eaque consequuntur rerum dolorum iure excepturi esse quibusdam voluptatibus veritatis corrupti, aliquid totam vitae ab cumque!</p><br />
            <span>Continue reading</span>
          </div>
        </div>
        <div className='blogbox'>
          <div className='blogimg' >
            <img src={b2} alt="" />
          </div>
          <div className='blogtxt'>
            <h2>How to style a quiff</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, eaque consequuntur rerum dolorum iure excepturi esse quibusdam voluptatibus veritatis corrupti, aliquid totam vitae ab cumque!</p><br />
            <span>Continue reading</span>
          </div>
        </div>
        <div className='blogbox'>
          <div className='blogimg' >
            <img src={b3} alt="" />
          </div>
          <div className='blogtxt'>
            <h2>Runway inspired Trends</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, eaque consequuntur rerum dolorum iure excepturi esse quibusdam voluptatibus veritatis corrupti, aliquid totam vitae ab cumque!</p><br />
            <span>Continue reading</span>
          </div>
        </div>
        <div className='blogbox'>
          <div className='blogimg'>
            <img src={b4} alt="" />
          </div>
          <div className='blogtxt'>
            <h2>AW20 Mens wear trends</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, eaque consequuntur rerum dolorum iure excepturi esse quibusdam voluptatibus veritatis corrupti, aliquid totam vitae ab cumque!</p><br />
            <span>Continue reading</span>
          </div>
        </div>
        <div className='blogbox'>
          <div className='blogimg'>
            <img src={b5} alt="" />
          </div>
          <div className='blogtxt'>
            <h2>Must have skater  girl item</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, eaque consequuntur rerum dolorum iure excepturi esse quibusdam voluptatibus veritatis corrupti, aliquid totam vitae ab cumque!</p><br />
            <span>Continue reading</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog