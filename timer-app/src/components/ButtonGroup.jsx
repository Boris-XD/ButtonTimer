import React from 'react'
import Button from './Button';

const ButtonGroup = ({ onButtonClick }) => {
    return (
    <>
    {[1,2,3,4,5].map((num) => 
        <Button key={num} onClick={() => onButtonClick(num)}>
        Button {num}
        </Button>
    )}
    </>
);
};

export default ButtonGroup