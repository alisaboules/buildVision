import React from "react";

interface StatCardProps {
  icon: string;
  title: string;
  value: string | number;
  subTitle: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  value,
  subTitle,
  className = "",
}) => {
  return (
    <div className={`stat-card ${className}`}>
      <img className="stat-icon-box" src={icon}/>
      
      <div className="stat-label">
        {title}
      </div>

      <div className="stat-value">
        {value}
      </div>

      <div className="stat-sub">
        {subTitle}
      </div>
    </div>
  );
};

export { StatCard };