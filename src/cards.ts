export type CardType = 'S' | 'H' | 'D' | 'C';

export interface Card {
    type: CardType,
    value: number
}

export const cards: Card[] = [
    {type: 'C', value: 2},
    {type: 'C', value: 3}, 
    {type: 'C', value: 4}, 
    {type: 'C', value: 5}, 
    {type: 'C', value: 6}, 
    {type: 'C', value: 7}, 
    {type: 'C', value: 8}, 
    {type: 'C', value: 9}, 
    {type: 'C', value: 10}, 
    {type: 'C', value: 11}, 
    {type: 'C', value: 12}, 
    {type: 'C', value: 13}, 
    {type: 'C', value: 14},
    {type: 'D', value: 2},
    {type: 'D', value: 3},
    {type: 'D', value: 4},
    {type: 'D', value: 5},
    {type: 'D', value: 6},
    {type: 'D', value: 7},
    {type: 'D', value: 8},
    {type: 'D', value: 9},
    {type: 'D', value: 10},
    {type: 'D', value: 11},
    {type: 'D', value: 12},
    {type: 'D', value: 13},
    {type: 'D', value: 14},
    {type: 'H', value: 2},
    {type: 'H', value: 3},
    {type: 'H', value: 4},
    {type: 'H', value: 5},
    {type: 'H', value: 6},
    {type: 'H', value: 7},
    {type: 'H', value: 8},
    {type: 'H', value: 9},
    {type: 'H', value: 10},
    {type: 'H', value: 11},
    {type: 'H', value: 12},
    {type: 'H', value: 13},
    {type: 'H', value: 14},
    {type: 'S', value: 2},
    {type: 'S', value: 3},
    {type: 'S', value: 4},
    {type: 'S', value: 5},
    {type: 'S', value: 6},
    {type: 'S', value: 7},
    {type: 'S', value: 8},
    {type: 'S', value: 9},
    {type: 'S', value: 10},
    {type: 'S', value: 11},
    {type: 'S', value: 12},
    {type: 'S', value: 13},
    {type: 'S', value: 14}
];