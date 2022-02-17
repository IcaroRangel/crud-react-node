import React from "react";

const Button: React.FC = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default Button;
