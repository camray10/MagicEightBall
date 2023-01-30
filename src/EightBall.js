import React, { useState } from 'react';
import "./EightBall.css";

const EightBall = (props) => {
  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a Question");
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
    if (clicks % 2 === 0) {
      setColor("black");
      setMessage("Think of a Question");
    } else {
      const randomIndex = Math.floor(Math.random() * props.answers.length);
      const selectedAnswer = props.answers[randomIndex];
      setColor(selectedAnswer.color);
      setMessage(selectedAnswer.msg);
    }
  };

  return (
    <div className="EightBall" style={{ backgroundColor: color }} onClick={handleClick}>
      <p>{message}</p>
    </div>
  );
};

export default EightBall;