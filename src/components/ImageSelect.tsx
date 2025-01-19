import { motion } from "framer-motion";
import { MouseEvent } from "react";
import ImageGrid from "./ImageGrid";
import TrashToolbar from "./TrashToolbar";

type Props = {
  images: { img: string; remove: boolean }[];
  handleClick: (e: MouseEvent<HTMLDivElement>, img: string) => void;
  hasSelectionFn: (img: { img: string; remove: boolean }) => boolean;
  handleNextStep: (e: MouseEvent<HTMLDivElement>) => void;
};

const ImageSelect = ({
  images,
  handleClick,
  handleNextStep,
  hasSelectionFn,
}: Props) => {
  return (
    <motion.div className="grid grid-cols-2 gap-2 relative">
      <ImageGrid images={images} handleClick={handleClick} />
      <TrashToolbar
        images={images}
        hasSelectionFn={hasSelectionFn}
        handleNextStep={handleNextStep}
      />
    </motion.div>
  );
};
export default ImageSelect;
