import React from 'react'
import {Container ,Row ,Col, Form} from 'react-bootstrap'
import FormEmail from './FormEmail'

const Sec5 = () => {
  return (
    <>
      <Container>
        <Row>
            <Col md={6} sm={12} className='Data-left'>
                <div className='AllText'>
                    <h4> <span>Email:</span> info@gmail.com </h4>
                    <h4> <span>Phone:</span> 012786630150 </h4>
                    <h4> <span>Address:</span> Alter3a street Alsanahra </h4>                    
                </div>

            </Col>

            <Col md={6} sm={12} className='Form-right'>
              <FormEmail/>
                
            </Col>

        </Row>
      </Container>
    </>
  )
}

export default Sec5