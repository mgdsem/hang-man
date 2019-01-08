// constans

const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
const SENTENCE = 'Nie chwal shakiego przed zjebaniem jego'

// HTML elements

const lettersContainer = document.getElementById('letters-container');
const header = document.getElementById('header');

// logic

function render() {
    LETTERS.forEach((letter) => {
        const letterContainer = document.createElement('div');
        letterContainer.classList.add('letter-container');
        const letterButton = document.createElement('button');
        letterButton.innerText = letter;
        letterButton.classList.add('letter-button');
        letterContainer.appendChild(letterButton);
        lettersContainer.appendChild(letterContainer);
    })

    header.innerText = generateInitialSigns();
}

function generateInitialSigns() {
    // const signs = SENTENCE.split('')
    // const signsArray = signs.map((sign) => {
    //     if (sign !== ' ') {
    //         return '-';
    //     }
    //     return ' ';
    // })

    // const signsArray = signs.map((sign)=> {
    //     return sign !== ' ' ? '-' : ' '
    // })

    // const signsArray = signs.map(sign => sign !== ' ' ? '-' : ' ');
    // const finalSigns = signsArray.join('');
    // console.log(finalSigns);

    // const signs = SENTENCE.split('').map(sign => sign !== ' ' ? '-' : ' ').join('');
    // console.log(signs);
    // return signs;

    return SENTENCE.split('').map(sign => sign !== ' ' ? '-' : ' ').join('');
}


render();