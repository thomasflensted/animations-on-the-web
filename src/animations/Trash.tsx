import { useState } from "react";
import iran from "../assets/iran.png";
import kyrgyzstan from "../assets/kyrgyzstan.png";
import norway from "../assets/norway.png";
import tajikistan from "../assets/tajikistan.png";
import { MouseEvent } from "react";
import ImagesInTrash from "../components/ImagesInTrash";
import ImageSelect from "../components/ImageSelect";

type Image = { img: string; remove: boolean };

const Trash = () => {
  const [step, setStep] = useState<"select" | "delete">("select");
  const [imagesToRemove, setImagesToRemove] = useState<string[]>([]);
  const [images, setImages] = useState([
    { img: iran, remove: false },
    { img: kyrgyzstan, remove: false },
    { img: norway, remove: false },
    { img: tajikistan, remove: false },
  ]);

  const hasSelectionFn = (img: Image) => img.remove;
  const resetFn = (img: Image) => ({ ...img, remove: false });

  const handleClick = (e: MouseEvent<HTMLDivElement>, img: string) => {
    e.stopPropagation();
    setImages(
      images.map((i) => (i.img === img ? { ...i, remove: !i.remove } : i))
    );
  };

  const handleNextStep = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setImagesToRemove(images.filter(hasSelectionFn).map((i) => i.img));
    setStep("delete");
  };

  const reset = () => {
    setStep("select");
    setImages(images.map(resetFn));
  };

  if (step === "select") {
    return (
      <ImageSelect
        images={images}
        handleClick={handleClick}
        hasSelectionFn={hasSelectionFn}
        handleNextStep={handleNextStep}
      />
    );
  }

  return <ImagesInTrash reset={reset} imagesToRemove={imagesToRemove} />;
};

export default Trash;
