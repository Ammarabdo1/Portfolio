import React from 'react'
import {Container , Row , Col} from 'react-bootstrap'
// import { IconName } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='MainFooter'>
        <Container>
            <Row>
                <Col md={4} sm={12} className='Footer-left'>
                    <img src="images\imgNav.png" alt="navImg" />
                </Col>

                <Col md={4} sm={12} className='Footer-mid'>
                    <span>© 2024 Ammar Abdo</span>Email: ammaralzokmzxc@gmail.com
                </Col>

                <Col md={4} sm={12} className='Footer-right'>
                        <div className="icon"><FaFacebookSquare /></div>
                        <div className="icon"><IoLogoInstagram /></div>
                        <div className="icon"><BsLinkedin /> </div>                      
                     

                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer