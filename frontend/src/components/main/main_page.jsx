import React from 'react';
import {Link} from 'react-router-dom';
import CharacterFilterbox from './character_filterbox';
import InstructionPage from './instruction_page';

const MainPage = () => {
    return(
        <div className="main-page">

            <InstructionPage/>
            <CharacterFilterbox />

            {/* <div className="cards-index">
                <div className="card"> <Link to="/cards/details">A</Link></div>
                <div className="card">B</div>
                <div className="card">C</div>
                <div className="card">D</div>
                <div className="card">E</div>
                <div className="card">F</div>
                <div className="card">G</div>
                <div className="card">H</div>
                <div className="card">I</div>
                <div className="card">J</div>
                <div className="card">K</div>
                <div className="card">L</div>
                <div className="card">M</div>
                <div className="card">N</div>
                <div className="card">O</div>
                <div className="card">P</div>
                <div className="card">Q</div>
                <div className="card">R</div>
                <div className="card">S</div>
                <div className="card">W</div>
                <div className="card">X</div>
                <div className="card">Y</div>
                <div className="card">Z</div>
            </div> */}
        </div>
    )
};

export default MainPage;