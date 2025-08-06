import React, { useState, useEffect } from "react";

interface TypingEffectProps {
  texts: string[];
  className?: string;
  typingInterval?: number;
  deletingInterval?: number;
  pauseBeforeDelete?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  className = "",
  typingInterval = 80,
  deletingInterval = 50,
  pauseBeforeDelete = 1000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(typingInterval);

  useEffect(() => {
    const currentTextToType = texts[currentIndex];

    if (isDeleting) {
      // Deleting effect
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setSpeed(typingInterval);
      }
    } else {
      // Typing effect
      if (currentText.length < currentTextToType.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentTextToType.slice(0, currentText.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait then start deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setSpeed(deletingInterval);
        }, pauseBeforeDelete);
        return () => clearTimeout(timeout);
      }
    }
  }, [
    currentText,
    currentIndex,
    isDeleting,
    speed,
    texts,
    typingInterval,
    deletingInterval,
    pauseBeforeDelete,
  ]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingEffect;
