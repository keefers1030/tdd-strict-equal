/* eslint-disable indent */
let describe = require('mocha').describe
let it = require('mocha').it
let strictEquals = require('../strictequals')
let expect = require('chai').expect

describe('equals', () => {
    describe('strictEquals', () =>
        it('returns the value true if numbers are equal', () => {
            var a = 5
            var b = 5

            const result = strictEquals(a, b)

            expect(result).to.be(true)
        })

        it('returns the value false if numbers are not equal', () => {
            var a = 5
            var b = 9

            const result = strictEquals(a, b)

            expect(result).to.be(false)
        })

        it('returns the value true if data values are not equal', () => {
            var a = "5"
            var b = "5"

            const result = strictEquals(a, b)

            expect(result).to.be(true)
        })

        it('returns the value false if data values are not equal', () => {
            var a = "5"
            var b = "9"

            const result = strictEquals(a, b)

            expect(result).to.be(false)
        })
    )
}
