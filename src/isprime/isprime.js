/**
 * Neste caso eu não precisei usar um Web Work por que eu diminui a complexidade do código
 * o constructor Array.from tem um limite de tamanho de array, por isso travava, nem o service worker resolveria,
 * além disso ele iterava todo o array antes de executar a lógica ou seja,
 * ele tentava montar um array de tamanho 10000000000000 e travava, pra resolver isso eu coloquei um break quando
 * identificado que o numero não é mais primo, não faz sentido continuar iterando o numero depois disso.
 * 
 * E sim, descobri isso fazendo teste kkk
 */

module.exports = (input) => {
  const number = Number(input)
  if (!isNaN(number)) {
    var prime = number > 2

    for (i = 2; i < number; i++) {
      if ((number % i) == 0) {
        return false
      }
    }
    return prime
  }
  return input + ' is not a number'
}