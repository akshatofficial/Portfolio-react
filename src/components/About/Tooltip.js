import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
const ToolTip = ({ tool, children }) => {
  return (
    <>
      <OverlayTrigger
        key={"top"}
        placement={"top"}
        overlay={<Tooltip id="tools-tooltip">{tool}</Tooltip>}
      >
        {children}
      </OverlayTrigger>
    </>
  );
};

export default ToolTip;
