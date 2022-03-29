import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type, name, register, required, defaultValue }, ref) => {
    return (
      <>
        <Container
          ref={ref}
          placeholder={placeholder}
          defaultValue={defaultValue}
          type={type}
          {...register(name, { required })}
        />
      </>
    );
  }
);

export default Input;
