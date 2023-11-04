
import React, { useState, useEffect } from 'react';
import ControlButton from '../components/ControlButton';

const TimerAppV2 = () => {
  const [timer, setTimer] = useState(null);
  const [timerOn, setTimerOn] = useState(false);
  const [timerStart, setTimerStart] = useState(0);
  const [time, setTime] = useState(0);

  const updateTimer = () => {
    if (timerOn) {
      setTime(Date.now() - timerStart);
    }
  };

  const startTimer = () => {
    setTimerOn(true);
    setTimerStart(Date.now() - time);
    setTimer(setInterval(updateTimer, 10));
  };

  const pauseTimer = () => {
    setTimerOn(false);
    clearInterval(timer);
  };

  const restartTimer = () => {
    setTimerOn(true);
    setTime(0);
    setTimerStart(Date.now());
    if (!timer) {
      setTimer(setInterval(updateTimer, 10));
    }
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
      <p>Time: {(time / 1000).toFixed(2)} s</p>
    </div>
  );
};

export default TimerAppV2;