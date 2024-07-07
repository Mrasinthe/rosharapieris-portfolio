import React from "react";
import ProjectList from "../components/ProjectList";

interface PortfolioProps {
  searchTerm: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ searchTerm }) => {
  return (
    <div>
      <ProjectList searchTerm={searchTerm} />
    </div>
  );
};

export default Portfolio;
