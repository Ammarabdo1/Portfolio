import React from 'react'
import {Container , Row , Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

const Sec1 = () => {
  return (
    <>
    <section className='sec1' id='action1'>
      <Container>
        <Row>
          <Col md={6} sm={12} className='Left' >
            <div className='AllImagesSec1'>
              <img src="images\ImgWave2.svg" alt="Wave2" className='WaveImages' />
              <img src="images\ImgSec2.svg" alt="Position" className='PositionImagesSec1' />
            </div>

          </Col>

          <Col md={6} sm={12} className='Right'>
            <div>
              <Button className='buttonSec1' variant="outline-primary">the dream</Button>
              <h4>Imagine having your sales team on the job 24/7, interacting with an endless stream of ready-to-buy visitors.</h4>              
            </div>

          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Sec1