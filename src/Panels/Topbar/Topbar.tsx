import React from "react";
import "./Topbar.css";

interface TopBarProps {
  title: string;
}

const Topbar: React.FC<TopBarProps> = ({ title }) => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <h2>{title}</h2>
      </div>

      <div className="topbar-right">
        <button className="notif-btn">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            width="24"
            height="24"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>

          <span className="badge-dot"></span>
        </button>

        <div className="avatar-large">
          AK
        </div>
      </div>
    </div>
  );
};

export { Topbar };