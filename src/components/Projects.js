import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/coffeeshop.png";
import projImg2 from "../assets/img/yt-ss.png";
import projImg3 from "../assets/img/brgy.png";
import projImg4 from "../assets/img/rolodex.png";
import projImg5 from "../assets/img/booking-ss.png";
import projImg6 from "../assets/img/airlines.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Coffee Shop",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "YouTube Cloned",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Brgy. San Miguel System",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Monster Rolodex",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Travel Booking",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Airlines",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p className="text">In the last two years, I've been on a journey of growth, building projects that highlight my developing skills. 
                  I started with HTML, CSS, and JavaScript, then moved on to PHP and jQuery, and now I'm diving into React and Node.js. 
                  Each step in this journey reflects my progress and exploration of different technologies.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
