export class RandomNumberUtility {
  getRandomInteger(fromInclusive, toExclusive) {
    if (fromInclusive >= toExclusive) {
      throw new Error('fromInclusive must be less than toExclusive')
    }
    return Math.floor(Math.random() * (toExclusive - fromInclusive)) + fromInclusive
  }
}
