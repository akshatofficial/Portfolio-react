import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiNetlify,
} from "react-icons/si";
import ToolCard from "./Tooltip";

function Toolstack() {
  const toolsComponents = [
    DiGit,
    SiVisualstudiocode,
    SiPostman,
    SiNetlify,
    SiHeroku,
  ];
  const tools = ["Git", "Visual Studio Code", "Postman", "Netlify", "Heroku"];
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolsComponents.map((ToolComponent, idx) => (
        <ToolCard tool={tools[idx]}>
          <Col xs={4} md={2} className="tech-icons">
            <ToolComponent />
          </Col>
        </ToolCard>
      ))}
    </Row>
  );
}

export default Toolstack;
