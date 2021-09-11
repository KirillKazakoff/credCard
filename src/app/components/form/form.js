import './form.css';
import '../card/card.css';

import Cards from '../card/cards';
import { getCheckDigit, getCardCompany } from '../../lib/utils';

export default class Form {
    constructor() {
        this.container = document.querySelector('.form');
        this.cards = new Cards('.card__list');
        this.input = this.container.querySelector('.validate__input');
        this.button = this.container.querySelector('.validate__button');

        this.button.addEventListener('click', () => {
            const { value } = this.input;
            const lastDigit = +value[value.length - 1];

            const checkValue = value.substring(0, value.length - 1);
            const checkDigit = getCheckDigit(checkValue);

            let company = null;
            if (checkDigit === lastDigit) {
                company = getCardCompany(value);
            } else {
                const div = document.createElement('div');
                div.className = 'error';
                div.textContent = 'you put wrong value';
                this.container.appendChild(div);
                setTimeout(() => div.remove(), 1000);
            }
            this.cards.highlightCard(`card__${company}`);
        });
    }
}
