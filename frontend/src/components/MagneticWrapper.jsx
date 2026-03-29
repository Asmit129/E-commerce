import React from "react";

const MagneticWrapper = ({ children, className = "" }) => {
  return <div className={`inline-block ${className}`}>{children}</div>;
};

export default MagneticWrapper;
