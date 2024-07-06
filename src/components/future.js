// future.js dosyanızın başındaki import satırlarını şu şekilde güncelleyin:
import React from 'react';
import { Image, Card, Button, Container, Row, Form, Col } from 'react-bootstrap';
import { IoChevronForwardOutline, IoMail } from 'react-icons/io5';
import { FaChevronDown, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa';
import resim from '../images/resim.png';
import Typewriter from './Typewriter'; // Doğru içe aktarım
// import './Future.css'; // Bu satırı kaldırın


function Future() {
  return (
    <div style={{ backgroundColor: 'black', padding: '20px', textAlign: 'center' }}>
      <div style={{ borderRadius: '50%', overflow: 'hidden', width: '250px', height: '250px', margin: 'auto', marginTop: '150px' }}>
        <div className="image-container">
          <Image src={resim} className="rounded-image" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
        </div>
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '30vh', backgroundColor: 'black' }}>
        <Card style={{ width: '50%', padding: '10px', backgroundColor: 'black' }}>
          <Card.Body>
            <Card.Title style={{ color: 'white', fontSize: '3rem', textAlign: 'center' }}>
              <span style={{ fontWeight: 'normal', color: '#ccc' }}>
                <Typewriter text="I'm a designer specialized in UI/UX and Interaction Design" />
              </span>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>


      <FaChevronDown style={{ color: "#fff" }} />
      <Card style={{ width: '100%', padding: '20px', backgroundColor: 'black' }}>
        <Card.Body>
          <Card.Title style={{ color: 'white', textAlign: 'left', fontSize: '2rem' }}>
          <h2 style={{ color: 'white', textAlign: 'center', display: 'inline-block', marginBottom: "40px", fontWeight: "normal", fontFamily: 'Work Sans, sans-serif' }}>Melih</h2>
            <h2 style={{ marginLeft: "10px", color: 'white', textAlign: 'center', fontWeight: "bold", display: 'inline-block', marginBottom: "40px", fontFamily: 'Work Sans, sans-serif' }}>Şahaner</h2>
          </Card.Title>
          <p style={{ color: 'white', textAlign: 'left', fontSize: '1.2rem', lineHeight: '1.6' }}>
            Hi, I'm Melih, a designer specializing in interface and user experience and also the co-founder of Upper Social. We founded Upper Social by focusing on the problems that freelancers can't solve with existing solutions. I hope you enjoy my work and Upper Social.
          </p>
        </Card.Body>
      </Card>

      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '40px' }}>
        <div style={{ width: '100%', textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 'normal' }}>Works</h2>
        </div>
        <Card style={{ width: '45%', backgroundColor: 'black', border: 'none', marginBottom: '20px' }}>
          <Image src={resim} alt="Card Image" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '5px' }} />
          <Card.Body style={{ color: 'white', textAlign: 'left' }}>
            <Card.Title style={{ fontWeight: 'bold', color: 'white' }}>PROJECT TITLE</Card.Title>
            <Card.Text style={{ color: 'white' }}>
              <span style={{ fontWeight: 'normal', color: '#ccc' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.</span>
            </Card.Text>
            <Button variant="outline-light" style={{ borderRadius: 25, fontSize: 15, padding: '10px 20px' }}>
              VIEW WORK <IoChevronForwardOutline style={{ marginLeft: '5px' }} />
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '45%', backgroundColor: 'black', border: 'none', marginBottom: '20px' }}>
          <Image src={resim} alt="Card Image" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '5px' }} />
          <Card.Body style={{ color: 'white', textAlign: 'left' }}>
            <Card.Title style={{ fontWeight: 'bold', color: 'white' }}>PROJECT TITLE</Card.Title>
            <Card.Text style={{ color: 'white' }}>
              <span style={{ fontWeight: 'normal', color: '#ccc' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.</span>
            </Card.Text>
            <Button variant="outline-light" style={{ borderRadius: 25, fontSize: 15, padding: '10px 20px' }}>
              VIEW WORK <IoChevronForwardOutline style={{ marginLeft: '5px' }} />
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: "200px" }}>
        {/* Skills Blok */}
        <div style={{ flex: '1', marginRight: '50px', marginLeft: '50px' }}>
          <Card.Title style={{ color: 'white', fontSize: '2rem', fontWeight: 'normal',textAlign: 'center', marginBottom: '20px' , fontFamily: 'Work Sans, sans-serif' }}>Skills</Card.Title>
          <div style={{ marginBottom: '50px' }}>
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontWeight: 'bold', color: 'white', fontSize: '1.2rem' }}>Graphic Designer:</span><br />
              <span style={{ color: 'white', fontSize: '1rem' }}>I've been working as a graphic designer since 2020.</span>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontWeight: 'bold', color: 'white', fontSize: '1.2rem' }}>Web Developer:</span><br />
              <span style={{ color: 'white', fontSize: '1rem' }}>I've been working as a web developer since 2018.</span>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontWeight: 'bold', color: 'white', fontSize: '1.2rem' }}>UI/UX Designer:</span><br />
              <span style={{ color: 'white', fontSize: '1rem' }}>I've been specializing in UI/UX design since 2016.</span>
            </div>
          </div>
        </div>

        {/* Experience Blok */}
        <div style={{ flex: '1', marginRight: '50px', marginLeft: '50px' }}>
          <Card.Title style={{ color: 'white', fontSize: '2rem', fontWeight: 'normal', marginBottom: '20px', fontFamily: 'Work Sans, sans-serif' }}>Experience</Card.Title>
          <div style={{ marginBottom: '50px' }}>
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontWeight: 'bold', color: 'white', fontSize: '1.2rem' }}>Senior Designer:</span><br />
              <span style={{ color: 'white', fontSize: '1rem' }}>I've been working as a senior designer since 2015.</span>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontWeight: 'bold', color: 'white', fontSize: '1.2rem' }}>Lead Developer:</span><br />
              <span style={{ color: 'white', fontSize: '1rem' }}>I've been leading development projects since 2017.</span>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontWeight: 'bold', color: 'white', fontSize: '1.2rem' }}>Product Manager:</span><br />
              <span style={{ color: 'white', fontSize: '1rem' }}>I've been managing product teams since 2019.</span>
            </div>
          </div>
        </div>
      </div>

      <Container style={{ marginTop: '200px', marginBottom: "40px" }}>
        
        <Row>
          <Col>
            <h2 style={{ color: 'white', textAlign: 'center', display: 'inline-block', marginBottom: "40px", fontWeight: "normal", fontFamily: 'Work Sans, sans-serif' }}>Social </h2>
            <h2 style={{ marginLeft: "20px", color: 'white', textAlign: 'center', fontWeight: "bold", display: 'inline-block', marginBottom: "40px", fontFamily: 'Work Sans, sans-serif' }}>Links </h2>
          </Col>
        </Row>
      
        <Row className="justify-content-center">
          <Col xs="auto" style={{ fontWeight: 'bold', color: 'white' }}>
            <a href="#"><FaFacebookF style={{ color: "darkgray" }} /></a>
          </Col>
          <Col xs="auto" style={{ fontWeight: 'bold', color: 'white' }}>
            <a href="#"><FaTwitter style={{ color: "darkgray" }} /></a>
          </Col>
          <Col xs="auto" style={{ fontWeight: 'bold', color: 'white' }}>
            <a href="#"><FaInstagram style={{ color: "darkgray" }} /></a>
          </Col>
          <Col xs="auto" style={{ fontWeight: 'bold', color: 'white' }}>
            <a href="#"><FaLinkedinIn style={{ color: "darkgray" }} /></a>
          </Col>
          <Col xs="auto" style={{ fontWeight: 'bold', color: 'white' }}>
            <a href="#"><FaGithub style={{ color: "darkgray" }} /></a>
          </Col>
          <Col xs="auto" style={{ fontWeight: 'bold', color: 'white' }}>
            <a href="#"><FaYoutube style={{ color: "darkgray" }} /></a>
          </Col>
        </Row>
      </Container>

      <Container style={{ maxWidth: '500px' }}>
      <div style={{ width: '100%', textAlign: 'center', marginBottom: '50px', marginTop: '150px' }}>
          <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 'normal' }}>Contact</h2>
        </div>
        <Form >
          <Form.Group controlId="formEmail">
            <Form.Label style={{ color: 'white' }}></Form.Label>
            <Form.Control type="email" placeholder="Your Email" style={{ backgroundColor: "darkgray" }} />
          </Form.Group>

          <Form.Group controlId="formFullName">
            <Form.Label style={{ color: 'white' }}></Form.Label>
            <Form.Control type="text" placeholder="Full Name" style={{ backgroundColor: "darkgray" }} />
          </Form.Group>

          <Form.Group controlId="formEstimatedBudget">
            <Form.Label style={{ color: 'white' }}></Form.Label>
            <Form.Control type="text" placeholder="Estimated Budget" style={{ backgroundColor: "darkgray" }} />
          </Form.Group>

          <Form.Group controlId="formEstimatedDuration">
            <Form.Label style={{ color: 'white' }}></Form.Label>
            <Form.Control type="text" placeholder="Estimated Duration" style={{ backgroundColor: "darkgray" }} />
          </Form.Group>

          <Form.Group controlId="formJobDescription" >
            <Form.Label style={{ color: 'white' }}></Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Job Description" style={{ backgroundColor: "darkgray" }} />
          </Form.Group>
          <Row className="justify-content-center" style={{ marginTop: '30px' }}>
            <Col xs="auto" className="text-center">
              <Button variant="outline-light" style={{ borderRadius: 25, fontSize: 15, width: '250px' }}> <IoMail style={{ marginRight: '5px' }} />Contact</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Future;
