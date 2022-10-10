import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiExpress,
  SiMaterialui,
  SiTypescript,
} from "react-icons/si";
import Tooltip from "./Tooltip";

function Techstack() {
  const techComponents = [
    CgCPlusPlus,
    DiJavascript1,
    SiTypescript,
    DiPython,
    DiReact,
    SiMaterialui,
    DiNodejs,
    SiExpress,
    DiMongodb,
    SiFirebase,
  ];

  const techs = [
    "C++",
    "Javascript",
    "Typescript",
    "Python",
    "React",
    "Material UI",
    "Nodejs",
    "Expressjs",
    "MongoDB",
    "Firebase",
  ];
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techComponents.map((TechComponent, idx) => (
        <Tooltip tool={techs[idx]}>
          <Col xs={4} md={2} className="tech-icons">
            <TechComponent />
          </Col>
        </Tooltip>
      ))}
    </Row>
  );
}

export default Techstack;
