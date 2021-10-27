import React from "react";
import "../../styles/instruction.css"

const InstructionPage = () => {
    return(
        <div className="dictionary-page">
            <h1>Instruction</h1>
            <ul className="instructions">
                <li><p>‣  Search you vocabularies at dictionary tab</p></li>
                <li><p>‣  Each of vocabulary flash card has definition, synonym. and pronounciation!</p></li>
                <li><p>‣  Create your own flash cards!</p></li>
                <li><p>‣  Update or Delete your own card</p></li>
                <li><p>‣  Discuss with your friends on the discussion board </p></li>
            </ul>

        </div>
    )
};

export default InstructionPage