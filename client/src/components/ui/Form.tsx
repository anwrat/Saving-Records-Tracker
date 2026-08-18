import type { FormHTMLAttributes, ReactNode } from "react";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const Form = ({ children, className = "", ...props }: FormProps) => {
  return (
    <form className={`space-y-5 ${className}`} {...props}>
      {children}
    </form>
  );
};

export default Form;
