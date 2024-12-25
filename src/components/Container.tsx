import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex items-center justify-center border-b w-full snap-start">
      {children}
    </div>
  );
};

export default Container;
