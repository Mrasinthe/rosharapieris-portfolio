import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

const Home: React.FC = () => {
  const [animationClass, setAnimationClass] = useState<string>("");

  const renderTextWithAnimation = (text: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="animated-char"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  useEffect(() => {
    const triggerAnimation = () => {
      setAnimationClass("start-animation");
      setTimeout(() => {
        setAnimationClass("");
      }, 7000); // 7 seconds for animation to complete
    };

    triggerAnimation();
    const interval = setInterval(triggerAnimation, 10000); // 10 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="home-container">
      <div className="overlay">
        <Container fluid className="home-content">
          <Row className="justify-content-center align-items-center text-center">
            <Col md={8}>
              <h1 className={`home-title ${animationClass}`}>
                {renderTextWithAnimation("Transforming Visions into Reality")}
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
