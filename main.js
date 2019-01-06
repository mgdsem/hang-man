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
        letterContainer.innerText = letter;
        letterContainer.classList.add('letter-container');
        lettersContainer.appendChild(letterContainer);
    })
}

render();