import React from "react";
import { Col } from "react-bootstrap";
import { FaReact, FaJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiAxios,
  SiChartdotjs,
  SiMongodb,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const getIcon = (iconName) => {
  switch (iconName) {
    case "react":
      return <FaReact className="icon react-icon" />;
    case "js":
      return <FaJs className="icon js-icon" />;
    case "tailwind":
      return <SiTailwindcss className="icon tail-icon" />;
    case "redux":
      return <SiRedux className="icon red-icon" />;
    case "axios":
      return <SiAxios className="icon axios-icon" />;
    case "chartjs":
      return <SiChartdotjs className="icon char-icon" />;
    case "nextjs":
      return <TbBrandNextjs className="icon next-icon" />;
    case "mongo":
      return <SiMongodb className="icon mongo-icon" />;
    default:
      return null;
  }
};

export const ProjectCard = ({ title, description, imgUrl, link, icons }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a
        style={{ color: "white" }}
        className="project-card-a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="proj-imgbx">
          <img src={imgUrl} alt="" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <div className="project-icons">
              {icons.map((icon, index) => (
                <React.Fragment key={index}>{getIcon(icon)}</React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};
