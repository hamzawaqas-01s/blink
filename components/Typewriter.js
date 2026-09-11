"use client";
import { useState, useEffect, useRef } from "react";

const PHRASES = ["Privacy focused", "Fast results", "Simple by design"];

const TYPE_SPEED = 80;
const DELETE_SPEED = 40;
const PAUSE_AFTER_TYPE = 1200;
const PAUSE_AFTER_DELETE = 300;

export default function Typewriter({ phrases = PHRASES }) {
  const [text, setText] = useState("");
  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timeoutId;

    function tick() {
      const current = phrases[phraseIndex.current];

      if (!deleting.current) {
        charIndex.current++;
        setText(current.slice(0, charIndex.current));

        if (charIndex.current === current.length) {
          deleting.current = true;
          timeoutId = setTimeout(tick, PAUSE_AFTER_TYPE);
        } else {
          timeoutId = setTimeout(tick, TYPE_SPEED);
        }
      } else {
        charIndex.current--;
        setText(current.slice(0, charIndex.current));

        if (charIndex.current === 0) {
          deleting.current = false;
          phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
          timeoutId = setTimeout(tick, PAUSE_AFTER_DELETE);
        } else {
          timeoutId = setTimeout(tick, DELETE_SPEED);
        }
      }
    }

    timeoutId = setTimeout(tick, TYPE_SPEED);
    return () => clearTimeout(timeoutId);
  }, [phrases]);

  return (
    <div className="px-19 flex items-center">
      <span className="text-xl">
        {text}
        <span className="inline-block w-0.5 ml-1 bg-black animate-pulse">&nbsp;</span>
      </span>
    </div>
  );
}