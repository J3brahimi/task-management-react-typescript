import React from "react";
import "./style/primary-button-style.css";

type Props = {
  children: React.ReactNode;
  background?: string;
  onClick?: () => void;
};

const PrimaryButton: React.FC<Props> = React.memo(
  ({ children, background, onClick }) => {
    return (
      <button
        className="primary-button"
        style={{ background }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);

export default PrimaryButton;
