'use client';

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const isBlue = idx >= 6; 
          return (
            <motion.span
              key={word + idx}
              style={
                isBlue
                  ? {
                      color: '#38bdf8',
                      textShadow: '0 0 2px #00baff, 0 0 3px rgba(0,186,255,0.4)',
                      animation: 'slowFlicker 4s infinite ease-in-out alternate',
                      letterSpacing: '0.02em',
                      marginRight: '0.5rem',
                    }
                  : {
                      letterSpacing: '0.02em',
                      marginRight: '0.5rem',
                    }
              }
              className={`${
                !isBlue ? "dark:text-white text-black" : ""
              } opacity-0 inline-block`}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>


      <style jsx>{`
        @keyframes slowFlicker {
          0% {
            opacity: 0.94;
            text-shadow: 0 0 2px #00baff, 0 0 3px rgba(0,186,255,0.3);
          }
          50% {
            opacity: 1;
            text-shadow: 0 0 3px #00baff, 0 0 5px rgba(0,186,255,0.6);
          }
          100% {
            opacity: 0.92;
            text-shadow: 0 0 1px #00baff, 0 0 2px rgba(0,186,255,0.2);
          }
        }
      `}</style>
    </div>
  );
};