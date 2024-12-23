import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type State = "idle" | "loading" | "success";

const LoginBtn = () => {
  const [status, setStatus] = useState<State>("idle");

  const buttonContent: Record<State, string> = {
    idle: "Send me a login link",
    loading: "Sending...",
    success: "Check your email!",
  };

  const handleClick = () => {
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1700);
    setTimeout(() => setStatus("idle"), 3000);
  };

  const variants = {
    initial: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 25 },
  };

  return (
    <button
      onClick={handleClick}
      className="w-[180px] rounded-lg font-thin bg-gradient-to-b from-blue-400 to-blue-500 text-white px-4 py-2"
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
          {buttonContent[status]}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default LoginBtn;
