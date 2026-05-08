import React from "react";
import "./TickerBanner.css";

const DEFAULT_ITEMS = [
  "UI/UX Design",
  "User Research",
  "Wireframing",
  "Prototyping",
  "WordPress",
  "Design Systems",
  "Usability Testing",
  "Mobile Design",
  "Web Design",
  "Visual Design",
];

interface TickerBannerProps {
  items?: string[];
  speed?: number; // seconds — default 20
}

const TickerBanner: React.FC<TickerBannerProps> = ({
  items = DEFAULT_ITEMS,
  speed = 20,
}) => {
  // Duplicate items so the loop looks seamless (same as the original HTML trick)
  const doubled = [...items, ...items];

  return (
    <div className="ticker-wrap">
      <div
        className="ticker-inner"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default TickerBanner;