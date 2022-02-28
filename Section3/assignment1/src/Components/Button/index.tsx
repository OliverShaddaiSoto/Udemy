import React from "react";
import {ButtonProps} from './interface';
import './style.css'


export const Button: React.FC<ButtonProps> = ({ type='default' , children, onClick }) => {
    const className = type === 'primary' ? 'primary' : 'default';
    return (
         <button className={className} onClick={onClick}>{children}</button> 
    );
}