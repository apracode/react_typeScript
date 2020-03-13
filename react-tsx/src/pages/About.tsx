import React from "react";
import { useHistory } from "react-router-dom";

const About: React.FC = () => {
  const history = useHistory();
  return (
    <div className="container">
      <h1 className="center">Info page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id autem
        corporis necessitatibus ab quia. In nam soluta harum ipsam molestiae?
        Officiis excepturi fugit aspernatur cupiditate adipisci consequuntur
        nulla necessitatibus deserunt?
      </p>
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
