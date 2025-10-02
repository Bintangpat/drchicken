/** @format */

import React, { ReactNode } from "react";

type BodyBaseProps = {
  children?: ReactNode;
};

export default function BodyBase({ children }: BodyBaseProps) {
  return (
    <div
      id="bodybase"
      className="bg-accent relative z-0 box-border flex h-fit w-full flex-col overflow-x-hidden overflow-y-hidden transition-all duration-500 ease-out"
    >
      {children}
    </div>
  );
}
