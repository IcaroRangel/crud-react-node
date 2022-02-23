import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ type, placeholder, ...rest }) => {
  //const inputRef = React.useRef(null);
  //console.log(inputRef.current);
  return (
    <>
      <Container
        //ref={inputRef}
        placeholder={placeholder}
        type={type}
        {...rest}
      ></Container>
    </>
  );
};

export default Input;
