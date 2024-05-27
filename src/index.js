import analyzer from './analyzer.js';

function resetText() {
    const textarea = document.querySelector('textarea[name="user-input"]');
    textarea.value = '';
}
document.getElementById('reset-button').addEventListener('click', resetText);
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`