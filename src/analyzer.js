const analyzer = {  
  getWordCount: (text) => {
  //remplaza los números //remueve espacios //divide el texto en palabras // '' cadena vacía, los números se eliminan del texto
    const words = text.replace(/[0-9]/g, '').trim().split(/\s+/);
    const justWords = words.filter(word => word.length > 0);
    return justWords.length;
  //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
  //regEx para borrar espacios en blanco y caracteres especiales 
  // /g --> remplaza todas las coincidencias  
    const cleanText = text.replace(/[^\wáéíóúÁÉÍÓÚñÑ]/g, '');
    return cleanText.length;
  //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palabras = text.split(/\s+/);
    let longitudTotal = 0;
    for (const palabra of palabras) {
      longitudTotal += palabra.length;
    }
    const promedioLongitud = longitudTotal / palabras.length;
    return promedioLongitud;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    //regEx para encontrar todos los números, incluyendo los que tienen punto decimal   
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);  
    let count = 0;
  
    if (numbers === null) {
      count = 0;
    } else {
      if (numbers) {
        count = numbers.length;
      }
    }

    return count;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let numbers = '';
    let suma = 0;

    for(let i = 0; i < text.length; i++) {
      if(text[i] >= '0' && text[i] <= '9' || text[i] === '.') {
        numbers += text[i];
      } else {
        if(numbers !== '' && (i === 0 || !(/[a-zA-Z]/.test(text[i-1]))) && (i === text.length - 1 || !(/[a-zA-Z]/.test(text[i+1])))) {
          suma += parseFloat(numbers.replace(/,/g, ''));
          numbers = '';
        }
      }
    }
    if(numbers !== '' && (text.length === 0 || !(/[a-zA-Z]/.test(text[text.length-1])))) {
      suma += parseFloat(numbers.replace(/,/g, ''));
    }

    return suma;
  }
};


export default analyzer;
