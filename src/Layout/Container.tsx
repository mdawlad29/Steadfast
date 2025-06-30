"use client";

import { FC } from "react";

interface IContainer {
  children: React.ReactNode;
  className?: string;
  rest?: React.HTMLAttributes<HTMLDivElement>;
}

const Container: FC<IContainer> = ({ children, className = "", ...rest }) => {
  return (
    <div className={`px-2 py-4 md:px-8 lg:px-20 ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Container;
