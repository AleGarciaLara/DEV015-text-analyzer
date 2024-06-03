const analyzer = {  
  getWordCount: (text) => {
    if (typeof text !== "string"){
      return 0;
    }
    else {// tengo que hacer que no cuente los números
      const words = text.trim().split(/\s+/); //divide el string
      return text = words.length;
      

//TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  }},


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
  },
};



export default analyzer;
