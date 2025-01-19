import { ReactNode } from "react";
import { motion } from "framer-motion";

type NewType = {
  step: number;
  children: ReactNode;
  setStep: (step: number) => void;
  setDirection: (direction: 1 | -1) => void;
};

type Props = NewType;

const StepContainer = ({ step, children, setStep, setDirection }: Props) => {
  const handleClick = (direction: 1 | -1) => {
    setStep(step + direction);
    setDirection(direction);
  };

  return (
    <motion.div
      layoutId="stepcontainer"
      key={step}
      className="border rounded-lg p-4 flex flex-col gap-2 w-1/4 shadow-sm overflow-hidden"
    >
      <motion.h2
        layoutId="stepheading"
        className="font-medium text-md text-gray-600"
      >
        This is step {step + 1}
      </motion.h2>
      {children}
      <div className="flex justify-between mt-2">
        <button
          disabled={step === 0}
          onClick={() => handleClick(-1)}
          className="disabled:opacity-50 text-xs font-light border shadow-xs py-1 px-4 rounded-full"
        >
          Back
        </button>
        <button
          onClick={() => handleClick(1)}
          disabled={step === 2}
          className="duration-200 disabled:opacity-50 text-xs font-light py-1 px-4 rounded-full bg-gradient-to-b from-blue-400 to-blue-500 text-white"
        >
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default StepContainer;
