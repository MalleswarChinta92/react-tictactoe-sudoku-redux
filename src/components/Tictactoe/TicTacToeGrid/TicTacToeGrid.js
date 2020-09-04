import React from 'react';
import styles from './TicTacToeGrid.css';

const TicTacToeGrid = (props) => {
    
    const classNames = ["grid"]
    if (props.data !== '' || props.cursorNotAllowed) classNames.push("notAllowed")
    if (props.success) classNames.push("success")
    return (
        <div className={classNames.join(' ')} onClick={props.clicked}>
            {props.data}
        </div>
    )
}

export default TicTacToeGrid