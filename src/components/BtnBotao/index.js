import React from 'react';

const BtnBotao = (props) => (
    <button onClick={props.onClick}>{props.label}</button>
);

export default BtnBotao;