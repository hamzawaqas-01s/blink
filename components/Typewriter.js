"use client";
import { useState, useEffect} from "react";

function Typewriter(words, typeMs = 70, deleteMs = 40, holdMs = 1200) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let delay = deleting ? deleteMs : typeMs;

    if (!deleting && text === current) {
      delay = holdMs;
    }

    const timer = setTimeout(() => {
      if (!deleting) {
        if (text === current) {
          setDeleting(true);
        } else {
          setText(current.slice(0, text.length + 1));
        }
      } else {
        if (text === "") {
          setDeleting(false);
          setIndex((i) => i + 1);
        } else {
          setText(current.slice(0, text.length - 1));
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs]);

  return text;
}

export default Typewriter