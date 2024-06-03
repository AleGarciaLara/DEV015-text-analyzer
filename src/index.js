import analyzer from './analyzer.js';


const textarea = document.querySelector('textarea[name="user-input"]')
const showWordCount = document.querySelector("li[data-testid='wordCount']"); 
const showCharCount = document.querySelector("li[data-testid='charCount']");
const showCharNPCount = document.querySelector("li[data-testid='charNSCount']");



textarea.addEventListener('input', function(){
    const text = textarea.value
    const wordCount = analyzer.getWordCount(text); 
    const charCount = analyzer.getCharacterCount(text);
    const charNSCount = analyzer.getCharacterCountExcludingSpaces(text);


    showWordCount.textContent = `Palabras: ${wordCount}`;
    showCharCount.textContent = `Caracteres: ${charCount}`;
    showCharNPCount.textContent = `Caracteres sin espacios ni signos de puntuación: ${charNSCount}`;
})




function resetText() {
    textarea.value = '';
    showWordCount.textContent = `Palabras: 0`;
    showCharCount.textContent = `Caracteres: 0`;
    showCharNPCount.textContent = `Caracteres sin espacios ni signos de puntuación: 0`;

}

document.getElementById('reset-button').addEventListener('click', resetText);
