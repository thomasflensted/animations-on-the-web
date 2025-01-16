import { useRef, useState } from "react";
import LoginBtn from "./LoginBtn";
import { useOnClickOutside } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";

const FeedbackPopover = () => {
  const feedbackRef = useRef<HTMLDivElement | null>(null);
  const [feedback, setFeedback] = useState("");
  const [open, setOpen] = useState(false);

  useOnClickOutside(feedbackRef, () => setOpen(false));

  const containerId = "container";
  const placeholderId = "placeholder";

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
            className="bg-gray-100 p-1 rounded-md h-[192px] w-[364px] absolute"
          >
            <div className="bg-white rounded-md h-full w-full py-2 px-2.5 flex flex-col items-end">
              <motion.span
                className="absolute  top-3 left-4 text-gray-500 text-sm"
                layoutId={placeholderId}
              >
                Feedback
              </motion.span>
              <textarea
                onChange={(e) => setFeedback(e.target.value)}
                className="resize-none w-full text-sm outline-none flex-grow"
              />
              <LoginBtn
                size="sm"
                content={{
                  idle: "Send feedback",
                  loading: "Sending...",
                  success: "Thanks!",
                }}
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
export default FeedbackPopover;
