import analyzer from './analyzer.js';


const textarea = document.querySelector('textarea[name="user-input"]')
const showWordCount = document.querySelector("li[data-testid='wordCount']"); 



textarea.addEventListener('input', function(){
    const text = textarea.value
    const wordCount = analyzer.getWordCount(text); 


    showWordCount.textContent = `Palabras: ${wordCount}`;
    
})




function resetText() {
    textarea.value = '';
}

document.getElementById('reset-button').addEventListener('click', resetText);
