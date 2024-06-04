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

    let palabras = text.split(/\s+/);
    let longitudTotal = 0;
    for (const palabra of palabras) {
    longitudTotal += palabra.length;
  }

    const promedioLongitud = longitudTotal / palabras.length;
    return promedioLongitud;


  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
                               //regEx para encontrar todos los números
    let numbers = text.match(/\b\d+\b/g);
            
    // Contar la cantidad de números encontrados // ? es una versión abreviada de if 
             //condición if valor si verdadero : valor si falso
    const count = numbers ? numbers.length : 0;
    return count;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    // obtener los números
    // sumar los números 
    // mostrar el resultado de la suma
    // recorrer con un bucle 

    let numbers = '';
    let suma = 0;


    for(let i=0; i < text.length; i++){
      if(text[i] >= '0' && text[i] <= '9'){
        numbers += text[i]
      } else {
        if(numbers !== ''){
          suma += parseInt(numbers)
          numbers = ''
        }
      }
    }
    return suma;







  }
};



export default analyzer;
