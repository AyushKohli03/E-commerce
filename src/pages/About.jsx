import React ,{useEffect}from 'react'
// images import/////////////////////////////
import a6 from '../images/about/a6.jpg'
import mp4 from '../images/about/1.mp4'
import card1 from '../images/features/f1.png'
import card2 from '../images/features/f2.png'
import card3 from '../images/features/f3.png'
import card4 from '../images/features/f4.png'
import card5 from '../images/features/f5.png'
import card6 from '../images/features/f6.png'

function About() {
  useEffect(()=>{
    window.scrollTo({top:0,left:0})
  },[])
  return (

    <>
      <section className="abouthero ">
        <div className="content center">
          <h2>#Know us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

      </section>
      <section className='blog'>
        <div className='aboutbox'>
          <div className='blogimg'>
            <img src={a6} alt="" />
          </div>
          <div className='blogtxt'>
            <h2>Who we are?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nam magni tenetur at voluptatum sequi minima distinctio rem libero aut vero blanditiis voluptas cupiditate consectetur iusto, repellat voluptatibus nulla sunt. Facilis, ducimus! Tempore, rem reiciendis atque, optio eum culpa animi eos numquam illum officiis adipisci enim a magnam, dicta excepturi. Repellendus necessitatibus, odit possimus nesciunt saepe in, ut aliquam nostrum sapiente accusantium, quam id alias suscipit optio consectetur dolor totam.</p><br />
          <marquee bgcolor='#ccc' loop='-1' scrollamount='5' width='100%'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit impedit at enim rem nam ducimus facere quisquam.</marquee>
          </div>
        </div>
      </section>
      <section className='videosec'>
        <h1>Download our <a href="#">App</a></h1>
        <video autoPlay muted loop src={mp4}></video>
      </section>
      <div className="center features">
                <div className="card">

                    <img className="featureimg" src={card1} alt="" />
                    <h6 id="f1" className="featurebtn ">Free shipping</h6>

                </div>
                <div className="card">

                    <img className="featureimg" src={card2} alt="" />
                    <h6 id="f2" className="featurebtn ">Online Order</h6>

                </div>
                <div className="card">

                    <img className="featureimg" src={card3} alt="" />
                    <h6 id="f3" className="featurebtn">Save money</h6>

                </div>
                <div className="card">

                    <img className="featureimg" src={card4} alt="" />
                    <h6 id="f4" className="featurebtn">Promotions</h6>

                </div>
                <div className="card">

                    <img className="featureimg" src={card5} alt="" />
                    <h6 id="f5" className="featurebtn">Happy sell</h6>

                </div>
                <div className="card">

                    <img className="featureimg" src={card6} alt="" />
                    <h6 id="f6" className="featurebtn ">24/7 support</h6>

                </div>
            </div>
    </>
  )
}

export default About