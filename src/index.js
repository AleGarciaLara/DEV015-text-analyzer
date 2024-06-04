import analyzer from './analyzer.js';


const textarea = document.querySelector('textarea[name="user-input"]');
const showWordCount = document.querySelector("li[data-testid='wordCount']"); 
const showCharCount = document.querySelector("li[data-testid='charCount']");
const showCharNPCount = document.querySelector("li[data-testid='charNSCount']");
const showNumCount = document.querySelector("li[data-testid='numCount']");
const showNumSum = document.querySelector("li[data-testid='numSum']");
const showAvLength = document.querySelector("li[data-testid='avLength']");



textarea.addEventListener('input', function(){
    const text = textarea.value
    const wordCount = analyzer.getWordCount(text); 
    const charCount = analyzer.getCharacterCount(text);
    const charNSCount = analyzer.getCharacterCountExcludingSpaces(text);
    const numCount = analyzer.getNumberCount(text);
    const numSum = analyzer.getNumberSum(text);
    const avLength = analyzer.getAverageWordLength(text);



    showWordCount.textContent = `Palabras: ${wordCount}`;
    showCharCount.textContent = `Caracteres: ${charCount}`;
    showCharNPCount.textContent = `Caracteres sin espacios ni signos de puntuación: ${charNSCount}`;
    showNumCount.textContent = `Números: ${numCount}`;
    showNumSum.textContent = `Suma de números: ${numSum}`;
    showAvLength.textContent = `Longitud media de las palabras: ${avLength.toFixed(2)}`;
})




function resetText() {
    textarea.value = '';
    showWordCount.textContent = `Palabras: 0`;
    showCharCount.textContent = `Caracteres: 0`;
    showCharNPCount.textContent = `Caracteres sin espacios ni signos de puntuación: 0`;
    showNumCount.textContent = `Números: 0`;
    showNumSum.textContent = `Suma de números: 0`;
    showAvLength.textContent = `Longitud media de las palabras: 0`;

}

document.getElementById('reset-button').addEventListener('click', resetText);
