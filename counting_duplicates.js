
/*
* Author: Philipe Siqueira
* Versão 1.0
* Descrição: Contar o número de duplicatas
* Escreva uma função que retorne a contagem de caracteres alfabéticos
* sem distinção entre maiúsculas e minúsculas e dígitos numéricos que ocorrem
* mais de uma vez na sequência de entrada. Pode-se presumir que a sequência de
* entrada contenha apenas alfabetos (maiúsculos e minúsculos) e dígitos numéricos.
*
* Description: Count the number of Duplicates
* Write a function that will return the count of distinct case-insensitive 
* alphabetic characters and numeric digits that occur more than once in the
* input string. The input string can be assumed to contain only alphabets 
* (both uppercase and lowercase) and numeric digits.
*/
function duplicateCount(text){
  /*
  * Pega o Texto muda para letra minuscula e transforma em vetor
  * Get Text then changes to lower case and make it into array
  */
  const array = text.toLowerCase().split("");
  /*
  * Varre o vetor comparando se tiver igual incrementa depois retorna um objeto
  * Checks the array against whether it has equal values, then increments and returns an object
  */
  const count = array.reduce((total, val) => {total[val] = (total[val] || 0)+1; return total}, {} );
  /*
  * Filtra no count os valores que aparecem mais de uma vez
  * filter values in object and compare if the values appear more than one time
  */
  const result = Object.values(count).filter((v) => v > 1)
  /*
  * retona à quantidade
  * returns the amount
  */
  return result.length
}
console.log(duplicateCount("inconstitucionalissimamente"))

