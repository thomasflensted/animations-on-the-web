import { useState } from "react";
import StepContainer from "../components/StepContainer";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

const StepAnimation = () => {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const Content = [StepOne, StepTwo, StepThree][step];

  return (
    <MotionConfig transition={{ duration: 0.4, type: "spring", bounce: 0 }}>
      <StepContainer setDirection={setDirection} setStep={setStep} step={step}>
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="visible"
            exit="exit"
          >
            <Content />
          </motion.div>
        </AnimatePresence>
      </StepContainer>
    </MotionConfig>
  );
};

export default StepAnimation;

const initial = (dir: number) => ({ x: `${110 * dir}%`, opacity: 0 });
const exit = (dir: number) => ({ x: `${-110 * dir}%`, opacity: 0 });
const visible = { x: 0, opacity: 1 };
const variants = { initial, visible, exit };

const StepOne = () => (
  <div className="flex flex-col gap-2">
    <p className="text-xs text-gray-500 font-light">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
      voluptatum necessitatibus iste, odit voluptates itaque officiis!
    </p>
    <p className="text-xs text-gray-500 font-light">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio et ut
      itaque eum numquam quam laudantium!
    </p>
  </div>
);

const StepTwo = () => (
  <div className="flex flex-col gap-2">
    <p className="text-xs text-gray-500 font-light">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ut
      provident magnam illum amet, voluptatem nemo? Rerum consequatur veniam
      non, quae doloribus sint voluptatum.
    </p>
    <p className="text-xs text-gray-500 font-light">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure pariatur
      maxime modi. Nisi sunt nulla eveniet ut ex ipsam rerum?
    </p>
    <p className="text-xs text-gray-500 font-light">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro totam
      quibusdam quidem libero reiciendis nam aliquam! Nam, quia eos. Ab,
      tenetur.
    </p>
  </div>
);

const StepThree = () => (
  <div className="flex flex-col gap-2">
    <p className="text-xs text-gray-500 font-light">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veritatis
      tenetur quidem, dolore dolor obcaecati culpa?
    </p>
    <p className="text-xs text-gray-500 font-light">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
      similique eveniet. Doloribus voluptas quasi consequatur aperiam recusandae
      consequuntur!
    </p>
  </div>
);
