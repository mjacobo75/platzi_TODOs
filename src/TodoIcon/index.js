import React from 'react';
import './TodoIcon.css';
import { ReactComponent as CheckPNG } from './checkbox.svg';
import { ReactComponent as DeletePNG } from './rectangle-xmark.svg';

const iconTypes = {
    "check" : color => (
        <CheckPNG className="Icon-svg Icon-svg--check" fill={color}/>),
    "delete" : color => (
        <DeletePNG className="Icon-svg Icon-svg--delete" fill={color}/>)
};

const TodoIcon = ({ type, color='gray', onClick }) => {
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };