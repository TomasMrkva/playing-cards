import { Card } from "../cards"

interface PlayingCardProps {
  card: Card,
  drawCard: (card: Card) => void
}

export default function PlayingCard({card: {type, value}, drawCard}: PlayingCardProps) {
  return (
    <div className="card">
      <img src={`cards/${value}${type}.svg`} width={125} alt="playing card"/>
      <div className="card-overlay">
        <button onClick={() => drawCard({type, value})}>DRAW</button>
      </div>
    </div>
  )
}