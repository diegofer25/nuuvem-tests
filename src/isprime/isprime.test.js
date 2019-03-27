const isPrime = require('./isprime')

describe('isPrime', () => {
    describe('- Given an invalid input', () => {
        [{
            received: 'foo',
            expected: 'foo is not a number'
        }].forEach(({ received, expected }) => {
            test(`${received} must return ${expected}`, () => {
                expect(isPrime(received)).toEqual(expected)
            })
        })
    })

    describe('- Given a valid input', () => {
        [{
            received: 0,
            expected: false
        }, {
            received: 1,
            expected: false
        }, {
            received: 7,
            expected: true
        }, {
            received: 17,
            expected: true
        }, {
            received: 10000000000000,
            expected: false
        }].forEach(({ received, expected }) => {
            test(`${received} must return ${expected}`, () => {
                expect(isPrime(received)).toEqual(expected)
            })
        })
    })
})