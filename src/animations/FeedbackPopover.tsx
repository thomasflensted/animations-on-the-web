import { useRef, useState } from "react";
import LoginBtn from "./LoginBtn";
import { useOnClickOutside } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";

const FeedbackPopover = () => {
  const feedbackRef = useRef<HTMLDivElement | null>(null);
  const [feedback, setFeedback] = useState("");
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");

  useOnClickOutside(feedbackRef, () => setOpen(false));

  const containerId = "container";
  const placeholderId = "placeholder";
  const timing = 2000;

  const handleButtonClick = () => {
    setTimeout(() => setState("success"), timing);
    setTimeout(() => {
      setState("idle");
      setOpen(false);
    }, timing * 2);
  };

  return (
    <div className="w-full flex justify-center items-center relative">
      <motion.button
        layoutId={containerId}
        onClick={() => setOpen(true)}
        className="border rounded-lg px-3 py-1.5 text-sm font-light text-gray-600 cursor-pointer relative"
      >
        <motion.span layoutId={placeholderId}>Feedback</motion.span>
      </motion.button>
      <AnimatePresence>
        {open ? (
          <motion.div
            layoutId={containerId}
            ref={feedbackRef}
            className="bg-gray-100 p-1 rounded-md h-[192px] w-[364px] absolute overflow-hidden"
          >
            {state === "success" ? (
              <AnimatePresence>
                <motion.div
                  initial={{ y: -25 }}
                  animate={{ y: 0 }}
                  transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                  className="flex justify-center items-center h-full flex-col gap-0"
                >
                  <h2 className="text-blue-600 font-semibold ">Thanks!</h2>
                  <p className="text-gray-500 text-xs font-medium">
                    You feedback is important to us.
                  </p>
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="bg-white rounded-md h-full w-full py-2 px-2.5 flex flex-col items-end">
                <motion.span
                  data-feedback={feedback ? "true" : "false"}
                  className="absolute top-3 left-4 text-gray-500 text-sm placeholder"
                  layoutId={placeholderId}
                >
                  Feedback
                </motion.span>
                <textarea
                  onChange={(e) => setFeedback(e.target.value)}
                  className="resize-none w-full text-sm outline-none flex-grow"
                />
                <div onClick={handleButtonClick}>
                  <LoginBtn
                    timing={timing}
                    size="sm"
                    content={{
                      idle: "Send feedback",
                      loading: "Sending...",
                      success: "Thanks!",
                    }}
                  />
                </div>
              </div>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
export default FeedbackPopover;
