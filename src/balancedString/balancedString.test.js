const balancedString = require('./balancedString')

describe('balancedString', () => {
    [{
        received: '(foo { bar (baz) [boo] })',
        expected: true
    }, {
        received: 'foo { bar { baz }',
        expected: false
    }, {
        received: 'foo { (bar [baz] } )',
        expected: false
    }].forEach(({ received, expected }) => {
        test(`${received} must return ${expected}`, () => {
            expect(balancedString(received)).toEqual(expected)
        })
    })
})