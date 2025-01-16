import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type State = "idle" | "loading" | "success";
type Content = Record<Partial<State>, string>;

type Props = {
  content: Content;
  size?: "sm" | "lg";
  timing?: number;
};

const LoginBtn = ({ content, size = "lg", timing = 1250 }: Props) => {
  const [status, setStatus] = useState<State>("idle");

  const handleClick = () => {
    setStatus("loading");
    setTimeout(() => setStatus("success"), timing);
    setTimeout(() => setStatus("idle"), timing * 2);
  };

  const variants = {
    initial: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 25 },
  };

  const classes =
    size === "sm" ? "w-[120px] px-3 py-1 text-xs" : "w-[180px] px-4 py-2";

  return (
    <button
      onClick={handleClick}
      className={`rounded-lg font-thin bg-gradient-to-b from-blue-400 to-blue-500 text-white ${classes}`}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          transition={{ type: "spring", duration: 0.3, bounce: 0 }}
          variants={variants}
          initial="initial"
          animate="visible"
          exit="exit"
          key={status}
        >
          {content[status]}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default LoginBtn;
