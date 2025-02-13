import React from "react";
import { Project } from "../data/project";
import { Col, Row, Container, Carousel } from "react-bootstrap";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Container className="project-card mb-4">
      <Row>
        <Col
          xs={12}
          md={6}
          className={
            project.video
              ? "project-video-container"
              : "project-image-container"
          }
        >
          {project.video ? (
            <video controls className="d-block w-100 project-video">
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Carousel>
              {project.images?.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={image}
                    className="d-block w-100 img-fluid project-image"
                    alt={`${project.name} ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Col>
        <Col xs={12} md={6} className="project-description">
          <h2>{project.name}</h2>
          <p>{project.description}</p>

            {/* Display Download Button Only If PDF Exists */}
            {project.pdf && (
            <a href={project.pdf} download className="btn btn-primary mt-3">
              Download PDF
            </a>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectCard;
