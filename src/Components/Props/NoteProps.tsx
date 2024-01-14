import React from "react";

interface NoteProps {
  text: string;
  description: string;
}

const NoteProps: React.FC<NoteProps> = ({ text, description }) => {
  return (
    <div className="note">
      <h4>{text}</h4>
      <p>{description}</p>
    </div>
  );
};

export default NoteProps;
