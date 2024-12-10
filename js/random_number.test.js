import { RandomNumberUtility } from './random_number'

describe('RandomNumberUtility tests', () => {
	let randomNumberUtility

	beforeEach(() => {
		randomNumberUtility = new RandomNumberUtility()
	})

	it('should return a number within the range', () => {
		const result = randomNumberUtility.getRandomInteger(1, 5)
		expect(result).toBeGreaterThanOrEqual(1)
		expect(result).toBeLessThan(5)
	})

	it('should return a number within the negative range', () => {
		const result = randomNumberUtility.getRandomInteger(-5, 0)
		expect(result).toBeGreaterThanOrEqual(-5)
		expect(result).toBeLessThan(0)
	})

	it('should throw an error if fromInclusive is greater than or equal to toExclusive', () => {
		expect(() => randomNumberUtility.getRandomInteger(5, 5)).toThrow(
			'fromInclusive must be less than toExclusive'
		)
		expect(() => randomNumberUtility.getRandomInteger(10, 5)).toThrow(
			'fromInclusive must be less than toExclusive'
		)
	})

	it('should return a number that is an integer', () => {
		const result = randomNumberUtility.getRandomInteger(1, 100)
		expect(Number.isInteger(result)).toBe(true)
	})
})
