import React from "react";

interface ProgressCircleProps {
  value: number;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ value }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div className="circle-progress-container">
      <svg
        width="110"
        height="110"
        viewBox="0 0 120 120"
      >
        <defs>
          <linearGradient
            id="gradientRing"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#22c55e"
            />
            <stop
              offset="100%"
              stopColor="#eab308"
            />
          </linearGradient>
        </defs>
        <circle
          className="circle-bg"
          cx="60"
          cy="60"
          r={radius}
        />
        <circle
          className="circle-fg"
          cx="60"
          cy="60"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="circle-text">
        {value}%
      </div>


    </div>
  );
};


export { ProgressCircle };