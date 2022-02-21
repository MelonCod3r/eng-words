const engHeader = document.querySelector('#eng');
const rusHeader = document.querySelector('#rus');
const nextBtn = document.querySelector('#next');
const translateBtn = document.querySelector('#translate');

const list = data.trim().split('\n');
const used = [];

const placeholder = '*****';
const separatorOfTwoLangs = ' / ';
const separatorOfTranslations = ' | ';
let translation = 'translation';

function nextWord() {
    if(used.length === list.length) {
        showFinish();
        return;
    }
    
    const [eng, rus] = getNewWord();
    engHeader.textContent = eng;
    rusHeader.textContent = placeholder;

    setTranslation(rus);
}

function showFinish() {
    engHeader.textContent = 'that\'s all';
    rusHeader.textContent = 'good job :)';
    translateBtn.disabled = true;
}

function getNewWord() {
    let index = null;
    do {
        index = getRandomIndex();
    } while(used.includes(index));
    used.push(index);
    const newWord = list[index].split(separatorOfTwoLangs);
    return newWord;
}

function getRandomIndex() {
    return Math.floor(Math.random() * list.length);
}

function setTranslation(rus) {
    if(!rus.includes(separatorOfTranslations)) {
        translation = rus;
        return;
    }
    const numberOfTranslations = rus.split(separatorOfTranslations).length;
    setMultiplePlaceholders(numberOfTranslations);
    translation = rus.replaceAll(separatorOfTranslations, '\n');
}

function setMultiplePlaceholders(number) {
    let asterisks = '';
    for(let i = 0; i < number; i++)
        asterisks = asterisks + placeholder + '\n';
    rusHeader.textContent = asterisks;
}

function showTranslation() {
    rusHeader.textContent = translation;
}

nextBtn.addEventListener('click', nextWord);
translateBtn.addEventListener('click', showTranslation);
