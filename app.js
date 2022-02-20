const nextBtn = document.querySelector('#next');
const translateBtn = document.querySelector('#translate');
const engHeader = document.querySelector('#eng');
const rusHeader = document.querySelector('#rus');

const list = data.split(', ');
const used = [];
let translation = '';

function getRandomIndex() {
    return Math.floor(Math.random() * list.length);
}

nextBtn.addEventListener('click', () => {
    if(used.length === list.length) {
        engHeader.textContent = 'that\'s all';
        rusHeader.textContent = 'good job :)';
        return;
    }
    let index = null;
    do {
        index = getRandomIndex();
    } while(used.includes(index));
    used.push(index);
    const [eng, rus] = list[index].split('_');
    engHeader.textContent = eng;
    rusHeader.textContent = '*****';
    translation = rus;
});

translateBtn.addEventListener('click', () => rusHeader.textContent = translation);
