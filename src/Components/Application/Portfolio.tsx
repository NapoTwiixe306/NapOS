// Portfolio.tsx
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
    <div onClick={handleClose}>
      Portfolio
    </div>
  );
};

export default Portfolio;
