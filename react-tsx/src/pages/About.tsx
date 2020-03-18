import React from "react";
import { useHistory } from "react-router-dom";

const About: React.FC = () => {
  const history = useHistory();
  return (
    <div className="container">
      <h1 className="center">Info page</h1>
      <p className="center">It is my first project on TypeScript</p>
      <button
        className="btn center"
        onClick={() => {
          history.push("/");
        }}
      >
        Go back
      </button>
    </div>
  );
};

export default About;
