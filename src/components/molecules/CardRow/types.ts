interface Card {
  copy: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
}

export interface CardRowProps {
  cards: Card[];
}
