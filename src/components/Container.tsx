import { forwardRef } from "react";

const Container = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        className="h-screen flex items-center justify-center border-b w-full snap-start"
      >
        {children}
      </div>
    );
  }
);

export default Container;
