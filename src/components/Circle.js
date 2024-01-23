import React from "react";

const CountdownTimer = ({ fillPercentage, text, icon, className }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = (fillPercentage / 100) * circumference;

  return (
    <div className="tst-timer ">
      <div className="countdown-container">
        <svg
          viewBox="0 0 110 110"
          width="110"
          height="110"
          className="u-w-auto u-absolute"
        >
          <circle
            className="countdown-circle"
            cx="55"
            cy="55"
            r={radius}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="6"
            strokeDasharray={`${circumference}px`}
            style={{
              transition: "all 1s linear",
              strokeDashoffset: `${strokeDashoffset}px`,
              transform: "rotate(-90deg)",
              transformOrigin: "center",
            }}
          />
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(109, 195, 118, 1)" }}
              />
              <stop offset="35%" style={{ stopColor: "rgba(8, 28, 113, 1)" }} />
              <stop offset="100%" style={{ stopColor: "rgba(255, 0, 1, 1)" }} />
            </linearGradient>
          </defs>
        </svg>
        <h5 className="countdown-label">{text}</h5>
        <h5 className={`countdown-per ${className}`}>{icon}</h5>
      </div>
    </div>
  );
};

export default CountdownTimer;
