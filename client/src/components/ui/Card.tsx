import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = ({ children, className = "", ...props }: CardProps) => {
  return (
    <div className={`rounded-xl border bg-white ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
