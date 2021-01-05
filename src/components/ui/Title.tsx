import React from "react";

interface CoverProps {
  title: string;
}

export const Title: React.FC<CoverProps> = ({ title }) => {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div />
    </div>
  );
};
