import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Sec3 = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={6} sm={12} className="Left">
            <div className="cardd">
                <img src="images\Img2Sec1.svg" alt="" className="diffImg" />
                <div className="text">
                  <h6>UX/UI Design</h6>
                  <p>Where concepts turn into a strategic user-experience.</p>                   
                </div>
             
            </div>

            <div className="cardd">
                <img src="images\Left2Sec3.svg" alt="" />
                <div className="text">
                  <h6>System Automation</h6>
                  <p>Where busywork gets delegated.</p>                     
                </div>
             
            </div>

          </Col>

          <Col md={6} sm={12} className='Right'>
            <div className="cardd">
                <img src="images\Img3Sec1.svg" alt="" />
                <div className="text">
                  <h6>WebFlow Development</h6>
                  <p>Where design turns into code.</p>                    
                </div>
               
            </div>

            <div className="cardd">
                <img src="images\Img1Sec1.svg" alt="" />
                <div className="text">
                  <h6>SEO</h6>
                  <p>Where customers come flooding in.</p>                      
                </div>
            
            </div>

          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sec3;
