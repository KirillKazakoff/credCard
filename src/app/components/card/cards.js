import './card.css';

export default class Cards {
    constructor(selector) {
        this.cards = [...document.querySelector(selector).children];
        this.activeCard = null;
    }

    highlightCard(name) {
        if (this.activeCard) {
            this.activeCard.classList.remove('card__active');
        }
        this.activeCard = null;

        const card = this.cards.find((c) => c.className.includes(name));
        if (card) {
            card.classList.add('card__active');
            this.activeCard = card;
        }
    }
}
