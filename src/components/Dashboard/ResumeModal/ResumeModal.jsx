import { useEffect, useState } from "react";
import { ModalOverlay, Modal, FormResume } from "./ResumeModal.styled";
import { Rating } from "react-simple-star-rating";

export const ResumeModal = ({ isOpen, setIsOpen }) => {
  //press escape to close modal
  useEffect(() => {
    const close = (e) => {
      console.log(e.key);
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", close);
      return () => window.removeEventListener("keydown", close);
    }
  }, [isOpen, setIsOpen]);

  const [resume, setResume] = useState("");
  const [ratingValue, setRatingValue] = useState(0);

  const handleRating = (rate) => {
    setRatingValue(rate);
  };

  const inputChange = (e) => {
    const { value } = e.target;
    setResume(value);
  };

  const resetResume = () => {
    setRatingValue(0);
    setResume("");
  }

  const handleResume = async (e) => {
    e.preventDefault();
    console.log(resume, ratingValue);
    resetResume();
  };

  return (
    <>
      <ModalOverlay
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <Modal isOpen={isOpen}>
        <p>Choose rating of the book</p>
        <Rating
          onClick={handleRating}
          initialValue={ratingValue}
          allowFraction={true}
          size={24}
          fillColor="var(--color-accent)"
        />
        <FormResume onSubmit={handleResume} autoComplete="off">
          <label>
            Resume
            <textarea
              type="text"
              name="resume"
              value={resume}
              required
              placeholder="..."
              onChange={inputChange}
            />
          </label>
          <div>            
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Back
            </button>
            <button type="submit">Save</button>
          </div>
        </FormResume>
      </Modal>
    </>
  );
};
