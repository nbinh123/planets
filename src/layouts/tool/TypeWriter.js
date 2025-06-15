import React, { useEffect, useState } from 'react';

const Typewriter = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    setDisplayedText(''); // reset khi text thay đổi
    const interval = setInterval(() => {
      if (i < text.length - 1) {
        setDisplayedText(prev => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p>{displayedText}</p>;
};

export default Typewriter;
