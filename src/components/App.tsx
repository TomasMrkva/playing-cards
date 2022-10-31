import { useState } from 'react';
import { cards, Card } from '../cards-consts';
import Header from './Header';
import PlayingCard from './PlayingCard';
import './app.css';

export default function App() {

  const [shownCards, setShownCards] = useState<Card[]>(cards);
  const [drawnCards, setDrawnCards] = useState<Card[]>([]);

  const drawCard = (card: Card) => {
    setShownCards(shownCards?.filter(c => c.value !== card.value || c.type !== card.type));
    setDrawnCards([...drawnCards, card]);
  }

  const shuffleCards = () => {
    setShownCards(prev => [...prev.sort(() => Math.random() - 0.5)]);
  }

  const sortCards = () => {
    setShownCards(prev => [...prev.sort((a, b) => a.type === b.type ? a.value - b.value : a.type < b.type ? -1 : 1)]);
  }

  const resetCards = () => {
    setShownCards(cards);
    setDrawnCards([]);
    sortCards();
  }

  return (
    <div id="app">
      <Header {...{shuffleCards, sortCards, resetCards}}/>
      <div id="hand">
        {
          drawnCards.map((card) => <PlayingCard key={card.value + card.type} card={card}/>)
        }
      </div>
      <div id="deck">
      {
        shownCards && shownCards.map((card: Card) => <PlayingCard key={card.type + card.value} {...{card, drawCard}}/>)
      }
    </div>
  </div>
  );
}