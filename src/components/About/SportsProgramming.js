import React from "react";
import { Col, Row } from "react-bootstrap";
import Tooltip from "./Tooltip";
import codeforces from "../../Assets/sports-programming/codeforces.webp";
import leetcode from "../../Assets/sports-programming/leetcode.png";
import codechef from "../../Assets/sports-programming/codechef.png";
import hackerrank from "../../Assets/sports-programming/hackerrank.svg";

function SportsProgramming() {
  const platforms = ["Codeforces", "Leetcode", "Hackerrank", "Codechef"];
  const platformsImg = [codeforces, leetcode, hackerrank, codechef];
  const platformLinks = [
    "https://codeforces.com/profile/akshathackos",
    "https://leetcode.com/solve_it_akshat/",
    "https://www.hackerrank.com/akshathackos",
    "https://www.codechef.com/users/akshathackos"
  ];
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {platformsImg.map((platform, idx) => (
        <Tooltip tool={platforms[idx]}>
          <Col xs={4} md={2} className="tech-icons">
            <a href={platformLinks[idx]} target="_blank">
              <img src={platform} className="img-fluid" />
            </a>
          </Col>
        </Tooltip>
      ))}
    </Row>
  );
}

export default SportsProgramming;
