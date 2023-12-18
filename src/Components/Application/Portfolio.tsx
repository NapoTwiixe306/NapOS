import React from "react";

interface PortfolioProps {
  onClose: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onClose }) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      <div className="Portfolio_container">
        <button onClick={handleClose}>Close</button>
        <p>lorem*500</p>
      </div>
    </>
  );
};

export default Portfolio;
