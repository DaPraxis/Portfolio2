import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import { Link} from "react-scroll";

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
// import Fade from 'react-reveal/Fade';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      slide: 0,  // How much should the Navbar slide up or down
      lastScrollY: 0,  // Keep track of current position in state
      hidden: false,
      title: 'Max Jiang',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Max Jiang',
        text: 'Fourth-year undergraduate, major in computer science & statistics in the University of Toronto. Specializing in Machine Learning & Software Engineering & Web-Development',
        title2: 'Work Hard & Be Nice to People',
        intro: "My name is:",
        text2: 'Toronto, ON, Canada',
        about:{
          title: '1. About Me ---------',
          text: 'Hello! I am Haoyan (Max) Jiang, a fourth year undergraduate major in computer science & statistics in the University of Toronto. I develope websites with modern frameworks such as React.js and Spring; digging into data mining and machine learning with rigorous statistic models and tools such as Python, Numpy, R, Scikilearn and pandas.'
          // text2: 'Some technologies I am using: '
        },
        experience:{
          title: '2. Experience ---------',
          skills: 
            [
              {
                Category:'UofT IML Lab',
                Title: 'Software Developer & 3D Modeling',
                Location: '@University of Toronto Interactive Media Lab',
                Time: '04/2019 – 09/2019',
                Link: "https://imedia.mie.utoronto.ca/",
                Content:
                ['Driving Simulation Game for Elder People; Engine building, game logic and modeling of real-time driving experiences on web-serving applications using Babylon.js',
                'Building and importing 3D models for famous scenic views in the world using Blender',
                'Data collection and analysis with MongoDB, using learning algorism to analyze player’s brain functionality',
                'Working with elder people in medical institutes to improve game design and game play experiences']
              },
              {
                Category:'UofT IML Lab',
                Title: 'Junior Full Stack Developer',
                Location: '@University of Toronto Interactive Media Lab',
                Time: '04/2019 – 09/2019',
                Link: "https://imedia.mie.utoronto.ca/",
                Content:['Managing back-end performance, administration and data collections using MongoDB',
                'Responsive web design, exposure to React.js implementation, Node.js',
                'Interactive dashboard design and data representation for future researches']
              }
            ]
        },
        project:{
          title: '3. Project ---------'
        },
        contact:{
          title: '4. Contact Me ----------'
        }
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  componentWillMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state; 
    const currentScrollY = window.scrollY;


    if (currentScrollY > lastScrollY) {
      this.setState({ slide: '-60px' });
    } else {
      this.setState({ slide: '0px' });
    }
    this.setState({ lastScrollY: currentScrollY });
  };


  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar fixed='top' style={{
          transform: `translate(0, ${this.state.slide})`,
          transition: 'transform 90ms linear',
        }}
          className="border-bottom" bg="white" expand="lg" hidden={this.state.hidden}>
            <Navbar.Brand>HJ</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link scroll" activeClass="active" to="Intro" spy={true} smooth={true} offset={-70} duration= {500}>Home</Link>
                <Link className="nav-link scroll" activeClass="active" to="AboutMe" spy={true} smooth={true} offset={-70} duration= {500}>1. About Me</Link>
                <Link className="nav-link scroll" activeClass="active" to="Experience" spy={true} smooth={true} offset={-70} duration= {500}>2. Experience</Link>
                <Link className="nav-link scroll" activeClass="active" to="Project" spy={true} smooth={true} offset={-70} duration= {500}>3. Project</Link>
                <Link className="nav-link scroll" activeClass="active" to="ContactMe" spy={true} smooth={true} offset={-70} duration= {500}>4. Contact Me</Link>
                {/* <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage home = {this.state.home}/>} />
          {/* <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} /> */}
          
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
