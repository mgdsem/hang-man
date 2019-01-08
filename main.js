// constans

const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(LETTERS);

// HTML elements

const lettersContainer = document.getElementById('letters-container');
lettersContainer.classList.add('letters-container');

// logic

function render() {
    LETTERS.forEach((letter) => {
        console.log(letter);
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