import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Neflix Clone",
      description: "A Netflix Clone using React.js, Tailwind CSS, and The Movie Database API. Secured by hiding API keys in a .env file, the project is visually appealing and responsive.",
      imgUrl: projImg1,
    },
    {
      title: "Simple-food-recipe",
      description: "Simple-food-recipe is a Flutter app that uses Yummly API to offer users a collection of food recipes. The project highlights the developer's proficiency in Flutter and ability to integrate APIs, providing a clean and user-friendly interface.",
      imgUrl: projImg2,
    },
    {
      title: "Youtube Clone",
      description: "Youtube Clone is a web application built with HTML, CSS, and JavaScript, replicating YouTube's functionality. The project demonstrates the developer's proficiency in implementing complex features and attention to detail in replicating a well-known platform.",
      imgUrl: projImg3,
    },
    {
      title: "Amazon Clone",
      description: "Amazon Clone is a React project that replicates the e-commerce platform, Amazon, using Firebase for authentication and Google Fonts for styling. The project highlights the developer's ability to integrate complex functionalities and implement user authentication. With a modern interface, users can browse, search, and purchase products seamlessly.",
      imgUrl: projImg4,
    },
    {
      title: "Weather App",
      description: "Weather App is a web application built with HTML, CSS, and JavaScript that utilizes the OpenWeatherMap API to display weather data. The project highlights the developer's proficiency in implementing APIs and offers a simple interface for users to search and view weather information by location.",
      imgUrl: projImg5,
    },
    {
      title: "Clock App",
      description: "Clock App is a neumorphism-styled project built with HTML, CSS, and JavaScript, offering a clean and modern clock interface with date and time features. The project highlights the developer's proficiency in web development technologies and attention to detail in creating a visually appealing user interface.",
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
                <p>Projects Page displays a collection of the developer's web and mobile app projects, including Netflix Clone, Simple-food-recipe, Youtube Clone, Amazon Clone, Weather App, and Clock App. The page offers a visually appealing interface for users to browse and learn about each project's features, technologies used, and the developer's proficiency in web and mobile app development.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"> Raw File</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project Page</Nav.Link>
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
                    <Tab.Pane eventKey="second" className="my-tab-pane">
                      <p>
                        <a href="https://github.com/olamideyomi/clock-neomorphism">Clock App</a>
                        <br />
                        <a href="https://github.com/olamideyomi/Simple-food-recipe">Simple-food-recipe</a>
                        <br />
                        <a href="https://github.com/olamideyomi/Youtube-beginner">Youtube Clone</a>
                        <br />
                        <a href="https://github.com/olamideyomi/amazon-clone">Amazon Clone</a>
                        <br />
                        <a href="https://github.com/olamideyomi/weather-app">Weather App</a>
                        <br />
                        <a href="https://github.com/olamideyomi/netflix-clone">Neflix Clone</a>
                        <br /> 
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third" className="my-tab-pane-3">
                      <p>
                        <a href="#">Clock App</a>
                        <br />
                        <a href="#">Simple-food-recipe</a>
                        <br />
                        <a href="#">Youtube Clone</a>
                        <br />
                        <a href="#">Amazon Clone</a>
                        <br />
                        <a href="#">Weather App</a>
                        <br />
                        <a href="#">Neflix Clone</a>
                        <br />
                         </p>
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
