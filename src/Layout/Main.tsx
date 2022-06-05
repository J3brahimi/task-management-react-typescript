import React from "react";
import "./main.css";

type Props = {
  children: React.ReactNode;
};

const Main: React.FC<Props> = ({ children }) => {
  return (
    <div className="main-wrapper">
      <div className="main-content">{children}</div>
    </div>
  );
};

export default Main;
