import analyzer from './analyzer.js';


document.addEventListener('DOMContentLoaded', function(){
    const textarea = document.querySelector('textarea[name="user-input"]');
    const showWordCount = document.querySelector("li[data-testid='word-count']"); 
    const showCharCount = document.querySelector("li[data-testid='character-count']");
    const showCharNPCount = document.querySelector("li[data-testid='character-no-spaces-count']");
    const showNumCount = document.querySelector("li[data-testid='number-count']");
    const showNumSum = document.querySelector("li[data-testid='number-sum']");
    const showAvLength = document.querySelector("li[data-testid='word-length-average']");
    const resetButton = document.getElementById("reset-button");

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
}); 


resetButton.addEventListener("click", function() {
    textarea.value = '';
    showWordCount.textContent = `Palabras: 0`;
    showCharCount.textContent = `Caracteres: 0`;
    showCharNPCount.textContent = `Caracteres sin espacios ni signos de puntuación: 0`;
    showNumCount.textContent = `Números: 0`;
    showNumSum.textContent = `Suma de números: 0`;
    showAvLength.textContent = `Longitud media de las palabras: 0`;

});

});


document.getElementById('reset-button').addEventListener('click', resetText);
