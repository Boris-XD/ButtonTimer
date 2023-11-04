import React, { useState, useEffect } from 'react';
import ControlButton from '../components/ControlButton';

const TimerApp = () => {
  const [timer, setTimer] = useState(null);
  const [time, setTime] = useState(0);

  const startTimer = () => {
    setTimer(setInterval(() => {
      setTime((prevTime) => prevTime + 1)
    }, 10));
  };

  const pauseTimer = () => {
    clearInterval(timer);
  };

  const restartTimer = () => {
    clearInterval(timer);
    setTime(0);
    startTimer();
  };

  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  return (
    <div>
      <ControlButton
        onStart={startTimer} 
        onPause={pauseTimer} 
        onRestart={restartTimer} 
      />
      <p>Time: {time / 100} s</p>
    </div>
  );
};

export default TimerApp;