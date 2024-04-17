import React, { useState } from 'react';

import deafultAnswers from "./answers";
import { choice } from "./random";

function MagicBall({ answers = deafultAnswers }) {
    const [answer, setAnswer] = useState({
        message: "What is your question?",
        color: 'black',
    });

    function handleClick(evt) {
        setAnswer(choice(answers));
    }

    return (
        <div
            classname="MagicBall"
            onClick={handleClick}
            style={{ backgroundColor: answer.color }}
        >
            <b>{answer.msg}</b>
        </div>
    );
}

export default MagicBall;