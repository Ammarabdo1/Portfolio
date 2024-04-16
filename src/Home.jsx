import React from 'react'
import {Container , Row , Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Sec1 from './Sec1';
import Sec2Swiper from './Sec2Swiper';
import Sec3 from './Sec3';
import Sec4 from './Sec4'
import Sec5 from './Sec5';

const Home = () => {
  return (
    <>
    {/*//! Header  */}
    <header className='Header'>
        <Container>
          <Row>
            <Col md={7} sm={12} className='Left'>
              <div>
                <p>WEB DESIGN <span>//</span> WEBFLOW DEVELOPMENT <span>//</span> SEO </p>
                <h1>Ammar Alzokm Portfolio .</h1>
                <h4>We build marketing websites that help you sell on autopilot.</h4>
                <Button variant="primary">Let's talk</Button>                
              </div>

            </Col>

            <Col md={5} sm={12} className='Right'>

              <div className='AllImages'>
                <img src="images\ImgWave1.svg" alt="wave"  className='WaveImg'/>
                <img src="images\MainImgSec1.png" alt="Main" className='MainImg' />
                <div className='bgImg1'><img src="images\Img1Sec1.svg" alt="G" className='SmallImg1' /></div>
                <div className='bgImg2'><img src="images\Img2Sec1.svg" alt="W" className='SmallImg2' /></div> 
                <div className='bgImg3'><img src="images\Img3Sec1.svg" alt="&" className='SmallImg3' /></div>
              </div>

            </Col>
          </Row>
        </Container>
    </header>

    {/*//! Section (( 1 ))  */}
    <Sec1/>

    {/*//! Section (( 2 ))  */}
    <section className="sec2">
      <div className="top"><h1>Latest builds.   <a href="">View Projects</a> </h1></div>
      <div className='swiperJs'><Sec2Swiper/></div>
    </section>

    {/*//! Section (( 3 ))  */}
    <section className='sec3'>
      <img src="images\ImgWave2.svg" alt="" className="bg" />
      <div>
        <h1>How it's done.</h1>
      </div>
      <div className='cardss'><Sec3/></div>
      
    </section>

    <section className="sec4">

      <div className='headH1'>
        <h1>Why WebFlow.</h1>
      </div>

      <div className="cards">
        <Sec4/>
      </div>
    </section>

    <section className="sec5">
      <div className="h1head">
        <h1>Contact Us</h1>
      </div>

      <div className="All">
        <Sec5/>
      </div>
    </section>

    </>
  )
}

export default Home