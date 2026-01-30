"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

export const EncryptedText = ({
  text,
  className,
  scrambleDuration = 2000,
  delay = 0,
  onComplete,
}: {
  text: string;
  className?: string;
  scrambleDuration?: number;
  delay?: number;
  onComplete?: () => void;
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [mounted, setMounted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Initial scramble
    setDisplayText(
      text
        .split("")
        .map((char) =>
          char === " " ? " " : characters[Math.floor(Math.random() * characters.length)]
        )
        .join("")
    );

    const timeout = setTimeout(() => {
      let iteration = 0;
      const totalIterations = text.length * 3;

      intervalRef.current = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration / 3) {
                return text[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );

        iteration += 1;

        if (iteration >= totalIterations) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          setDisplayText(text);
          onComplete?.();
        }
      }, scrambleDuration / totalIterations);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [mounted, text, scrambleDuration, delay, onComplete]);

  return (
    <span className={cn("font-mono", className)}>
      {displayText}
    </span>
  );
};
