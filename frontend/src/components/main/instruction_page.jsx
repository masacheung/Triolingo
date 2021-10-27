import React from "react";
import "../../styles/instruction.css"

const InstructionPage = () => {
    return(
        <div className="dictionary-page">
            <h1>Instruction</h1>
            <ul className="instructions">
                <li><p>▪️ Choose Alphabet to see the vocabularies starts with the alphabet</p></li>
                <li><p>▪️ Each of vocabulary flash card has definition, synonym. and pronounciation!</p></li>
                <li><p>▪️ You can create your own flash cards!</p></li>
                <li><p>▪️ You can search vocabularies through dictionary tab</p></li>
                <li><p>▪️ You can make your favorite vocabulary cards deck!</p></li>
                <li><p>▪️ You can share your flashcard decks with your friends! </p></li>
            </ul>

        </div>
    )
};

export default InstructionPage