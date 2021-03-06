import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Work Chart for {" "}
        <a href="https://github.com/GlistenSTAR" style={{ color: 'purple' }}>
          <strong className="purple">Code </strong>
        </a>
      </h1>
      <GitHubCalendar
        username="GlistenSTAR"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row >
  );
}

export default Github;
