import React from 'react';
import Button from './Button';

const ControlButton = ({ onStart, onPause, onRestart }) => {
  return (
    <>
      <Button onClick={onStart}>
        Start
      </Button>
      <Button onClick={onPause}>
        Pause
      </Button>
      <Button onClick={onRestart}>
        Restart
      </Button>
    </>
  );
};

export default ControlButton;