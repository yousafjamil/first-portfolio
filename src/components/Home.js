import React from "react";
import Typed from "react-typed";
import Typical from "react-typical";
import Contact from "./Contact";
import Services from "./Services";
import carousal1 from "./carousal1.jpg";
import carousal2 from "./carousal2.jpg";
import carousal3 from "./carousal3.jpg";
import carousal4 from "./carousal4.jpg";
import carousal5 from "./carousal5.jpg";
import carousal6 from "./carousal6.jpg";

import Carousel from "react-bootstrap/Carousel";
import About from "./About";
function Home(props) {
  return (
    <>
      <div className="container-fluid home">
        <div className="typed-style">
          <Carousel className="carousal-container">
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={carousal1}
                alt="First slide"
              />{" "}
              <Typical
                steps={[
                  "Hello",
                  1000,
                  "hi  i  am yousaf jamil  React  developer ",
                  500,
                ]}
                loop={Infinity}
                wrapper="p"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  i am student of computer science ,i am making website in
                  react.js
                </p>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={carousal4}
                    alt="Fourth slide"
                  />
                  <Carousel.Caption>
                    <h3>four slide label</h3>
                    <p>
                      i am react software developer i can make a professional
                      website
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={carousal2}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>
                  {" "}
                  i am react software developer i can make a professional
                  website.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={carousal3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>you can hire me</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={carousal4}
                alt="Fourth slide"
              />
              <Carousel.Caption>
                <h3>four slide label</h3>
                <p>
                  i am react software developer i can make a professional
                  website
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={carousal6}
                alt="Fourth slide"
              />
              <Carousel.Caption>
                <h3>four slide label</h3>
                <p>
                  i am react software developer i can make a professional
                  website
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="row">
          <div className="col  col-md-offset-2">
            <div></div>
          </div>
        </div>
      </div>
      <hr />

      <br />
      <br />
      <br />
      <br />
      {/*services start   */}
      <div className="container mt-3">
        <div class="row">
          <div className="col-12">
            <Services />
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div class="row">
          <div className="col-12">
            <About />
          </div>
        </div>
      </div>

      {/*services start   */}
      <div className="container mt-3">
        <div class="row">
          <div className="col-12">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
