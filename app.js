const nextBtn = document.querySelector('#next');
const translateBtn = document.querySelector('#translate');
const engHeader = document.querySelector('#eng');
const rusHeader = document.querySelector('#rus');

const list = data.trim().split('\n');
const used = [];
let translation = 'translation';

function getRandomIndex() {
    return Math.floor(Math.random() * list.length);
}

nextBtn.addEventListener('click', () => {
    if(used.length === list.length) {
        engHeader.textContent = 'that\'s all';
        rusHeader.textContent = 'good job :)';
        translateBtn.disabled = true;
        return;
    }
    let index = null;
    do {
        index = getRandomIndex();
    } while(used.includes(index));
    used.push(index);
    const [eng, rus] = list[index].split(' / ');
    engHeader.textContent = eng;
    rusHeader.textContent = '*****';
    translation = rus.replaceAll(' | ', '\n');
});

translateBtn.addEventListener('click', () => rusHeader.textContent = translation);
