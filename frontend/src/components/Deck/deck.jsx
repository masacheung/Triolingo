import React from 'react';
import { Link } from 'react-router-dom';

// const Deck = props => {
//     return (
//         <div className="deck">
//             <div>
//                 <div className="deck-header">
//                     {/* <h1>{props.deck.title}</h1> */}
//                     <Link to={`api/decks/${this.props.deck.id}`} className='deck-link'>
//                       {props.deck.title}
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

class Deck extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    return (
        <div className="deck">
            <div>
                <div className="deck-header">
                    {/* <h1>{props.deck.title}</h1> */}
                    <Link to={`decks/${this.props.deck._id}`} className="deck-link-link">
                      <h1 className='deck-link'>{this.props.deck.title}</h1>
                    </Link>
                </div>
                
            </div>
        </div>
    )
  }
}

export default Deck;