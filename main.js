// constans

const LETTERS = 'aąbcdęfghijklłmnoópqrsśtuvwxyz'.split('');
const SENTENCE = 'Nie chwal shakiego przed zjebaniem jego'

const state = {
    currentAnswer: generateInitialSigns(),
}

// HTML elements

const lettersContainer = document.getElementById('letters-container');
const header = document.getElementById('header');

// event listeners

function onPickLetter() {

}
// sprawdz czy wybrana litera znajduje sie w zdaniu do odgadniecia
// jesli tak, to odkryj ja w headerze i zaznacz przycisk na zielono i go zablokuj
// jesli nie, to zaznacz przycisk na czerwono i go zablokuj i pokaz kolejne zdjecie

// logic

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

// renders

function render() {
    renderLetters();
    header.innerText = state.currentAnswer;
}

function renderLetters() {
    LETTERS.forEach((letter) => {
        const letterContainer = document.createElement('div');
        letterContainer.classList.add('letter-container');
        const letterButton = document.createElement('button');
        letterButton.innerText = letter;
        letterButton.classList.add('letter-button');
        letterContainer.appendChild(letterButton);
        lettersContainer.appendChild(letterContainer);
    })
}

render();