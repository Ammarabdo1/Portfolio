import React from 'react'
import {Container , Row , Col} from 'react-bootstrap'

const Sec4 = () => {
  return (
    <div>
        <Container>

            <Row>

                <Col md={4} sm={12} className='myCard'>

                    <div className="component">
                        <h5>REASON 1</h5>
                        <h2>Next-Level Storytelling</h2>
                        <img src="images\Card1Sec4.svg" alt="" />
                        <p>
                        Unleash the best visuals and experiences that modern web design has to offer. Webflow turns your wildest of ideas into strategic customer-experiences.
                        </p>                        
                    </div>


                </Col>

                <Col md={4} sm={12} className='myCard'>

                    <div className="component">
                        <h5>REASON 2</h5>
                        <h2>Unbelievable Performance</h2>
                        <img src="images\Card2Sec4.svg" alt="" />
                        <p>
                        Hosted on an ultra-fast global CDN, Webflow goes full steam ahead with load speed, uptime, asset optimization, and SEO. All without ever needing to install a patch or upload a server configuration.
                        </p>                        
                    </div>
                </Col>

                <Col md={4} sm={12} className='myCard'>
                    <div className="component">
                        <h5>REASON 3</h5>
                        <h2>Developer-Free Tweaks</h2>
                        <img src="images\Card3Sec4.svg" alt="" />
                        <p>
                            Webflow’s ‘Editor Mode’ allows any team member to update content as they please without wreaking havoc or paying people like us to fix it.
                        </p>                        
                    </div>


                </Col>

                </Row>

        </Container>
    </div>
  )
}

export default Sec4