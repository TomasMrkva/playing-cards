import { useState } from 'react';
import PlayingCard from './components/PlayingCard';
import { cards, Card } from './cards';
import './app.css';

function BackGround() {

  const [shownCards, setShownCards] = useState<Card[]>(cards);

  const drawCard = (card: Card) => {
    setShownCards(shownCards?.filter(c => c.value !== card.value || c.type !== card.type));
  }

  const shuffleCards = () => {
    setShownCards(prev => [...prev.sort(() => Math.random() - 0.5)]);
  }

  const sortCards = () => {
    setShownCards(prev => [...prev.sort((a, b) => a.type === b.type ? a.value - b.value : a.type < b.type ? -1 : 1)]);
  }

  return (
    <div id="app">
      <div id="header">
        <button onClick={shuffleCards}>SHUFFLE</button>
        <button onClick={sortCards}>SORT</button>
      </div>
      <div id="background">
      {
        shownCards && shownCards.map((card: Card) => <PlayingCard {...{card, drawCard}}/>)
      }
    </div>
  </div>
  );
}

export default BackGround;