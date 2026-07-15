import React from "react";

interface ProgressBarProps {
  value: number;
  color?: string;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  color,
  className = "",
}) => {
  return (
    <div className={className}>
      <div
        className="fill"
        style={{
          width: `${value}%`,
          background: color,
        }}
      />
    </div>
  );
};