import { Card } from "../cards-consts"
import './playing-card.css'

interface PlayingCardProps {
  card: Card,
  drawCard?: (card: Card) => void
}

export default function PlayingCard({card: {type, value}, drawCard}: PlayingCardProps) {

  return (
    <div className={"card" + (drawCard ? " drawable" : "")} >
      <img src={`cards/${value}${type}.svg`} width={125} alt="playing card"/>
      { !!drawCard &&
        <div className="card-overlay">
          <button onClick={() => drawCard?.({type, value})}>DRAW</button>
        </div>
      }
    </div>
  )
}