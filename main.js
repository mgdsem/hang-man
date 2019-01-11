// constans

const LETTERS = 'aąbcdefghijklłmnoópqrsśtuvwxyz'.split('');
const SENTENCE = 'Nie chwal shakiego przed zjebaniem jego'
const preparedSentence = SENTENCE.toLowerCase().split('');

const state = {
    currentAnswer: generateAnswer(),
    correctLetters: [],
    uncorrectLetters: [],
}

// HTML elements

const lettersContainer = document.getElementById('letters-container');
const header = document.getElementById('header');

// event listeners

function onPickLetter(event) {
    const pickedLetter = event.target.innerText;
    if (preparedSentence.includes(pickedLetter)) {
        state.currentAnswer = generateAnswer(pickedLetter);
        state.correctLetters.push(pickedLetter);
    } else {
        state.uncorrectLetters.push(pickedLetter);
    }
    render();
}
// sprawdz czy wybrana litera znajduje sie w zdaniu do odgadniecia
// jesli tak, to odkryj ja w headerze i zaznacz przycisk na zielono i go zablokuj
// jesli nie, to zaznacz przycisk na czerwono i go zablokuj i pokaz kolejne zdjecie



// logic

function generateAnswer(pickedLetter) {
    if (pickedLetter) {
        return preparedSentence.map(letter => {
            if (letter === pickedLetter || state.correctLetters.includes(letter)) {
                return letter;
            }
            if (letter === ' ') {
                return ' ';
            }
            return "-";
        }).join('');
    }

    // const signs = preparedSentence
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

    // const signs = preparedSentence.map(sign => sign !== ' ' ? '-' : ' ').join('');
    // console.log(signs);
    // return signs;

    return preparedSentence.map(sign => sign !== ' ' ? '-' : ' ').join('');
}

// renders

function render() {
    renderLetters();
    header.innerText = state.currentAnswer;
}

function renderLetters() {
    lettersContainer.innerHTML = null;

    LETTERS.forEach((letter) => {
        const letterContainer = document.createElement('div');
        letterContainer.classList.add('letter-container');

        const letterButton = document.createElement('button');
        letterButton.innerText = letter;
        letterButton.addEventListener('click', onPickLetter);
        letterButton.classList.add('letter-button');
        if (state.correctLetters.includes(letter)) {
            letterButton.classList.add('green-letter');
        }
        if (state.uncorrectLetters.includes(letter)) {
            letterButton.classList.add('red-letter');
        }
        letterContainer.appendChild(letterButton);

        lettersContainer.appendChild(letterContainer);

    })
}

render();