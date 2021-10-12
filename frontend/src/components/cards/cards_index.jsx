import React from "react";

class CardsIndex extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCards();
    }

    render() {
        return (
            <div className="cards-index">
                <div className="cards-index-header">
                    <h2>All Cards</h2>
                </div>

                <div className="all-cards">
                    {this.state.cards.map( card=> (
                        <CardsIndexList card={card} key={card._id}/>
                    ))}
                </div>
            </div>
        )
    }
};

export default CardsIndex;
