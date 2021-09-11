// eslint-disable-next-line import/prefer-default-export
export function getRandomInt(min, max) {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
}

export function getCheckDigit(str) {
    const { length } = str;
    let sum = 0;

    for (let i = 0; i < length; i += 1) {
        let digit = +str[i];
        const parity = (length - 1) % 2;

        if (i % 2 === parity) {
            digit *= 2;
        }

        if (digit > 9) {
            digit -= 9;
        }

        sum += digit;
    }

    return 10 - (sum % 10);
}

export function getCardCompany(str) {
    let [firstD, secondD] = str;
    firstD = +firstD;
    secondD = +secondD;

    let company = '';
    switch (firstD) {
    case 2:
        company = 'mir';
        break;
    case 3:
        if (secondD === 0 || secondD === 6 || secondD === 8) {
            company = 'dinners-club';
        }
        if (secondD === 1 || secondD === 5) {
            company = 'jcb';
        }
        if (secondD === 4 || secondD === 7) {
            company = 'american-express';
        }
        break;
    case 4:
        company = 'visa';
        break;
    case 5:
        company = 'master-card';
        break;
    case 6:
        if (secondD === 0) {
            company = 'discover';
        }
        break;
    default:
        break;
    }

    return company;
}
