import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projectsTab1 = [
    {
      title: "CryptoVerse",
      description: "Working with api",
      imgUrl: projImg1,
      link: "https://cryptoverse-puce.vercel.app/",
      icons: ["react", "redux", "axios", "chartjs"],
    },
    {
      title: "Typing Speed App",
      description: "Using Next js and NextAuth for Authentication",
      imgUrl: projImg2,
      link: "https://typing-application-delta.vercel.app/",
      icons: ["nextjs", "mongo", "axios"],
    },
    {
      title: "E-Commerce",
      description: "Using Plain React",
      imgUrl: projImg3,
      link: "https://e-commerce-black-two.vercel.app/",
      icons: ["react"],
    },
    {
      title: "Promptopia",
      description: "Design & Development",
      imgUrl: projImg4,
      link: "https://promtopia-ai.vercel.app/",
      icons: ["nextjs", "mongo"],
    },
    {
      title: "GPT-3",
      description: "Design & Development",
      imgUrl: projImg5,
      link: "https://gpt-3-chi-ebon.vercel.app/",
      icons: ["react"],
    },
  ];

  const projectsTab2 = [
    {
      title: "Promptopia",
      description: "Design & Development",
      imgUrl: projImg4,
      link: "https://promtopia-ai.vercel.app/",
      icons: ["nextjs", "mongo"],
    },
    {
      title: "GPT-3",
      description: "Design & Development",
      imgUrl: projImg5,
      link: "https://gpt-3-chi-ebon.vercel.app/",
      icons: ["react"],
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have developed a multitude of projects employing a
                    comprehensive technological stack, demonstrating proficiency
                    in both front-end and back-end domains. My front-end
                    expertise encompasses the utilization of HTML, CSS, SASS,
                    Tailwind CSS, and JavaScript, complemented by frameworks
                    like React and Next.js for building dynamic and responsive
                    user interfaces. On the server side, I have leveraged the
                    power of Node.js and Express to ensure robust and scalable
                    back-end functionalities. In terms of database management,
                    MongoDB has served as a reliable choice. Furthermore, the
                    incorporation of various packages and libraries associated
                    with these technologies has significantly augmented the
                    sophistication and functionality of my projects. This
                    holistic approach underscores a commitment to leveraging
                    cutting-edge tools and frameworks, resulting in the creation
                    of polished and feature-rich applications.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center overflow-hidden"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link className="projects" eventKey="first">
                          React + Nextjs
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className="projects" eventKey="second">
                          MERN
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className="projects" eventKey="third">
                          HTML CSS JAVASCRIPT
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsTab1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsTab2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="" src={colorSharp2}></img>
    </section>
  );
};
