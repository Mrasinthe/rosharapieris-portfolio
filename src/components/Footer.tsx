import React from "react";
import { Container } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
        <p>
          &copy; {new Date().getFullYear()} Roshara Pieris. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
