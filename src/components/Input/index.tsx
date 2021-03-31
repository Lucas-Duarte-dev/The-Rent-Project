import React, { InputHTMLAttributes, useCallback } from "react";
import { ContainerInput } from "./style";
import { cep, currency, phone } from "./masks";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: "cep" | "currency" | "phone";
  prefix?: string;
}

const Input: React.FC<InputProps> = ({ mask, prefix, ...props }) => {
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === "cep") {
        cep(e);
      }
      if (mask === "currency") {
        currency(e);
      }
      if (mask === "phone") {
        phone(e);
      }
    },
    [mask]
  );

  return (
    <ContainerInput>
      {prefix && <span>{prefix}</span>}
      <input {...props} onKeyUp={handleKeyUp} />
    </ContainerInput>
  );
};

export default Input;
