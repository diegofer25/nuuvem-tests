module.exports = (string) => {

    const letters = String(string).split('')
    const toCheck = letters.filter(filterLetters)
    const accumulator = {
        toClose: [],
        balanced: true
    }
    const { balanced, toClose } = toCheck.reduce(checkBalanced, accumulator)
    return balanced && !toClose.length
}

function filterLetters (letter) {
    return '([{}])'.includes(letter)
}

function checkBalanced ({ toClose,  balanced }, letter) {
    switch (letter) {
        case '(':
            toClose.push(')'); break
        case '[':
            toClose.push(']'); break
        case '{':
            toClose.push('}'); break
        case toClose[toClose.length - 1]:
            toClose.splice(-1); break
        default:
            balanced = false
    }
    return { toClose,  balanced }
}