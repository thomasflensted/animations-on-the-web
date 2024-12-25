import { useRef, useState } from "react";
import LoginBtn from "./LoginBtn";
import { useOnClickOutside } from "usehooks-ts";
import { motion } from "framer-motion";

const FeedbackPopover = () => {
  const feedbackRef = useRef<HTMLDivElement | null>(null);
  const [feedback, setFeedback] = useState("");
  const [feedbackToggled, setFeedbackToggled] = useState(false);

  useOnClickOutside(feedbackRef, () => setFeedbackToggled(false));

  return feedbackToggled ? (
    <motion.div
      layoutId="container"
      className="p-1 bg-gray-100 border rounded-xl w-1/4"
      ref={feedbackRef}
    >
      <div className="bg-white border rounded-lg flex flex-col overflow-hidden items-end p-2 relative">
        <textarea
          onChange={(e) => setFeedback(e.target.value)}
          rows={6}
          className="resize-none text-left w-full bg-white outline-none text-gray-600 text-sm font-light"
        />
        {!feedback && (
          <motion.p
            layoutId="feedback"
            className="text-gray-400 text-sm font-light absolute top-2 left-2"
          >
            Feedback
          </motion.p>
        )}
        <LoginBtn
          size="sm"
          content={{
            idle: "Send feedback",
            loading: "Sending...",
            success: "Feedback sent",
          }}
        />
      </div>
    </motion.div>
  ) : (
    <motion.button
      layoutId="container"
      onClick={() => setFeedbackToggled(true)}
      className="border rounded-lg px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
    >
      <motion.span layoutId="feedback">Feedback</motion.span>
    </motion.button>
  );
};
export default FeedbackPopover;
